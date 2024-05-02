import { writeFile } from "fs/promises";
import { NextRequest, NextResponse } from "next/server";
import { join } from "path";
import { dirname } from "path";
import { fileURLToPath } from "url";

// Lấy đường dẫn của thư mục gốc của dự án
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, "..", "..", "..");

export async function POST(request: NextRequest) {
  const data = await request.formData();
  const file: File | null = data.get("file") as unknown as File;

  if (!file) {
    return NextResponse.json({ success: false });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  // Đường dẫn của thư mục 'upload' trong dự án
  const uploadDir = join(projectRoot, "public", "uploads");

  // Tạo đường dẫn hoàn chỉnh của file
  const path = join(uploadDir, file.name);

  // Ghi file vào thư mục upload
  await writeFile(path, buffer);
  console.log(`File được ghi vào ${path}`);

  return NextResponse.json({ success: true });
}
