import { readFile } from "node:fs/promises";
import { extname, isAbsolute, relative, resolve } from "node:path";

const CONTENT_TYPES: Record<string, string> = {
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".jpeg": "image/jpeg",
  ".jpg": "image/jpeg",
  ".png": "image/png",
  ".svg": "image/svg+xml",
  ".webp": "image/webp",
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ path: string[] }> },
) {
  const { path } = await params;
  const assetRoot = resolve(process.cwd(), "assets");
  const filePath = resolve(assetRoot, ...path);
  const relativePath = relative(assetRoot, filePath);
  const contentType = CONTENT_TYPES[extname(filePath).toLowerCase()];

  if (!contentType || relativePath.startsWith("..") || isAbsolute(relativePath)) {
    return new Response("Not found", { status: 404 });
  }

  try {
    const file = await readFile(filePath);
    return new Response(new Uint8Array(file), {
      headers: {
        "Cache-Control": "public, max-age=3600",
        "Content-Type": contentType,
      },
    });
  } catch {
    return new Response("Not found", { status: 404 });
  }
}