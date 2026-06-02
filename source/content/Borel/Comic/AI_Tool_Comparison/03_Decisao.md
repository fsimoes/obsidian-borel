---
title: Decisão — Ferramenta de arte
type: comic
tags:
  - rpg/borel
  - tipo/comic
  - comic/bakeoff
status: concluido
---

# Decisão da mesa — Bake-off de IAs

**Data:** 2026-06-01  
**Decisão:** usar **apenas ChatGPT (GPT Image)**. Outras ferramentas **não serão testadas** — resultados T1–T5 atenderam estilo, consistência, texto PT e diálogo.

## Resultado

| Campo | Valor |
|-------|-------|
| **Ferramenta principal** | ChatGPT Plus (GPT Image / DALL·E) |
| **Ferramenta secundária** | Nenhuma |
| **Lettering** | **Na IA** — T4 e T5 com português correto e legível |
| **Refs de personagem** | Retrato neutro (T2, T2b) + anexar na mesma conversa para cenas e T5 |

## ChatGPT — testes concluídos

| Teste | Arquivo | Resultado |
|-------|---------|-----------|
| T1 | `T1-taverna.png` | OK — ambiente |
| T2 | `T2-tony-retrato.png` | OK — ref Tony |
| T3 | `T3-tony-consistencia.png` | OK — mesmo Tony |
| T4 | `T4-balao-unico-pt.png` | OK — balão PT correto |
| T2b | `T2b-nightwolf-retrato.png` | OK — ref Nightwolf |
| T5 | `T5-dialogo-dois-pt.png` | OK — dois balões PT, ambos personagens |

Pasta: [[results/chatgpt-image/notas|notas ChatGPT]]

## Motivação

O bake-off parou no ChatGPT porque entregou:

- Estilo fantasy coerente o suficiente para a mesa
- **Tony** consistente entre T2, T3, T4 e T5
- **Nightwolf** com ref T2b reconhecível no T5
- **Falas em português** sem lettering manual nestes testes

Não há necessidade de comparar Midjourney, Leonardo, Firefly, etc. neste projeto.

## Estratégia de produção (Borel)

- **Uma conversa ou thread por capítulo** (ou por bloco de cenas), mantendo estilo
- **Por personagem novo:** retrato fundo cinza → salvar em `Referencias/pcs/` ou `npcs/`
- **Cenas com fala:** prompt completo + refs anexadas; revisar ortografia na mesa
- **Estilo T1 (hachura)** vs **personagens (mais pintura):** aceito; se quiser unificar depois, refinar prompt base no Style Bible

## Próximo passo

→ Criar [[../00_Style_Bible|00_Style_Bible.md]] com:

- `tool: chatgpt-image`
- `lettering: ai`
- Prompt base copiado de [[00_Test_Prompts]]
- Workflow: T2/T2b para elenco → páginas numeradas → site

→ Fase 0.2: refs dos 8 PCs + NPCs Tier A em `Referencias/`
