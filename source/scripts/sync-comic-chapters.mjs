/**
 * Copy chapter pages from production folders to quartz/static/comic.
 * Usage: node scripts/sync-comic-chapters.mjs [cap-02 ...]  (default: all with pages/)
 */
import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const chaptersRoot = path.join(root, "content", "Borel", "Comic", "02_Chapters")
const quartzComic = path.join(root, "quartz", "static", "comic")

const SESSION_MAP = {
  "cap-00-elenco": "cap-00-elenco",
  "cap-01-negociacoes-frustradas": "cap-01-sessao-01",
  "cap-02-um-encontro-na-cabana": "cap-02-sessao-02",
  "cap-03-entre-dados-e-desconfiancas": "cap-03-sessao-03",
  "cap-04-noite-na-cidade": "cap-04-sessao-04",
  "cap-05-entre-rastros-risadas-e-revelacoes": "cap-05-sessao-05",
  "cap-06-investigacoes-e-revelacoes": "cap-06-sessao-06",
  "cap-07-a-carroca-misteriosa": "cap-07-sessao-07",
  "cap-08-sussurros-de-revolta": "cap-08-sessao-08",
  "cap-09-o-preco-da-lealdade": "cap-09-sessao-09",
  "cap-10-sombras-no-cais": "cap-10-sessao-10",
  "cap-11-sombras-e-polvora": "cap-11-sessao-11",
  "cap-12-explosoes-e-estrategias": "cap-12-sessao-12",
  "cap-13-o-fogo-da-revolta": "cap-13-sessao-13",
  "cap-14-o-cerco-final": "cap-14-sessao-14",
  "cap-15-sombras-e-fugas": "cap-15-sessao-15",
}

const only = process.argv.slice(2)

async function copyWebp(srcDir, destDir) {
  await fs.mkdir(destDir, { recursive: true })
  let n = 0
  for (const name of await fs.readdir(srcDir)) {
    if (!name.endsWith(".webp")) continue
    await fs.copyFile(path.join(srcDir, name), path.join(destDir, name))
    n++
  }
  return n
}

const results = []
for (const folder of await fs.readdir(chaptersRoot)) {
  if (!folder.startsWith("cap-")) continue
  if (only.length && !only.some((x) => folder.includes(x))) continue
  const destId = SESSION_MAP[folder]
  if (!destId) continue
  const pagesDir = path.join(chaptersRoot, folder, "pages")
  try {
    await fs.access(pagesDir)
  } catch {
    continue
  }
  const destDir = path.join(quartzComic, destId)
  const count = await copyWebp(pagesDir, destDir)
  if (count > 0) results.push({ folder, destId, count })
}

console.log(JSON.stringify(results, null, 2))
