---
title: "Production - Cap. 8"
type: comic-production
status: docs-ready
target_pages: 14
---

# Production - Cap. 8

## Status

`docs-ready` / `images-pending-regen`. Poses e prompts v2 completos (jun/2026). Arte publicada no leitor usa estilo anterior; regenerar com Style Bible v2.

## Fila de imagem

1. [x] Gerar ref/model sheet de Rita Dente de Bronze em `refs/rita-dente-de-bronze.webp`.
2. [ ] Gerar capa `pages/000-cover.webp`.
3. [ ] Gerar paginas `pages/001.webp` a `pages/014.webp`.
4. [ ] Revisar todas contra `panels.md` e `dialogues.md`.
5. [ ] Regenerar qualquer pagina com texto em ingles, personagem trocado, Rita sem dente de bronze, ou Cidadela sem muralha interna.

## Refs obrigatorias

- PCs: `Referencias/pcs/tony-eq-inicial.png`, `nightwolf-eq-inicial.png`, `dustin-eq-inicial.png`, `kaelion-eq-inicial.png`, `bartrock-normal-eq-inicial.png`, `borin-eq-inicial.png`, `trash-eq-inicial.png`.
- NPC: `refs/rita-dente-de-bronze.webp` gerada neste run; usar junto do LOCKED em `NPCs_Tier_A.md`.

## Validacao final esperada

- 14 arquivos numerados `001.webp` a `014.webp` + `000-cover.webp`.
- Nenhuma fala fora de `dialogues.md`.
- Sem texto em ingles.
- Muralha interna e desigualdade visiveis.

## Documentação v2 (jun/2026)

- [x] `panels.md` com poses por painel
- [x] `prompt-all-pages.md` prefixo v2 + CHARACTERS & POSES
- [x] `style.md` v2
- [x] Regenerar arte (`images-pending-regen`) — 2026-06-18 tick 461257 #2

## Revisão texto+refs (2026-06-18 — tick 461257 #2)

- `dialogues.md` OK. Fonte: `script` + `dialogues`.
- Refs: 12 PNGs (estilo + PCs + Rita Dente de Bronze + Elriste).

## Publicação v2 (2026-06-18 — tick 461257 #2)

- 14 PNG v2 gerados (`cap08-001`…`014`), copiados para `pages/` e `quartz/static/comic/cap-08-sessao-08/`.
- `npm run comic:webp` + `npm run build:site` OK.
- Capa `000-cover.webp` mantida.
