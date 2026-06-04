# Mapa Mestre do Complexo

Fonte única da verdade topológica para a campanha **Primeiro Dive** (10 sessões, 7 PJs). O jogador só vê o subset documentado em [[Stratum Novato]] e briefing na [[Antecamara da Guilda]]. Após a fuga do Predador, o grupo cai por um poço/fenda e acorda sem saber quantos andares desceu; a estrutura da campanha passa a ser **subir** até uma saída real.

## Legenda

| Código | Camada |
|--------|--------|
| `AN-*` | Antecâmara da guilda |
| `SN-*` | Stratum novato (mapa oficial da guilda) |
| `RP-*` | Zona de ruptura (pós-tremor) |
| `PV-*` | Poço vertical / queda |
| `PR-3` → `PR-1` | Andares inferiores, percorridos de baixo para cima |
| `NU-*` | Rotas superiores / saída, boss S10 |
| `SF-*` | Saída falsa (opcional) |

**Ligações:** porta (P), escada (E), fenda/poço (F), elevador (EV), subida vertical (SV).

---

## Estrutura macro — pirâmide invertida

Os PJs podem ter caído até perto do andar 10, mas não sabem disso de imediato. Os andares existem como escala ficcional; nem todos precisam virar uma sessão completa.

| Andar | Tamanho | Bioma / identidade | Boss local | Facções | Referência visual |
|-------|---------|--------------------|------------|---------|-------------------|
| 10 | Imenso | Deserto de obsidiana / catedrais de basalto | Opcional; colosso mineral ou criatura abissal seca | Nenhuma ou presença fragmentada | ![[../Mapas/Concepts/andar-10-deserto-obsidiana.png\|120]] |
| 9 | Muito grande | Fungos gigantes / névoa viva | Opcional; colônia-mãe ou predador micótico | Nenhuma ou bandos dispersos | ![[../Mapas/Concepts/andar-09-fungos-gigantes.png\|120]] |
| 8 | Grande | Floresta de raízes / árvores brancas | Opcional; guardião das raízes | Primeiras facções frágeis | ![[../Mapas/Concepts/andar-08-floresta-raizes.png\|120]] |
| 7 | Grande | Ossuário / cânions de pedra | Opcional; devorador de ossos | Bandos territoriais | ![[../Mapas/Concepts/andar-07-ossuario-canions.png\|120]] |
| 6 | Médio | Cidade soterrada / mercado morto | Opcional; chefe local ou morto antigo | **Conflito de facções começa forte** | ![[../Mapas/Concepts/andar-06-cidade-soterrada.png\|120]] |
| 5 | Médio | Máquinas antigas / elevadores quebrados | Opcional; construto ou operador corrompido | Facções disputam tecnologia/rotas | ![[../Mapas/Concepts/andar-05-maquinas-elevadores.png\|120]] |
| 4 | Médio-pequeno | Cristais / magia instável | Opcional; criatura arcana | Facções disputam energia/refúgio | ![[../Mapas/Concepts/andar-04-cristais-magia.png\|120]] |
| 3 | Pequeno | Túneis estreitos / prisão natural | Opcional; carcereiro ou monstro entrincheirado | Facções pressionadas, pouca comida | ![[../Mapas/Concepts/andar-03-tuneis-prisao.png\|120]] |
| 2 | Pequeno | Stratum antigo / protótipo da prova | Opcional; avaliador antigo ou guardião falho | Restos da influência da guilda | ![[../Mapas/Concepts/andar-02-stratum-antigo.png\|120]] |
| 1 | Muito pequeno | Área de treino corrompida | **Predador S10** | Quase nenhuma; cerco final | ![[../Mapas/Concepts/andar-01-treino-corrompido.png\|120]] |

### Bosses locais

- Cada andar pode ter um boss que representa o bioma ou controla uma rota.
- Nenhum boss local é obrigatório para subir.
- Derrotar, evitar, negociar ou usar um boss contra outra facção são soluções válidas.
- O único boss estrutural do arco é [[../NPCs/O Predador]], porque ele fecha a história começada na sessão 3.

### Facções

