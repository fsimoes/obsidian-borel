/**
 * Retrofill comic chapter docs: Style v2, pose tables in panels.md, prompt-all-pages.md
 * Run: node scripts/comic-docs-v2.mjs [--cap=05] [--all]
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const chaptersDir = path.join(root, "content/Borel/Comic/02_Chapters")

const V2_PREFIX = `Generate an image. Fantasy RPG webcomic style — Borel approved funny look (Jun 2026 v2): clean bold black line art, professional cel-shading, warm readable palette (wood browns, amber torchlight, deep blues at night — never muddy or grim), exaggerated facial expressions, clear comedic body language, slapstick-friendly staging, expressive faces, modern western comic panels with subtle manga influence. Clear round speech bubbles with tails, legible hand-lettered comic font in Portuguese. Match attached style references for line weight, shading, and colors only — do not copy exact poses. Use character reference images for faces and outfits every panel.`

const V2_AVOID = `Avoid: photorealistic, hyper-detailed oil painting, dark muddy palette, grim cinematic lighting, horror mood unless scene requires, ultra-flat newspaper strip, anime chibi, 3D render, watermark, logo, blurry, extra fingers, extra arms, deformed hands, bad anatomy, English text, gibberish letters, illegible font, text outside bubbles, misspelled Portuguese, werewolf Nightwolf (unless explicit beat), Bartrock demon mask (unless S16+ possessed beat), wrong character faces, red-haired Emmergard.`

const LOCKED = {
  Tony: "human fighter-paladin, weathered silver plate, gold d20 breast emblem, white cloak red lining, lion shield",
  Nightwolf: "drow ranger, charcoal skin, red eyes, long black hair, olive cloak, bow — humanoid only",
  Dustin: "lean ranger-rogue, dark leather, ornate recurve bow, green gem ring",
  Kaelion: "muscular elf warrior, dark samurai lamellar, two katanas",
  Bartrock: "gaunt elven mage, corpse-pale, eye bags, dark cloak, grimoire, no mask",
  Amagard: "compact strong blonde Germanic warrior woman, green/brown mercenary clothes",
  "Lord Bart": "tall slim elven noble mage, dark coat, wand, no mask",
  Lucian: "nervous urban man, worn good clothes",
  Celeste: "elegant young woman, burgundy dress, silver half-mask, violet eyes when casting",
  Alberto: "urban merchant boss, good clothes, office papers",
  Morgana: "warehouse clerk, simple clothes, papers",
  Senhorzinho: "elderly thin man, wooden cane, humble brown coat",
  Guardas: "Rilonde cargo guards, simple armor, tired workers",
  Lobos: "large dark wolves, amber/violet eyes, not Nightwolf",
  Sacerdote: "elderly priest, green-gray robes, wet hands from font",
  Nikov: "warrior companion, swords visible",
  Rita: "bronze-toothed rebel leader, distinctive smile",
  Borin: "dwarf mechanic companion",
  Trash: "small construct companion",
  Ivan: "city guard captain, stern armor, official coat",
  Jorge: "frightened child, humble clothes, dusty face",
  Leticia: "noble servant, formal dress, anxious posture",
  Baronesa: "cold elven noblewoman, elegant dark dress",
  Megard: "compact strong blonde Germanic warrior woman, green/brown mercenary clothes",
  Emmergard: "blonde warrior woman, NOT red hair, mercenary gear",
  Figurante: "generic medieval townsfolk silhouette",
}

function inferPose(cena, who) {
  const c = (cena || "").toLowerCase()
  if (/tackle|corre|avanca|lunge|impacto/.test(c)) return "dynamic lunge or impact pose"
  if (/ajoelh|kneel/.test(c)) return "kneeling, investigating"
  if (/flutua|float/.test(c)) return "floating in smoke, arms loose"
  if (/segura|grapple|pin/.test(c)) return "grappling hold, strained arms"
  if (/corre|foge|flee/.test(c)) return "running, urgent stride"
  if (/sentad|mesa|taverna/.test(c)) return "seated at table, leaning in"
  if (/observa|watch|vigia/.test(c)) return "crouched or standing watch, alert"
  if (/close|close-up/.test(c)) return "waist-up, facing camera angle"
  if (/capa|splash|title/.test(c)) return "establishing shot, no characters or title only"
  return "standing, weight on one foot, readable silhouette"
}

function inferExpr(cena, humor) {
  if (humor) return "exaggerated comic reaction, wide eyes or grimace"
  if (/medo|terror|assust/.test(cena || "")) return "fear, mouth open"
  if (/sorriso|smile|pervers/.test(cena || "")) return "wicked or forced smile"
  if (/vergonha|ashamed|constrang/.test(cena || "")) return "embarrassed, looking away"
  return "focused, readable emotion"
}

function parsePageSection(section) {
  const headerMatch = section.match(/^##\s+(Capa|P[aá]gina)\s*(\d{1,3})?\s*[-—]?\s*([^\n]*)/i)
  if (!headerMatch) return null
  const isCapa = /^capa/i.test(headerMatch[1])
  const num = isCapa ? "000" : String(parseInt(headerMatch[2], 10)).padStart(3, "0")
  const title = (headerMatch[3] || (isCapa ? "capa" : "cena")).trim()
  const body = section.slice(headerMatch[0].length)
  const paineis = parseInt(body.match(/Pain[eé]is:\s*(\d+)/i)?.[1] || "1", 10)
  const cena = body.match(/Cena:\s*([^\n]+)/)?.[1]?.trim() || ""
  const falas = body.match(/Falas:\s*([^\n]+)/)?.[1]?.trim() || ""
  const refs = body.match(/Refs:\s*([^\n]+)/)?.[1]?.trim() || ""
  const humor = /humor/i.test(body)
  if (!cena && !isCapa) return null
  return { num, title, paineis, cena, falas, refs, humor }
}

function parseCap05Pages(text) {
  const pages = []
  const sections = text.split(/\n(?=##\s+(?:Capa|P[aá]gina)\b)/i)
  for (const section of sections) {
    const page = parsePageSection(section)
    if (page) pages.push(page)
  }
  return pages
}

function parseTablePages(text) {
  const pages = []
  const re = /## P[aá]gina (\d{1,3})[^\n]*\n([\s\S]*?)(?=\n## P[aá]gina |\n---\n## |$)/gi
  let m
  while ((m = re.exec(text))) {
    const num = String(parseInt(m[1], 10)).padStart(3, "0")
    const section = m[2]
    const rows = []
    for (const line of section.split("\n")) {
      if (!/^\|\s*\d{2}-[a-z]\s*\|/.test(line)) continue
      const parts = line.split("|").map((s) => s.trim())
      if (parts.length < 4) continue
      const id = parts[1]
      if (!/^\d{2}-[a-z]$/.test(id)) continue
      rows.push({ id, cena: parts[2], fala: parts.slice(3, -1).join(" | ").trim() })
    }
    const refsMatch = section.match(/\*\*Refs:\*\*\s*([^\n]+)/i)
    pages.push({
      num,
      title: "",
      paineis: rows.length || 1,
      rows,
      refs: refsMatch?.[1] || "",
      humor: /humor/i.test(section),
      cena: rows.map((x) => x.cena).join("; "),
      falas: "",
    })
  }
  return pages
}

function charsFromRefs(refs, cena) {
  const names = []
  const r = (refs + " " + cena).toLowerCase()
  for (const key of Object.keys(LOCKED)) {
    if (key === "Figurante") continue
    if (r.includes(key.toLowerCase()) || r.includes(key.split(" ")[0].toLowerCase())) {
      names.push(key)
    }
  }
  if (/\bgrupo\b|\bpcs\b|\bparty\b/.test(r)) {
    for (const k of ["Tony", "Dustin", "Nightwolf", "Kaelion", "Bartrock", "Borin"]) {
      if (!names.includes(k)) names.push(k)
    }
  }
  if (names.length === 0) names.push("Figurante")
  return [...new Set(names)]
}

function sanitizeOldPrompt(body) {
  if (!body) return null
  if ((body.match(/Generate an image/gi) || []).length > 0) return null
  if (/Avoid:\s*photorealistic/i.test(body)) return null
  const t = body.replace(/^Use refs[^\n]*\n?/i, "").trim()
  return t.length > 15 ? t : null
}

function poseTableForPanel(panelId, cena, refs, humor, chars) {
  const lines = [
    `#### Painel ${panelId}`,
    "",
    "| Personagem | LOCKED | Pose | Expressão | Mãos/olhar | Ref |",
    "|------------|--------|------|-----------|------------|-----|",
  ]
  for (const who of chars) {
    const locked = LOCKED[who] || LOCKED.Figurante
    lines.push(
      `| ${who} | ${locked} | ${inferPose(cena, who)} | ${inferExpr(cena, humor)} | toward action center | \`${who.toLowerCase().replace(/\s/g, "-")}-eq-inicial\` |`,
    )
  }
  return lines.join("\n")
}

function buildPanelsV2(capSlug, pages, frontmatter, intro) {
  const out = [frontmatter, "", intro, ""]
  for (const p of pages) {
    out.push(`## Página ${p.num} — ${p.title || "cena"}`)
    out.push("")
    out.push(`- **Arquivo:** \`${p.num}.webp\``)
    out.push(`- **Painéis:** ${p.paineis}`)
    if (p.falas) out.push(`- **Falas:** ${p.falas}`)
    if (p.refs) out.push(`- **Refs:** ${p.refs}`)
    out.push("")
    if (p.rows?.length) {
      for (const row of p.rows) {
        const chars = charsFromRefs(p.refs, row.cena)
        out.push(poseTableForPanel(row.id, row.cena, p.refs, p.humor, chars))
        out.push(`- **Cena:** ${row.cena}`)
        if (row.fala && row.fala !== "—") out.push(`- **Fala:** ${row.fala}`)
        out.push("")
      }
    } else {
      const letters = "abcdefgh".slice(0, p.paineis)
      for (let i = 0; i < p.paineis; i++) {
        const pid = `${p.num}-${letters[i]}`
        const chars = charsFromRefs(p.refs, p.cena)
        out.push(poseTableForPanel(pid, p.cena, p.refs, p.humor, chars))
        out.push(`- **Cena:** ${p.cena}`)
        out.push("")
      }
    }
  }
  return out.join("\n")
}

function buildPromptPage(p, promptBody) {
  const lines = [`### ${p.num}`, "", "```text"]
  lines.push(V2_PREFIX)
  lines.push("")
  if (promptBody) {
    lines.push(promptBody.replace(/^Use refs[^\n]*\n?/i, "").trim())
  } else {
    lines.push(
      `--- PAGE ${p.num} ---`,
      `Layout: ${p.paineis} panel(s). ${p.cena}`,
      `Panel A — CHARACTERS & POSES: ${charsFromRefs(p.refs, p.cena)
        .map((c) => `${c} (${inferPose(p.cena, c)}, ${inferExpr(p.cena, p.humor)})`)
        .join("; ")}.`,
    )
    if (p.falas) lines.push(`Bubbles: see dialogues.md (${p.falas}).`)
  }
  lines.push("")
  lines.push(V2_AVOID)
  lines.push("```")
  return lines.join("\n")
}

function extractPromptSections(text) {
  const map = new Map()
  const re = /### (\d{3})\s*\n+```text\n([\s\S]*?)```/g
  let m
  while ((m = re.exec(text))) map.set(m[1], m[2].trim())
  return map
}

function styleMd(capNum, notes = "") {
  return `---
title: "Style - Cap. ${capNum}"
type: comic
tags:
  - rpg/borel
  - tipo/comic
  - comic/cap-${String(capNum).padStart(2, "0")}
status: docs-ready
---

# Style - Cap. ${capNum}

## Base

Usar **Style Bible v2** — [[../../03_Templates/Style_V2_Snippet|Style_V2_Snippet.md]] · [[../../00_Style_Bible#Style Bible v2 — Borel Funny Webcomic (padrão global jun/2026)|00_Style_Bible.md]]

Prefixo e Avoid: copiar de \`Style_V2_Snippet.md\` (não usar graphic novel escuro).

## Refs a anexar (ordem)

1. \`Referencias/style/cap-01-estilo-aprovado-dustin-traidor.png\`
2. \`Referencias/style/cap-01-estilo-aprovado-gola.png\`
3. \`Referencias/style/cap-v3-humor-piloto.png\` (quando aprovado)
4. Refs de personagem listadas em \`panels.md\` / \`refs/README.md\`

## Direção

- Tom **bem engraçado**: reações exageradas, timing de comédia física, sem chibi.
- Luz quente e legível; evitar sombras chapadas de graphic novel.
- Poses explícitas em \`panels.md\` — espelhar em \`prompt-all-pages.md\`.
${notes ? `\n${notes}\n` : ""}

## Arte atual

\`images-pending-regen\` — WebPs publicados usam estilo antigo até nova geração com v2.
`
}

function productionPatch(text) {
  let t = text || ""
  if (!t.includes("docs-ready")) {
    t = t.replace(/status:\s*ready[^\n]*/i, "status: docs-ready")
    if (!/## Documentação v2/.test(t)) {
      t += `\n## Documentação v2 (jun/2026)\n\n- [x] \`panels.md\` com poses por painel\n- [x] \`prompt-all-pages.md\` prefixo v2 + CHARACTERS & POSES\n- [x] \`style.md\` v2\n- [ ] Regenerar arte (\`images-pending-regen\`)\n`
    }
  }
  return t
}

