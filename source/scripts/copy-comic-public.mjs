import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const built = path.join(root, "public", "static", "comic")
const dest = path.join(root, "public", "comic")

try {
  await fs.access(built)
} catch {
  console.error(
    "Run `npx quartz build` first — comic assets are emitted to public/static/comic/",
  )
  process.exit(1)
}

await fs.mkdir(path.dirname(dest), { recursive: true })
await fs.cp(built, dest, { recursive: true, force: true })
console.log("Copied public/static/comic → public/comic (URL /comic/)")