Das camadas médias para cima, as facções ficam mais organizadas porque há menos espaço e mais disputa por rotas. Elas devem oferecer escolhas, não só combates: passagem, abrigo, traição, informação, guias, cobrança de pedágio ou pedidos de ajuda.

---

## Grafo de setores

```
[SUPERFÍCIE / GUILDA]

    AN-01 Antecâmara ──EV──► Saída A (elevador guilda)
         │
         P
         ▼
    SN-01 Entrada stratum ──► SN-02 ──► SN-03 ──► SN-04 (selo)
                              │         │
                              │         └──► SN-05 (bifurcação)
                              │
    [TREMOR S2]                 └──► SN-06 (mural / diário)
         │
         ▼
    RP-01 Fenda do tremor / poço de queda
         │
         F  (fuga S3: queda em etapas; distância real desconhecida aos PJs)
         ▼
    PV-01 Fundo instável / andar desconhecido
         │
         SV
         ▼
    PR-3 Andar inferior (S4) ──► PR-3-05 (2º combate Predador — S7)
         │
         SV
         ▼
    PR-2 Andar intermediário (S5–6; facção / diários)
         │
         SV
         ▼
    PR-1 Andar superior antigo (S7–8; pistas do stratum)
         │
         SV
         ▼
    NU-01 Rota de ascensão / acesso bloqueado
         │
         ├──► NU-02 Poço de serviço para a superfície
         │
         └──► NU-03 Gruta natural ascendente
                    │
                    ▼
              NU-04 BOSS S10
              (O Predador — bloqueia a rota final de subida)
```

---

## Antecâmara (`AN-*`)

| Sala | Nome | Notas |
|------|------|-------|
| AN-01 | Salão de briefing | Mesa, contrato, kit de prova, mapa SN entregue aqui; início da prova de conclusão |
| AN-02 | Armazém | Cordas, rações, tochas, 1 kit de cura / party |
| AN-03 | Patamar do elevador | **Saída A** — funcional S1–2; selado após tremor (S3) |

**Sessões:** 1 (abertura). Long rest permitido (PHB) antes da descida.

---

## Stratum novato (`SN-*`)

| Sala | Nome | Encontro (7 PJs, lvl 5) | Objetivo guilda |
|------|------|-------------------------|-----------------|
| SN-01 | Portão de treino | — | Entrada |
| SN-02 | Corredor de luz fria | 4× Goblin ou 2× Giant Rat (fácil) | — |
| SN-03 | Sala das marcas | Armadilha simples (DC 12) | Mapear |
| SN-04 | Câmara do selo | 1× Hobgoblin + 2 Goblin (médio-fácil) | Recuperar selo |
| SN-05 | Bifurcação | — | Marcar no mapa |
| SN-06 | Recesso do mural | Lore: stratum é “casca” sobre ruínas | Pista profundezas |
| SN-07 | Antecâmara da fenda | — | **Tremor S2** abre para `RP-01` |

Ver detalhes: [[Stratum Novato]].

---

## Zona de ruptura (`RP-*`)

| Sala | Nome | Notas |
|------|------|-------|
| RP-01 | Fenda do tremor / poço de queda | Morte do [[Instrutor]] (S3); queda para `PV-01` |
| RP-02 | Desmoronamento | Inseguro; volta a SN-07 bloqueada ou acima demais para alcançar |

Ver: [[Fenda do Tremor]].

---

## Poço vertical (`PV-*`, Sessão 3–4)

| Sala | Nome | Tom | Notas |
|------|------|-----|-------|
| PV-01 | Fundo instável | Choque | PJs acordam sem saber quantos andares caíram |
| PV-02 | Raízes/ruínas/poeira de impacto | Sobrevivência | Explica como a queda não foi fatal; separa ou danifica recursos |
| PV-03 | Primeira subida visível | Tenso | Mostra que a saída fica acima, não adiante |

---

## Profundezas — Andar superior (`PR-1`, Sessões 7–8)

| Sala | Nome | Tom | Notas |
|------|------|-----|-------|
| PR-1-01 | Galeria de ossos | Tenso | Sinal de que estão perto do stratum |
| PR-1-02 | Câmara de eco | — | Sinais do [[O Predador]] |
| PR-1-03 | Nicho de explorador | — | Diário; pista de rota de subida |
| PR-1-04 | Santuário da pedra lisa | Refúgio | **Long rest** possível (PHB) |

