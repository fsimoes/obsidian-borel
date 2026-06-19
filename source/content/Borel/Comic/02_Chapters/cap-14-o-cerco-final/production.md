---
title: "Production - Cap. 14"
type: comic-production
status: docs-ready
target_pages: 18
---

# Production - Cap. 14

## Status
`ready-for-image-generation`. A prÃ©-produÃ§Ã£o, roteiro, falas, painÃ©is, prompts e revisÃ£o prÃ©-imagem estÃ£o prontos. Imagens finais nÃ£o foram geradas nesta execuÃ§Ã£o porque nÃ£o hÃ¡ fluxo disponÃ­vel para anexar todas as refs necessÃ¡rias, gerar e salvar WebP sequencial no vault/leitor.

## Fila de imagem
1. Gerar refs:
   - `Referencias/npcs/rita-dente-de-bronze-eq-revolta.webp`
   - `Referencias/npcs/ivan-eq-cidadela.webp`
   - `Referencias/npcs/emmergard-eq-cerco.webp` se close for usado.
2. Gerar `pages/000-cover.webp`.
3. Gerar `pages/001.webp` a `pages/018.webp`.
4. Revisar cada pÃ¡gina contra `panels.md` e `dialogues.md`.
5. Regenerar qualquer pÃ¡gina com texto em inglÃªs, fala errada, personagem trocado, gore excessivo ou ordem visual confusa.

## PublicaÃ§Ã£o
SÃ³ copiar para `source/quartz/static/comic/cap-14-sessao-14/` depois de existir capa + 18 pÃ¡ginas WebP revisadas.

## RevisÃ£o pÃ³s-imagem
Pendente por ausÃªncia de imagens.

## DocumentaÃ§Ã£o v2 (jun/2026)

- [x] `panels.md` com poses por painel
- [x] `prompt-all-pages.md` prefixo v2 + CHARACTERS & POSES
- [x] `style.md` v2
- [x] Regenerar arte (`images-pending-regen`) — 2026-06-18 tick 461257 #5

## Revisão texto+refs (2026-06-18 — tick 461257 #5)

- `dialogues.md` OK. Fonte: `script` + `dialogues`.
- Refs: 13 PNGs (estilo + PCs + Rita revolta + Ivan + guardas cristal + castelo cerco + Elriste).

## Publicação v2 (2026-06-18 — tick 461257 #5)

- 18 PNG v2 gerados (`cap14-001`…`018`), copiados para `pages/` e `quartz/static/comic/cap-14-sessao-14/`.
- `npm run comic:webp` + `npm run build:site` OK.
