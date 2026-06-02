---
title: Leitor web do quadrinho
type: comic
tags:
  - tipo/comic
  - comic/leitor
---

# Leitor web (mesa)

Quadrinho publicado **fora** das notas Obsidian, em HTML estático:

- **URL no site:** [`/comic/`](/comic/) (após deploy ou `npm run serve:site` em `source/`)
- **Fonte no repo:** `source/quartz/static/comic/` (sobrevive a cada `quartz build`)
- **URL curta:** `/comic/` — cópia após build (`npm run copy:comic`; o CI faz isso no deploy)
- **Cap. 1 (imagens):** `source/quartz/static/comic/cap-01-sessao-01/001.webp` … `020.webp`  
  Novas exportações PNG: `cd source && npm run comic:webp` (converte e remove os PNG).

## Compartilhar com a mesa

1. Garantir que o GitHub Pages está ativo (workflow `ci.yaml` na branch `main`).
2. Enviar o link completo, por exemplo: `https://<usuario>.github.io/<repo>/comic/`
3. (Opcional) Ativar senha em `quartz/static/comic/chapters.json` (`passwordEnabled: true`).

O vault completo pode continuar público ou privado no GitHub; o leitor usa `noindex` mas **não** substitui repositório privado se quiser sigilo total.

## Comandos

```bash
cd source
npm run build:site    # quartz build + copia comic-public → public/comic
npm run serve:site    # build + servidor local
```

Voltar: [[index|Hub do quadrinho]] · [[02_Chapters/cap-01-negociacoes-frustradas/README|Cap. 1 piloto]]
