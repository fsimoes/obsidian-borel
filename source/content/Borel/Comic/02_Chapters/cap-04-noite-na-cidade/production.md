---
title: "Production - Cap. 4 - Noite na Cidade"
type: comic
tags:
  - rpg/borel
  - tipo/comic
  - comic/cap-04
status: docs-ready
target_pages: 16
---

# Production - Cap. 4

## Status

`ready`.

Pré-produção, roteiro, diálogos, painéis, prompts e revisão pré-imagem estão prontos. As páginas finais foram geradas e salvas em `pages/` nesta execução.

## Fila de Referências Antes das Páginas

1. `refs/emmergard-eq-inicial.png`
   - Fonte: `npc-sheets.md`.
   - Motivo: NPC recorrente e presente em várias páginas.
   - Status: gerada e salva em `refs/` nesta execução.
2. `refs/criatura-lupina-celeste.png`
   - Fonte: `enemy-concepts.md`.
   - Motivo: inimigo central das páginas 08-13.
   - Status: gerada e salva em `refs/` nesta execução.
3. Opcional: `refs/celeste-silhueta-roxa.png`
   - Usar apenas se a geração precisar de consistência da silhueta; não revelar rosto.

## Refs Existentes a Anexar

- `Comic/02_Chapters/cap-04-noite-na-cidade/refs/emmergard-eq-inicial.png`
- `Comic/02_Chapters/cap-04-noite-na-cidade/refs/criatura-lupina-celeste.png`
- `Referencias/pcs/tony-eq-inicial.png`
- `Referencias/pcs/nightwolf-eq-inicial.png`
- `Referencias/pcs/dustin-eq-inicial.png`
- `Referencias/pcs/kaelion-eq-inicial.png`
- `Referencias/pcs/bartrock-normal-eq-inicial.png`
- `Referencias/Npcs/lucian-eq-inicial.png`
- `Referencias/Npcs/Alberto.png` se a página usar Alberto.

## Ordem de Geração

1. Gerar refs novas: Emmergard e criatura lupina. **Concluído.**
2. Gerar páginas `001.webp` a `016.webp`, uma por página, usando `prompt-all-pages.md`. **Concluído.**
3. Revisar cada página contra `panels.md` e `dialogues.md`. **Concluído.**
4. Regenerar páginas com:
   - personagem errado,
   - Nightwolf como lobisomem,
   - Bartrock com máscara,
   - texto em inglês/ilegível,
   - ausência de aura roxa no final,
   - criatura parecida com Nightwolf.
5. Converter/salvar em `pages/001.webp` ... `pages/016.webp`. **Concluído.**

## Validação Técnica Esperada

- `pages/` deve conter exatamente 16 arquivos `.webp`.
- Nomes sequenciais: `001.webp` a `016.webp`.
- Cada página corresponde a uma seção de `panels.md`.
- Balões devem bater com `dialogues.md`; se não, marcar `needs-regeneration`.

## Pós-Imagem

Executado em 2026-06-04.

- `pages/` contém exatamente 16 arquivos `.webp`, de `001.webp` a `016.webp`.
- Página 14 foi regenerada e substituída para corrigir a autoria visual da fala "O que aconteceu aqui?" para Dustin.
- Página 05 tem ajuste leve aceito: `carroça` e `começa` aparecem sem diacríticos em dois balões. A cena, ordem narrativa e falas permanecem compreensíveis.
- Tentativa de regeneração da página 05 foi bloqueada por limite temporário da ferramenta de imagem.
- Status final `ready`: perda de diacríticos na página 05 aceita como arte final.

## Páginas Geradas Nesta Execução

`001.webp`, `002.webp`, `003.webp`, `004.webp`, `005.webp`, `006.webp`, `007.webp`, `008.webp`, `009.webp`, `010.webp`, `011.webp`, `012.webp`, `013.webp`, `014.webp`, `015.webp`, `016.webp`.

## Refs Geradas Nesta Execução

| Ref | Caminho | Revisão |
|---|---|---|
| Emmergard | `refs/emmergard-eq-inicial.png` | OK após correção canon: guerreira/taberneira loira de aparência germânica/alemã, forte, compacta, maça pesada, roupa funcional verde/couro/vinho, expressão amigável, sem texto. Versões anteriores ruivas foram substituídas. |
| Criatura lupina | `refs/criatura-lupina-celeste.png` | OK: lobo humanoide grande, braços longos, olhos vermelhos, sem itens de Nightwolf. |

## Atualização Canon Emmergard

Executada em 2026-06-05 após referência aprovada pelo usuário:

- Ref `refs/emmergard-eq-inicial.png` substituída pela versão loira/germânica.
- Páginas regeneradas para remover Emmergard ruiva: `002.webp`, `011.webp`, `015.webp`, `016.webp`.
- Cap. 5 já seguia essa referência; Cap. 4 agora foi alinhado.
- Leitor: `cap-04-sessao-04/` sincronizado; catalog **v10**.

## Documentação v2 (jun/2026)

- [x] `panels.md` com poses por painel
- [x] `prompt-all-pages.md` prefixo v2 + CHARACTERS & POSES
- [x] `style.md` v2
- [x] Regenerar arte v2 (`images-pending-regen`) — 2026-06-18, Cursor GenerateImage

## Regeneração 2026-06-18

- **Gerador:** Cursor GenerateImage + refs `refs/` (11 PNGs)
- **Regens:** P014 (halfling/cachecol teal na 1ª versão)
- **Publicado:** `quartz/static/comic/cap-04-sessao-04/` · build OK

- `dialogues.md` — OK, sem alterações.
- `prompt-all-pages.md` — **corrompido** (9× PAGE 000); fonte: `script.md` + `dialogues.md` + `concept.md`.
- `refs/` — 11 PNGs (estilo + PCs + Emmergard + criatura lupina + Lucian).
- Emmergard: **loira**, não ruiva (canon jun/2026).
