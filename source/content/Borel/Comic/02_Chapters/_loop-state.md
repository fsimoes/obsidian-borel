# Borel HQ — loop state

| Campo | Valor |
|-------|-------|
| `next_cap` | 11 |
| `slug` | cap-11-sessao-11 |
| `folder` | cap-11-sombras-e-polvora |
| `target_pages` | TBD |
| `last_tick` | 2026-06-18 (tick loop 461257 #3) |
| `last_phase` | D — Cap 10 v2 publicado |
| `pages_done` | 18/18 PNG v2 |
| `loop_interval` | 3h |
| `loop_pid` | 95848, 71476 |
| `loop_armed_at` | 2026-06-18 |
| `loop_sentinel` | AGENT_LOOP_TICK_BOREL_HQ |
| `notes` | Cap 10 completo neste tick. Próximo: cap 11. |

## Como checar se o loop está ativo

```powershell
Get-Process -Id 95848,71476 -ErrorAction SilentlyContinue
Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -match 'AGENT_LOOP_TICK_BOREL' }
```

## Histórico

- **2026-06-18** — Tick loop 461257 #3: Cap 10 v2 (18 PNG), webp + build.
- **2026-06-18** — Tick loop 71897 #3: Cap 09 v2 (16 PNG), webp + build.
- **2026-06-18** — Tick loop 461257 #2: Cap 08 v2 (14 PNG), webp + build.
- **2026-06-18** — Tick loop 71897 #2: Cap 07 v2 (18 PNG), webp + build.
- **2026-06-18** — Tick loop 461257 #1: Cap 06 v2 (16 PNG), webp + build.
- **2026-06-18** — Tick loop 71897 #1: Cap 05 v2 (20 PNG), webp + build.
