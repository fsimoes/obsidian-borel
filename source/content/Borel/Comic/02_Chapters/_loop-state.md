# Borel HQ — loop state

| Campo | Valor |
|-------|-------|
| `next_cap` | 22 |
| `slug` | cap-22-sessao-22 |
| `folder` | cap-22-batalha-das-minhocas |
| `target_pages` | TBD |
| `last_tick` | 2026-06-19 (tick loop 3h) |
| `last_phase` | D — Cap 21 v2 publicado |
| `pages_done` | 19/19 PNG v2 (000–018) |
| `loop_interval` | 3h |
| `loop_pid` | 95848, 71476 |
| `loop_armed_at` | 2026-06-18 |
| `loop_sentinel` | AGENT_LOOP_TICK_BOREL_HQ |
| `notes` | Cap 21 completo neste tick. Regen 003 (Nightwolf drow). Próximo: cap 22. |

## Como checar se o loop está ativo

```powershell
Get-Process -Id 95848,71476 -ErrorAction SilentlyContinue
Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -match 'AGENT_LOOP_TICK_BOREL' }
```

## Histórico

- **2026-06-19** — Tick loop 3h: Cap 21 v2 (19 PNG 000–018), webp + build.
- **2026-06-18** — Tick loop 461257 #8: Cap 20 v2 (16 PNG), webp + build.
- **2026-06-18** — Tick loop 71897 #8: Cap 19 v2 (19 PNG), webp + build.
- **2026-06-18** — Tick loop 461257 #7: Cap 18 v2 (18 PNG), webp + build.
- **2026-06-18** — Tick loop 71897 #7: Cap 17 v2 (16 PNG), webp + build.
- **2026-06-18** — Tick loop 461257 #6: Cap 16 v2 (17 PNG), webp + build.
- **2026-06-18** — Tick loop 71897 #6: Cap 15 v2 (16 PNG), webp + build.
- **2026-06-18** — Tick loop 461257 #5: Cap 14 v2 (18 PNG), webp + build.
- **2026-06-18** — Tick loop 71897 #5: Cap 13 v2 (15 PNG), webp + build.
- **2026-06-18** — Tick loop 461257 #4: Cap 12 v2 (18 PNG), webp + build.
- **2026-06-18** — Tick loop 71897 #4: Cap 11 v2 (17 PNG), webp + build.
