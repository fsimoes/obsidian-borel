# Dungeon da Avaliacao

Dungeon oficial da guilda usada no exame de Bronze dos aventureiros registrados. Ela ocupa **4 salas**, cada uma tratada como **1 quadrante jogavel**. A guilda apresenta tudo como ambiente controlado, mas a ultima sala fica sobre pedra antiga e prepara o tremor do fim da sessao 2.

**Grupo alvo:** 6-7 PJs nivel 5.  
**Tom:** teste seguro, com sinais discretos de que existe algo errado por baixo.  
**Duracao:** sessoes 1 e 2.  
**Objetivos oficiais:** recuperar o selo de bronze, mapear a rota, lidar com risco sem perder disciplina.

## Mapa rapido

Grade 2 x 2:

```text
+--------------------------+--------------------------+
| Q1 - Portao e Luz Fria   | Q2 - Sala das Marcas     |
| entrada / 1o combate     | armadilha / pista antiga |
+--------------------------+--------------------------+
| Q3 - Galeria do Selo     | Q4 - Arena do Avaliador  |
| puzzle / bau / selo      | boss grande / tremor     |
+--------------------------+--------------------------+
```

Conexoes:

- `Q1 -> Q2`: porta leste.
- `Q2 -> Q3`: escada curta sul.
- `Q3 -> Q4`: porta selada aberta pelo puzzle.
- `Q4 -> SN-07`: fenda abre somente no tremor final.

Mapas Roll20: [[../Mapas/Mapas da Avaliacao Roll20]].

Tokens inimigos:

