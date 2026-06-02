---
title: "Roteiro — Cap. 0 (elenco)"
type: comic
tags:
  - rpg/borel
  - tipo/comic
  - comic/cap-00
status: complete
target_pages: "10"
fidelity: portraits
---

# Roteiro — Elenco (10 páginas)

> **Objetivo:** apresentar o elenco da mesa **antes** do Cap. 1. Sem cena narrativa — **retrato + bloco de texto** (nome, arquétipo, 3 linhas de apresentação, jogador).  
> **Arte:** gerada a partir de `Referencias/pcs/*.png` (`npm run comic:cap00`). Textos editáveis em `source/scripts/generate-cap-00-elenco.mjs`.

## Ordem

1. **Capa** — título da série + “Elenco da mesa”
2. **Tony** — líder; ref `tony-eq-inicial.png`
3. **Nightwolf** — ranger drow; `nightwolf-eq-inicial.png`
4. **Dustin** — ranger humano; `dustin-eq-inicial.png`
5. **Kaelion** — elfo guerreiro; `kaelion-eq-inicial.png`
6. **Lord Bart** — mago elfo (pré-res); `bartrock-noble-eq-inicial.png`
7. **Borin & Trash** — duo; `borin-trash-eq-inicial.png`
8. **Groih** — guerreiro; `groih-eq-inicial.png`
9. **Orestan** — clérigo-guerreiro; `orestan-eq-inicial.png`
10. **Saída** — “Capítulo 1 — Negociações Frustradas”

## Notas

- **Tony** não aparece no Cap. 1 (piloto S1); aqui a mesa vê o elenco completo.
- **Bartrock** aparece como **Lord Bart** (variante `noble`), coerente com o início da campanha.
- Para trocar ordem ou texto: editar `source/scripts/generate-cap-00-elenco.mjs` e rodar `npm run comic:cap00`.
