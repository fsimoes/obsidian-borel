const CONFIG_URL = "chapters.json"
const STORAGE_KEY = "borel-comic-access"

/** @type {{ title: string, subtitle: string, access: { passwordEnabled: boolean, password: string }, chapters: Array<{ id: string, title: string, session: number, pageCount: number, startPage: number, cover: string | null, status: string }> }} */
let catalog = null

function $(id) {
  return document.getElementById(id)
}

function pageBasename(num) {
  return String(num).padStart(3, "0")
}

function pageCandidates(num) {
  const base = pageBasename(num)
  return [base + ".webp", base + ".png", base + ".jpg", base + ".jpeg"]
}

function chapterFolder(chapter) {
  return chapter.id + "/"
}

function getQuery() {
  const params = new URLSearchParams(location.search)
  return {
    chapter: params.get("cap") || params.get("chapter"),
    page: Math.max(1, parseInt(params.get("p") || params.get("page") || "1", 10) || 1),
  }
}

function setQuery(chapterId, page) {
  const url = new URL(location.href)
  url.searchParams.set("cap", chapterId)
  url.searchParams.set("p", String(page))
  history.replaceState(null, "", url)
}

function hasAccess(config) {
  if (!config?.access?.passwordEnabled) return true
  return sessionStorage.getItem(STORAGE_KEY) === "ok"
}

function showGate(config) {
  $("gate").classList.remove("hidden")
  $("app").classList.add("hidden")
  const form = $("gate-form")
  const err = $("gate-error")
  form.onsubmit = (e) => {
    e.preventDefault()
    const value = $("gate-password").value
    if (value === config.access.password) {
      sessionStorage.setItem(STORAGE_KEY, "ok")
      err.textContent = ""
      initApp(config)
    } else {
      err.textContent = "Senha incorreta."
    }
  }
}

async function loadCatalog() {
  const res = await fetch(CONFIG_URL)
  if (!res.ok) throw new Error("Não foi possível carregar chapters.json")
  return res.json()
}

function statusLabel(status) {
  const map = {
    "arte-em-producao": "Arte em produção",
    ready: "Pronto",
    draft: "Rascunho",
  }
  return map[status] || status
}

function renderHome(config) {
  $("view-home").classList.remove("hidden")
  $("view-reader").classList.add("hidden")
  document.title = config.title + " — Quadrinho"
  $("site-title").textContent = config.title
  $("site-subtitle").textContent = config.subtitle

  const ul = $("chapter-list")
  ul.innerHTML = ""
  for (const ch of config.chapters) {
    const li = document.createElement("li")
    const a = document.createElement("a")
    a.href = `?cap=${encodeURIComponent(ch.id)}&p=${ch.startPage || 1}`
    const badgeClass = ch.status === "ready" ? "badge ready" : "badge"
    a.innerHTML = `<strong>${ch.title}</strong><span class="${badgeClass}">${statusLabel(ch.status)}</span>
      <div class="meta">Sessão ${ch.session} · ${ch.pageCount} páginas</div>`
    li.appendChild(a)
    ul.appendChild(li)
  }
}

function findChapter(config, id) {
  return config.chapters.find((c) => c.id === id) || config.chapters[0]
}

function renderReader(config, chapter, page) {
  $("view-home").classList.add("hidden")
  $("view-reader").classList.remove("hidden")
  document.title = `${chapter.title} — p. ${page}`

  const select = $("chapter-select")
  select.innerHTML = ""
  for (const ch of config.chapters) {
    const opt = document.createElement("option")
    opt.value = ch.id
    opt.textContent = ch.title
    if (ch.id === chapter.id) opt.selected = true
    select.appendChild(opt)
  }

  select.onchange = () => {
    const next = findChapter(config, select.value)
    goToPage(config, next, next.startPage || 1)
  }

  const start = chapter.startPage || 1
  const end = start + chapter.pageCount - 1
  page = Math.min(Math.max(page, start), end)

  $("page-indicator").textContent = `Página ${page - start + 1} de ${chapter.pageCount}`
  $("btn-prev").disabled = page <= start
  $("btn-next").disabled = page >= end

  const img = $("page-image")
  const ph = $("page-placeholder")
  const folder = chapterFolder(chapter)
  const candidates = pageCandidates(page)
  img.classList.add("hidden")
  ph.classList.add("hidden")
  img.removeAttribute("src")
  img.alt = `${chapter.title}, página ${page}`

  function showMissing() {
    ph.classList.remove("hidden")
    ph.innerHTML = `<strong>Página ${page - start + 1} ainda não publicada</strong>
      Coloque <code>${candidates.join("</code>, <code>")}</code> em <code>quartz/static/comic/${chapter.id}/</code> e rode o build de novo.`
  }

  function tryLoad(index) {
    if (index >= candidates.length) {
      showMissing()
      return
    }
    const src = folder + candidates[index]
    const probe = new Image()
    probe.onload = () => {
      img.src = src
      img.classList.remove("hidden")
    }
    probe.onerror = () => tryLoad(index + 1)
    probe.src = src
  }
  tryLoad(0)

  $("btn-prev").onclick = () => goToPage(config, chapter, page - 1)
  $("btn-next").onclick = () => goToPage(config, chapter, page + 1)
  $("btn-first").onclick = () => goToPage(config, chapter, start)
  $("btn-last").onclick = () => goToPage(config, chapter, end)

  setQuery(chapter.id, page)
}

function goToPage(config, chapter, page) {
  const start = chapter.startPage || 1
  const end = start + chapter.pageCount - 1
  if (page < start || page > end) return
  renderReader(config, chapter, page)
}

function bindKeys(config) {
  document.addEventListener("keydown", (e) => {
    if ($("view-reader").classList.contains("hidden")) return
    const q = getQuery()
    const chapter = findChapter(config, q.chapter)
    const page = q.page
    if (e.key === "ArrowLeft" || e.key === "a") {
      e.preventDefault()
      goToPage(config, chapter, page - 1)
    } else if (e.key === "ArrowRight" || e.key === "d") {
      e.preventDefault()
      goToPage(config, chapter, page + 1)
    } else if (e.key === "Home") {
      goToPage(config, chapter, chapter.startPage || 1)
    } else if (e.key === "End") {
      const start = chapter.startPage || 1
      goToPage(config, chapter, start + chapter.pageCount - 1)
    }
  })
}

function initApp(config) {
  $("gate").classList.add("hidden")
  $("app").classList.remove("hidden")
  catalog = config
  bindKeys(config)

  const q = getQuery()
  if (q.chapter) {
    const ch = findChapter(config, q.chapter)
    renderReader(config, ch, q.page)
  } else {
    renderHome(config)
  }

  $("btn-home").onclick = (e) => {
    e.preventDefault()
    history.replaceState(null, "", location.pathname)
    renderHome(config)
  }
}

async function main() {
  try {
    const config = await loadCatalog()
    if (!hasAccess(config)) {
      showGate(config)
      return
    }
    initApp(config)
  } catch (err) {
    $("app").innerHTML = `<p style="color:#c45c5c">Erro: ${err.message}</p>`
  }
}

main()
