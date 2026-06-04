---
title: "Prompt Cap. 1 — 10 páginas (estilo aprovado)"
type: comic
tags:
  - rpg/borel
  - tipo/comic
  - comic/cap-01
  - comic/webcomic
status: ready
---

# Prompt Cap. 1 — **10 páginas** (estilo webcomic aprovado)

**Estilo:** [[style-tirinha|style-tirinha.md]] (jun/2026) · **Painéis:** [[panels|panels.md]] · **Falas:** [[dialogues|dialogues.md]]

## Antes de colar

1. **Nova conversa** ChatGPT (GPT Image) — limite **~10 imagens** por pedido.
2. Anexar **6 imagens** nesta ordem — pasta local [[refs/README|refs/]] (cópia pronta):

| # | Ficheiro |
|---|----------|
| 1 | `refs/01-estilo-tapa.png` |
| 2 | `refs/02-estilo-dustin-traidor.png` |
| 3 | `refs/03-lord-bart-noble.png` |
| 4 | `refs/04-nightwolf.png` |
| 5 | `refs/05-dustin.png` |
| 6 | `refs/06-tobias.png` |

*(Originais em `Referencias/style/`, `pcs/`, `Npcs/`.)*

3. Colar o **PROMPT COMPLETO** → gerar **PAGE 001–010**.
4. PNG → `npm run comic:webp` → `quartz/static/comic/cap-01-sessao-01/001.webp`–`010.webp`

