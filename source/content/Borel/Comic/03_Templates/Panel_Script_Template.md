---
title: Template — roteiro de painéis
type: comic
tags:
  - rpg/borel
  - tipo/comic
  - template
---

# Template — roteiro de painéis

Copiar para `Comic/02_Chapters/cap-XX-<slug>/panels.md` após o `script.md` (beats) estar fechado.

## Cabeçalho

```yaml
---
title: "Painéis — Cap. N"
status: draft | ready | generating | review | published
target_pages: N
fidelity: reconstructed | documented
chatgpt_thread: "uma conversa por capítulo"
---
```

## Por página

### Página `NN` — título curto

| Campo | Valor |
|-------|--------|
| **Arquivo final** | `source/public/comic/cap-XX-sessao-YY/NNN.webp` |
| **Refs anexar** | `pcs/...` · `npcs/...` |
| **Model sheets** | [[PC_…]] · [[NPC_…]] |

#### Painel `NN-a` · `canon` | `inferred`

- **Cena:** …
- **Fala:** *(opcional)* Balão **Nome**: `"texto exato PT"`

**Personagens e poses** (obrigatório — ver [[Pose_Prompt_Block|Pose_Prompt_Block.md]]):

| Personagem | LOCKED | Pose | Expressão | Mãos/olhar | Ref |
|------------|--------|------|-----------|------------|-----|
| … | … | … | … | … | … |

- **Prompt:** prefixo Style Bible **v2** + `CHARACTERS & POSES` + Avoid v2
- **Status:** `[ ]` gerado · `[ ]` mesa OK

---

## Tags

| Tag | Uso |
|-----|-----|
| `canon` | Mesa ou Livro/Sessão explícito |
| `inferred` | Gap-fill documentado no script |

## Regras

- Uma **conversa ChatGPT** por capítulo; mesmo prefixo em todos os painéis.
- **Lord Bart** (S1–2) = nome no prompt **Lord Bart** + ref `bartrock-noble-eq-inicial.png`.
- Painel com fala: texto **entre aspas**, português revisado na mesa.
- Ver [[../00_Style_Bible|Style Bible]] · [[../02_Chapters/cap-01-negociacoes-frustradas/production|exemplo production.md]]