function reviewPatch(capNum, text) {
  const gate = `\n## Gate documentação v2 (2026-06-05)\n\nStatus: \`docs-ready\`. Poses e prompts v2 completos. Arte antiga permanece até regeneração capítulo a capítulo.\n`
  if (text && !text.includes("docs-ready")) return text + gate
  if (!text)
    return `---\ntitle: "Review - Cap. ${capNum}"\nstatus: docs-ready\n---\n\n# Review - Cap. ${capNum}\n${gate}`
  return text
}

function processChapter(dir) {
  const panelsPath = path.join(dir, "panels.md")
  if (!fs.existsSync(panelsPath)) return { skip: true, reason: "no panels.md" }
  const capMatch = path.basename(dir).match(/cap-(\d{2})/)
  if (!capMatch) return { skip: true }
  const capNum = parseInt(capMatch[1], 10)
  const panelsRaw = fs.readFileSync(panelsPath, "utf8")
  const fm = panelsRaw.match(/^---[\s\S]*?---/)?.[0] || "---\nstatus: docs-ready\n---"
  const newFm = fm
    .replace(/status:\s*[^\n]+/i, "status: docs-ready")
    .replace(/preimage-approved/i, "docs-ready")

  let pages = parseCap05Pages(panelsRaw)
  if (pages.length === 0) pages = parseTablePages(panelsRaw)
  if (pages.length === 0) return { skip: true, reason: "no pages parsed" }

  const intro =
    capNum === 5
      ? `# Painéis — Cap. 5 (v2 humor + poses)\n\n> Cada página = \`pages/NNN.webp\`. Poses obrigatórias antes de regenerar arte. Piloto humor: **pág. 004**.\n`
      : `# Painéis — Cap. ${capNum} (v2 humor + poses)\n\n> Poses espelhadas em \`prompt-all-pages.md\`. Arte: \`images-pending-regen\`.\n`

  const promptPath = path.join(dir, "prompt-all-pages.md")
  const oldPrompts = fs.existsSync(promptPath) ? extractPromptSections(fs.readFileSync(promptPath, "utf8")) : new Map()

  fs.writeFileSync(panelsPath, buildPanelsV2(path.basename(dir), pages, newFm, intro), "utf8")

  const promptParts = [
    `---\ntitle: "Prompt All Pages - Cap. ${capNum}"\nstatus: docs-ready\n---\n\n# Prompt All Pages - Cap. ${capNum} (v2)\n\n## Antes de colar\n\n1. Nova conversa ChatGPT.\n2. Anexar refs de estilo (ver \`style.md\`) + refs de personagem do capítulo.\n3. Uma conversa por capítulo.\n\n## Prefixo v2\n\n\`\`\`text\n${V2_PREFIX}\n\`\`\`\n\n## Avoid v2\n\n\`\`\`text\n${V2_AVOID}\n\`\`\`\n\n## Páginas\n`,
  ]
  for (const p of pages) {
    let body = sanitizeOldPrompt(oldPrompts.get(p.num))
    if (body && !body.includes("CHARACTERS & POSES")) {
      body = `--- PAGE ${p.num} ---\n${body}\nPanel A — CHARACTERS & POSES: ${charsFromRefs(p.refs, p.cena)
        .map((c) => `${c} (${inferPose(p.cena, c)}, ${inferExpr(p.cena, p.humor)})`)
        .join("; ")}.`
    }
    promptParts.push(buildPromptPage(p, body))
    promptParts.push("")
  }
  fs.writeFileSync(promptPath, promptParts.join("\n"), "utf8")
  fs.writeFileSync(path.join(dir, "style.md"), styleMd(capNum), "utf8")

  const prodPath = path.join(dir, "production.md")
  if (fs.existsSync(prodPath)) {
    fs.writeFileSync(prodPath, productionPatch(fs.readFileSync(prodPath, "utf8")), "utf8")
  }

  const revPath = path.join(dir, "review.md")
  fs.writeFileSync(revPath, reviewPatch(capNum, fs.existsSync(revPath) ? fs.readFileSync(revPath, "utf8") : ""), "utf8")

  return { ok: true, cap: capNum, pages: pages.length }
}

