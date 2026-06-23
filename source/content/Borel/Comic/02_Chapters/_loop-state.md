# Borel HQ — loop state

| Campo | Valor |
|-------|-------|
| `next_cap` | done |
| `slug` | — |
| `folder` | — |
| `target_pages` | — |
| `last_tick` | 2026-06-20 (tick loop #6 — sem trabalho, série completa) |
| `last_phase` | D — Cap 25 v2 publicado · série 21–25 completa |
| `pages_done` | 17/17 PNG v2 (cap 25) |
| `loop_interval` | 3h |
| `loop_pid` | — (loop parado neste tick) |
| `loop_armed_at` | 2026-06-20 |
| `loop_sentinel` | AGENT_LOOP_TICK_BOREL_HQ |
| `notes` | Tick #6 sem cap pendente. Loop parado para evitar ticks vazios. Rearmar quando houver novo cap. |

## Como checar se o loop está ativo

```powershell
Get-CimInstance Win32_Process | Where-Object { $_.CommandLine -match 'AGENT_LOOP_TICK_BOREL' }
```

## Histórico

- **2026-06-20** — Tick loop #6: nenhuma ação; loop parado.
- **2026-06-20** — Tick loop #5: nenhuma ação (série completa).
- **2026-06-20** — Tick loop #4: nenhuma ação (série completa).
- **2026-06-20** — Tick loop #3: Cap 25 v2 FINALE (17 PNG), webp + build.
- **2026-06-20** — Tick loop #2: Cap 24 v2 (19 PNG), webp + build.
- **2026-06-19** — Tick manual: Cap 22 v2 (17 PNG 000–016), webp + build.
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
