---
title: "Exemplos de Uso dos Componentes RPG"
type: indice
tags:
  - rpg/borel
  - tipo/indice
  - exemplos
---

# Exemplos de Uso dos Componentes RPG

Este documento mostra como usar os componentes customizados no Quartz.

## StatusBadge

O componente StatusBadge exibe badges de status com cores diferentes.

### Exemplo 1: Status Simples

```rpg-status
{
  "status": "Ativo"
}
```

### Exemplo 2: Status com Urgência

```rpg-status
{
  "status": "Ativo",
  "urgency": "Crítica"
}
```

### Exemplo 3: Status Customizado

```rpg-status
{
  "status": "Transformado",
  "urgency": "Alta"
}
```

## Timeline

O componente Timeline exibe uma linha do tempo de eventos.

```rpg-timeline
{
  "title": "Eventos Importantes da Campanha",
  "events": [
    {
      "date": "Sessão 16",
      "title": "Nightwolf revela licantropia",
      "description": "Durante a fuga para Rilonde, Nightwolf se transforma em lobisomem",
      "type": "transformacao",
      "link": "/Borel/Sessoes/Capitulo 16 – Sombras do Passado"
    },
    {
      "date": "Sessão 21",
      "title": "Ressurreição de Nightwolf",
      "description": "Bartrock realiza ritual épico trazendo Nightwolf de volta à vida",
      "type": "resurreicao",
      "link": "/Borel/Sessoes/sessao 21_bloco02_resumo"
    },
    {
      "date": "Sessão 25",
      "title": "Descoberta dos Experimentos",
      "description": "Grupo descobre instalação onde pessoas são transformadas em criaturas",
      "type": "descoberta",
      "link": "/Borel/Sessoes/sessao 25_bloco01_resumo"
    }
  ]
}
```

## PlotDashboard

O componente PlotDashboard exibe um dashboard de plots ativos.

```rpg-plot
{
  "title": "Plots Ativos da Campanha",
  "plots": [
    {
      "title": "A Possessão de Bartrock",
      "link": "/Borel/Plots/A Possessao de Bartrock",
      "status": "Ativo",
      "urgency": "Crítica",
      "lastUpdate": "Sessão 25",
      "description": "Bartrock foi possuído por uma entidade através de uma máscara metálica. Desapareceu na Sessão 25."
    },
    {
      "title": "Os Experimentos Horrendos",
      "link": "/Borel/Plots/Os Experimentos Horrendos",
      "status": "Ativo",
      "urgency": "Alta",
      "lastUpdate": "Sessão 25",
      "description": "Instalação subterrânea onde pessoas são transformadas em criaturas modificadas."
    },
    {
      "title": "A Traição de Cerberus",
      "link": "/Borel/Plots/A Traicao de Cerberus",
      "status": "Ativo",
      "urgency": "Crítica",
      "lastUpdate": "Sessão 21",
      "description": "Antigo aliado se revelou trabalhando com o demônio."
    }
  ]
}
```

## CharacterCard

O componente CharacterCard exibe cards visuais de personagens.

### Exemplo 1: Personagem Completo

```rpg-character
{
  "name": "Nightwolf",
  "link": "/Borel/Players/Nightwolf",
  "class": "Ranger",
  "level": 8,
  "status": "Ativo",
  "location": "Londe",
  "firstAppearance": "Sessão 1",
  "lastAppearance": "Sessão 25",
  "plots": [
    "A Maldição de Nightwolf",
    "A Ressurreição de Nightwolf"
  ],
  "description": "Ranger especialista em combate à distância. Foi curado da licantropia e ressuscitado por Bartrock."
}
```

### Exemplo 2: Personagem Compacto

```rpg-character
{
  "name": "Tony",
  "link": "/Borel/Players/Tony",
  "class": "Fighter/Paladino",
  "level": 8,
  "status": "Ativo",
  "location": "Londe",
  "firstAppearance": "Sessão 1",
  "lastAppearance": "Sessão 25"
}
```

## Uso em Páginas

Você pode usar esses componentes em qualquer página markdown usando os blocos de código especiais:

- `rpg-status` - Para StatusBadge
- `rpg-timeline` - Para Timeline
- `rpg-plot` - Para PlotDashboard
- `rpg-character` - Para CharacterCard
- `rpg-component` - Para uso genérico (especificar `component` e `type` nas props)

## Notas

- Os componentes são renderizados no lado do cliente após o carregamento da página
- Os links devem ser relativos ao site (começar com `/`)
- As cores e estilos seguem o tema do Quartz (modo claro/escuro)
- Os componentes são responsivos e funcionam em dispositivos móveis
