import fs from "node:fs/promises"
import path from "node:path"
import { fileURLToPath } from "node:url"
import sharp from "sharp"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const refsDir = path.join(root, "content", "Borel", "Referencias", "pcs")
const outDir = path.join(root, "quartz", "static", "comic", "cap-00-elenco")

const W = 1400
const H = 2200
const PORTRAIT_TOP = 100
const PORTRAIT_MAX_H = 1020
const TEXT_TOP = 1180

/** @type {Array<Record<string, unknown>>} */
const pages = [
  {
    type: "title",
    title: "O Legado de Rilonde",
    subtitle: "Elenco da mesa",
    footer: "Quadrinho da campanha Borel",
  },
  {
    type: "character",
    name: "Tony Tigger",
    tag: "Humano · guerreiro / paladino",
    portrait: "tony-eq-inicial.png",
    body: [
      "Líder protetor do grupo: voz firme em combate",
      "e fora dele. O herói clássico que coloca o",
      "time à frente de si mesmo.",
    ],
    player: "Jogador: FS_SIMOES",
  },
  {
    type: "character",
    name: "Nightwolf",
    tag: "Elfo das sombras · ranger",
    portrait: "nightwolf-eq-inicial.png",
    body: [
      "Arqueiro drow de olhar vermelho e poucas palavras.",
      "Veterano da primeira noite em Rilonde — estava",
      "na taverna quando o caos começou.",
    ],
    player: "Jogador: NIGHTWOLFBIELZOVSKY",
  },
  {
    type: "character",
    name: "Dustin",
    tag: "Humano · ranger / ladino tático",
    portrait: "dustin-eq-inicial.png",
    body: [
      "Negociador ágil: lê a sala, cobra o que é devido",
      "e desembainha quando a conversa falha. Parceiro",
      "de Nightwolf nas missões iniciais.",
    ],
    player: "Jogador: RAPHAELVICARONE",
  },
  {
    type: "character",
    name: "Kaelion",
    tag: "Elfo · guerreiro e mago-artífice",
    portrait: "kaelion-eq-inicial.png",
    body: [
      "Autodenomina-se “herói do povo”. Idealista",
      "armado, porta a pedra de comunicação e um",
      "senso de justiça que pode dividir o grupo.",
    ],
    player: "Jogador: GUSTAVONIKOV",
  },
  {
    type: "character",
    name: "Lord Bart",
    tag: "Elfo · mago aristocrata",
    portrait: "bartrock-noble-eq-inicial.png",
    body: [
      "Bartrock antes da ressurreição: mago elfo nobre,",
      "arrogante e perigoso com palavras e feitiços.",
      "No Cap. 1 ainda é Lord Bart — não ataca primeiro.",
    ],
    player: "Jogador: Bart (Bartrock)",
  },
  {
    type: "character",
    name: "Borin & Trash",
    tag: "Anão inventor · constructo companheiro",
    portrait: "borin-trash-eq-inicial.png",
    body: [
      "Borin: anão artífice, barba em tranças, engenhoca",
      "e revolver no cinto. Trash: guaxinim mecânico",
      "articulado — parceiro inseparável na mesa.",
    ],
    player: "Jogador: Borin",
  },
  {
    type: "character",
    name: "Groih",
    tag: "Humano · guerreiro",
    portrait: "groih-eq-inicial.png",
    body: [
      "Guerreiro de espada grande e presença pesada.",
      "Carrega um passado sombrio: às vezes sombras",
      "agem por ele sem que ele queira.",
    ],
    player: "Jogador: HIGORVS1",
  },
  {
    type: "character",
    name: "Orestan",
    tag: "Humano · guerreiro-clérigo",
    portrait: "orestan-eq-inicial.png",
    body: [
      "Fé e alabarda contra o impossível. Resiste a",
      "corrupção necromântica e traz ritual e coragem",
      "quando o grupo mergulha nas profundezas.",
    ],
    player: "Jogador: LUISFELIPEPJVAZQUEZ",
  },
  {
    type: "end",
    title: "Capítulo 1",
    subtitle: "Negociações Frustradas",
    footer: "A história começa na taverna…",
  },
]

function escapeXml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
}

