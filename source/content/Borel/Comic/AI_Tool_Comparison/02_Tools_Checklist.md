---
title: Checklist de ferramentas
type: comic
tags:
  - rpg/borel
  - tipo/comic
  - comic/bakeoff
---

# Checklist de ferramentas

Marcar o que foi testado e como configurar **referência de personagem** (T3, T5).

| # | Ferramenta | Testado? | Plano / custo | Ref T2 (T3) | Ref T2 (T5) | Notas |
|---|------------|----------|---------------|-------------|-------------|-------|
| 1 | [Midjourney](https://www.midjourney.com) | ☐ | | `--cref <url da T2>` | mesmo | |
| 2 | [Leonardo.ai](https://leonardo.ai) | ☐ | | Character Reference upload | | |
| 3 | ChatGPT / GPT Image (Plus) | ☐ | | Anexar T2 no chat | | |
| 4 | [Adobe Firefly](https://firefly.adobe.com) | ☐ | | Structure / reference image | | |
| 5 | [Ideogram](https://ideogram.ai) | ☐ | | Character reference se disponível | | Bom em texto? |
| 6 | ComfyUI (Flux / SDXL) | ☐ | GPU local | IP-Adapter / InstantID | | |
| 7 | Fooocus | ☐ | GPU local | Image prompt | | |
| 8 | DALL·E (separado) | ☐ skip | | | | Redundante com #3? |

## Ferramentas não testadas

| Ferramenta | Motivo |
|------------|--------|
| | |

## Dicas rápidas

### Midjourney

1. Gerar T1, upscale se necessário.
2. T2 → copiar URL da imagem.
3. T3: adicionar `--cref <url T2> --cw 100` (ajustar cw se rosto mudar demais).
4. T4/T5: mesmo estilo no prompt; T5 pode usar `--cref` da T2 só no Tony.

### Leonardo

1. Criar projeto com estilo fixo.
2. T2 → "Set as Character Reference".
3. T3/T5: ativar Character Reference + colar prompt.

### ChatGPT (GPT-4o image)

1. Colar prompt T1; pedir mesma sessão para T2–T5.
2. Anexar `T2-tony-retrato.png` antes de T3 e T5.
3. Verificar se aceita "exact Portuguese text" em T4.

### Ideogram

1. Priorizar teste **T4 e T5** cedo (texto).
2. Usar modo que aceita texto explícito no prompt.

## Exportação

- Formato preferido: **WebP** ou PNG, largura ~1400px.
- Nomes: ver [[00_Test_Prompts]].
