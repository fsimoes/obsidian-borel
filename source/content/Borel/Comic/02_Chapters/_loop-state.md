# Borel HQ — loop state

| Campo | Valor |
|-------|-------|
| `next_cap` | 21 |
| `slug` | cap-21-sessao-21 |
| `folder` | cap-21-traicao-de-cerberus |
| `target_pages` | TBD |
| `last_tick` | 2026-06-18 (tick loop 461257 #8) |
| `last_phase` | D — Cap 20 v2 publicado |
| `pages_done` | 16/16 PNG v2 |
| `loop_interval` | 3h |
| `loop_pid` | 95848, 71476 |
| `loop_armed_at` | 2026-06-18 |
| `loop_sentinel` | AGENT_LOOP_TICK_BOREL_HQ |
| `notes` | Cap 20 completo neste tick. Próximo: cap 21. |

## Como checar se o loop está ativo

```powershell
Get-Process -Id 95848,71476 -ErrorAction SilentlyContinue
Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -match 'AGENT_LOOP_TICK_BOREL' }
```

## Histórico

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