function textSvg(lines, opts = {}) {
  const { centerY = H / 2, titleSize = 56, subSize = 34, footSize = 26 } = opts
  const title = lines.title ? escapeXml(lines.title) : ""
  const sub = lines.subtitle ? escapeXml(lines.subtitle) : ""
  const foot = lines.footer ? escapeXml(lines.footer) : ""
  let y = centerY - (sub ? 40 : 0)
  const parts = []
  if (title) {
    parts.push(
      `<text x="700" y="${y}" text-anchor="middle" class="gold" font-size="${titleSize}">${title}</text>`,
    )
    y += titleSize + 16
  }
  if (sub) {
    parts.push(
      `<text x="700" y="${y}" text-anchor="middle" class="muted" font-size="${subSize}">${sub}</text>`,
    )
    y += subSize + 24
  }
  if (foot) {
    parts.push(
      `<text x="700" y="${H - 120}" text-anchor="middle" class="muted" font-size="${footSize}">${foot}</text>`,
    )
  }
  return svgWrap(parts.join("\n"))
}

function svgWrap(inner) {
  return Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <style>
      .gold { fill: #c9a961; font-family: Georgia, 'Times New Roman', serif; font-weight: 600; }
      .muted { fill: #b8b8b8; font-family: 'Segoe UI', Arial, sans-serif; }
      .body { fill: #d8d8d8; font-family: 'Segoe UI', Arial, sans-serif; }
      .player { fill: #9a9a9a; font-family: 'Segoe UI', Arial, sans-serif; font-style: italic; }
    </style>
    ${inner}
  </svg>`)
}

function characterBioSvg(page) {
  const margin = 100
  const x = margin
  const width = W - margin * 2
  let y = TEXT_TOP + 36
  const parts = [
    `<line x1="${margin}" y1="${TEXT_TOP}" x2="${W - margin}" y2="${TEXT_TOP}" stroke="#c9a961" stroke-width="1" opacity="0.5"/>`,
    `<text x="${W / 2}" y="${y}" text-anchor="middle" class="gold" font-size="46">${escapeXml(page.name)}</text>`,
  ]
  y += 52
  parts.push(
    `<text x="${W / 2}" y="${y}" text-anchor="middle" class="muted" font-size="28">${escapeXml(page.tag)}</text>`,
  )
  y += 48
  const lineHeight = 36
  for (const line of page.body) {
    parts.push(
      `<text x="${x}" y="${y}" class="body" font-size="26">${escapeXml(line)}</text>`,
    )
    y += lineHeight
  }
  y += 20
  parts.push(
    `<text x="${W / 2}" y="${y + 8}" text-anchor="middle" class="player" font-size="22">${escapeXml(page.player)}</text>`,
  )
  return svgWrap(parts.join("\n"))
}

async function darkBackground() {
  const svg = Buffer.from(`<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="g" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#1a1a1a"/>
        <stop offset="100%" stop-color="#0a0a0a"/>
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#g)"/>
    <rect x="60" y="60" width="${W - 120}" height="${H - 120}" fill="none" stroke="#c9a961" stroke-width="2" opacity="0.35"/>
  </svg>`)
  return sharp(svg).png().toBuffer()
}

async function renderTitlePage(page, outPath) {
  const bg = await darkBackground()
  const overlay = textSvg(page, { centerY: H / 2 - 40, titleSize: 64, subSize: 38 })
  await sharp(bg)
    .composite([{ input: overlay, top: 0, left: 0 }])
    .webp({ quality: 88 })
    .toFile(outPath)
}

async function renderCharacterPage(page, outPath) {
  const portraitPath = path.join(refsDir, page.portrait)
  const bg = await darkBackground()
  const portraitBuf = await sharp(portraitPath)
    .resize(W - 140, PORTRAIT_MAX_H, { fit: "inside" })
    .toBuffer()
  const meta = await sharp(portraitBuf).metadata()
  const left = Math.floor((W - meta.width) / 2)
  const top = PORTRAIT_TOP
  const bio = characterBioSvg(page)
  await sharp(bg)
    .composite([
      { input: portraitBuf, top, left },
      { input: bio, top: 0, left: 0 },
    ])
    .webp({ quality: 88 })
    .toFile(outPath)
}

async function main() {
  await fs.mkdir(outDir, { recursive: true })
  let n = 0
  for (const page of pages) {
    n++
    const out = path.join(outDir, `${String(n).padStart(3, "0")}.webp`)
    if (page.type === "character") {
      await renderCharacterPage(page, out)
      console.log(`${path.basename(out)} — ${page.name}`)
    } else {
      await renderTitlePage(page, out)
      console.log(`${path.basename(out)} — ${page.title || page.type}`)
    }
  }
  console.log(`\n${n} páginas em ${outDir}`)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
