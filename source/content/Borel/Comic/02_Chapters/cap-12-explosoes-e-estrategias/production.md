---
title: "Production - Cap. 12"
type: comic-production
status: docs-ready
target_pages: 18
---

# Production - Cap. 12

## Status
`ready-for-image-generation`. Pré-produção, roteiro, falas, painéis e prompts prontos; revisão pré-imagem aprovada. As imagens finais não foram geradas nesta execução porque a ferramenta de imagem disponível aqui não oferece fluxo confiável para salvar capa + 18 páginas WebP sequenciais no vault e revisar/regenerar localmente. Em 2026-06-08, a geração da referência de Rita foi tentada, mas a ferramenta retornou erro de servidor e não entregou arquivo utilizável.

## Fila de imagens

1. [x] `rita-dente-de-bronze-eq-revolta.png` — aprovada bloco D jun/2026 v3.
2. [x] `guardas-de-cristal.png` — aprovada bloco D jun/2026 v3.
3. Gerar capa `pages/000-cover.webp`.
4. Gerar páginas `pages/001.webp` a `pages/018.webp`, uma imagem por página.
5. Revisar cada página contra `panels.md`, `dialogues.md`, `characters.md`, `npc-sheets.md` e `enemy-concepts.md`.
6. Se aprovado, copiar para `source/quartz/static/comic/cap-12-sessao-12/` e atualizar catálogo.

## Validação técnica atual

| Item | Resultado |
|---|---|
| `target_pages` | 18 |
| Painéis planejados | páginas 001-018 presentes em `panels.md` |
| Capa planejada | sim |
| Arquivos `.webp` em `pages/` | 0 |
| Arquivos `.webp` em `refs/` | 0 |
| Publicação no leitor | pendente |

## revisão pós-imagem
Pendente. Deve verificar ordem de leitura, personagens corretos, balões em português, ausência de inglês/ilegível, brecha da muralha clara, Rita consistente e guardas de cristal reconhecíveis.






## Documentação v2 (jun/2026)

- [x] `panels.md` com poses por painel
- [x] `prompt-all-pages.md` prefixo v2 + CHARACTERS & POSES
- [x] `style.md` v2
- [ ] Regenerar arte (`images-pending-regen`)
