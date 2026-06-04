---
title: "Refs Cap. 2 - ChatGPT"
type: comic
tags:
  - rpg/borel
  - tipo/comic
  - comic/cap-02
---

# Referencias - Cap. 2

Anexar nesta ordem ao gerar as paginas do Cap. 2.

| # | Ficheiro | Origem | Status |
|---|----------|--------|--------|
| 1 | `01-estilo-dustin-traidor.png` | `Referencias/style/cap-01-estilo-aprovado-dustin-traidor.png` | pronto |
| 2 | `02-estilo-gola.png` | `Referencias/style/cap-01-estilo-aprovado-gola.png` | pronto |
| 3 | `03-lord-bart-noble.png` | `Referencias/pcs/bartrock-noble-eq-inicial.png` | pronto |
| 4 | `04-nightwolf.png` | `Referencias/pcs/nightwolf-eq-inicial.png` | pronto |
| 5 | `05-dustin.png` | `Referencias/pcs/dustin-eq-inicial.png` | pronto |
| 6 | `06-tony.png` | `Referencias/pcs/tony-eq-inicial.png` | pronto |
| 7 | `07-nikov.png` | gerado para Cap. 2 | pronto |
| 8 | `08-capita-guarda.png` | gerado para Cap. 2 | ref auxiliar |
| 9 | `09-cama-final-topdown-heads-only.png` | gerado para Cap. 2 | ref preferida |
| 10 | `09-cama-final-topdown.png` | gerado para Cap. 2 | ref alternativa |
| 11 | `10-cabana-exterior.png` | gerado para Cap. 2 | ref auxiliar |

## Uso

- `01-02`: referencias de estilo.
- `03-07`: referencias de personagens principais.
- `08-11`: referencias auxiliares para cenas dificeis, especialmente capita, cama final e cabana exterior.
- Para a cama final, preferir `09-cama-final-topdown-heads-only.png`: coberta ate o pescoco, so cabecas visiveis, sem nudez visivel.

```powershell
# Exemplo (PowerShell) a partir da raiz do repo
$dst = "source/content/Borel/Comic/02_Chapters/cap-02-um-encontro-na-cabana/refs"
$style = "source/content/Borel/Referencias/style"
$pcs = "source/content/Borel/Referencias/pcs"
Copy-Item "$style/cap-01-estilo-aprovado-dustin-traidor.png" "$dst/01-estilo-dustin-traidor.png"
Copy-Item "$style/cap-01-estilo-aprovado-gola.png" "$dst/02-estilo-gola.png"
Copy-Item "$pcs/bartrock-noble-eq-inicial.png" "$dst/03-lord-bart-noble.png"
Copy-Item "$pcs/nightwolf-eq-inicial.png" "$dst/04-nightwolf.png"
Copy-Item "$pcs/dustin-eq-inicial.png" "$dst/05-dustin.png"
Copy-Item "$pcs/tony-eq-inicial.png" "$dst/06-tony.png"
```
