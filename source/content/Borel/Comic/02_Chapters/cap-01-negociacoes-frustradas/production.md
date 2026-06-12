---
title: "Produção — Cap. 1 (piloto)"
type: comic
tags:
  - rpg/borel
  - tipo/comic
  - comic/cap-01
  - comic/producao
status: ativo
---

# Produção — Cap. 1 (piloto)

**Pré-requisito:** [[script|script.md]] (beats) ✓ · [[panels|panels.md]] (painéis) → gerar imagens.

## Fase atual: Cap. 1 v2 — **publicado** (2026-06-12)

- [x] 10 páginas geradas (Cursor GenerateImage) → [[pages/README|pages/]] (`001.png` + `001.webp`–`010.webp`)
- [x] `quartz/static/comic/cap-01-sessao-01/001.webp`–`010.webp`
- [x] `npm run comic:webp` (2026-06-12)
- [x] Regen seletiva P004–P010 (cânone corrigido)
- [x] Mesa: revisão visual aprovada (2026-06-12)
- [x] `npm run copy:comic` · `npm run build:site`

**Revisão opcional:** P07 gola / Nightwolf vs ref — ver [[pages/README#Revisão mesa (opcional)|notas]]. P005 exigiu 2ª tentativa (safety filter na 1ª).

### Regenerar uma página

1. [[refs/README|refs/]] + prompt em [[prompt-all-pages-tirinha#Prompts de recuperação|recuperação]].
2. Substituir `NNN.png` em `cap-01-sessao-01/` → `npm run comic:webp` → `npm run copy:comic`.

**v1 (20p)** removida do leitor (`011–020` apagados).

## Fase anterior: gerar páginas v1 (ChatGPT)

### Setup (uma vez)

1. Abrir **nova conversa** ChatGPT (GPT Image) — **só para Cap. 1**.
2. Colar o **prefixo** e **Avoid** de [[../../00_Style_Bible#Prefixo de estilo (obrigatório)|Style Bible]].
3. Mensagem inicial: `I will generate ~20 comic pages for chapter 1. I will attach character reference images. Always use Lord Bart for the young elf mage (not Bartrock possessed).`

### Refs para anexar (por personagem)

| Personagem | Arquivo |
|------------|---------|
| Lord Bart | `Referencias/pcs/bartrock-noble-eq-inicial.png` |
| Nightwolf | `Referencias/pcs/nightwolf-eq-inicial.png` |
| Dustin | `Referencias/pcs/dustin-eq-inicial.png` |
| Tobias | `Referencias/npcs/tobias-peso-morto-eq-inicial.png` |

Guardas / contato / taverneiros = **sem ref** (figurantes Style Bible).

### Ordem de geração (recomendada)

1. **P01** — capa / estabelecimento (sem refs ou só ambiente).
2. **P02–P05** — Ato 1 (3 PCs + refs).
3. **P06–P15** — Ato 2 — **P10 tapa** e **P14 gola** com refs Tobias + Lord Bart; revisar altura na gola.
4. **P16–P20** — Ato 3 — fuga; **P18–P19** Bart inconsciente carregado.

Seguir prompts em [[panels|panels.md]] página a página.

### Por painel

```
[PREFIXO Style Bible]

I attached reference images: first Lord Bart, second Nightwolf, third Dustin.
Use them for faces and outfits.

Comic book panel. [descrição da cena em inglês].

[AVOID Style Bible + ajustes]
```

Com fala:

```
... One speech bubble, Dustin's bubble, text exactly: "Frase em português." Hand-lettered comic font, Portuguese only.
```

### Export

| Item | Caminho |
|------|---------|
| Pasta | `source/public/comic/cap-01-sessao-01/` |
| Páginas | `001.webp` … `020.webp` (capa opcional `000-cover.webp`) |
| Largura | **1400px** (Style Bible) |
| Formato | WebP ou PNG → converter |

### Checklist de qualidade (cada página)

- [ ] Rostos batem com refs
- [ ] **Lord Bart** jovem (`noble`) — não emaciado, sem máscara
- [ ] **P10:** tapa mão aberta — **não** Bart atacando guarda antes
- [ ] **P14:** Tobias na gola — halfling baixo, braço para cima
- [ ] Falas PT corretas (se houver balão)
- [ ] Sem watermark / anatomia quebrada

### Depois das 20 páginas

1. Revisão rápida da mesa (Discord / sessão).
2. [[../../index#Fase 3 — Site (leitor web)|Fase 3]] — `chapters.json` + leitor web.
3. Marcar `panels.md` e este ficheiro como `published`.

## Links

- [[panels|Painéis (roteiro página a página)]]
- [[README|Cap. 1 README]]
- [[../../00_Style_Bible|Style Bible]]

## Documentação v2 (jun/2026)

- [x] `panels.md` com poses por painel
- [x] `prompt-all-pages.md` prefixo v2 + CHARACTERS & POSES
- [x] `style.md` v2
- [x] Regenerar arte (`images-pending-regen`) — 2026-06-12 via Cursor GenerateImage
