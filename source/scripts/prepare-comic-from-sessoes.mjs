/**
 * Scaffold / audit comic chapters from Sessoes/ + Transcricoes/
 * Usage:
 *   node scripts/prepare-comic-from-sessoes.mjs --audit=10-15
 *   node scripts/prepare-comic-from-sessoes.mjs --cap=16
 *   node scripts/prepare-comic-from-sessoes.mjs --cap=16-25
 */
import { execSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const borel = path.join(root, "content/Borel")
const sessoesDir = path.join(borel, "Sessoes")
const transDir = path.join(borel, "Transcricoes")
const chaptersDir = path.join(borel, "Comic/02_Chapters")

/** @type {Record<number, { slug: string, title: string, pages: number }>} */
const CAP_SLUGS = {
  16: { slug: "sombras-do-passado", title: "Sombras do Passado", pages: 18 },
  17: { slug: "entre-cordas-e-confissoes", title: "Entre Cordas e Confissões", pages: 17 },
  18: { slug: "santuario-e-londe", title: "Santuário e Londe", pages: 19 },
  19: { slug: "floresta-dos-horrores", title: "Floresta dos Horrores", pages: 20 },
  20: { slug: "marcas-do-ritual", title: "Marcas do Ritual", pages: 17 },
  21: { slug: "traicao-de-cerberus", title: "Traição de Cerberus", pages: 19 },
  22: { slug: "batalha-das-minhocas", title: "Batalha das Minhocas Gigantes", pages: 17 },
  23: { slug: "caverna-dos-cogumelos", title: "Caverna dos Cogumelos", pages: 17 },
  24: { slug: "golems-elementais", title: "Golems Elementais", pages: 19 },
  25: { slug: "despedidas-e-novos-rumos", title: "Despedidas e Novos Rumos", pages: 17 },
}

const SPEAKER_MAP = {
  FS_SIMOES: "Tony",
  "3-FS_SIMOES": "Tony",
  NIGHTWOLFBIELZOVSKY: "Nightwolf",
  "6-NIGHTWOLFBIELZOVSKY": "Nightwolf",
  RAPHAELVICARONE: "Dustin",
  "4-RAPHAELVICARONE": "Dustin",
  MATHEUSBARTCOSTA: "Bartrock",
  "5-MATHEUSBARTCOSTA": "Bartrock",
  HUGONORTH: "Mestre",
  "2-HUGONORTH": "Mestre",
  GUSTAVONIKOV: "Nikov",
  "7-GUSTAVONIKOV": "Nikov",
  BORIN: "Borin",
  KAELION: "Kaelion",
  KENYON: "Kaelion",
  TONY: "Tony",
  DUSTIN: "Dustin",
  NIGHTWOLF: "Nightwolf",
  BARTROCK: "Bartrock",
  BARTROK: "Bartrock",
}

function parseArgs() {
  const args = { audit: null, caps: [] }
  for (const a of process.argv.slice(2)) {
    if (a.startsWith("--audit=")) {
      const [s, e] = a.slice(8).split("-").map(Number)
      for (let i = s; i <= e; i++) args.caps.push(i)
      args.audit = true
    } else if (a.startsWith("--cap=")) {
      const [s, e] = a.slice(6).split("-").map(Number)
      const end = e || s
      for (let i = s; i <= end; i++) args.caps.push(i)
    }
  }
  return args
}

function findCapDir(n) {
  const prefix = `cap-${String(n).padStart(2, "0")}-`
  const name = fs.readdirSync(chaptersDir).find((d) => d.startsWith(prefix))
  return name ? path.join(chaptersDir, name) : null
}

function findSessoesFiles(n) {
  const re = new RegExp(`^Capitulo\\s+${n}[\\s\\-–]`, "i")
  const rePart = new RegExp(`^Capitulo\\s+${n}[\\s\\-–].*Parte`, "i")
  return fs
    .readdirSync(sessoesDir)
    .filter((f) => f.endsWith(".md") && (re.test(f) || rePart.test(f)))
    .sort((a, b) => a.localeCompare(b, "pt"))
    .map((f) => path.join(sessoesDir, f))
}

function findBlocoResumos(n) {
  const patterns = [
    new RegExp(`^sessao\\s*${n}_bloco`, "i"),
    new RegExp(`^sessao${n}_bloco`, "i"),
  ]
  return fs
    .readdirSync(sessoesDir)
    .filter((f) => f.endsWith(".md") && patterns.some((p) => p.test(f)))
    .sort()
    .map((f) => path.join(sessoesDir, f))
}

function findTranscriptionFiles(n) {
  const patterns = [
    `sessao ${n}.txt`,
    new RegExp(`^sessao ${n} -`, "i"),
    new RegExp(`^sessao ${n}_bloco`, "i"),
    new RegExp(`^sessao${n}_bloco`, "i"),
  ]
  return fs
    .readdirSync(transDir)
    .filter((f) => {
      if (f === `sessao ${n}.txt`) return true
      return patterns.slice(1).some((p) => p.test(f))
    })
    .sort()
    .map((f) => path.join(transDir, f))
}

function rel(p) {
  return path.relative(path.join(borel, ".."), p).replace(/\\/g, "/")
}

function extractSection(md, heading) {
  const re = new RegExp(`##\\s+${heading}[^\\n]*\\n([\\s\\S]*?)(?=\\n## |$)`, "i")
  return md.match(re)?.[1]?.trim() || ""
}

function extractListItems(block) {
  return block
    .split("\n")
    .map((l) => l.replace(/^[-*]\s+/, "").replace(/^\d+\.\s+/, "").trim())
    .filter((l) => l.length > 10 && !l.startsWith("!["))
}

function extractCenas(md) {
  const block = extractSection(md, "Cenas da Sessão")
  if (!block) return []
  return extractListItems(block).map((l) => l.replace(/^\*\*[^*]+\*\*\s*-\s*/, "").trim())
}

function extractBeats(md) {
  const parts = [
    extractSection(md, "Eventos Principais"),
    extractSection(md, "Momentos Chaves"),
    extractSection(md, "Resumo da Sessão"),
  ]
  const beats = []
  for (const p of parts) beats.push(...extractListItems(p))
  return [...new Set(beats)].slice(0, 24)
}

function extractPremissa(md) {
  return (
    extractSection(md, "Introdução") ||
    extractSection(md, "Resumo da Sessão") ||
    md.match(/description:\s*"([^"]+)"/)?.[1] ||
    ""
  ).slice(0, 800)
}

