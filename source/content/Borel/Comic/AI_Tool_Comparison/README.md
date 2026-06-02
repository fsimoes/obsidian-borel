---
title: Bake-off de IAs — README
type: comic
tags:
  - rpg/borel
  - tipo/comic
  - comic/bakeoff
---

# Bake-off de IAs de imagem

Comparar ferramentas com os **mesmos 5 prompts** antes de travar estilo e elenco do quadrinho Borel.

## Arquivos desta pasta

| Arquivo | Uso |
|---------|-----|
| [[00_Test_Prompts]] | Prompts por teste; blocos **「ChatGPT — copiar tudo」** prontos para colar |
| [[01_Scorecard]] | Notas 1–5 por critério |
| [[02_Tools_Checklist]] | Acesso, custo, como usar ref (T3/T5) |
| [[03_Decisao]] | Ferramenta vencedora + lettering na IA ou manual |
| `results/<ferramenta>/` | PNG/WebP gerados + [[results/_template/notas|notas]] |

## Ordem dos testes (cada ferramenta)

1. **T1** — Taverna (estilo, sem personagem)
2. **T2** — Retrato Tony → ref Tony
3. **T3** — Tony em caverna — anexar T2
4. **T4** — 1 balão em português
5. **T2b** — Retrato Nightwolf → ref Nightwolf (**antes do T5**)
6. **T5** — Tony + Nightwolf, 2 balões — anexar **T2 + T2b**

Salvar com os nomes exatos:

- `T1-taverna.webp`
- `T2-tony-retrato.webp`
- `T3-tony-consistencia.webp`
- `T4-balao-unico-pt.webp`
- `T2b-nightwolf-retrato.webp`
- `T5-dialogo-dois-pt.webp`

## Setup por pasta de ferramenta

```text
results/
  midjourney/
    T1-taverna.webp … T5-dialogo-dois-pt.webp
    notas.md          ← copiar de results/_template/notas.md
  leonardo/
  …
```

Ferramentas sugeridas: Midjourney, Leonardo, ChatGPT Image, Firefly, Ideogram (+ ComfyUI/Fooocus se tiver GPU).

## Sessão (~3–4 h)

1. Criar pasta em `results/` para cada IA que for testar.
2. Rodar T1→T5; preencher `notas.md` (erros de texto em T4/T5!).
3. Preencher [[01_Scorecard]].
4. Discord: contact sheet com **T4 e T5** visíveis.
5. Registrar em [[03_Decisao]] → depois criar `Comic/00_Style_Bible.md`.

## Regra

Se **nenhuma** IA acertar português em T4–T5 → quadrinho com **arte sem balão** + lettering no Photopea/Canva.
