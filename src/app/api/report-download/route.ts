import { readFile } from "node:fs/promises";
import path from "node:path";
import { PDFArray, PDFDocument, PDFName, PDFString, StandardFonts, rgb, type PDFImage } from "pdf-lib";

type ReportPayload = {
  id?: string;
  leadName?: string;
  leadPhone: string;
  leadLocation?: string;
  length: string;
  height: string;
  thickness: string;
  brickType: string;
  area?: number;
  factor?: number;
  totalUnits: number;
  low: number;
  high: number;
};

type ProductCard = {
  name: string;
  description: string;
  image: string;
  features: string[];
};

const MANUFACTURED_PRODUCTS: ProductCard[] = [
  {
    name: "Flyash Bricks",
    description: "High strength eco-friendly bricks with smooth finish.",
    image: "images/flyash_bricks_1773246878607.png",
    features: ["High compressive strength", "Uniform shape", "Eco-friendly", "Reduced plastering cost"],
  },
  {
    name: "Interlock Bricks",
    description: "Heavy-duty pavers for durable outdoor applications.",
    image: "images/interlock-bricks-erode-high-strength.jpg",
    features: ["Heavy load bearing", "Easy to install", "Reusable", "Aesthetic finish"],
  },
  {
    name: 'Solid Bricks (4", 6", 8")',
    description: "Strong structural bricks for long-lasting walling.",
    image: "images/solid-bricks-erode-premium-stack.jpg",
    features: ["Maximum durability", "Termite proof", "Low maintenance", "Multiple sizes"],
  },
  {
    name: 'Hollow Blocks (6")',
    description: "Lightweight blocks with good insulation performance.",
    image: "images/hollow_blocks_1773247002492.png",
    features: ["Faster construction", "Excellent insulation", "Cost-effective", "Reduced weight"],
  },
];

const DEALER_MATERIALS: ProductCard[] = [
  { name: "M-Sand", description: "Concrete grade manufactured sand.", image: "images/msand_pile_1773246182968.png", features: ["High strength", "Silt free", "Economical", "Well graded"] },
  { name: "P-Sand", description: "Fine plastering sand for smooth finish.", image: "images/p-sand-erode-triple-wash-plaster-sand.jpg", features: ["Fine texture", "Smooth finishes", "No screening needed", "Reduced cracks"] },
  { name: "1/2 Jalli", description: "12mm aggregate for RCC mixes.", image: "images/jalli_half_1773246240267.png", features: ["Cubical shape", "Strong bond", "Clean", "Dust free"] },
  { name: "3/4 Jalli", description: "20mm aggregate for structural concrete.", image: "images/jalli_three_quarter_1773246304635.png", features: ["Perfect sizing", "High load-bearing", "Clean", "Consistent quality"] },
  { name: "Dust", description: "Filling and leveling material.", image: "images/dust_pile_1773246342930.png", features: ["Excellent compaction", "Cost-effective", "Fine particles", "Versatile"] },
  { name: "Chips", description: "Clean graded chips for construction.", image: "images/chips-erode-construction-aggregates.jpg", features: ["Uniform size", "Decorative", "Durable", "Clean material"] },
  { name: "Cements (All Brands)", description: "Fresh stock in bulk availability.", image: "images/cement_bags_1773246425368.png", features: ["Top brands", "Fresh stock", "Best prices", "Bulk availability"] },
  { name: "Red Stone", description: "Classic natural finish stone.", image: "images/red-clay.png", features: ["Natural color", "High strength", "Weather resistant", "Classic look"] },
];

function formatINR(n: number): string {
  return `Rs.${Math.round(n).toLocaleString("en-IN")}`;
}

function safeText(value: string | undefined): string {
  const trimmed = value?.trim();
  return trimmed && trimmed.length > 0 ? trimmed : "Not provided";
}

function isPng(filepath: string): boolean {
  return filepath.toLowerCase().endsWith(".png");
}

async function loadPdfImage(pdfDoc: PDFDocument, relativePath: string): Promise<PDFImage | null> {
  try {
    const imagePath = path.join(process.cwd(), "public", relativePath);
    const bytes = await readFile(imagePath);
    return isPng(relativePath) ? await pdfDoc.embedPng(bytes) : await pdfDoc.embedJpg(bytes);
  } catch {
    return null;
  }
}

function drawWrappedText(
  page: ReturnType<PDFDocument["addPage"]>,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  size: number,
  font: Awaited<ReturnType<PDFDocument["embedFont"]>>,
  color: ReturnType<typeof rgb>,
): number {
  const words = text.split(" ");
  let line = "";
  let cy = y;
  for (const word of words) {
    const probe = line ? `${line} ${word}` : word;
    if (font.widthOfTextAtSize(probe, size) > maxWidth && line) {
      page.drawText(line, { x, y: cy, size, font, color });
      line = word;
      cy -= size + 3;
    } else {
      line = probe;
    }
  }
  if (line) {
    page.drawText(line, { x, y: cy, size, font, color });
  }
  return cy;
}

