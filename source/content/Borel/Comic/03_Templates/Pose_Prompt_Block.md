---
title: Template — bloco personagem + pose
type: comic
tags:
  - rpg/borel
  - tipo/comic
  - template
---

# Template — personagem + pose por painel

Obrigatório em `panels.md` e espelhado em `prompt-all-pages.md` antes de `status: docs-ready`.

## Tabela em `panels.md` (por painel `NN-a`, `NN-b`…)

| Personagem | LOCKED (1 linha) | Pose | Expressão | Mãos/olhar | Ref |
|------------|------------------|------|-----------|------------|-----|
| Tony Tigger | plate prateada, d20 no peito, capa branca/vermelha, escudo leão | meio-lunge no tackle | olhos arregalados, sorriso orgulhoso | braços abertos no impacto | `tony-eq-inicial` |
| Senhorzinho | idoso magro, bengala de madeira, casaco marrom | tropeçando para frente | pânico total | bengala voando, mãos abertas | figurante |

### Colunas

| Coluna | Conteúdo |
|--------|----------|
| **LOCKED** | Traço fixo do model sheet (rosto, corpo, equipamento do capítulo) |
| **Pose** | Postura corporal completa (em pé, ajoelhado, perfil esquerdo, etc.) |
| **Expressão** | Rosto legível para humor ou drama |
| **Mãos/olhar** | Direção do olhar, gesto das mãos, objeto segurado |
| **Ref** | Arquivo em `Referencias/` ou `refs/` |

## Espelho em `prompt-all-pages.md`

```text
--- PAGE 004 ---
Layout: 2×2 grid, night plaza, warm lantern light.
Panel A — CHARACTERS & POSES: Tony Tigger (sprinting tackle, proud manic grin, arms wide); Old man (stumbling forward, cane flying, terrified face).
Panel B — CHARACTERS & POSES: Tony (pinning old man on cobblestones, still grinning); Old man (dazed stars); Kaelion and Dustin (running in background, shocked).
Panel C — CHARACTERS & POSES: Kaelion (grabbing Tony's shoulder, angry scowl); Tony (looking back sheepish); Dustin (horrified).
Panel D — CHARACTERS & POSES: Wide shot group freeze; Tony still on old man.
Bubbles: Tony thought "Eu corro e dou um tackle."; Old man "Ai, meu Deus!"; Kaelion "Solte ele, menino!"
```

## Regras

1. **Todo personagem visível** no painel entra na tabela ou na linha `CHARACTERS & POSES`.
2. **Figurantes** sem ref: descrever silhueta + pose; usar linha Avoid de figurantes no Style Bible.
3. **Humor:** exagerar expressão e gesto; manter proporções semi-realistas (não chibi).
4. **Mesma pose** em `panels.md` e `prompt-all-pages.md` — copiar/colar, não parafrasear.
5. Página com **1 painel** (capa): uma tabela ou um bloco `CHARACTERS & POSES` com quem aparecer.

## Variantes por capítulo (cabeçalho de `characters.md`)

| Personagem | Capítulos | Variante |
|------------|-----------|----------|
| Lord Bart / Bartrock | 1–2 | `bartrock-noble-eq-inicial` |
| Bartrock | 3–15 (até S16) | `bartrock-normal-eq-inicial` |
| Bartrock | S16+ | `bartrock-possessed` (só beats explícitos) |
| Nightwolf | sempre | ranger humanoide; **sem** lobisomem salvo flashback marcado |
| Amagard/Emmergard | 4+ | loira, germânica, compacta, forte |
