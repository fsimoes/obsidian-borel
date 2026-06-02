---
title: Template — Características visuais
type: comic
tags:
  - rpg/borel
  - tipo/comic
  - template
---

# Template — Características visuais (quadrinho)

Copiar para cada personagem **antes** de gerar ref em `Referencias/`. Salvar como `PC_<nome>.md` (PC) ou `NPC_<nome>.md` (NPC).

Equipamento que muda com o jogo: [[00_Equipamento_Evolucao|00_Equipamento_Evolucao]].

## Identidade

| Campo | Valor |
|-------|--------|
| **Nome no prompt** | |
| **Jogador** | |
| **Raça / idade aparente** | |
| **Classe (visual)** | |

## Silhueta e corpo (LOCKED — identidade)

- Altura / build:
- Postura típica:

## Rosto e cabelo (LOCKED — identidade)

- Pele:
- Olhos:
- Cabelo:
- Barba / outros:

## Expressão padrão (LOCKED)

## Equipamento atual

| Campo | Valor |
|-------|--------|
| **`eq-id` ativo** | `eq-inicial` |
| **Válido desde** | Sessão … / Cap quadrinho … |
| **Ref** | `Referencias/pcs/<nome>-eq-inicial.webp` |

### Loadout (muda com a campanha)

- Armadura / traje:
- Capa / manto:
- Emblemas (ex.: dado no peito):
- Armas sempre visíveis:
- Itens opcionais (só em cenas específicas):

## Histórico de equipamento

| `eq-id` | Desde (sessão) | Cap HQ | Mudança | Ref |
|---------|----------------|--------|---------|-----|
| `eq-inicial` | | | Estado inicial quadrinho | |

*Adicionar linha nova em cada loot relevante — não apagar linhas antigas.*

## Variantes (não-equipamento)

| ID | Quando usar | Mudanças |
|----|-------------|----------|
| `default` | Forma normal | Identidade LOCKED + `eq-id` ativo |
| | lobisomem, máscara, ferido… | |

## Bloco Identidade LOCKED (inglês — rosto/corpo; raramente muda)

```
[NOME], [raça, idade, build, cabelo, rosto, olhos, expressão típica — sem armadura detalhada]
```

## Bloco Equipamento (inglês — por `eq-id`)

```
[armadura, cores, emblemas, armas fixas deste período]
```

## Prompt retrato completo

Unir: prefixo Style Bible + Identidade LOCKED + Equipamento (`eq-id` ativo) + `waist-up, neutral gray background…` + Avoid.

Ver [[01_Prompts_Retratos_ChatGPT]] ou seção **Prompt ChatGPT** abaixo.

## Status

- [ ] Identidade LOCKED aprovada
- [ ] Loadout `eq-inicial` aprovado
- [ ] Retrato do loadout ativo em `Referencias/`
- [ ] [[00_Equipamento_Evolucao|Regra de evolução]] entendida pela mesa
