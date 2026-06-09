---
title: Protocolo — capítulo de comic por sessão
type: comic
tags:
  - rpg/borel
  - tipo/comic
  - template
  - workflow
---

# Protocolo — capítulo de comic por sessão

Objetivo: entregar um capítulo de comic completo para cada sessão, com pré-produção documentada, revisão antes das imagens, geração de páginas quando a ferramenta de imagem estiver disponível, revisão pós-imagem contra o roteiro e regeneração de páginas ou painéis com erro.

Este protocolo vale para todos os capítulos novos em `Comic/02_Chapters/cap-XX-*`. Ignorar `cap-00-elenco` para a sequência principal, usando-o apenas como referência de elenco.

## Prioridade das fontes

1. `Transcricoes/` é a fonte principal para frases, diálogos, piadas, tom de voz e falas de balão.
2. `Sessoes/` é a fonte principal para temas, eventos essenciais, beats narrativos, momentos-chave, estrutura dramática e importância relativa das cenas.
3. `Livro/Capitulo N*.md` é apoio de continuidade e prosa; não substitui `Transcricoes/` para falas nem `Sessoes/` para hierarquia narrativa.
4. Usar `Comic/00_Style_Bible.md`, `Comic/03_Templates/Panel_Script_Template.md`, capítulos anteriores em `Comic/02_Chapters`, `Resumo_Completo_Campanha.md`, `Cronologia.md`, `Players/`, `NPCs/`, `Locais/`, `Plots/`, `Referencias/` e `Comic/01_Cast_Model_Sheets/` para contexto, nomes, visual e continuidade.

Falas em `dialogues.md` devem vir das transcrições sempre que houver material correspondente. Pode condensar ou revisar para clareza, ortografia e tamanho de balão, mas sempre registrar fonte/bloco e marcar `inferred` quando não houver fala real adequada.

## Fase 1 — Seleção do capítulo

1. Identificar o maior capítulo existente em `Comic/02_Chapters` no padrão `cap-XX-*` e calcular o próximo número.
2. Encontrar a sessão correspondente, preferencialmente Sessão N para `cap-N`.
3. Ler primeiro `Sessoes/*.md` para temas, eventos e hierarquia narrativa.
4. Ler depois `Transcricoes/*.txt` para falas, humor, tom e balões.
5. Se houver vários blocos da sessão, ler todos os blocos relevantes antes de roteirizar.
6. Se não houver material novo suficiente, não inventar continuidade. Criar ou atualizar `Comic/02_Chapters/Rascunhos/Geracao_Diaria.md` com registro datado do que foi verificado, o que falta e o próximo passo.

## Fase 2 — Pré-produção obrigatória

Criar a pasta `Comic/02_Chapters/cap-XX-slug-do-titulo` antes dos documentos do capítulo.

### `concept.md`

Criar antes de qualquer roteiro de página. Deve conter:

- premissa;
- tema central vindo de `Sessoes/`;
- tom emocional;
- paleta;
- iluminação;
- cenários principais;
- ritmo visual;
- símbolos;
- cenas-chave;
- perigos;
- humor;
- gancho final;
- regras visuais do capítulo;
- fontes usadas de `Sessoes/` e `Transcricoes/`.

Definir `target_pages` entre 10 e 20 páginas e justificar no `concept.md` ou no `README.md`:

| Densidade da sessão | Páginas |
|---------------------|---------|
| Simples | 10-12 |
| Média | 13-16 |
| Densa, com batalhas, muitas viradas ou múltiplos blocos importantes | 17-20 |

### `characters.md`

Criar com PCs, NPCs aliados, NPCs neutros, inimigos/criaturas e figurantes. Para cada entrada, registrar:

- papel na cena;
- fonte;
- aparência canônica ou inferida;
- roupa/equipamento do período;
- atitude;
- refs visuais existentes;
- necessidade de nova referência;
- notas de consistência.

### `npc-sheets.md`

Criar sempre que houver NPC relevante. Para cada NPC, registrar:

- nome canônico;
- aliases;
- tipo;
- fontes em `Sessoes/` e `Transcricoes/`;
- papel dramático;
- relação com PCs;
- objetivo;
- segredo/subtexto, se houver;
- personalidade;
- tom de fala;
- falas-base da transcrição;
- aparência;
- roupa/equipamento;
- pose;
- expressões;
- paleta;
- refs existentes;
- prompt de model sheet/retrato se precisar de imagem nova;
- restrições visuais;
- continuidade futura.

Compatibilizar com `NPCs/` e `Comic/01_Cast_Model_Sheets/` sem contradizer cânone.

### `enemy-concepts.md`

Criar se houver inimigos, monstros ou criaturas sem referência visual suficiente. Incluir:

- silhueta;
- materiais/texturas;
- cores;
- ameaça visual;
- escala relativa;
- variações permitidas;
- variações proibidas;
- prompts de retrato/model sheet.

## Fase 3 — Roteiro e produção

Criar `README.md`, `script.md`, `panels.md` e `dialogues.md` somente depois de `concept.md`, `characters.md`, `npc-sheets.md` quando aplicável e `enemy-concepts.md` quando aplicável.

### `README.md`

Registrar:

- cânone;
- fontes usadas;
- documentos criados;
- estrutura;
- elenco;
- status;
- `target_pages`;
- arquivos exatos de `Sessoes/` e `Transcricoes/` usados.

