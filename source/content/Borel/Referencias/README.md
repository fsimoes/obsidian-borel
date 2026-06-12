---
title: Referências visuais
type: comic
tags:
  - rpg/borel
  - tipo/comic
---

# Referências visuais

Imagens **aprovadas** para anexar no ChatGPT. Ver [[../Comic/00_Style_Bible|Style Bible]].

```
Referencias/
  pcs/       # jogadores — <nome>-eq-inicial.png
  pcs/archive/   # loadouts antigos (opcional)
  Npcs/      # NPCs — mesmo padrão eq-* (Windows: Npcs = npcs)
  style/     # estilo aprovado por capítulo
  Cenas/     # apoio de composição por sessão (não substitui refs de personagem)
```

## Estilo Cap. 1 (aprovado jun/2026)

| Arquivo | Uso |
|---------|-----|
| `style/cap-01-estilo-aprovado-dustin-traidor.png` | **Estilo alvo** — linha, cel-shade, paleta quente. Usar **só a arte**; ignorar balão/texto da imagem |
| `style/cap-01-estilo-aprovado-gola.png` | Ação, escala halfling×elfo, taverna; painel inferior = fuga/urgência |
| `style/cap-01-estilo-aprovado-tapa.png` | **Arquivo legado** — não usar (cena do tapa saiu do HQ) |
| `style/referencia-tirinha-rpg.png` | **Arquivo** — tentativa flat não aprovada; não usar no Cap. 1 |

Ver [[../Comic/02_Chapters/cap-01-negociacoes-frustradas/style-tirinha|style Cap. 1]].

## Estilo global v2 (jun/2026) — todos os caps

| Arquivo | Uso |
|---------|-----|
| `style/cap-01-estilo-aprovado-dustin-traidor.png` | Sempre anexar (linha, cel-shade, humor) |
| `style/cap-01-estilo-aprovado-gola.png` | Sempre anexar (ação, escala, urgência) |
| `style/cap-v3-humor-piloto.png` | **Aprovado jun/2026** — piloto humor v3, Cap. 5 pág. 004 (tackle Tony); ver [[../Comic/02_Chapters/cap-05-entre-rastros-risadas-e-revelacoes/prompt-pilot-004-humor|prompt piloto]] |

