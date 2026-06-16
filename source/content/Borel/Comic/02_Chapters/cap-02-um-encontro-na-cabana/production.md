---
title: "Produção — Cap. 2"
type: comic
tags:
  - rpg/borel
  - tipo/comic
  - comic/cap-02
status: ready
---

# Produção — Cap. 2

## Canon mesa ✓ documentado

Ver [[README#Canon mesa (jun/2026)|README]] — **Dustin** faz blefe da bomba; **Bart** mata Nikov (fogo amigo) e morre nos fundos.

## Checklist

- [x] Roteiro / painéis / diálogos alinhados à mesa
- [x] Retrato **Nikov**
- [x] Refs `refs/01–07` (estilo Dustin + **gola** + 4 PCs + Nikov)
- [x] Gerar `001.webp`–`010.webp`
- [x] `chapters.json` → `ready` · `reader.js` catalog v6

## Nikov

Retrato: `refs/07-nikov.png` (se ainda tiveres `06-nikov.png`, renomeia após inserir `02-estilo-gola.png`).

| Campo | Visual |
|-------|--------|
| Espécie | Humano, masculino, adulto |
| Armadura | **Prateada** (placas/lamelas claras) |
| Armas | **Katana** + segunda lâmina no cinto |
| Rosto | Olhar severo; cabelo escuro **preso** |
| Corpo | Atlético, mais **esguio** que Tony (sem escudo leão) |

## Regra de produção

**Uma página = um foco de elenco.** Não pedir Tony + Nikov + trio + 4 cães + 3 guardas no mesmo `PAGE`. Ver [[panels#Regra de elenco (10 páginas bastam)|elenco por página]].

## Cenas difíceis para IA

| Pág. | Risco | Nota no prompt |
|------|-------|----------------|
| 06 | Muitos cães | Só **Tony** em quadro; "four dogs attacking Tony" |
| 07 | Multidão | Só **porão** (3 PCs); guardas/Nikov em silhueta ou off-panel |
| 08 | Fogo amigo | Só Bart + Nikov + Tony reagindo |
| 10 | Cama **vista de cima** | Painel A: top-down, Bart+Nikov sob cobertas, **sem** sobreviventes; B/C katana + estrada |

## Divergência Livro

Não apagar o Livro — marcar `fidelity: mesa` no capítulo. Ajustar Livro numa tarefa futura se a mesa quiser unificar.

## Documentação v2 (jun/2026)

- [x] `panels.md` com poses por painel
- [x] `prompt-all-pages.md` prefixo v2 + CHARACTERS & POSES
- [x] `style.md` v2
- [x] Regenerar arte v2 (2026-06-12, Cursor GenerateImage)

## Regeneração 2026-06-12 (2ª rodada)

- **Gerador:** Cursor GenerateImage com refs `refs/01–10`
- **Regens:** P003, P004, P006, P008, P009, P010 (+ P007 na 1ª rodada)
- **Publicado:** `quartz/static/comic/cap-02-sessao-02/` · build OK

| Pág. | Review |
|------|--------|
| 001–002, 005, 007 | OK (mantidas) |
| 003 | OK (regen) — Nightwolf drow cabelo preto |
| 004 | OK (regen) — noite + trio correto no porão |
| 006 | OK (regen) — cabana, Tony com a fala |
| 008 | OK (regen) — Bart loiro; extra «Vai arder.» |
| 009 | OK (regen) — Bart loiro, morte clara |
| 010 | Atenção — cama ambígua (sono vs morte) |