### `script.md`

Trazer:

- ligação com capítulo anterior;
- ordem narrativa em beats;
- cenas obrigatórias;
- tom;
- gancho.

A seleção dos beats deve seguir `Sessoes/` e respeitar `concept.md`.

### `dialogues.md`

Consolidar falas curtas em português brasileiro para balões, baseadas em `Transcricoes/` quando possível, com fonte/bloco ou nota de condensação/adaptação. Marcar `inferred` quando a fala for criada para cobrir ausência de fala real adequada.

### `panels.md`

Quebrar o capítulo exatamente no `target_pages` escolhido, com:

- foco dramático por página;
- refs necessárias;
- falas apontando para `dialogues.md`;
- tags `canon` e `inferred` quando útil;
- **tabela Personagem | LOCKED | Pose | Expressão | Mãos/olhar | Ref** por painel (`NN-a`, `NN-b`…);
- respeito a `concept.md`, `characters.md`, `npc-sheets.md` e `enemy-concepts.md`.

### Produção

Criar `production.md`, `prompt-all-pages.md`, `style.md` e `refs/README.md` quando houver informação suficiente para manter o padrão dos capítulos anteriores.

Prompts de imagem devem combinar:

- `Comic/00_Style_Bible.md` — **prefixo v2** (Borel Funny Webcomic);
- `Comic/03_Templates/Pose_Prompt_Block.md`;
- `concept.md`;
- dados de personagens, NPCs e inimigos;
- descrição do painel;
- bloco **`CHARACTERS & POSES`** por painel (espelho de `panels.md`);
- fala exata quando houver.

Não criar prompts genéricos. Não marcar `ready-for-image-generation` sem poses explícitas em `panels.md` e `prompt-all-pages.md`.

## Fase 4 — Revisão pré-imagem obrigatória

Antes de gerar qualquer imagem, criar ou atualizar `review.md` revisando:

- `concept.md`;
- `characters.md`;
- `npc-sheets.md`;
- `enemy-concepts.md`;
- `README.md`;
- `script.md`;
- `panels.md`;
- `dialogues.md`;
- `production.md`;
- `prompt-all-pages.md`.

Checklist de revisão:

- fidelidade a `Sessoes/`;
- fidelidade das falas a `Transcricoes/`;
- continuidade com capítulos anteriores;
- consistência visual e narrativa;
- `target_pages`;
- ritmo;
- presença dos momentos importantes;
- gancho;
- legibilidade prevista dos balões;
- português brasileiro;
- ortografia e acentuação;
- ausência de texto em inglês nos balões;
- sequência de leitura;
- variação de composição;
- coerência de luz e paleta;
- prompts completos;
- refs necessárias;
- arquivos faltantes.

Se houver problemas leves, corrigir antes das imagens e registrar em `review.md`. Se houver problema grave, não gerar imagens; marcar status `needs-preimage-revision` e listar exatamente o que precisa ser corrigido.

## Fase 5 — Geração e revisão pós-imagem

Quando a ferramenta de imagem estiver disponível:

1. Gerar primeiro refs/model sheets pendentes listadas em `refs/README.md`, `npc-sheets.md` e `enemy-concepts.md`.
2. Gerar `pages/000-cover.webp`, quando houver capa planejada.
3. Gerar `pages/001.webp` até `pages/NNN.webp`, exatamente conforme `target_pages`.
4. Revisar cada página contra `panels.md`, `dialogues.md`, `prompt-all-pages.md`, `concept.md`, `characters.md`, `npc-sheets.md` e `enemy-concepts.md`.
5. Conferir visual, continuidade, balões, ortografia, acentuação, ordem de leitura e ausência de texto indevido.
6. Registrar o resultado em `review.md` e `pages/README.md`.
7. Regenerar páginas ou painéis com erro, documentando motivo, versão anterior e resultado esperado.
8. Só marcar como `ready` ou `published` depois de revisar as imagens finais contra o roteiro.

## Status recomendados

| Status | Uso |
|--------|-----|
| `draft` | seleção e leitura em andamento |
| `preproduction` | `concept.md`, elenco e conceitos visuais em criação |
| `script-review` | roteiro, falas e painéis em revisão |
| `needs-preimage-revision` | há problema grave antes das imagens |
| `docs-ready` | poses + `prompt-all-pages.md` v2 completos; arte antiga pendente (`images-pending-regen`) |
| `ready-for-image-generation` | pré-produção, roteiro, prompts v2 com poses e revisão pré-imagem aprovados |
| `image-review` | imagens geradas e em conferência |
| `needs-regeneration` | uma ou mais páginas/painéis precisam ser refeitos |
| `ready` | páginas finais revisadas e aprovadas |
| `published` | capítulo publicado no leitor |

## Entrega mínima por capítulo

Antes de imagem:

- `concept.md`
- `characters.md`
- `npc-sheets.md`, quando aplicável
- `enemy-concepts.md`, quando aplicável
- `README.md`
- `script.md`
- `dialogues.md`
- `panels.md`
- `production.md`
- `prompt-all-pages.md`
- `style.md`
- `refs/README.md`
- `review.md`

Depois de imagem:

- `pages/000-cover.webp`, se houver capa
- `pages/001.webp` a `pages/NNN.webp`
- `pages/README.md`
- `review.md` atualizado com revisão pós-imagem e regenerações
