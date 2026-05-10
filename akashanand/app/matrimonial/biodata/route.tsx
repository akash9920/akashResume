import { readFile } from "node:fs/promises";
import path from "node:path";
import { renderToBuffer } from "@react-pdf/renderer";
import { NextResponse } from "next/server";
import { BiodataDocument } from "@/lib/matrimonial/biodata-document";

export const runtime = "nodejs";

function imageMimeForPath(filePath: string): "png" | "jpeg" {
  return filePath.toLowerCase().endsWith(".png") ? "png" : "jpeg";
}

async function loadProfilePhotoDataUri(): Promise<string | undefined> {
  const candidates = [
    path.join(process.cwd(), "public", "matrimonial", "akash-profile.png"),
    path.join(process.cwd(), "public", "matrimonial", "akash-profile.jpg"),
    path.join(process.cwd(), "app", "matrimonial", "images", "profilePic.png"),
    path.join(process.cwd(), "app", "matrimonial", "images", "profilePic.jpg"),
  ];
  for (const filePath of candidates) {
    try {
      const buf = await readFile(filePath);
      const ext = imageMimeForPath(filePath);
      return `data:image/${ext};base64,${buf.toString("base64")}`;
    } catch {
      /* try next */
    }
  }
  return undefined;
}

export async function GET() {
  const photoSrc = await loadProfilePhotoDataUri();
  const buffer = await renderToBuffer(<BiodataDocument photoSrc={photoSrc} />);

  return new NextResponse(new Uint8Array(buffer), {
    status: 200,
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'attachment; filename="akash-anand-biodata.pdf"',
      "Cache-Control": "private, no-store",
    },
  });
}
