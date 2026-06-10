/**
 * Rebuild dialogues.md for caps 16-25 from Sessoes quotes + PC transcriptions.
 * Usage: node scripts/rebuild-curated-dialogues.mjs --cap=16-25
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"
import { execSync } from "node:child_process"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const borel = path.join(root, "content/Borel")
const sessoesDir = path.join(borel, "Sessoes")
const transDir = path.join(borel, "Transcricoes")
const chaptersDir = path.join(borel, "Comic/02_Chapters")

const SPEAKER_MAP = {
  FS_SIMOES: "Tony",
  NIGHTWOLF: "Nightwolf",
  RAPHAELVICARONE: "Dustin",
  MATHEUSBARTCOSTA: "Bartrock",
  HUGONORTH: "Mestre",
  BORIN: "Borin",
  KAELION: "Kaelion",
  KENYON: "Kaelion",
}

function mapSpeaker(raw) {
  const s = raw.trim().toUpperCase()
  for (const [k, v] of Object.entries(SPEAKER_MAP)) {
    if (s.includes(k)) return v
  }
  return null
}

function findCapDir(n) {
  const prefix = `cap-${String(n).padStart(2, "0")}-`
  const name = fs.readdirSync(chaptersDir).find((d) => d.startsWith(prefix))
  return name ? path.join(chaptersDir, name) : null
}

function findSessoesFiles(n) {
  const re = new RegExp(`^Capitulo\\s+${n}[\\s\\-–]`, "i")
  const rePart = new RegExp(`^Capitulo\\s+${n}[\\s\\-–].*Parte`, "i")
  const bloco = new RegExp(`^sessao\\s*${n}_bloco`, "i")
  return fs
    .readdirSync(sessoesDir)
    .filter((f) => f.endsWith(".md") && (re.test(f) || rePart.test(f) || bloco.test(f)))
    .map((f) => path.join(sessoesDir, f))
}

function findTranscriptionFiles(n) {
  return fs
    .readdirSync(transDir)
    .filter((f) => {
      if (f === `sessao ${n}.txt`) return true
      if (new RegExp(`^sessao ${n} -`).test(f)) return true
      if (new RegExp(`^sessao ${n}_bloco`).test(f)) return true
      if (new RegExp(`^sessao${n}_bloco`).test(f)) return true
      return false
    })
    .map((f) => path.join(transDir, f))
}

function extractSessoesQuotes(files) {
  const out = []
  for (const f of files) {
    const md = fs.readFileSync(f, "utf8")
    const block = md.match(/## Citação da Noite\s*\n([\s\S]*?)(?=\n## |$)/i)?.[1] || ""
    const citeLines = block.split("\n").filter((l) => l.includes('"'))
    for (const line of citeLines) {
      const trail = line.match(/"([^"]{6,200})"\s*[-–—]\s*([^*\n]+)/)
      if (trail) {
        const quote = trail[1].trim()
        let speaker = trail[2].replace(/[,.].*$/, "").trim()
        if (/nightwolf/i.test(speaker)) speaker = "Nightwolf"
        else if (/bartrock|bartrok/i.test(speaker)) speaker = "Bartrock"
        else if (/tony/i.test(speaker)) speaker = "Tony"
        else if (/borin/i.test(speaker)) speaker = "Borin"
        else if (/dustin/i.test(speaker)) speaker = "Dustin"
        else if (/celeste/i.test(speaker)) speaker = "Celeste"
        else if (/entidade/i.test(speaker)) speaker = "Entidade"
        else if (/alberto/i.test(speaker)) speaker = "Alberto"
        else if (/rita/i.test(speaker)) speaker = "Rita"
        out.push({ speaker, quote, file: f, status: "canon" })
        continue
      }
      const inline = line.match(/\*"([^"]{8,200})"\*/)
      if (inline) out.push({ speaker: "Narrador", quote: inline[1], file: f, status: "condensed" })
    }
    const funny = md.match(/## Momentos Engraçados\s*\n([\s\S]*?)(?=\n## |$)/i)?.[1] || ""
    for (const line of funny.split("\n")) {
      const m = line.match(/"([^"]{8,120})"/)
      if (m) out.push({ speaker: "Narrador", quote: m[1], file: f, status: "condensed" })
    }
  }
  return out
}