- [[../NPCs/Tokens dos Monstros#Goblin da Prova|Goblin da Prova]]
- [[../NPCs/Tokens dos Monstros#Guardiao de Treino|Guardiao de Treino]]
- [[../NPCs/Tokens dos Monstros#Avaliador de Bronze|Avaliador de Bronze]]

Tokens utilitarios:

- [[../NPCs/Tokens dos Monstros#Placa de Pressao|Placa de Pressao]]
- [[../NPCs/Tokens dos Monstros#Lamina Revelada|Lamina Revelada]]
- [[../NPCs/Tokens dos Monstros#Grade Caida|Grade Caida]]
- [[../NPCs/Tokens dos Monstros#Bau / Alavanca|Bau / Alavanca]]

## Regras de avaliacao

O [[../NPCs/Instrutor|avaliador Prata]] observa e anota:

- Boa nota: marcar mapa, checar portas, proteger aliados, capturar informacao, dividir tarefas.
- Nota ruim: correr sozinho, destruir objetivo, ignorar armadilha obvia, gastar recurso alto sem necessidade, pedir ajuda direta.
- O avaliador **nao luta**. Ele fica fora da iniciativa, observa, anota e so intervem se a prova precisar ser abortada por risco de morte claramente fora do esperado.

## Q1 - Portao e Luz Fria

Funcao: entrada, aquecimento e primeiro combate.

Descricao:

> O portao de treino tem o selo da guilda gravado em bronze gasto. Do outro lado, cristais azulados iluminam um corredor amplo, com colunas baixas e linhas brancas pintadas no chao. Tudo parece preparado demais, como se a masmorra tivesse sido arrumada antes da visita.

Conteudo:

- Ponto de interesse: placa **AREA CERTIFICADA - STRATUM NOVATO**.
- Risco: goblins treinados pela rotina do lugar usam cobertura.
- Escolha: avancar direto pelo centro ou usar as colunas laterais.

Encontro sugerido:

- 6 **goblins da prova** para 6 PJs.
- 7 **goblins da prova** para 7 PJs, ou 6 goblins se quiser bem leve.

Tatica:

- 2 goblins ficam em cobertura nas colunas.
- 2 goblins tentam flanquear.
- 1 goblin tenta fugir para Q2 se o grupo demorar mais de 3 rodadas.
- 1 goblin se rende se ficar sozinho.
- Eles evitam atacar personagem caido. A prova mede combate, nao execucao.

Terreno:

- Colunas baixas: meia cobertura.
- Cristais de luz fria: AC 12, 5 PV; quebrar um cristal cria penumbra em metade da sala.
- Piso escorregadio perto da entrada: Dexterity saving throw DC 11 ao correr; em falha, cai prone.

Pistas:

- Investigation DC 12: a parede nova cobre pedra antiga.
- Perception DC 14: ha marcas raspadas sob a tinta, apontando para Q2.

Tesouro:

- 18 gp em moedas misturadas.
- Um token velho de cobre com simbolo que nao pertence a guilda atual.

### Ficha - Goblin da Prova

Pequeno humanoide, neutro e mau

**CA** 15 (couro, escudo)  
**PV** 14 (4d6)  
**Deslocamento** 30 ft  
**XP sugerido:** 100 cada

| FOR | DES | CON | INT | SAB | CAR |
|-----|-----|-----|-----|-----|-----|
| 8 (-1) | 14 (+2) | 10 (+0) | 10 (+0) | 8 (-1) | 8 (-1) |

**Pericias** Stealth +6  
**Sentidos** darkvision 60 ft, Perception passiva 9  
**Idiomas** Comum quebrado, Goblin  

**Fuga agil.** O goblin pode usar Disengage ou Hide como bonus action.

**Ataques**

**Cimitarra.** Ataque corpo a corpo: +4 para acertar, alcance 5 ft, um alvo. Acerto: 5 (1d6 + 2) slashing.

**Arco curto.** Ataque a distancia: +4 para acertar, alcance 80/320 ft, um alvo. Acerto: 5 (1d6 + 2) piercing.

**Areia nos olhos, 1/dia.** Uma criatura a 5 ft faz Dexterity saving throw DC 12. Falha: fica blinded ate o fim do proximo turno dela. Sucesso: sem efeito.

**Calibragem:** 6-7 desses goblins formam uma luta facil para 6-7 personagens nivel 5, mas ainda dao movimento, cobertura e decisao tática.

## Q2 - Sala das Marcas

Funcao: armadilha, leitura de risco e primeira pista forte.

Descricao:

> Esta sala e limpa no centro e gasta nas bordas. Linhas brancas no piso indicam o caminho esperado da prova, mas a parede norte tem reboco quebrado. Por baixo dele ha sulcos profundos, paralelos, antigos demais para terem sido feitos durante a prova.

Conteudo:

- Ponto de interesse: parede com marcas antigas de garra.
- Risco: lamina de pressao e grade de separacao.
- Escolha: seguir a trilha branca segura ou investigar a parede fora da rota.

Armadilha 1 - Lamina de pressao:

- Detectar: Perception ou Investigation DC 12.
- Desarmar: thieves' tools DC 12.
- Disparar: ataque +5 contra uma criatura; 2d6 slashing damage.

Armadilha 2 - Grade de separacao:

- Dispara se 3 ou mais criaturas atravessarem a linha central sem marcar o chao.
- Dexterity saving throw DC 13 para escolher o lado da grade.
- A grade separa a sala por ate 1d4 rodadas.
- Erguer: Strength DC 15; quebrar: AC 15, 20 PV.

Pistas:

- Nature ou Survival DC 14: as marcas nao sao de goblin, lobo ou urso.
- Investigation DC 16: uma marca mais recente foi raspada e coberta.
- DC 18: os sulcos parecem vir de baixo para cima.

Bau opcional:

- Bau de manutencao preso atras da grade.
- Abrir: thieves' tools DC 13 ou chave no corpo de um goblin de Q1.
- Conteudo: 1 antitoxina, 1 healer's kit com 6 usos, 40 gp em material de manutencao vendavel.

## Q3 - Galeria do Selo

Funcao: puzzle, objetivo oficial e descanso curto narrativo.

Descricao:

> A galeria tem tres estatuas de aventureiros sem rosto: uma segura uma tocha, outra um escudo, outra um mapa. No fundo, um pedestal guarda o selo de bronze da prova. A porta para a arena final nao tem fechadura visivel, apenas tres encaixes gastos no chao.

Conteudo:

- Ponto de interesse: selo de bronze no pedestal.
- Risco: puzzle sob pressao e pequenos construtos de treino.
- Escolha: resolver com observacao, forcar o pedestal ou dividir o grupo.

Puzzle - Tres Virtudes da Guilda:

Objetivo: alinhar as tres estatuas para abrir a porta de Q4.

Solucao:

1. A estatua da **tocha** deve olhar para a parede com marcas antigas: "ver o perigo".
2. A estatua do **escudo** deve olhar para a entrada: "proteger a retirada".
3. A estatua do **mapa** deve olhar para a porta de saida: "saber voltar".

Pistas:

- Inscricao no pedestal: "Coragem entra. Disciplina volta."
- Investigation DC 12: cada estatua gira sobre trilhos.
- History ou Insight DC 13: a guilda usa tres virtudes em provas antigas: observacao, protecao, retorno.
- Perception DC 14: arranhoes no chao mostram posicoes usadas por turmas anteriores.

Falhas:

- A cada combinacao errada, 2 guardianes de treino surgem de nichos.
- Use **guardioes de treino** abaixo.
- Depois de 3 falhas, a porta abre, mas o avaliador marca erro grave de leitura.

Selo de bronze:

- Retirar corretamente: sem teste depois do puzzle.
- Forcar antes do puzzle: Strength DC 16 ou thieves' tools DC 15; em falha, 2d6 lightning damage em quem mexeu e alerta Q4.

Bau:

- Bau baixo atras da estatua do mapa.
- Abrir: Investigation DC 13 para achar trava falsa; thieves' tools DC 14.
- Conteudo: 1 potion of climbing, 1 potion of healing, 65 gp, diario rasgado com a frase: "nao era fundacao. era tampa."

## Q4 - Arena do Avaliador

Funcao: boss grande, conclusao da prova e gancho do tremor.

Descricao:

> A ultima sala e uma arena retangular com marcas circulares no piso. Correntes presas ao teto seguram uma massa enorme sob lona encerada. Quando a porta fecha atras de voces, sinos pequenos tocam dentro das paredes. A lona cai, revelando um construto alto, largo, feito de madeira escura, ferro e placas de pedra: o Avaliador de Bronze.

Conteudo:

- Ponto de interesse: boss de treino tamanho Large.
- Risco: area com colunas quebraveis, correntes e tremor crescente.
- Escolha: derrotar, imobilizar, derrubar com terreno ou ativar parada de emergencia.

Boss - Avaliador de Bronze

Use a ficha completa no fim deste documento. Ele foi calibrado como **boss medio** para 6-7 PJs nivel 5, sem ajuda do avaliador.

Campo de batalha:

- 4 colunas rachadas: AC 13, 15 PV. Derrubar uma coluna cria cobertura pesada e forca Dexterity saving throw DC 13 em criatura adjacente; falha causa 2d6 bludgeoning.
- Correntes do teto: podem ser puxadas com Strength DC 15 para reduzir o deslocamento do boss pela metade por 1 rodada.
- Alavanca de emergencia: Investigation DC 14 para localizar, Action para ativar. Desliga o boss por 1 rodada, mas custa pontos de avaliacao se usada sem perigo real.

Complicacao do tremor:

No fim do combate, ou quando o boss ajoelha:

- A parede sul racha.
- Todas as criaturas fazem Dexterity saving throw DC 12; falha cai prone.
- Falha por 5 ou mais: 1d6 bludgeoning por queda de pedra.
- A rachadura revela ar quente e antigo: `SN-07`.

Importante: nao mostre o [[../NPCs/O Predador|Predador]] inteiro ainda. Mostre so cheiro metalico, arranhoes ou uma garra sumindo na poeira.

Tesouro final:

- O selo de bronze da prova.
- Medalhao de aprovacao provisoria, se a guilda conseguir registrar antes do caos.
- 120 gp em componentes de manutencao, se os PJs tiverem tempo e permissao para saquear.
- Opcional: 1 scroll of lesser restoration em um estojo de emergencia lacrado.

## Ajuste de dificuldade

Para deixar mais facil:

- Q1 com 4 goblins.
- Q3 ativa apenas 1 guardiao por falha.
- Boss com 120 PV e sem a acao lendaria **Passo Pesado**.

Para deixar mais dificil:

- Q1 com 7 goblins e 1 goblin chefe oficial do Monster Manual.
- Q3 ativa 2 guardioes por falha e eles agem imediatamente.
- Boss com 165 PV e recarga do Pisao em 4-6.

## Ritmo por sessao

Sessao 1:

- Briefing.
- Q1.
- Q2.
- Fechar com as marcas antigas.

Sessao 2:

- Q3.
- Q4.
- Tremor abre `SN-07`.
- Fechar com o avaliador ordenando retirada.

## Estado apos a dungeon

- Se tudo correu bem: os PJs completaram a prova formalmente, mas a masmorra quebrou antes da volta.
- Se falharam muito: o avaliador ainda tenta retirar todos; ele critica a disciplina, nao a coragem.
- O selo vira prova fisica de que eles fizeram a parte deles.
- A guilda acima nao entende a escala do que acabou de abrir.

## Fichas de monstros da avaliacao

### Guardiao de Treino

Pequeno constructo, sem alinhamento

**CA** 14  
**PV** 18 (4d6 + 4)  
**Deslocamento** 25 ft  
**XP sugerido:** 100 cada

| FOR | DES | CON | INT | SAB | CAR |
|-----|-----|-----|-----|-----|-----|
| 12 (+1) | 14 (+2) | 12 (+1) | 3 (-4) | 10 (+0) | 1 (-5) |

**Imunidades a dano** poison, psychic  
**Imunidades a condicao** charmed, frightened, poisoned  
**Sentidos** blindsight 30 ft, Perception passiva 10  
**Idiomas** entende comandos da guilda, mas nao fala

**Protocolo de contencao.** O guardiao nao faz ataque contra criatura inconsciente.

**Ataques**

**Lamina romba.** Ataque corpo a corpo: +4 para acertar, alcance 5 ft, um alvo. Acerto: 6 (1d8 + 2) bludgeoning.

**Rede de treino, recarga 5-6.** Ataque a distancia: +4 para acertar, alcance 20/60 ft, uma criatura Medium ou menor. Acerto: o alvo fica restrained. Uma criatura pode usar uma action para fazer Strength DC 12 e romper a rede.

### Avaliador de Bronze

Large constructo, sem alinhamento

**CA** 17 (placas de bronze e pedra)  
**PV** 145 (17d10 + 51)  
**Deslocamento** 30 ft  
**XP sugerido:** 2.900

| FOR | DES | CON | INT | SAB | CAR |
|-----|-----|-----|-----|-----|-----|
| 20 (+5) | 10 (+0) | 16 (+3) | 6 (-2) | 12 (+1) | 5 (-3) |

**Saving Throws** Str +8, Con +6, Wis +4  
**Resistencias a dano** bludgeoning, piercing e slashing de ataques nao magicos  
**Imunidades a dano** poison, psychic  
**Imunidades a condicao** charmed, exhaustion, frightened, paralyzed, petrified, poisoned  
**Sentidos** blindsight 30 ft, darkvision 60 ft, Perception passiva 11  
**Idiomas** entende Comum e comandos da guilda, mas nao fala

**Boss medio para 6-7 nivel 5.** Ele deve durar 3-4 rodadas. Se cair rapido demais, use mais terreno. Se estiver pesado demais, reduza o PV atual em 25 no meio do combate quando uma placa se soltar.

**Limiar de treino.** Quando chega a 25 PV ou menos, o Avaliador ajoelha e encerra a prova. Ele deixa de atacar. Se os PJs continuarem batendo, o avaliador Prata interrompe verbalmente e marca falha de disciplina.

**Ataques**

**Multiattack.** O Avaliador faz dois ataques de Punho de Bronze.

**Punho de Bronze.** Ataque corpo a corpo: +8 para acertar, alcance 10 ft, um alvo. Acerto: 14 (2d8 + 5) bludgeoning.

**Pisao de Bronze, recarga 5-6.** Todas as criaturas a ate 10 ft fazem Dexterity saving throw DC 15. Falha: 13 (3d8) bludgeoning e cai prone. Sucesso: metade do dano e nao cai.

**Varredura de Corrente.** Ataque corpo a corpo: +8 para acertar, alcance 15 ft, ate duas criaturas em linha. Acerto: 10 (1d10 + 5) bludgeoning, e o alvo faz Strength saving throw DC 15 ou e empurrado 10 ft.

**Reacao**

**Placa Defletora.** Quando for atingido por um ataque, o Avaliador ganha +3 CA contra esse ataque. Se isso fizer o ataque errar, o atacante corpo a corpo deve passar em Strength saving throw DC 14 ou ser empurrado 5 ft.

**Acoes lendarias**

O Avaliador tem 2 acoes lendarias por rodada, usadas no fim do turno de outra criatura. Ele recupera as acoes lendarias no inicio do proprio turno.

**Giro de Cabeca.** Faz um teste de Perception +4.  
**Passo Pesado.** Move ate metade do deslocamento sem provocar opportunity attacks.  
**Pancada Curta, custa 2 acoes.** Faz um ataque de Punho de Bronze contra uma criatura ao alcance.

**Tatica**

- Rodada 1: avanca para o centro e usa Pisao se 3 ou mais PJs estiverem perto.
- Rodada 2: usa Varredura para empurrar alguem para longe do grupo.
- Rodada 3 em diante: mira quem estiver isolado ou quem tentar usar a alavanca de emergencia.
- Ele nao persegue personagem inconsciente e nao ataca para matar.
