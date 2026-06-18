---
title: "Production - Cap. 6"
type: comic-production
status: docs-ready
target_pages: 16
---

# Production - Cap. 6

## Fila de imagens

- `pages/000-cover.webp` - capa obrigatoria.
- `pages/001.webp` a `pages/016.webp` - paginas finais.

## Refs obrigatorias

- PCs: `Referencias/pcs/tony-eq-inicial.png`, `nightwolf-eq-inicial.png`, `dustin-eq-inicial.png`, `kaelion-eq-inicial.png`, `bartrock-normal-eq-inicial.png`.
- NPCs: `Referencias/Npcs/Alberto.png`, `Referencias/Npcs/lucian-eq-inicial.png`.
- Celeste Falcon prisioneira: `refs/celeste-falcon-prisioneira.png` — aprovada bloco A jun/2026 v3.
- Criatura tanque: `refs/criatura-tanque-armazem-568.png` — aprovada bloco A jun/2026 v3.
- Alberto/Lucian: `Referencias/Npcs/alberto-eq-inicial.png`, `lucian-eq-inicial.png` — aprovados bloco A jun/2026 v3.
- Ambiente: usar `Referencias/Cenas/Sessao6/*` como apoio de cena, sem substituir roteiro.

## Status de geracao

Preimage review aprovado em `review.md`. Refs pendentes, capa e paginas finais foram geradas em 2026-06-05.

## Arquivos gerados

- `refs/celeste-falcon-prisioneira.webp`
- `refs/criatura-tanque-armazem-568.webp`
- `pages/000-cover.webp`
- `pages/001.webp` a `pages/016.webp`

## Regeneracoes

- `pages/002.webp`: regenerada antes de salvar porque a primeira tentativa colocou Tony com tracos felinos e um anao extra.
- `pages/010.webp`: regenerada antes de salvar porque a primeira tentativa transformou Nightwolf em lobo e Bartrock em anao.
- `pages/005.webp`: substituida apos revisao porque havia um lobo literal no escritorio.
- `pages/006.webp`: substituida apos revisao porque a fala final saiu com nome incorreto; adaptada para "Obrigado." para evitar lettering errado.

## Checklist pos-imagem

- [x] `pages/000-cover.webp` existe.
- [x] Existem exatamente 16 paginas `001.webp` a `016.webp`.
- [x] Fala em portugues bate com `dialogues.md` ou adaptacao registrada.
- [x] Nenhum texto em ingles em balao.
- [x] Criatura no tanque aparece nas paginas 011 e/ou 014.
- [x] Armazem 568 nao parece deposito comum.
- [x] Recompensa e pergunta final aparecem na pagina 016.

## Documentação v2 (jun/2026)

- [x] `panels.md` com poses por painel
- [x] `prompt-all-pages.md` prefixo v2 + CHARACTERS & POSES
- [x] `style.md` v2
- [x] Regenerar arte v2 (`images-pending-regen`) — 2026-06-18 tick 461257

## Revisão texto+refs (2026-06-18 — tick 461257)

- `dialogues.md` OK. `prompt-all-pages.md` corrompido (9× PAGE 000) → `script` + `dialogues` + `concept`.
- Refs: 12 PNGs (estilo + PCs + Celeste prisioneira + criatura tanque).

## Publicação v2 (2026-06-18 — tick 461257)

- 16 PNG v2 gerados (`cap06-001`…`016`), copiados para `pages/` e `quartz/static/comic/cap-06-sessao-06/`.
- `npm run comic:webp` + `npm run build:site` OK.
- Capa `000-cover.webp` mantida.
