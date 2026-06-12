---
title: "Production - Cap. 5"
type: comic
tags:
  - rpg/borel
  - tipo/comic
  - comic/cap-05
status: docs-ready
target_pages: 20
---

# Production - Cap. 5

## Estado

Status atual: `ready`.

Pre-producao, roteiro, paineis, falas e prompts prontos. Revisao pre-imagem aprovada em `review.md`. Paginas finais geradas e revisadas.

- [x] Leitor: `cap-05-sessao-05/` · `chapters.json` → `ready` · catalog v9 (correcao ordem pags. 006/007)

## Fila de Geracao

1. Refs criadas/copidas para `refs/`: concluido.
2. Capa `pages/000-cover.webp` e paginas finais `pages/001.webp` a `pages/020.webp`: concluido.
3. Revisao pos-imagem: concluida.
4. Regeneracoes feitas por correcao canonica de Emmergard loira: paginas 002, 006, 007, 010, 013 e 014.

## Refs Necessarias

| Ref | Origem | Status |
|---|---|---|
| Tony | `Referencias/pcs/tony-eq-inicial.png` | existente |
| Nightwolf | `Referencias/pcs/nightwolf-eq-inicial.png` | existente |
| Dustin | `Referencias/pcs/dustin-eq-inicial.png` | existente |
| Kaelion | `Referencias/pcs/kaelion-eq-inicial.png` | existente |
| Bartrock normal | `Referencias/pcs/bartrock-normal-eq-inicial.png` | existente |
| Lucian | `Referencias/Npcs/lucian-eq-inicial.png` | existente |
| Alberto | `Referencias/Npcs/Alberto.png` | existente |
| Amagard/Emmergard | `refs/emmergard-eq-inicial.png` | atualizada para loira/germanica; nao usar ref ruiva do cap. 4 |
| Celeste | `refs/celeste-eq-inicial.png` | aprovada jun/2026 v3 · cópia em `Referencias/npcs/celeste-eq-inicial.png` |
| Criaturas lupinas | `refs/criaturas-lupinas-celeste.png` | aprovada jun/2026 v3 |

## Validacao Tecnica Final

- `pages/` contem a capa `000-cover.webp` e exatamente 20 WebP finais de pagina.
- Nomes: `001.webp` a `020.webp`.
- PNGs intermediarios removidos antes do commit; entrega final em WebP.
- Folha de contato: `pages/_review_contact_sheet.jpg`.
- Sem texto em ingles identificado na revisao visual.
- Emmergard/Amagard corrigida para loira/germanica nas paginas onde aparece.
- Status final: `ready`.

## Documentação v2 (jun/2026)

- [x] `panels.md` com poses por painel
- [x] `prompt-all-pages.md` prefixo v2 + CHARACTERS & POSES
- [x] `style.md` v2
- [ ] Regenerar arte (`images-pending-regen`)
