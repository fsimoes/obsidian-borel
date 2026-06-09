import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const qz = path.join(root, "quartz/static/comic")
const pub = path.join(root, "public/comic")
const src = path.join(root, "content/Borel/Comic/02_Chapters")

function countAssets(folder) {
  if (!fs.existsSync(folder)) return null
  const files = fs.readdirSync(folder).filter((f) => f.endsWith(".webp"))
  const cover = files.includes("000-cover.webp")
  const pages = files.filter((f) => f !== "000-cover.webp").length
  return { pages, cover }
}

const cfg = JSON.parse(fs.readFileSync(path.join(qz, "chapters.json"), "utf8"))
const pubCfg = fs.existsSync(path.join(pub, "chapters.json"))
  ? JSON.parse(fs.readFileSync(path.join(pub, "chapters.json"), "utf8"))
  : null

const issues = []

if (!pubCfg) issues.push("public/comic/chapters.json ausente")
else if (pubCfg.chapters.length !== cfg.chapters.length) {
  issues.push(
    `public/comic: ${pubCfg.chapters.length} caps no JSON; fonte tem ${cfg.chapters.length}`,
  )
}

const qzJs = fs.readFileSync(path.join(qz, "reader.js"), "utf8")
const pubJs = fs.existsSync(path.join(pub, "reader.js"))
  ? fs.readFileSync(path.join(pub, "reader.js"), "utf8")
  : ""
const qzV = qzJs.match(/CATALOG_VERSION = "(\d+)"/)?.[1]
const pubV = pubJs.match(/CATALOG_VERSION = "(\d+)"/)?.[1]
if (pubV && pubV !== qzV) issues.push(`reader.js: public v${pubV} vs quartz v${qzV}`)
if (pubJs.includes("SessÃ£o") || pubJs.includes("â€")) {
  issues.push("reader.js em public/comic ainda tem encoding quebrado")
}

for (const ch of cfg.chapters) {
  const qzA = countAssets(path.join(qz, ch.id))
  const pubA = countAssets(path.join(pub, ch.id))
  if (!qzA) {
    issues.push(`${ch.id}: pasta ausente em quartz`)
    continue
  }
  if (qzA.pages !== ch.pageCount) {
    issues.push(`${ch.id}: quartz ${qzA.pages} págs, JSON pede ${ch.pageCount}`)
  }
  if (ch.cover && !qzA.cover) {
    issues.push(`${ch.id}: falta 000-cover.webp em quartz`)
  }
  if (!pubA) issues.push(`${ch.id}: ausente em public/comic`)
  else if (pubA.pages !== ch.pageCount || Boolean(ch.cover) !== pubA.cover) {
    issues.push(
      `${ch.id}: public desatualizado (${pubA.pages} pags, capa=${pubA.cover})`,
    )
  }
}

for (const dir of fs.readdirSync(src).filter((d) => d.startsWith("cap-"))) {
  const n = parseInt(dir.split("-")[1], 10)
  if (Number.isNaN(n) || n < 8) continue
  const pagesDir = path.join(src, dir, "pages")
  if (!fs.existsSync(pagesDir)) continue
  const story = fs
    .readdirSync(pagesDir)
    .filter((f) => f.endsWith(".webp") && f !== "000-cover.webp")
  if (story.length && !cfg.chapters.some((c) => c.id.includes(`cap-${String(n).padStart(2, "0")}`))) {
    issues.push(`${dir}: ${story.length} WebPs em produção, fora do chapters.json`)
  }
}

console.log(JSON.stringify({ issues, qzCatalog: qzV, publicChapters: pubCfg?.chapters?.length ?? 0 }, null, 2))
