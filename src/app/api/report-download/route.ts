import { readFile } from "node:fs/promises";
import path from "node:path";

export async function GET(request: Request) {
  const pdfPath = path.join(process.cwd(), "public", "brick_estimate_report.pdf");
  const file = await readFile(pdfPath);
  const { searchParams } = new URL(request.url);
  const rawId = searchParams.get("id") ?? "id";
  const safeId = rawId.replace(/[^a-zA-Z0-9_-]/g, "").slice(0, 32) || "id";
  const filename = `sct${safeId}.pdf`;

  return new Response(file, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