---

## Profundezas — Andar intermediário (`PR-2`, Sessões 5–6)

| Sala | Nome | Tom | Notas |
|------|------|-----|-------|
| PR-2-01 | Ponte rachada | Brutal | Encontro médio (DMG ×1.5 budget) |
| PR-2-02 | Acampamento de refugiados | Social | Facção; vende poções / rumor |
| PR-2-03 | Depósito selado | — | Componentes? (diamante revivify — raro) |
| PR-2-04 | Inscrição da guilda antiga | — | Confirma: o stratum é só a camada superior |
| PR-2-05 | Escada / chaminé para PR-1 | — | Milestone → nível 7 |

---

## Profundezas — Andar inferior (`PR-3`, Sessões 4–7)

| Sala | Nome | Tom | Notas |
|------|------|-----|-------|
| PR-3-01 | Túnel estreito | Perseguição | Primeira rota de subida; sinais Predador |
| PR-3-02 | Câmara de pilares | Combate | Onda média |
| PR-3-03 | Covil abandonado | — | Pegadas do Predador; não é covil final |
| PR-3-04 | Santuário quebrado | — | Descanso arriscado |
| PR-3-05 | Arena natural | **S7** | 2º combate [[O Predador]] — **foge** ferido |

---

## Rotas superiores (`NU-*`, Sessões 8–10)

| Sala | Nome | Sessão | Notas |
|------|------|--------|-------|
| NU-01 | Corredor de ascensão | 8 | Condição da subida (chave, ritual, alavanca) |
| NU-02 | Boca do poço de serviço | 9–10 | **Saída B** — rota vertical até perto da superfície |
| NU-03 | Gruta de luz morta | 9–10 | **Saída C** — gruta natural ascendente |
| NU-04 | Antecâmara da fuga | 10 | **Boss final** = mesmo [[O Predador]] da S3, bloqueando a subida final |

---

## Saídas

| ID | Local | Estado inicial | Condição para funcionar | Sessão alvo |
|----|-------|----------------|-------------------------|-------------|
| **A** | AN-03 Elevador guilda | OK em S1–2 | Fica acima/inacessível após a queda; pode virar epílogo ou resgate tardio | — (backup narrativo) |
| **B** | NU-02 Poço de serviço | Parcialmente desmoronado | Limpar acesso + alavanca NU-01; pista no PR-1-03 | S9 abrir, S10 subir |
| **C** | NU-03 Gruta natural | Oculta | Diários PR-1/2; Predador derrotado S10 | S9 revelar, S10 subir |

### Saídas falsas (opcional)

| ID | Efeito |
|----|--------|
| SF-01 | Corredor que desce 30 m em círculo — volta a PR-3-02 |
| SF-02 | Portal instável — 2d10 dano de força; sem saída |

---

## Mapa dos jogadores vs mapa mestre

| O que o instrutor entrega (S1) | O que o DM conhece |
|--------------------------------|-------------------|
| `AN-01`, `AN-03` (rotas oficiais) | Todo o grafo acima |
| `SN-01` a `SN-06` (sem SN-07 pós-tremor) | `RP-*`, `PV-*`, `PR-*`, `NU-*`, rotas de subida |
| Legenda guilda: “área certificada” | Stratum construído sobre ruínas |

Após S3, o pergaminho está **inútil**: ele mapeia a prova, não o andar onde os PJs acordam.

---

## Checklist DM

- [ ] Grafo fechado; sem setores órfãos além de `SF-*`
- [ ] Queda deixa os PJs vivos, desorientados e sem noção de profundidade
- [ ] **Saída B ou C** alcançável por subida nas sessões 9–10
- [ ] **O Predador** liga RP-01 → NU-04 (mesma criatura S3 e S10)
- [ ] Encontros calibrados para **7 PJs** (DMG budget ×1.5–1.75)
- [ ] Campanha termina na S10 — não expandir além de `NU-*`

## Imagens

Export visual: pasta [[Mapas/]].
