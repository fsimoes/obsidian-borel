---
title: "Production - Cap. 11"
type: comic-production
status: docs-ready
target_pages: 17
---

# Production - Cap. 11

## Status

`ready-for-image-generation`. Revisao pre-imagem aprovada em `review.md`. Nenhuma página final foi gerada neste run.

## Fila de imagem

1. [x] `refs/ivan-guarda.png` — aprovada bloco D jun/2026 v3.
2. [x] `refs/golem-guardiao.png` — aprovada bloco D jun/2026 v3.
3. [x] `refs/puzzle-arcano-sala.png` — aprovada bloco E jun/2026 v3.
4. [ ] Gerar capa `pages/000-cover.webp`.
5. [ ] Gerar páginas `pages/001.webp` a `pages/017.webp`.
6. [ ] Revisar contra `panels.md`, `dialogues.md`, `characters.md`, `npc-sheets.md` e `enemy-concepts.md`.
7. [ ] Regenerar páginas com texto em inglês, mapa legível errado, golem moderno, Ivan nobre demais ou falas fora de `dialogues.md`.

## Refs obrigatorias

- PCs: `Referencias/pcs/tony-eq-inicial.png`, `nightwolf-eq-inicial.png`, `dustin-eq-inicial.png`, `bartrock-normal-eq-inicial.png`, `borin-eq-inicial.png`, `trash-eq-inicial.png`.
- Rita: refs de cap. 8/9.
- Golem: pode usar referencias de cena em `Referencias/Cenas/random/20250603_1550_Mystical_Golem's_Blue_Aura...` e `20250603_1600_Golem's_Powerful_Punch...` como apoio, mas prompt deve seguir `enemy-concepts.md`.

## Validação final esperada

- 17 arquivos numerados `001.webp` a `017.webp` + `000-cover.webp`.
- Baloes em português, curtos, sem inglês.
- Golem/puzzle legíveis como magia antiga.
- Leitor web não atualizado até haver imagens.

## Documentação v2 (jun/2026)

- [x] `panels.md` com poses por painel
- [x] `prompt-all-pages.md` prefixo v2 + CHARACTERS & POSES
- [x] `style.md` v2
- [x] Regenerar arte (`images-pending-regen`) — 2026-06-18 tick 71897 #4

## Revisão texto+refs (2026-06-18 — tick 71897 #4)

- `dialogues.md` OK. Fonte: `script` + `dialogues`.
- Refs: 12 PNGs (estilo + PCs + Rita + golem + Ivan + puzzle).

## Publicação v2 (2026-06-18 — tick 71897 #4)

- 17 PNG v2 gerados (`cap11-001`…`017`), copiados para `pages/` e `quartz/static/comic/cap-11-sessao-11/`.
- `npm run comic:webp` + `npm run build:site` OK.