// Cap 5 page 004 — hand-crafted pilot (overwrite panels section)
function patchCap5Pilot() {
  const dir = path.join(chaptersDir, "cap-05-entre-rastros-risadas-e-revelacoes")
  let panels = fs.readFileSync(path.join(dir, "panels.md"), "utf8")
  const pilot = `## Página 004 — O senhorzinho

- **Arquivo:** \`004.webp\`
- **Painéis:** 4
- **Falas:** D010, D011, D012
- **Refs:** Tony, senhorzinho, Kaelion, Dustin
- **Tags:** canon, humor — **piloto bake-off v3 humor**

#### Painel 004-a

| Personagem | LOCKED | Pose | Expressão | Mãos/olhar | Ref |
|------------|--------|------|-----------|------------|-----|
| Tony Tigger | silver plate, d20 emblem, white/red cloak | wide stance, thought bubble pose, coiled to sprint | manic excited grin, eyebrows up | fists pumped, eyes on limping old man | \`tony-eq-inicial\` |
| Senhorzinho | thin elder, wooden cane, brown coat | limping away from camera, hunched | innocent tired face | cane tapping cobblestone | figurante |

- **Cena:** Praça noturna com lanternas; Tony vê idoso mancando e decide atacar.

#### Painel 004-b

| Personagem | LOCKED | Pose | Expressão | Mãos/olhar | Ref |
|------------|--------|------|-----------|------------|-----|
| Tony Tigger | silver plate, d20 emblem | mid-air lunge tackle, horizontal speed lines | ecstatic battle-face, mouth open | arms wrapped around old man torso | \`tony-eq-inicial\` |
| Senhorzinho | thin elder, cane | lifted off ground, limbs flailing | terror, mouth wide "Ai meu Deus!" | cane flying sideways | figurante |

- **Cena:** Impacto cômico sem sangue; exagero slapstick.

#### Painel 004-c

| Personagem | LOCKED | Pose | Expressão | Mãos/olhar | Ref |
|------------|--------|------|-----------|------------|-----|
| Tony Tigger | silver plate | pinning old man on cobblestones, one knee on chest | proud smile, oblivious | one hand on shoulder | \`tony-eq-inicial\` |
| Senhorzinho | elder | flat on back, dazed stars icon | overwhelmed shock | arms out | figurante |
| Kaelion | dark lamellar, two katanas | running into frame from right | horrified | reaching toward Tony | \`kaelion-eq-inicial\` |
| Dustin | dark leather, bow | running behind Kaelion | appalled | mouth open | \`dustin-eq-inicial\` |

- **Cena:** Grupo percebe o erro.

#### Painel 004-d

| Personagem | LOCKED | Pose | Expressão | Mãos/olhar | Ref |
|------------|--------|------|-----------|------------|-----|
| Kaelion | dark lamellar | grabbing Tony's pauldron, pulling back | angry scowl, yelling | grip tight on armor | \`kaelion-eq-inicial\` |
| Tony Tigger | silver plate | still kneeling on old man, looking up | sheepish sudden realization | one hand raised in surrender | \`tony-eq-inicial\` |
| Senhorzinho | elder | on ground between them | whimpering | hands up weakly | figurante |

- **Cena:** Kaelion manda soltar; balão "Solte ele, menino!"

`
  const rePilot = /## P[aá]gina 004[\s\S]*?(?=\n## P[aá]gina 005)/i
  if (rePilot.test(panels)) {
    panels = panels.replace(rePilot, pilot + "\n")
  }
  fs.writeFileSync(path.join(dir, "panels.md"), panels, "utf8")

  let prompts = fs.readFileSync(path.join(dir, "prompt-all-pages.md"), "utf8")
  const p004 = `### 004

\`\`\`text
${V2_PREFIX}

--- PAGE 004 ---
Layout: 2×2 grid, night plaza, warm amber lanterns, readable cel-shade (NOT dark graphic novel).
Panel A — CHARACTERS & POSES: Tony Tigger (wide stance, manic grin, coiled to sprint, eyes on old man); Old man (limping with cane, innocent tired face).
Panel B — CHARACTERS & POSES: Tony (mid-air lunge tackle, ecstatic face, arms wrapped); Old man (lifted off ground, terror, cane flying).
Panel C — CHARACTERS & POSES: Tony (pinning old man on cobbles, proud oblivious smile); Old man (dazed stars); Kaelion (running in, horrified); Dustin (running behind, appalled).
Panel D — CHARACTERS & POSES: Kaelion (grabbing Tony's pauldron, angry yell); Tony (sheepish, hand up); Old man (whimpering on ground).
Bubbles: Tony thought "Eu corro e dou um tackle."; Old man "Ai, meu Deus!"; Kaelion "Solte ele, menino!"
Slapstick physical comedy, exaggerated expressions, no gore.

${V2_AVOID}
\`\`\`
`
  prompts = prompts.replace(/### 004[\s\S]*?(?=### 005|$)/, p004 + "\n")
  fs.writeFileSync(path.join(dir, "prompt-all-pages.md"), prompts, "utf8")

  // Bake-off prompt file
  fs.writeFileSync(
    path.join(dir, "prompt-pilot-004-humor.md"),
    `---\ntitle: Bake-off Cap. 5 pág. 004 — humor v3\ntype: comic\n---\n\n# Piloto humor v3\n\nAnexar: dustin-traidor, gola, tony, kaelion, dustin refs.\n\n${p004}\n\nSalvar resultado aprovado em \`Referencias/style/cap-v3-humor-piloto.png\`.\n`,
    "utf8",
  )
}

function processCap00() {
  const dir = path.join(chaptersDir, "cap-00-elenco")
  const script = fs.readFileSync(path.join(dir, "script.md"), "utf8")
  const pages = []
  const re = /\|\s*(\d{2})\s*\|\s*([^|]+)\|/g
  let m
  while ((m = re.exec(script))) {
    pages.push({
      num: m[1].padStart(3, "0"),
      title: m[2].trim(),
      paineis: 1,
      cena: `Portrait splash: ${m[2].trim()}`,
      refs: m[2].trim(),
      humor: false,
      falas: "",
    })
  }
  if (pages.length === 0) {
    for (let i = 1; i <= 10; i++) {
      pages.push({
        num: String(i).padStart(3, "0"),
        title: `Retrato ${i}`,
        paineis: 1,
        cena: "waist-up character portrait, neutral gray background",
        refs: "PC cast",
        humor: true,
        falas: "",
      })
    }
  }
  const fm = `---\ntitle: "Panels - Cap. 0 Elenco"\nstatus: docs-ready\ntarget_pages: 10\n---`
  fs.writeFileSync(
    path.join(dir, "panels.md"),
    buildPanelsV2("cap-00", pages, fm, "# Painéis — Elenco (retratos v2)\n"),
    "utf8",
  )
  const promptParts = [
    `---\ntitle: Prompt Cap. 0\nstatus: docs-ready\n---\n\n# Prompt — Elenco (10 retratos v2)\n\n\`\`\`text\n${V2_PREFIX}\n\`\`\`\n\n`,
  ]
  for (const p of pages) {
    promptParts.push(
      buildPromptPage(
        p,
        `--- PAGE ${p.num} ---\nWaist-up portrait, neutral gray background, exaggerated friendly expression.\nPanel A — CHARACTERS & POSES: ${p.refs} (facing camera, slight heroic or comic pose, clear silhouette).\nNo speech bubbles.`,
      ),
    )
  }
  fs.writeFileSync(path.join(dir, "prompt-all-pages.md"), promptParts.join("\n"), "utf8")
  fs.writeFileSync(path.join(dir, "style.md"), styleMd(0, "- Retratos: fundo cinza, sem balão, expressão simpática exagerada."), "utf8")
}

function processCap01() {
  const dir = path.join(chaptersDir, "cap-01-negociacoes-frustradas")
  if (!fs.existsSync(path.join(dir, "panels.md"))) return
  processChapter(dir)
  // Link tirinha to v2
  const stylePath = path.join(dir, "style-tirinha.md")
  if (fs.existsSync(stylePath)) {
    let t = fs.readFileSync(stylePath, "utf8")
    if (!t.includes("v2")) {
      t =
        `\n> **Atualização jun/2026:** alinhar prefixo ao [[../../03_Templates/Style_V2_Snippet|Style v2]] (humor exagerado). Poses em [[panels|panels.md]].\n\n` +
        t
      fs.writeFileSync(stylePath, t, "utf8")
    }
  }
}

const args = process.argv.slice(2)
const onlyCapRaw = args.find((a) => a.startsWith("--cap="))?.split("=")[1]
const onlyCap = onlyCapRaw ? String(parseInt(onlyCapRaw, 10)).padStart(2, "0") : null
const all = args.includes("--all") || !onlyCap

const dirs = fs
  .readdirSync(chaptersDir)
  .filter((d) => d.startsWith("cap-"))
  .sort()
  .map((d) => path.join(chaptersDir, d))

const results = []
for (const dir of dirs) {
  const n = path.basename(dir).match(/cap-(\d{2})/)?.[1]
  if (onlyCap && n !== onlyCap.padStart(2, "0")) continue
  if (n === "00") {
    processCap00()
    results.push({ cap: 0, ok: true })
    continue
  }
  if (n === "01") {
    processCap01()
    results.push({ cap: 1, ok: true })
    continue
  }
  results.push({ ...processChapter(dir), dir: path.basename(dir) })
}

if (!onlyCap || onlyCap === "05") patchCap5Pilot()

console.log(JSON.stringify(results, null, 2))
