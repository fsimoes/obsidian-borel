import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const args = process.argv.slice(2).filter((a) => !a.startsWith("--"))
const removePng = process.argv.includes("--remove-png")
const folder = args[0]
  ? path.resolve(args[0])
  : path.join(root, "quartz", "static", "comic", "cap-01-sessao-01")
const quality = 85

let totalPng = 0
let totalWebp = 0
const entries = (await fs.readdir(folder)).filter((f) => f.endsWith(".png")).sort()

if (entries.length === 0) {
  console.error(`No PNG files in ${folder}`)
  process.exit(1)
}

for (const name of entries) {
  const pngPath = path.join(folder, name)
  const webpPath = path.join(folder, name.replace(/\.png$/i, ".webp"))
  const before = (await fs.stat(pngPath)).size
  await sharp(pngPath).webp({ quality, effort: 6 }).toFile(webpPath)
  const after = (await fs.stat(webpPath)).size
  totalPng += before
  totalWebp += after
  console.log(
    `${name} → ${path.basename(webpPath)}: ${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB`,
  )
  if (removePng) await fs.unlink(pngPath)
}

const pct = Math.round((100 * totalWebp) / totalPng)
console.log(
  `Done: ${entries.length} files, ${Math.round(totalPng / 1024)}KB PNG → ${Math.round(totalWebp / 1024)}KB WebP (${pct}%)`,
)