**Recuperação:** [prompts por página](#prompts-de-recuperação).

---

## Canon (não inverter)

| # | Beat |
|---|------|
| 1 | Trio cobra pagamento no *Cálice Dourado* (Rilonde, noite). |
| 2 | **Tobias trai** — **denuncia o trio** aos guardas (ele é o traidor). |
| 3 | Capitã interroga Lord Bart → silêncio → insulto verbal. |
| 4 | Tapa **mão aberta** — Bart **não** ataca o guarda antes. |
| 5 | Tobias com guardas — **gola** (halfling baixo × elfo alto). |
| 6 | Bart cai; Nightwolf + Dustin **carregam** e fogem. |

Sem Tony. Jovem elfo = **Lord Bart** (nunca Bartrock possuído).

---

## PROMPT COMPLETO

```
BEGIN PROMPT

Generate an image. Fantasy RPG webcomic style — Borel Cap. 1 approved look (Jun 2026): clean bold black line art, professional cel-shading, warm candlelit medieval tavern palette (wood browns, amber, deep blues), expressive faces, modern western comic panel with subtle manga influence. Clear round speech bubbles with tails, legible hand-lettered comic font.

I attached 6 images:
(1–2) APPROVED STYLE REFERENCES — match line weight, cel-shading, and colors only; do not copy poses.
(3) Lord Bart — young tall slim elven noble mage, messy dark hair, pointed ears, fine dark coat, wand, NO demon mask.
(4) Nightwolf — ranger/archer with bow.
(5) Dustin — rogue with DUAL DAGGERS on belt, NOT a longsword.
(6) Tobias Peso Morto — short halfling ~1.20 m, teal scarf, brown jerkin, traitor.

Use character refs for faces and outfits every page. Captain, paymaster contact, patrons = generic NPCs.

SETTING: Night, Rilonde. Tavern "O Cálice Dourado" / Golden Cup, warm windows, wood interior, candles.

OUTPUT: Exactly 10 vertical images PAGE 001–PAGE 010. Each PAGE = one image (~1400px wide) with MULTIPLE sub-panels and clear black gutters. Read sub-panels top-left to bottom-right.

Portuguese dialogue EXACTLY as quoted — colloquial Brazilian Portuguese, legible in bubbles.

STORY ORDER:
Payment dispute → Tobias DENOUNCES trio to guards (traitor; Dustin: "Traidor!") → captain questions Bart → Bart insults (words only) → OPEN PALM slap (Bart did NOT attack guard first) → brawl → Tobias on guards' side, collar grab (halfling arm UP, height difference clear) → Bart falls → Nightwolf and Dustin carry Bart and flee.

--- PAGE 001 ---
ONE full-page splash. Night tavern facade Golden Cup, warm windows, cobblestone. Title IN ART: "Negociações Frustradas". No speech.

--- PAGE 002 ---
2×2 grid. A: trio enters (Lord Bart, Nightwolf bow, Dustin). B: patrons stare. C: seated, contact scroll — bubble: "Serviço feito. Só que o pagamento tá enrolado." D: Dustin near daggers — "Como assim?"

--- PAGE 003 ---
2×2. A: Lord Bart standing, fallen chair — "A gente entregou o que pediram. Agora paguem o que é devido." B: Nightwolf, hand on bow, silent. C: Tobias smirk, teal scarf. D: wide table tension, no speech.

--- PAGE 004 ---
2×2. CRITICAL betrayal.
A: Tobias points at trio TO guards — "São eles! Prendam o trio!" (Tobias betrays; NOT victim of scam)
B: Dustin shocked — "Traidor!"
C: guards in, contact cruel smile — "Peguem eles!"
D: female captain advances, no speech.

--- PAGE 005 ---
2×2. A: captain vs Bart — "Fala! Cadê o cocheiro?" B: Bart silent close-up. C: Bart words only NO magic at guard — "Como você ousa falar comigo, verme?" D: captain open hand raised — "Então eu te mostro, verme!"

--- PAGE 006 ---
LARGE top (~60%): captain OPEN PALM slap Bart, head turned, SFX "TAP!" Bart did NOT attack guard first. Bottom left: tavern chaos. Bottom right: Bart hand on cheek.

--- PAGE 007 ---
Top: Nightwolf arrow. Top right: Dustin dual daggers vs spear — "Temos que sair daqui — agora!" LARGE bottom: Tobias on GUARDS' side, arm stretched UP gripping Bart's collar, halfling short elf tall, teal scarf. No speech.

--- PAGE 008 ---
2×2. A: Bart falls, wand on floor — "Bart!" B: Nightwolf — "Por aqui!" C: Dustin side door, Nightwolf covers. D: door opens to street.

--- PAGE 009 ---
Three panels. LARGE: Nightwolf and Dustin lift unconscious Bart by shoulders — "Segura ele — vamo!" Run alley carrying Bart. Torches behind.

--- PAGE 010 ---
Three panels. Lit windows chase. Running feet cobblestones. WIDE silhouette carriers + slumped Bart, tavern glow behind — "Temos que despistar a guarda." End chapter.

Generate all 10 pages. Consistent faces and approved webcomic style throughout.

AVOID: photorealistic, dark painterly novel, ultra-flat strip, chibi, 3D, watermark, English, misspelled Portuguese, gibberish, tiny illegible text, Bart magic at guard before slap, demon mask, Tobias tall as elf, Dustin longsword, wrong elf characters, Tobias as scam victim.

END PROMPT
```

---

## Prompts de recuperação

Anexar as **mesmas 6 imagens** + prefixo de [[style-tirinha|style-tirinha.md]].

**PAGE 004:** `PAGE 004 only, 2×2. Match approved style refs. Tobias (ref 6) denounces Lord Bart + Nightwolf (refs 3–4) to guards — "São eles! Prendam o trio!" Dustin (ref 5) dual daggers — "Traidor!" Contact "Peguem eles!" Tobias is traitor NOT victim.`

**PAGE 006:** `PAGE 006 only. Match approved slap style ref. LARGE top: female captain open palm slap Lord Bart (ref 3), SFX "TAP!" Bart never attacked guard first. Bottom: chaos; Bart cheek.`

**PAGE 007:** `PAGE 007 only. Approved style. Top: Nightwolf arrow, Dustin dual daggers "Temos que sair daqui — agora!" LARGE bottom: Tobias (ref 6) traitor with guards, collar on Bart (ref 3), halfling arm UP, height difference.`

**PAGE 009:** `PAGE 009 only. Nightwolf and Dustin carry unconscious Bart — "Segura ele — vamo!" Alley, torches. Approved style.`

---

## Checklist pós-geração

- [ ] Estilo igual refs `cap-01-estilo-aprovado-*.png`
- [ ] 10 ficheiros; apagar `011–020` v1
- [ ] P04 traição · P06 tapa · P07 gola · P09 carregado
- [ ] Dustin com **adagas**, não espada
- [ ] Falas = [[dialogues|dialogues.md]]
- [ ] `npm run build:site` ou `copy:comic`

---

*Estilo aprovado 2026-06-02 · canon Tobias traidor · [[dialogues|dialogues.md]]*
