type ReportPayload = {
  id?: string;
  leadName?: string;
  leadPhone: string;
  leadLocation?: string;
  length: string;
  height: string;
  thickness: string;
  brickType: string;
  totalUnits: number;
  low: number;
  high: number;
};

function formatINR(n: number): string {
  return `Rs.${Math.round(n).toLocaleString("en-IN")}`;
}

function escapePdfText(input: string): string {
  return input.replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
}

function buildSimplePdf(lines: string[]): string {
  const streamLines: string[] = [];
  let y = 800;
  for (const line of lines) {
    streamLines.push(`BT /F1 11 Tf 42 ${y} Td (${escapePdfText(line)}) Tj ET`);
    y -= 16;
    if (y < 60) break;
  }

  const content = streamLines.join("\n");
  const objects = [
    "1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj",
    "2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj",
    "3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >> endobj",
    `4 0 obj << /Length ${content.length} >> stream\n${content}\nendstream endobj`,
    "5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj",
  ];

  let pdf = "%PDF-1.4\n";
  const offsets: number[] = [0];
  for (const obj of objects) {
    offsets.push(pdf.length);
    pdf += `${obj}\n`;
  }

  const xrefStart = pdf.length;
  pdf += `xref\n0 ${objects.length + 1}\n`;
  pdf += "0000000000 65535 f \n";
  for (let i = 1; i < offsets.length; i += 1) {
    pdf += `${offsets[i].toString().padStart(10, "0")} 00000 n \n`;
  }
  pdf += `trailer << /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefStart}\n%%EOF`;

  return pdf;
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

  const lines = [
    "SCT BRICKS - DETAILED ESTIMATE REPORT",
    `Generated: ${generatedAt}`,
    "",
    "PROJECT DETAILS",
    `Length: ${body.length} ft`,
    `Height: ${body.height} ft`,
    `Wall Thickness: ${body.thickness} inch`,
    `Brick Type: ${body.brickType}`,
    `Estimated Quantity: ${body.totalUnits}`,
    `Estimated Cost Range: ${formatINR(body.low)} - ${formatINR(body.high)}`,
    "",
    "LEAD DETAILS",
    `Name: ${body.leadName?.trim() || "Not provided"}`,
    `Phone: ${body.leadPhone}`,
    `Location: ${body.leadLocation?.trim() || "Not provided"}`,
    "",
    "NOTE",
    "This estimate is for planning purpose only.",
    "Final pricing depends on site condition, transport, and loading.",
    "",
    "SCT Bricks - Erode",
    "Phone: +91 6380 213 603 / +91 84285 60078",
  ];

  const pdf = buildSimplePdf(lines);

  return new Response(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