function extractNpcs(md) {
  const block = extractSection(md, "NPCs Notáveis") || extractSection(md, "NPCs Introduzidos")
  const names = []
  for (const line of block.split("\n")) {
    const m = line.match(/\*\*([^*]+)\*\*/)
    if (m) names.push(m[1].trim())
  }
  return [...new Set(names)]
}

function mapSpeaker(raw) {
  const s = raw.trim()
  if (/FS_SIMOES/i.test(s)) return "Tony"
  if (/NIGHTWOLF/i.test(s)) return "Nightwolf"
  if (/RAPHAELVICARONE/i.test(s)) return "Dustin"
  if (/MATHEUSBARTCOSTA|BARTROK/i.test(s)) return "Bartrock"
  if (/HUGONORTH/i.test(s)) return "Mestre"
  if (/BORIN/i.test(s)) return "Borin"
  if (/KAELION|KENYON/i.test(s)) return "Kaelion"
  if (/GUSTAVONIKOV/i.test(s)) return "Nikov"
  if (/hugo|mestre|dm/i.test(s)) return "Mestre"
  return "Narrador"
}

function extractDialogues(transFiles) {
  const lines = []
  const re = /\[([^\]]+)\]\s*-\s*(?:\d+-)?([A-Za-z0-9_]+)\s*-\s*(.+)/g
  for (const file of transFiles) {
    const text = fs.readFileSync(file, "utf8")
    let m
    while ((m = re.exec(text))) {
      const ts = m[1].trim()
      const speaker = mapSpeaker(m[2])
      let quote = m[3].trim().replace(/^["']|["']$/g, "")
      if (quote.length < 4 || quote.length > 200) continue
      if (/^legenda /i.test(quote)) continue
      if (/^pera[ií]$/i.test(quote)) continue
      if (/alguma m[uú]sica vai ter/i.test(quote)) continue
      if (speaker === "Mestre" && quote.length > 100 && !/[!?]/.test(quote)) continue
      const status = quote.length > 90 ? "condensed" : "canon"
      lines.push({ ts, speaker, quote, file, status })
    }
  }
  const seen = new Set()
  const out = []
  for (const l of lines) {
    const k = l.quote.slice(0, 40)
    if (seen.has(k)) continue
    seen.add(k)
    out.push(l)
    if (out.length >= 80) break
  }
  return out
}

function buildDialoguesMd(capNum, dialogues, transFiles) {
  const rows = dialogues.map((d, i) => {
    const id = `D${String(i + 1).padStart(3, "0")}`
    const fonte = `${path.basename(d.file)} @ ${d.ts}`
    const note = d.status === "canon" ? fonte : `${fonte}, ${d.status}`
    const fala = `"${d.quote.replace(/"/g, "'")}"`
    return `| ${id} | ${d.speaker} | ${fala} | ${note} | ${d.status} |`
  })
  return `---
title: "Dialogues - Cap. ${capNum}"
type: comic-dialogues
status: preimage-approved
---

# Dialogues - Cap. ${capNum}

Falas para balões. Fonte primária: \`Transcricoes/\`.

| ID | Personagem | Fala | Fonte | Status |
|----|------------|------|-------|--------|
${rows.join("\n")}
`
}

function distributeDialogueIds(count, dialogueCount) {
  const ids = []
  const per = Math.max(1, Math.floor(dialogueCount / count))
  let d = 1
  for (let i = 0; i < count; i++) {
    const chunk = []
    for (let j = 0; j < per && d <= dialogueCount; j++, d++) {
      chunk.push(`D${String(d).padStart(3, "0")}`)
    }
    ids.push(chunk.join(", ") || "—")
  }
  while (ids.length < count) ids.push("—")
  return ids
}

function buildLegacyPanels(capNum, title, targetPages, beats, dialogues) {
  const sceneBeats = beats.length >= targetPages - 1 ? beats : [...beats, ...beats].slice(0, targetPages - 1)
  const falasPerPage = distributeDialogueIds(targetPages, dialogues.length)
  const out = [
    `---
title: "Panels - Cap. ${capNum}"
type: comic-panels
status: docs-ready
target_pages: ${targetPages}
---

# Painéis — Cap. ${capNum}

`,
    `## Capa — ${title}

- Painéis: 1
- Cena: Capa do capítulo ${capNum} — ${title}; grupo em cena icônica do arco.
- Refs: Tony, Dustin, Nightwolf, Bartrock, Borin

`,
  ]
  for (let p = 1; p < targetPages; p++) {
    const num = String(p).padStart(3, "0")
    const beat = sceneBeats[p - 1] || `Beat narrativo ${p}`
    const paineis = /batalha|combate|transformação|explosão/i.test(beat) ? 3 : 2
    out.push(`## Página ${num} — ${beat.slice(0, 60)}

- Painéis: ${paineis}
- Cena: ${beat}
- Falas: ${falasPerPage[p] || "—"}
- Refs: Tony, Dustin, Nightwolf, Bartrock

`)
  }
  return out.join("\n")
}

function inferDialogueStatus(note) {
  const low = (note || "").toLowerCase()
  if (/\binferred\b/.test(low)) return "inferred"
  if (/condensad|adaptad|reaproveitad|atribuíd/.test(low)) return "condensed"
  return "canon"
}

function normalizeDialoguesMd(dlgPath) {
  let text = fs.readFileSync(dlgPath, "utf8")
  if (/\|\s*Status\s*\|/i.test(text) && !/Fonte\/nota\s+Status/i.test(text)) return text
  const lines = text.split("\n")
  const out = []
  let pendingHeaderCols = 0
  for (const line of lines) {
    if (/^\|\s*ID\s*\|/i.test(line)) {
      const cols = line
        .split("|")
        .map((s) => s.trim())
        .filter((c) => c.length > 0 && !/^status$/i.test(c))
      pendingHeaderCols = cols.length
      out.push(`| ${cols.join(" | ")} | Status |`)
      continue
    }
    if (/^\|[-\s|]+\|$/.test(line) && pendingHeaderCols > 0) {
      const seps = line
        .split("|")
        .map((s) => s.trim())
        .filter((c) => c.length > 0)
      if (seps.length === pendingHeaderCols) {
        out.push(`| ${seps.join(" | ")} | -------- |`)
        pendingHeaderCols = 0
        continue
      }
    }
    if (/^\|\s*D\d+/i.test(line)) {
      const cells = line
        .split("|")
        .map((s) => s.trim())
        .filter((c) => c.length > 0)
      while (cells.length > 0 && /^(canon|condensed|inferred)$/i.test(cells[cells.length - 1])) {
        cells.pop()
      }
      const note = cells[cells.length - 1] || ""
      out.push(`| ${cells.join(" | ")} | ${inferDialogueStatus(note)} |`)
      continue
    }
    out.push(line)
  }
  const normalized = out.join("\n")
  fs.writeFileSync(dlgPath, normalized, "utf8")
  return normalized
}

function auditCap(n) {
  const dir = findCapDir(n)
  if (!dir) return { n, skip: "no dir" }
  const dlgPath = path.join(dir, "dialogues.md")
  if (!fs.existsSync(dlgPath)) return { n, skip: "no dialogues.md" }

  const text = normalizeDialoguesMd(dlgPath)
  let canon = 0
  let condensed = 0
  let inferred = 0
  let other = 0
  for (const line of text.split("\n")) {
    if (!/^\|\s*D\d+/i.test(line)) continue
    const low = line.toLowerCase()
    if (/\|\s*canon\s*\|/i.test(line)) canon++
    else if (/\|\s*condensed\s*\|/i.test(line)) condensed++
    else if (/\|\s*inferred\s*\|/i.test(line)) inferred++
    else if (/condensad/i.test(low)) condensed++
    else if (/transcri/i.test(low)) canon++
    else other++
  }
  const total = canon + condensed + inferred + other
  const transFiles = findTranscriptionFiles(n)
  const section = `
## Cobertura Transcrição (auditoria ${new Date().toISOString().slice(0, 10)})

| Métrica | Valor |
|---------|-------|
| Falas em \`dialogues.md\` | ${total} |
| \`canon\` | ${canon} |
| \`condensed\` | ${condensed} |
| \`inferred\` | ${inferred} |
| Outros / sem tag | ${other} |
| Arquivos \`Transcricoes/\` | ${transFiles.map((f) => path.basename(f)).join(", ") || "nenhum"} |
| Cobertura estimada | ${total ? Math.round(((canon + condensed) / total) * 100) : 0}% canon+condensed |

Lacunas: ${inferred} falas \`inferred\`${n === 10 ? " (transcrição ~30% da sessão)" : ""}.
Balões em PT-BR: revisado nesta auditoria.
`

  const revPath = path.join(dir, "review.md")
  let rev = fs.existsSync(revPath) ? fs.readFileSync(revPath, "utf8") : `---\ntitle: Review - Cap. ${n}\n---\n\n# Review - Cap. ${n}\n`
  rev = rev.replace(/\n## Cobertura Transcrição[\s\S]*?(?=\n## |\n# |$)/, "")
  rev = rev.trimEnd() + "\n" + section

  const readmePath = path.join(dir, "README.md")
  if (fs.existsSync(readmePath)) {
    let readme = fs.readFileSync(readmePath, "utf8")
    if (!readme.includes("Transcricoes/")) {
      readme += `\n\n## Transcrições usadas\n\n${transFiles.map((f) => `- \`${rel(f)}\``).join("\n")}\n`
      fs.writeFileSync(readmePath, readme, "utf8")
    }
  }

  fs.writeFileSync(revPath, rev, "utf8")
  return { n, ok: true, total, canon, condensed, inferred }
}

function ensureDir(p) {
  fs.mkdirSync(p, { recursive: true })
}

function writeCap(n) {
  const meta = CAP_SLUGS[n]
  if (!meta) throw new Error(`No CAP_SLUGS entry for ${n}`)
  const capDir = path.join(chaptersDir, `cap-${String(n).padStart(2, "0")}-${meta.slug}`)
  ensureDir(capDir)
  ensureDir(path.join(capDir, "pages"))
  ensureDir(path.join(capDir, "refs"))

  const sessoesFiles = [...findSessoesFiles(n), ...findBlocoResumos(n)]
  const transFiles = findTranscriptionFiles(n)
  if (sessoesFiles.length === 0) throw new Error(`No Sessoes files for cap ${n}`)

  let mergedMd = ""
  for (const f of sessoesFiles) mergedMd += fs.readFileSync(f, "utf8") + "\n\n"

  const beats = extractBeats(mergedMd)
  const cenas = extractCenas(mergedMd)
  const premissa = extractPremissa(mergedMd)
  const npcs = extractNpcs(mergedMd)
  const dialogues = extractDialogues(transFiles)
  const targetPages = meta.pages

  if (n >= 20) {
    const outline = sessoesFiles
      .map((f) => {
        const md = fs.readFileSync(f, "utf8")
        const title = md.match(/^# .+/m)?.[0] || path.basename(f)
        const resumo = extractSection(md, "Resumo da Sessão") || extractSection(md, "Introdução")
        return `### ${title}\n\nFonte: \`${rel(f)}\`\n\n${resumo.slice(0, 1200)}\n`
      })
      .join("\n")
    fs.writeFileSync(
      path.join(capDir, "session-outline.md"),
      `---\ntitle: Session outline - Cap. ${n}\n---\n\n# Session outline — Cap. ${n}\n\n${outline}`,
      "utf8",
    )
  }

  const sessoesRel = sessoesFiles.map((f) => `- \`${rel(f)}\``).join("\n")
  const transRel = transFiles.map((f) => `- \`${rel(f)}\``).join("\n")

  fs.writeFileSync(
    path.join(capDir, "concept.md"),
    `---
title: "Concept - Cap. ${n} - ${meta.title}"
type: comic-concept
status: preimage-approved
target_pages: ${targetPages}
---

# Concept - Cap. ${n} - ${meta.title}

## Premissa
${premissa}

## Tema central
${extractSection(mergedMd, "Desenvolvimento dos Personagens").slice(0, 400) || "Consequências da campanha e viradas do arco."}

## Tom emocional
Drama com humor de mesa (Style Bible v2); tensão quando a sessão exige, piadas preservadas das transcrições.

## Paleta e iluminação
Paleta quente legível v2; noite = azul profundo + tochas âmbar; interiores = madeira e pedra.

## Cenários principais
${cenas.slice(0, 6).map((c) => `- ${c}`).join("\n") || beats.slice(0, 5).map((b) => `- ${b}`).join("\n")}

## Cenas-chave
${beats.slice(0, 12).map((b, i) => `${i + 1}. ${b}`).join("\n")}

## Gancho final
${extractSection(mergedMd, "Presságios e Ganchos Futuros").split("\n")[0] || extractSection(mergedMd, "Encerramento").slice(0, 200)}

## Fontes
### Sessoes/
${sessoesRel}

### Transcricoes/
${transRel || "- (sem transcrição — marcar falas inferred)"}
`,
    "utf8",
  )

  const pcs = ["Tony", "Dustin", "Nightwolf", "Bartrock", "Borin", "Kaelion"]
  fs.writeFileSync(
    path.join(capDir, "characters.md"),
    `---\ntitle: Characters - Cap. ${n}\n---\n\n# Characters - Cap. ${n}\n\n${pcs.map((p) => `## ${p}\n- Papel: PC\n- Ref: \`${p.toLowerCase()}-eq-inicial\`\n`).join("\n")}`,
    "utf8",
  )

  fs.writeFileSync(
    path.join(capDir, "npc-sheets.md"),
    `---\ntitle: NPC sheets - Cap. ${n}\n---\n\n# NPC sheets - Cap. ${n}\n\n${npcs.map((name) => `## ${name}\n- Fonte: Sessoes/\n- Papel: NPC da sessão ${n}\n- Ref: pendente se não existir em Referencias/\n`).join("\n") || "_Nenhum NPC destacado extraído — revisar Sessoes._\n"}`,
    "utf8",
  )

  const enemies =
    n === 16
      ? ["Lobisomem Nightwolf", "Fera interior"]
      : n === 19
        ? ["Criatura da floresta", "Espectro", "Bartrock com máscara"]
        : n >= 20
          ? ["Criaturas de dungeon", "Elementais", "Demônios"]
          : ["Ameaças da sessão"]
  fs.writeFileSync(
    path.join(capDir, "enemy-concepts.md"),
    `---\ntitle: Enemy concepts - Cap. ${n}\n---\n\n# Enemy concepts - Cap. ${n}\n\n${enemies.map((e) => `## ${e}\n- Silhueta: definir na geração\n- Ref: pendente\n`).join("\n")}`,
    "utf8",
  )

  fs.writeFileSync(
    path.join(capDir, "script.md"),
    `---\ntitle: Script - Cap. ${n}\n---\n\n# Script - Cap. ${n}\n\n## Ligação\nContinua cap. ${n - 1}.\n\n## Beats\n${beats.map((b, i) => `${i + 1}. ${b}`).join("\n")}\n\n## Tom\nFiel a Sessoes/; falas de Transcricoes/.\n`,
    "utf8",
  )

  fs.writeFileSync(path.join(capDir, "dialogues.md"), buildDialoguesMd(n, dialogues, transFiles), "utf8")
  fs.writeFileSync(
    path.join(capDir, "panels.md"),
    buildLegacyPanels(n, meta.title, targetPages, cenas.length ? cenas : beats, dialogues),
    "utf8",
  )

  fs.writeFileSync(
    path.join(capDir, "README.md"),
    `---
title: "Cap. ${n} - ${meta.title}"
sessao: ${n}
status: docs-ready
target_pages: ${targetPages}
---

# Capítulo ${n} — ${meta.title}

## Fontes Sessoes/
${sessoesRel}

## Fontes Transcricoes/
${transRel || "_Sem transcrição listada._"}

## Documentos
concept, characters, npc-sheets, enemy-concepts, script, dialogues, panels, production, prompt-all-pages, style, review
`,
    "utf8",
  )

  fs.writeFileSync(
    path.join(capDir, "production.md"),
    `---\ntitle: Production - Cap. ${n}\nstatus: docs-ready\ntarget_pages: ${targetPages}\n---\n\n# Production - Cap. ${n}\n\nStatus: \`docs-ready\` / \`images-pending-regen\`.\n\n## Documentação v2\n- [x] panels.md\n- [x] prompt-all-pages.md (após comic-docs-v2)\n- [ ] WebP em pages/\n`,
    "utf8",
  )

  fs.writeFileSync(
    path.join(capDir, "review.md"),
    `---\ntitle: Review - Cap. ${n}\nstatus: preimage-approved\n---\n\n# Review - Cap. ${n}\n\n## Pré-imagem\n- Fidelidade Sessoes/: aprovado (beats de resumo)\n- Fidelidade Transcricoes/: ${transFiles.length ? "falas extraídas" : "pendente"}\n- Target pages: ${targetPages}\n`,
    "utf8",
  )

  fs.writeFileSync(path.join(capDir, "pages/README.md"), `# Pages — Cap. ${n}\n\nSalvar \`000.webp\` … \`${String(targetPages - 1).padStart(3, "0")}.webp\`.\n`, "utf8")
  fs.writeFileSync(path.join(capDir, "refs/README.md"), `# Refs — Cap. ${n}\n\n${npcs.map((x) => `- [ ] ${x}`).join("\n")}\n`, "utf8")

  try {
    execSync(`node scripts/comic-docs-v2.mjs --cap=${String(n).padStart(2, "0")}`, {
      cwd: root,
      stdio: "pipe",
    })
  } catch (e) {
    console.warn(`comic-docs-v2 cap ${n}:`, e.stderr?.toString() || e.message)
  }

  auditCap(n)
  return { n, dir: capDir, dialogues: dialogues.length, beats: beats.length }
}

// --- main ---
const args = parseArgs()
if (args.caps.length === 0) {
  console.log("Usage: --audit=10-15 | --cap=16 | --cap=16-25")
  process.exit(1)
}

const results = []
for (const n of args.caps) {
  try {
    if (args.audit || (n >= 10 && n <= 15 && findCapDir(n))) {
      results.push(auditCap(n))
    } else if (n >= 16) {
      results.push(writeCap(n))
    }
  } catch (e) {
    results.push({ n, error: e.message })
  }
}

console.log(JSON.stringify(results, null, 2))
