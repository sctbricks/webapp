import nodemailer from "nodemailer";

const LEAD_TO = "sctbricksandbuilders@gmail.com";
const LEAD_FROM = "sctbricks@gmail.com";

type LeadPayload = {
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

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as LeadPayload;

    if (!body.leadPhone || body.leadPhone.trim().length < 10) {
      return Response.json({ error: "Valid phone number is required." }, { status: 400 });
    }

    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!user || !pass) {
      return Response.json({ error: "SMTP is not configured." }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user, pass },
    });

    const submittedAt = new Date().toLocaleString("en-IN", {
      dateStyle: "medium",
      timeStyle: "short",
      timeZone: "Asia/Kolkata",
    });

    const subject = `New Calculator Lead - ${body.leadPhone}`;

    await transporter.sendMail({
      from: `SCT Bricks Leads <${LEAD_FROM}>`,
      to: LEAD_TO,
      replyTo: LEAD_FROM,
      subject,
      text: [
        "New lead from Brick Calculator",
        `Submitted at: ${submittedAt}`,
        `Name: ${body.leadName?.trim() || "Not provided"}`,
        `Phone: ${body.leadPhone}`,
        `Location: ${body.leadLocation?.trim() || "Not provided"}`,
        "",
        "Calculation Details",
        `Length: ${body.length} ft`,
        `Height: ${body.height} ft`,
        `Wall Thickness: ${body.thickness} inch`,
        `Brick Type: ${body.brickType}`,
        `Approx Quantity: ${body.totalUnits}`,
        `Approx Cost Range: Rs.${Math.round(body.low).toLocaleString("en-IN")} - Rs.${Math.round(body.high).toLocaleString("en-IN")}`,
      ].join("\n"),
    });

    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "Unable to send lead email." }, { status: 500 });
  }
}
