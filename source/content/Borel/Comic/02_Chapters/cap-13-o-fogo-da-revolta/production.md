---
title: "Production - Cap. 13"
type: comic-production
status: docs-ready
target_pages: 15
---

# Production - Cap. 13

## Status
`ready-for-image-generation`. Pré-produção, roteiro, falas, painéis e prompts prontos; revisão pré-imagem aprovada. As imagens finais não foram geradas nesta execução porque a ferramenta de imagem disponível aqui não oferece fluxo confiável para salvar capa + 15 páginas WebP sequenciais no vault e revisar/regenerar localmente. Em 2026-06-08, a geração de referências foi bloqueada por erro de servidor da ferramenta embutida de imagem.

## Fila de imagens

1. Reusar/gerar ref de Rita Dente de Bronze, idealmente a mesma do cap. 12.
2. [x] `refs/maga-quartel-sul.png` — aprovada bloco D jun/2026 v3.
3. Gerar capa `pages/000-cover.webp`.
4. Gerar páginas `pages/001.webp` a `pages/015.webp`.
5. Revisar visualmente cada página contra `panels.md`, `dialogues.md`, `characters.md`, `npc-sheets.md` e `enemy-concepts.md`.
6. Se aprovado, copiar para `source/quartz/static/comic/cap-13-sessao-13/` e atualizar catálogo.

## Validação técnica atual

| Item | Resultado |
|---|---|
| `target_pages` | 15 |
| Painéis planejados | páginas 001-015 presentes em `panels.md` |
| Capa planejada | sim |
| Arquivos `.webp` em `pages/` | 0 |
| Arquivos `.webp` em `refs/` | 0 |
| Publicação no leitor | pendente |

## revisão pós-imagem
Pendente. Deve verificar que Kaelion finaliza a maga, Rita aparece como aliada, o loot inclui moedas/espadas, o gancho mostra 1 para 10 e nenhum balão tem inglês/ilegível.






## Documentação v2 (jun/2026)

- [x] `panels.md` com poses por painel
- [x] `prompt-all-pages.md` prefixo v2 + CHARACTERS & POSES
- [x] `style.md` v2
- [ ] Regenerar arte (`images-pending-regen`)
