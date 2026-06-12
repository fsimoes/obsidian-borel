# Estrutura de Quadrantes

Cada **quadrante** é um mapa jogável de RPG: uma área com encontros, rotas, terreno, pontos de interesse e pelo menos uma saída para outro quadrante ou andar. O andar inteiro não precisa ser desenhado como um mapa único; ele é uma malha de quadrantes.

## Escala

| Tamanho do andar | Grade | Total de quadrantes | Uso                                         |
| ---------------- | ----- | ------------------- | ------------------------------------------- |
| Muito pequeno    | 1 × 1 | 1                   | Final, entrada, boss, área compacta         |
| Pequeno          | 2 × 2 | 4                   | Andar curto, pressão alta, poucas escolhas  |
| Médio-pequeno    | 3 × 2 | 6                   | Exploração contida, uma facção forte        |
| Médio            | 3 × 3 | 9                   | Facções, rotas alternativas, boss opcional  |
| Grande           | 4 × 3 | 12                  | Bioma amplo, conflito territorial           |
| Muito grande     | 4 × 4 | 16                  | Região extensa, travessia e sobrevivência   |
| Imenso           | 5 × 4 | 20                  | Andar-mundo, desorientação e escala absurda |

## Regra de conteúdo por quadrante

Cada quadrante deve ter de 1 a 3 elementos:

- Um ponto de interesse: ruína, ponte, abrigo, máquina, catedral, ninho, praça, torre.
- Um risco: patrulha, armadilha, terreno instável, magia, fome, perseguição.
- Uma escolha: rota curta perigosa, rota longa segura, acordo, atalho, custo.

Nem todo quadrante precisa ter combate. Alguns existem para navegação, descanso, tensão, pista ou consequência.

## Regra de conexões

Cada andar deve ter:

- 1 entrada provável vindo de baixo.
- 2 ou mais rotas internas relevantes.
- 1 rota óbvia para cima, perigosa.
- 1 rota alternativa para cima, social, secreta ou técnica.
- 1 boss local opcional em um quadrante lateral ou dominante.

O boss local nunca deve ser a única passagem. Se ele controla a melhor rota, deve existir outra rota com custo diferente.

## Distribuição por andar

| Andar | Tamanho | Grade | Quadrantes | Observação |
|-------|---------|-------|------------|------------|
| 10 | Imenso | 5 × 4 | 20 | Deserto de obsidiana; escala, orientação e sobrevivência |
| 9 | Muito grande | 4 × 4 | 16 | Fungos gigantes; névoa, esporos, caminhos vivos |
| 8 | Grande | 4 × 3 | 12 | Floresta de raízes; refúgio e primeiras facções frágeis |
| 7 | Grande | 4 × 3 | 12 | Ossuário e cânions; bandos territoriais |
| 6 | Médio | 3 × 3 | 9 | Cidade soterrada; política forte de facções |
| 5 | Médio | 3 × 3 | 9 | Máquinas e elevadores; rotas técnicas |
| 4 | Médio-pequeno | 3 × 2 | 6 | Campo de guerra orc e ogro; trincheiras e corredores arriscados |
| 3 | Pequeno | 2 × 2 | 4 | Túneis e prisão natural; pressão e escassez |
| 2 | Pequeno | 2 × 2 | 4 | Stratum antigo; prova quebrada e revelações |
| 1 | Muito pequeno | 1 × 1 | 1 | Área de treino corrompida; cerco final |

## Modelo de quadrante

```md
## Q-XX — Nome

Função:
Entrada, travessia, conflito, refúgio, boss, pista ou subida.

Descrição:
O que os jogadores veem primeiro.

Conexões:
- Norte:
- Sul:
- Leste:
- Oeste:
- Cima:
- Baixo:

Conteúdo:
- Ponto de interesse:
- Risco:
- Escolha:

Monstros/facção:

Consequência:
O que muda se os PJs ignorarem, ajudarem, destruírem ou negociarem.
```

## Notação

Use `A10-Q01` para Andar 10, Quadrante 01; `A06-Q05` para Andar 6, Quadrante 05, e assim por diante.

Para mapas visuais, um quadrante pode ser desenhado como battlemap, diagrama simples ou bloco de exploração. O importante é ele ter função clara na subida.