function addClickableLink(
  pdfDoc: PDFDocument,
  page: ReturnType<PDFDocument["addPage"]>,
  x: number,
  y: number,
  width: number,
  height: number,
  url: string,
) {
  const context = (pdfDoc as unknown as { context: { obj: (v: unknown) => unknown; register: (v: unknown) => unknown } }).context;
  const pageNode = page.node as unknown as {
    get: (name: unknown) => unknown;
    set: (name: unknown, value: unknown) => void;
  };

  const linkAnnot = context.obj({
    Type: PDFName.of("Annot"),
    Subtype: PDFName.of("Link"),
    Rect: [x, y, x + width, y + height],
    Border: [0, 0, 0],
    A: context.obj({
      Type: PDFName.of("Action"),
      S: PDFName.of("URI"),
      URI: PDFString.of(url),
    }),
  });

  const linkRef = context.register(linkAnnot);
  const annotsKey = PDFName.of("Annots");
  const existingAnnots = pageNode.get(annotsKey);
  if (existingAnnots instanceof PDFArray) {
    existingAnnots.push(linkRef);
  } else {
    pageNode.set(annotsKey, context.obj([linkRef]));
  }
}

export async function POST(request: Request) {
  const body = (await request.json()) as ReportPayload;

  if (!body?.leadPhone || body.leadPhone.trim().length < 10) {
    return Response.json({ error: "Valid phone is required." }, { status: 400 });
  }

  const safeId = (body.id ?? "id").replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 32) || "id";
  const filename = `sct${safeId}.pdf`;
  const generatedAt = new Date().toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Asia/Kolkata",
  });

  const pdfDoc = await PDFDocument.create();
  const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
  const bold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);
  const brand = rgb(0.02, 0.32, 0.24);
  const ink = rgb(0.13, 0.15, 0.15);
  const line = rgb(0.86, 0.9, 0.88);
  const light = rgb(0.96, 0.98, 0.97);

  const logo = await loadPdfImage(pdfDoc, "images/PHOTO-2025-11-28-17-35-34-removebg-preview.png");

  const page1 = pdfDoc.addPage([595, 842]);
  page1.drawRectangle({ x: 18, y: 18, width: 559, height: 806, color: rgb(1, 1, 1), borderColor: line, borderWidth: 1 });
  page1.drawRectangle({ x: 18, y: 728, width: 559, height: 96, color: brand });
  page1.drawRectangle({ x: 18, y: 700, width: 559, height: 28, color: light });

  if (logo) {
    page1.drawImage(logo, { x: 34, y: 748, width: 56, height: 56 });
  }

  page1.drawText("SCT BRICKS", { x: 98, y: 784, size: 12, font: bold, color: rgb(0.82, 0.95, 0.9) });
  page1.drawText("Brick Estimate Report", { x: 98, y: 762, size: 22, font: bold, color: rgb(1, 1, 1) });
  page1.drawText(`Generated: ${generatedAt}`, { x: 392, y: 709, size: 9, font: bold, color: brand });

  const area = body.area?.toFixed(2) ?? "N/A";
  const cost = `${formatINR(body.low)} - ${formatINR(body.high)}`;

  const summary = [
    ["Wall Area", `${area} sq.ft`],
    ["Final Bricks", String(body.totalUnits)],
    ["Est. Cost", cost],
  ];

  let sx = 32;
  for (const [title, value] of summary) {
    page1.drawRectangle({ x: sx, y: 640, width: 176, height: 54, color: rgb(1, 1, 1), borderColor: line, borderWidth: 1 });
    page1.drawText(title, { x: sx + 10, y: 676, size: 8.5, font: bold, color: rgb(0.4, 0.42, 0.42) });
    page1.drawText(value, { x: sx + 10, y: 657, size: 11, font: bold, color: brand });
    sx += 186;
  }

  const rows: Array<[string, string]> = [
    ["Project Name", safeText(body.leadName) === "Not provided" ? "Brick Estimate Project" : `${safeText(body.leadName)} Project`],
    ["Location", safeText(body.leadLocation)],
    ["Length x Height", `${body.length} ft x ${body.height} ft`],
    ["Wall Thickness", `${body.thickness} inch`],
    ["Brick Type", body.brickType],
    ["Factor Used", body.factor?.toFixed(2) ?? "N/A"],
    ["Lead Phone", body.leadPhone],
  ];

  page1.drawRectangle({ x: 32, y: 400, width: 530, height: 224, color: rgb(1, 1, 1), borderColor: line, borderWidth: 1 });
  page1.drawRectangle({ x: 32, y: 598, width: 530, height: 26, color: light, borderColor: line, borderWidth: 1 });
  page1.drawText("Project & Estimate Details", { x: 42, y: 607, size: 10, font: bold, color: brand });

  let ry = 577;
  for (const [label, value] of rows) {
    page1.drawText(label, { x: 42, y: ry, size: 9, font: bold, color: rgb(0.34, 0.37, 0.37) });
    page1.drawText(value, { x: 210, y: ry, size: 9.2, font, color: ink });
    page1.drawLine({ start: { x: 40, y: ry - 5 }, end: { x: 554, y: ry - 5 }, thickness: 0.6, color: line });
    ry -= 24;
  }

  page1.drawRectangle({ x: 32, y: 334, width: 530, height: 56, color: rgb(1, 1, 1), borderColor: line, borderWidth: 1 });
  page1.drawText("Terms", { x: 42, y: 374, size: 10, font: bold, color: brand });
  drawWrappedText(page1, "Estimate is indicative and may vary with site conditions, route, loading, and final confirmed rates.", 42, 358, 510, 8.5, font, rgb(0.34, 0.37, 0.37));

  page1.drawRectangle({ x: 32, y: 260, width: 530, height: 56, color: brand });
  page1.drawText("Need final pricing? Share this report on WhatsApp with SCT Bricks", {
    x: 120,
    y: 288,
    size: 9.5,
    font: bold,
    color: rgb(1, 1, 1),
  });
  page1.drawText("sctbricks.com/brick-calculator-india", {
    x: 208,
    y: 271,
    size: 9,
    font,
    color: rgb(0.86, 0.95, 0.9),
  });
  addClickableLink(pdfDoc, page1, 32, 260, 530, 56, "https://sctbricks.com/brick-calculator-india");
  addClickableLink(pdfDoc, page1, 120, 284, 360, 14, "https://wa.me/916380213603");

  const drawCenteredSectionHead = (
    page: ReturnType<PDFDocument["addPage"]>,
    title: string,
    subtitle: string,
    pageWidth: number,
    startY: number,
  ) => {
    const titleWidth = bold.widthOfTextAtSize(title, 24);
    page.drawText(title, { x: (pageWidth - titleWidth) / 2, y: startY, size: 24, font: bold, color: brand });
    page.drawRectangle({ x: (pageWidth - 76) / 2, y: startY - 16, width: 76, height: 6, color: rgb(0.29, 0.71, 0.53) });
    const subtitleWidth = font.widthOfTextAtSize(subtitle, 10.6);
    page.drawText(subtitle, { x: (pageWidth - subtitleWidth) / 2, y: startY - 42, size: 10.6, font, color: rgb(0.36, 0.39, 0.45) });
  };

  const drawProductCard = async (
    page: ReturnType<PDFDocument["addPage"]>,
    x: number,
    y: number,
    w: number,
    h: number,
    item: ProductCard,
    buttonLink: string,
  ) => {
    page.drawRectangle({ x, y, width: w, height: h, color: rgb(1, 1, 1), borderColor: line, borderWidth: 1 });
    const img = await loadPdfImage(pdfDoc, item.image);
    if (img) {
      page.drawImage(img, { x: x + 1, y: y + h - 226, width: w - 2, height: 226 });
    }
    page.drawText(item.name, { x: x + 16, y: y + h - 252, size: 9.4, font: bold, color: brand });
    drawWrappedText(page, item.description, x + 16, y + h - 272, w - 30, 8.2, font, rgb(0.36, 0.39, 0.42));

    let fy = y + h - 334;
    for (let i = 0; i < Math.min(item.features.length, 4); i += 1) {
      page.drawText("•", { x: x + 16, y: fy, size: 9, font: bold, color: rgb(0.29, 0.71, 0.53) });
      page.drawText(item.features[i], { x: x + 24, y: fy, size: 7.6, font, color: rgb(0.4, 0.43, 0.45) });
      fy -= 13;
    }

    page.drawRectangle({ x: x + 16, y: y + 16, width: w - 32, height: 32, color: rgb(0.29, 0.71, 0.53) });
    page.drawText("Get Price", { x: x + w / 2 - 24, y: y + 28, size: 10, font: bold, color: rgb(1, 1, 1) });
    addClickableLink(pdfDoc, page, x + 16, y + 16, w - 32, 32, buttonLink);
  };

  // Page 2 (Landscape): Manufactured products
  const page2 = pdfDoc.addPage([1191, 842]);
  page2.drawRectangle({ x: 0, y: 0, width: 1191, height: 842, color: light });
  drawCenteredSectionHead(
    page2,
    "Our Manufactured Products",
    "Explore our range of premium construction materials designed for strength, durability, and cost-efficiency.",
    1191,
    780,
  );
  let px = 72;
  for (const item of MANUFACTURED_PRODUCTS) {
    await drawProductCard(page2, px, 92, 252, 550, item, "https://wa.me/916380213603");
    px += 274;
  }

  // Page 3 (Landscape): Manufacturing process
  const page3 = pdfDoc.addPage([1191, 842]);
  page3.drawRectangle({ x: 0, y: 0, width: 1191, height: 842, color: light });
  drawCenteredSectionHead(
    page3,
    "Our Manufacturing Process",
    "A systematic approach to creating industry-leading construction materials through precision engineering.",
    1191,
    780,
  );
  const processCards = [
    { no: "01", title: "Material Processing", desc: "Rigorous quality checks on fly ash, cement, and aggregates." },
    { no: "02", title: "Precision Mixing", desc: "Automated batching plants ensure exact mix proportions." },
    { no: "03", title: "High-Pressure Molding", desc: "Hydraulic presses create perfectly shaped, high-density blocks." },
    { no: "04", title: "Curing & Dispatch", desc: "Optimal water curing for max strength before delivery." },
  ];
  page3.drawLine({
    start: { x: 188, y: 384 },
    end: { x: 1002, y: 384 },
    thickness: 1.5,
    color: rgb(0.88, 0.9, 0.92),
  });
  let qx = 72;
  for (const step of processCards) {
    page3.drawRectangle({ x: qx, y: 114, width: 252, height: 356, color: rgb(1, 1, 1), borderColor: line, borderWidth: 1 });
    page3.drawRectangle({ x: qx + 86, y: 330, width: 80, height: 92, color: rgb(0.93, 0.97, 0.95), borderColor: rgb(0.9, 0.93, 0.92), borderWidth: 1 });
    page3.drawText(step.no, { x: qx + 116, y: 364, size: 17, font: bold, color: rgb(0.25, 0.61, 0.46) });
    page3.drawText(step.title, { x: qx + 44, y: 262, size: 13, font: bold, color: brand });
    drawWrappedText(page3, step.desc, qx + 44, 226, 164, 8.8, font, rgb(0.35, 0.38, 0.42));
    qx += 274;
  }

  // Page 4 (Landscape): Dealer materials first half
  const page4 = pdfDoc.addPage([1191, 842]);
  page4.drawRectangle({ x: 0, y: 0, width: 1191, height: 842, color: light });
  drawCenteredSectionHead(
    page4,
    "Materials We Supply (Dealers)",
    "We are trusted dealers of high-quality raw materials sourced for top-tier construction.",
    1191,
    780,
  );
  let d1x = 72;
  for (const item of DEALER_MATERIALS.slice(0, 4)) {
    await drawProductCard(page4, d1x, 92, 252, 550, item, "https://wa.me/916380213603");
    d1x += 274;
  }

  // Page 5 (Landscape): Dealer materials second half + locations
  const page5 = pdfDoc.addPage([1191, 842]);
  page5.drawRectangle({ x: 0, y: 0, width: 1191, height: 842, color: light });
  drawCenteredSectionHead(
    page5,
    "Materials We Supply (Dealers)",
    "Additional supply categories and regional delivery support details.",
    1191,
    780,
  );
  let d2x = 72;
  for (const item of DEALER_MATERIALS.slice(4, 8)) {
    await drawProductCard(page5, d2x, 220, 252, 422, item, "https://wa.me/916380213603");
    d2x += 274;
  }

  page5.drawRectangle({ x: 72, y: 92, width: 1046, height: 100, color: rgb(1, 1, 1), borderColor: line, borderWidth: 1 });
  page5.drawRectangle({ x: 72, y: 164, width: 1046, height: 28, color: rgb(0.93, 0.97, 0.95), borderColor: line, borderWidth: 1 });
  page5.drawText("Location Details", { x: 84, y: 174, size: 11, font: bold, color: brand });
  page5.drawText("Service Areas: Erode, Perundurai, Bhavani, Modakuruchi, Chennimalai", { x: 84, y: 144, size: 9.2, font, color: ink });
  page5.drawText("Address: Shrii Chinnamman Trader, Perundurai Rd, Erode, Tamil Nadu 638052", { x: 84, y: 126, size: 9.2, font, color: ink });
  page5.drawText("Phone: +91 6380 213 603 / +91 84285 60078", { x: 84, y: 108, size: 9.2, font, color: ink });
  addClickableLink(pdfDoc, page5, 84, 103, 180, 12, "tel:+916380213603");
  addClickableLink(pdfDoc, page5, 270, 103, 180, 12, "tel:+918428560078");
  addClickableLink(pdfDoc, page5, 84, 139, 460, 12, "https://sctbricks.com/areas-we-serve");

  const pdfBytes = await pdfDoc.save();
  return new Response(pdfBytes, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