Ver [[../Comic/00_Style_Bible#Style Bible v2 — Borel Funny Webcomic (padrão global jun/2026)|Style Bible v2]].

**Equipamento muda na campanha:** cada loadout = uma ref + prompt. Ver [[../Comic/01_Cast_Model_Sheets/00_Equipamento_Evolucao|evolução de equipamento]].

## Aprovação em lote (jun/2026)

Blocos **D, E, F e G** (caps 11–20) + **Jorge v3** — aprovados pela mesa. Caps 11–20: status `ready-for-image-generation`.

Blocos **H, I e J** (caps 21–25) — aprovados pela mesa jun/2026 v3. Caps 21–25: status `ready-for-image-generation`.

## Regra de reutilização (jun/2026)

**Não regerar personagem que já tem ref aprovada** — anexar a ref existente + descrever no prompt só o que muda na cena (expressão, sujeira, pose, iluminação).

**Gerar ref nova apenas quando:**
- personagem **ainda não tem** retrato aprovado;
- o **design muda de verdade** (novo loadout fixo, forma alternativa, espécie/criatura nova);
- é **inimigo/objeto/ambiente** sem ref (golem, guardas de cristal, baú, navio).

**Não gerar** variante só por capítulo, humor ou “versão mais suja”, se a silhueta e roupa base são as mesmas — usar prompt na página.

**Exceções já documentadas como loadouts:** `bartrock-noble` / `normal` / `possessed`, `nightwolf-lycanthrope`, duos `borin-trash`.

## PCs — regeneração v3 (jun/2026)

**14/14 loadouts v3 aprovados** (jun/2026) — estilo `dustin-traidor` · [[pcs/README|pcs/README]].

Checklist e ordem: [[pcs/README|pcs/README.md]] — **14 arquivos** em `pcs/`:

`tony`, `dustin`, `kaelion`, `nightwolf`, `orestan`, `groih`, `borin`, `trash`, `borin-trash`, `bartrock-noble`, `bartrock-normal`, `bartrock-possessed`, `bartrock-mask-only`, `nightwolf-lycanthrope`

Prompts: [[../Comic/01_Cast_Model_Sheets/01_Prompts_Retratos_ChatGPT|01_Prompts_Retratos_ChatGPT.md]] · refs antigas → `pcs/archive/`

## NPCs (`Npcs/`)

| Personagem | Arquivo | Status |
|------------|---------|--------|
| Tobias Peso Morto (S1) | `Npcs/tobias-peso-morto-eq-inicial.png` | legado · regen v3 pendente |
| Emmergard | `Npcs/emmergard-eq-inicial.png` | aprovada jun/2026 v3 |
| Celeste | `Npcs/celeste-eq-inicial.png` | aprovada jun/2026 v3 |
| Nikov | `Npcs/nikov-eq-inicial.png` | aprovada jun/2026 v3 |
| Criatura lupina | `Npcs/criatura-lupina-celeste.png` | aprovada jun/2026 v3 |
| Rita Dente de Bronze | `Npcs/rita-dente-de-bronze.png` | aprovada bloco A jun/2026 v3 |
| Alberto Eder | `Npcs/alberto-eq-inicial.png` (+ `Alberto.png` cópia) | aprovada bloco A jun/2026 v3 |
| Lucian | `Npcs/lucian-eq-inicial.png` | aprovada bloco A jun/2026 v3 |
| Jonas (cap. 3) | `Npcs/jonas-guarda-rilonde.png` | legado |
| Trapaceiro (cap. 3) | `Npcs/trapaceiro-dados-enguia-roxa.png` | legado |
| Figurantes Rilonde | `Npcs/figurantes-rilonde-guardas-trabalhadores.png` | legado |
| Criatura baú cristalina | `Npcs/criatura-bau-cristalina.png` | legado |
| Baronesa Helena | `Npcs/baronesa-helena.png` | aprovada bloco B jun/2026 v3 |
| Letícia | `Npcs/leticia-servical.png` | aprovada bloco B jun/2026 v3 |
| Cavaleiro Misterioso | `Npcs/cavaleiro-misterioso.png` | aprovada bloco B jun/2026 v3 |
| Goblins clã estrada | `cap-07/.../refs/goblins-cla-estrada.png` | aprovada bloco B jun/2026 v3 |
| Ogro great club | `cap-07/.../refs/ogro-great-club.png` | aprovada bloco B jun/2026 v3 |
| Elriste ext./int. | `cap-07/.../refs/elriste-exterior-interior.png` | aprovada bloco C jun/2026 v3 |
| Axolotl Ancião | `Npcs/axolotl-anciao.png` | aprovada bloco C jun/2026 v3 |
| Homens-sapo | `Npcs/homens-sapo.png` | aprovada bloco C jun/2026 v3 |
| Homem da Tocha | `Npcs/homem-da-tocha.png` | aprovada bloco C jun/2026 v3 |
| Marujos do navio | `Npcs/marujos-navio.png` | aprovada bloco C jun/2026 v3 |
| Navio de pólvora | `Npcs/navio-polvora.png` | aprovada bloco C jun/2026 v3 |
| Ivan (negociador) | `Npcs/ivan-guarda.png` | aprovada bloco D jun/2026 v3 |
| Golem Guardião | `Npcs/golem-guardiao.png` | aprovada bloco D jun/2026 v3 |
| Rita eq-revolta | `Npcs/rita-dente-de-bronze-eq-revolta.png` | aprovada bloco D jun/2026 v3 |
| Guardas de Cristal | `Npcs/guardas-de-cristal.png` | aprovada bloco D jun/2026 v3 |
| Maga Quartel Sul | `Npcs/maga-quartel-sul.png` | aprovada bloco D jun/2026 v3 |
| Baú artefato | `Npcs/bau-artefato.png` | aprovada bloco E jun/2026 v3 |
| Geraldinho | `Npcs/geraldinho-eq-inicial.png` | aprovada bloco E jun/2026 v3 |
| Castelo — pátio do cerco | `Npcs/castelo-patio-cerco.png` | aprovada bloco E jun/2026 v3 |
| Guardas rebeldes perseguidores | `Npcs/guardas-rebeldes-perseguidores.png` | aprovada bloco E jun/2026 v3 |
| Puzzle arcano — sala | `cap-11/.../refs/puzzle-arcano-sala.png` | aprovada bloco E jun/2026 v3 |
| Jorge | `Npcs/jorge-eq-inicial.png` (+ `Jorge.png` cópia wiki) | aprovada jun/2026 v3 |
| Thaís Carla (legado) | `Npcs/TahisCarla.png` | pintura realista · **não usar v3** |
| Thaís Carla | `Npcs/thais-carla-eq-inicial.png` | aprovada bloco F jun/2026 v3 |
| Eco (guardião santuário) | `Npcs/eco-guardiao-santuario.png` | aprovada bloco F jun/2026 v3 |
| Converto | `Npcs/converto-eq-inicial.png` | aprovada bloco G jun/2026 v3 |
| Criatura floresta | `Npcs/criatura-floresta-cap19.png` | aprovada bloco F jun/2026 v3 |
| Espectro | `Npcs/espectro-cap19.png` | aprovada bloco F jun/2026 v3 |
| Bebom | `Npcs/bebom-eq-inicial.png` | aprovada bloco G jun/2026 v3 |
| Mago Portais Namarath | `Npcs/mago-portais-namarath-eq-inicial.png` | aprovada bloco G jun/2026 v3 |
| Máscara xamã (objeto) | `Npcs/mascara-xama-nightwolf.png` | aprovada bloco G jun/2026 v3 |
| Cerberus | `Npcs/cerberus-eq-inicial.png` | aprovado bloco H jun/2026 v3 |
| Minhocas gigantes | `Npcs/minhocas-gigantes-cap22.png` | aprovado bloco H jun/2026 v3 |
| Corredor cogumelos (ambiente) | `Npcs/corredor-cogumelos-cap23.png` | aprovado bloco I jun/2026 v3 |
| Golems elementais | `Npcs/golems-elementais-cap24.png` | aprovado bloco I jun/2026 v3 · ≠ golem-guardiao |
| Uruk possuído | `Npcs/uruk-possuido-eq-inicial.png` | aprovado bloco J jun/2026 v3 |
| Uruk recuperado | `Npcs/uruk-eq-inicial.png` | aprovado bloco J jun/2026 v3 |
| Criatura modificada (cela) | `Npcs/criatura-modificada-cela-cap25.png` | aprovada bloco J jun/2026 v3 (regen) |

**Loadout PC:** `pcs/bartrock-mask-only-eq-inicial.png` — máscara caída S19+ (bloco F · aprovado jun/2026 v3).

## Blocos H / I / J — caps 21–25 (jun/2026)

| Bloco | Arquivos | Caps |
|-------|----------|------|
| **H** | `cerberus-eq-inicial` · `minhocas-gigantes-cap22` | 21–22 |
| **I** | `corredor-cogumelos-cap23` · `golems-elementais-cap24` | 23–24 |
| **J** | `uruk-possuido-eq-inicial` · `uruk-eq-inicial` · `criatura-modificada-cela-cap25` | 25 |

Status: **aprovado** jun/2026 v3. Ver `refs/README.md` em cada pasta `cap-XX-*`.
