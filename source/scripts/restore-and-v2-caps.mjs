/**
 * Restore legacy panels.md from git and run v2 conversion for caps 8-15.
 * Usage: node scripts/restore-and-v2-caps.mjs
 */
import { execSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const repoRoot = path.join(root, "..")
const chaptersDir = path.join(root, "content/Borel/Comic/02_Chapters")

const RESTORE = {
  "08": "488dc13",
  "09": "488dc13",
  10: "488dc13",
  11: "488dc13",
  12: "2a711d9",
  13: "2a711d9",
  14: "2a711d9",
  15: "2a711d9",
}

for (const [cap, commit] of Object.entries(RESTORE)) {
  const dir = fs.readdirSync(chaptersDir).find((d) => d.startsWith(`cap-${cap}-`))
  if (!dir) {
    console.warn(`skip cap ${cap}: folder not found`)
    continue
  }
  const rel = `source/content/Borel/Comic/02_Chapters/${dir}/panels.md`
  const content = execSync(`git show ${commit}:${rel}`, { cwd: repoRoot, encoding: "utf8" })
  fs.writeFileSync(path.join(chaptersDir, dir, "panels.md"), content, "utf8")
  console.log(`restored ${dir} from ${commit}`)
}

for (const cap of Object.keys(RESTORE)) {
  execSync(`node scripts/comic-docs-v2.mjs --cap=${cap}`, { cwd: root, stdio: "inherit" })
}
