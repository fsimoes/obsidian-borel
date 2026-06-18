---
title: "Production - Cap. 7"
type: comic-production
status: docs-ready
target_pages: 18
---

# Production - Cap. 7

## Fila de imagens

- `pages/000-cover.webp` - capa obrigatoria.
- `pages/001.webp` a `pages/018.webp` - paginas finais.

## Refs obrigatorias

- PCs: Tony, Nightwolf, Dustin, Kaelion, Bartrock, Borin, Trash.
- Refs: `Referencias/pcs/tony-eq-inicial.png`, `nightwolf-eq-inicial.png`, `dustin-eq-inicial.png`, `kaelion-eq-inicial.png`, `bartrock-normal-eq-inicial.png`, `borin-eq-inicial.png`, `trash-eq-inicial.png`, `borin-trash-eq-inicial.png`.
- Inimigos: `refs/goblins-cla-estrada.png`, `refs/ogro-great-club.png` — aprovados bloco B jun/2026 v3.
- Ambiente: `Referencias/Cenas/random/20250506_*` tem cenas de apoio de estrada/taverna/Elriste, mas nao substitui `panels.md`.

## Status de geracao

Preimage review aprovado em `review.md`. Imagens geradas e salvas neste run:

- Refs: `refs/goblins-cla-estrada.webp`, `refs/ogro-great-club.webp`.
- Capa: `pages/000-cover.webp`.
- Paginas finais: `pages/001.webp` a `pages/018.webp`.

Status correto: `ready`.

## Checklist pos-imagem

- [x] `pages/000-cover.webp` existe.
- [x] Existem exatamente 18 paginas `001.webp` a `018.webp`.
- [x] Borin e Trash aparecem consistentes desde a pagina 001.
- [x] A carroca permanece fechada.
- [x] Emboscada tem goblins e ogros.
- [x] Bartrock em surto e reconhecivel sem gore grafico.
- [x] Elriste exterior/interior aparecem com contraste claro.
- [x] Falas em portugues; sem ingles em baloes.

## Publicacao no leitor

- [x] Copiar `pages/000-cover.webp` e `pages/001.webp` a `pages/018.webp` para `source/quartz/static/comic/cap-07-sessao-07/`.
- [x] Atualizar `source/quartz/static/comic/chapters.json`.
- [x] Subir `CATALOG_VERSION` em `source/quartz/static/comic/reader.js`.

## Documentação v2 (jun/2026)

- [x] `panels.md` com poses por painel
- [x] `prompt-all-pages.md` prefixo v2 + CHARACTERS & POSES
- [x] `style.md` v2
- [x] Regenerar arte (`images-pending-regen`) — 2026-06-18 tick 71897 #2

## Revisão texto+refs (2026-06-18 — tick 71897 #2)

- `dialogues.md` OK. `panels.md` / `prompt-all-pages.md` corrompidos (PAGE 000 duplicadas) → `script` + `dialogues`.
- Refs: 13 PNGs (estilo + PCs + Borin/Trash + goblins + ogro + Elriste).

## Publicação v2 (2026-06-18 — tick 71897 #2)

- 18 PNG v2 gerados (`cap07-001`…`018`), copiados para `pages/` e `quartz/static/comic/cap-07-sessao-07/`.
- `npm run comic:webp` + `npm run build:site` OK.
- Capa `000-cover.webp` mantida.