function extractPcTranscriptions(files) {
  const out = []
  const re = /\[([^\]]+)\]\s*-\s*(?:\d+-)?([A-Za-z0-9_]+)\s*-\s*(.+)/g
  const skip = /discord|jackie|jockie|legenda adriana|site não|bloco do|peraí|música|mapa|dados|aplicativo|rolagem|metajogo/i
  for (const f of files) {
    const text = fs.readFileSync(f, "utf8")
    let m
    while ((m = re.exec(text))) {
      const speaker = mapSpeaker(m[2])
      if (!speaker || speaker === "Mestre") continue
      let quote = m[3].trim()
      if (quote.length < 6 || quote.length > 160) continue
      if (skip.test(quote)) continue
      out.push({
        speaker,
        quote,
        file: f,
        ts: m[1],
        status: quote.length > 90 ? "condensed" : "canon",
      })
    }
  }
  return out
}

function dedupe(lines) {
  const seen = new Set()
  const out = []
  for (const l of lines) {
    const k = l.quote.slice(0, 35).toLowerCase()
    if (seen.has(k)) continue
    seen.add(k)
    out.push(l)
  }
  return out
}

function buildMd(capNum, lines, transFiles, sessoesFiles) {
  const rows = lines.map((d, i) => {
    const id = `D${String(i + 1).padStart(3, "0")}`
    const fonte = d.ts
      ? `${path.basename(d.file)} @ ${d.ts}`
      : `${path.basename(d.file)}`
    const note = d.status === "canon" ? fonte : `${fonte}, ${d.status}`
    return `| ${id} | ${d.speaker} | "${d.quote.replace(/"/g, "'")}" | ${note} | ${d.status} |`
  })
  return `---
title: "Dialogues - Cap. ${capNum}"
type: comic-dialogues
status: preimage-approved
---

# Dialogues - Cap. ${capNum}

Falas curtas para balões. Fontes: \`Sessoes/\` (citações e momentos-chave) + \`Transcricoes/\` (falas de PCs).

| ID | Personagem | Fala | Fonte | Status |
|----|------------|------|-------|--------|
${rows.join("\n")}

## Notas de revisão ortográfica

- Acentuação revisada em ${new Date().toISOString().slice(0, 10)}.
- Falas de Mestre/narrador longas foram excluídas; usar caixas de narração no painel quando necessário.
- Arquivos Sessoes: ${sessoesFiles.map((f) => path.basename(f)).join(", ")}
- Arquivos Transcricoes: ${transFiles.map((f) => path.basename(f)).join(", ")}
`
}

function rebuildCap(n) {
  const dir = findCapDir(n)
  if (!dir) return { n, skip: "no dir" }
  const sessoes = findSessoesFiles(n)
  const trans = findTranscriptionFiles(n)
  let lines = [...extractSessoesQuotes(sessoes), ...extractPcTranscriptions(trans)]
  lines = dedupe(lines).slice(0, 55)
  if (lines.length < 8) return { n, skip: "too few lines" }
  const md = buildMd(n, lines, trans, sessoes)
  fs.writeFileSync(path.join(dir, "dialogues.md"), md, "utf8")
  return { n, lines: lines.length }
}

const arg = process.argv.find((a) => a.startsWith("--cap="))
const [s, e] = (arg?.slice(6) || "16-25").split("-").map(Number)
const end = e || s
const results = []
for (let n = s; n <= end; n++) results.push(rebuildCap(n))

execSync("node scripts/fix-comic-acentuacao.mjs --cap=" + `${s}-${end}`, { cwd: root, stdio: "inherit" })
console.log(JSON.stringify(results, null, 2))
