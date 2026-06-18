---
title: "Production - Cap. 9"
type: comic-production
status: docs-ready
target_pages: 16
---

# Production - Cap. 9

## Status

`docs-ready` (jun/2026). Poses e `prompt-all-pages.md` v2 completos.

**Arte existente:** `pages-generated` — a maior parte das paginas foi salva **sem lettering** na geracao anterior. Na regeneracao v2, incluir baloes PT de `dialogues.md` em todas as paginas (nao so `001.webp`).

Observacao lettering: priorizar fidelidade total aos dialogos na proxima passada de imagem.

## Fila de imagem

1. [x] Reutilizar/criar `refs/rita-dente-de-bronze.webp`.
2. [x] `refs/baronesa-helena.png` — aprovada bloco B jun/2026 v3.
3. [x] `refs/leticia-servical.png` — aprovada bloco B jun/2026 v3.
4. [x] Gerar capa `pages/000-cover.webp`.
5. [x] Gerar paginas `pages/001.webp` a `pages/016.webp`.
6. [x] Revisar contra `panels.md` e `dialogues.md`.

## Regenerar se ocorrer

- Texto em ingles ou ilegivel em baloes.
- Kaelion desenhado como monstro/vilao sobrenatural.
- Rita sem dente de bronze.
- Cidadela parecendo taverna pobre.
- Trash desenhado como animal comum em vez de constructo.

## Validacao final esperada

- 16 arquivos numerados `001.webp` a `016.webp` + `000-cover.webp`.
- Capa presente.
- Contact sheet de revisao: `pages/_review_contact_sheet.jpg`.
- Sem publicacao no leitor ate revisao final/publicacao.

## Documentação v2 (jun/2026)

- [x] `panels.md` com poses por painel
- [x] `prompt-all-pages.md` prefixo v2 + CHARACTERS & POSES
- [x] `style.md` v2
- [x] Regenerar arte (`images-pending-regen`) — 2026-06-18 tick 71897 #3

## Revisão texto+refs (2026-06-18 — tick 71897 #3)

- `dialogues.md` OK. Fonte: `script` + `dialogues`.
- Refs: 14 PNGs (estilo + PCs + Rita + Letícia + Baronesa Helena + Elriste).

## Publicação v2 (2026-06-18 — tick 71897 #3)

- 16 PNG v2 gerados (`cap09-001`…`016`), copiados para `pages/` e `quartz/static/comic/cap-09-sessao-09/`.
- `npm run comic:webp` + `npm run build:site` OK.
- Capa `000-cover.webp` mantida.
