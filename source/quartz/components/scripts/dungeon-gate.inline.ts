const CONFIG_URL = "static/dungeon/access.json"
const STORAGE_KEY = "borel-dungeon-access"

/** @type {{ title?: string, subtitle?: string, access?: { passwordEnabled?: boolean, password?: string } } | null} */
let configCache = null

function isDungeonSlug(slugOrPath) {
  const normalized = slugOrPath.replace(/\\/g, "/").toLowerCase()
  return (
    normalized.includes("/dungeon/") ||
    normalized.startsWith("dungeon/") ||
    normalized === "dungeon" ||
    normalized.endsWith("/dungeon")
  )
}

function isDungeonPage() {
  return isDungeonSlug(window.location.pathname)
}

function hasDungeonAccess() {
  if (!configCache?.access?.passwordEnabled) return true
  return sessionStorage.getItem(STORAGE_KEY) === "ok"
}

function configUrl() {
  return new URL(CONFIG_URL, window.location.href).toString()
}

async function loadConfig() {
  if (configCache) return configCache
  try {
    const res = await fetch(configUrl(), { cache: "no-store" })
    if (!res.ok) {
      configCache = { access: { passwordEnabled: false } }
      return configCache
    }
    configCache = await res.json()
  } catch {
    configCache = { access: { passwordEnabled: false } }
  }
  return configCache
}

function hideGate() {
  const gate = document.getElementById("dungeon-gate")
  gate?.classList.add("hidden")
  document.body.classList.remove("dungeon-gate-locked")
}

function showGate(cfg) {
  const gate = document.getElementById("dungeon-gate")
  if (!gate) return

  const title = gate.querySelector("[data-dungeon-gate-title]")
  const subtitle = gate.querySelector("[data-dungeon-gate-subtitle]")
  const form = document.getElementById("dungeon-gate-form")
  const input = document.getElementById("dungeon-gate-password")
  const err = document.getElementById("dungeon-gate-error")

  if (title) title.textContent = cfg.title ?? "Dungeon"
  if (subtitle) subtitle.textContent = cfg.subtitle ?? "Material privado da mesa."

  gate.classList.remove("hidden")
  document.body.classList.add("dungeon-gate-locked")

  if (!form || !input || !err) return

  form.onsubmit = (e) => {
    e.preventDefault()
    if (input.value === cfg.access?.password) {
      sessionStorage.setItem(STORAGE_KEY, "ok")
      err.textContent = ""
      hideGate()
      window.dispatchEvent(new CustomEvent("dungeon-access-granted"))
      if (isDungeonPage()) window.location.reload()
    } else {
      err.textContent = "Senha incorreta."
    }
  }
}

async function applyGateForCurrentPage() {
  const cfg = await loadConfig()
  if (!cfg.access?.passwordEnabled || !isDungeonPage()) {
    hideGate()
    return
  }
  if (hasDungeonAccess()) {
    hideGate()
    return
  }
  showGate(cfg)
}

document.addEventListener("nav", () => {
  void applyGateForCurrentPage()
})

void applyGateForCurrentPage()
