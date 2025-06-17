const modules = import.meta.glob("../assets/brands/*.{png,jpg,jpeg}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

// 2. Convert file paths → slug → src map
const brandLogos: Record<string, string> = {};
for (const [path, src] of Object.entries(modules)) {
  // path example: "../assets/brands/dot-and-key.png"
  const fileName = path.split("/").pop()!;           // dot-and-key.png
  const slug = fileName.replace(/\.(png|jpe?g)$/i, ""); // dot-and-key
  brandLogos[slug] = src;
}

// 3. Helper to turn a brand name into a slug matching the file names
function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[’'&]/g, "") // strip apostrophes & ampersands
    .replace(/\s+/g, "-")  // spaces → dashes
    .replace(/[^a-z0-9-]/g, "");
}

/**
 * Lookup helper — returns the imported image path for a brand name
 * (or undefined if no matching file exists).
 */
export function getLogo(name: string): string | undefined {
  return brandLogos[slugify(name)];
}

export { brandLogos };