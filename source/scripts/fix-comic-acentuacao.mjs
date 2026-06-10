/**
 * Fix Portuguese accentuation in comic dialogue quotes and related text.
 * Usage: node scripts/fix-comic-acentuacao.mjs [--cap=10-25] [--all]
 */
import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..")
const chaptersDir = path.join(root, "content/Borel/Comic/02_Chapters")

const PHRASE_FIXES = [
  ["Elriss", "Elriste"],
  ["Elriss.", "Elriste."],
  ["Kenyon", "Kaelion"],
  ["Boren", "Borin"],
  ["Bartroc", "Bartrock"],
  ["Namraf", "Namarath"],
  ["vocês estavam em Londres", "vocês estavam em Londe"],
  ["critico", "crítico"],
  ["Voce e algum", "Você é algum"],
  ["Voce tem", "Você tem"],
  ["Voce deveria", "Você deveria"],
  ["Voce nos", "Você nos"],
  ["Voce tem ferias", "Você tem férias"],
  ["Voce nao", "Você não"],
  ["Voce e um", "Você é um"],
  ["Voce e o", "Você é o"],
  ["Voce fala", "Você fala"],
  ["Voce pode", "Você pode"],
  ["Voce quer", "Você quer"],
  ["Voce gost", "Você gost"],
  ["Fico com voce", "Fico com você"],
  ["pra voce", "pra você"],
  ["tudo bem voce", "tudo bem você"],
  ["Nos aqui", "Nós aqui"],
  ["nao conseguimos", "não conseguimos"],
  ["nao fosse", "não fosse"],
  ["nao detectei", "não detectei"],
  ["nao e mais", "não é mais"],
  ["nao sei", "não sei"],
  ["nao vou", "não vou"],
  ["nao quero", "não quero"],
  ["nao pode", "não pode"],
  ["nao mete", "não mete"],
  ["nao to", "não tô"],
  ["Nao mete", "Não mete"],
  ["Nao. Eu", "Não. Eu"],
  ["Nao tem", "Não tem"],
  ["Nao toque", "Não toque"],
  ["Nao. Eu queria", "Não. Eu queria"],
  ["Eu nao", "Eu não"],
  ["Agora eu nao", "Agora eu não"],
  ["O conteudo nao e", "O conteúdo não é"],
  ["Eu nao sei o conteudo", "Eu não sei o conteúdo"],
  ["esta observando", "está observando"],
  ["esta mancando", "está mancando"],
  ["Esta fechado", "Está fechado"],
  ["quem esta", "quem está"],
  ["ja nao", "já não"],
  ["ja esta", "já está"],
  ["ja conversamos", "já conversamos"],
  ["Ate encontrarem", "Até encontrarem"],
  ["Tambem foi", "Também foi"],
  ["A gente nao", "A gente não"],
  ["Eu so vou", "Eu só vou"],
  ["Quase tirei critico", "Quase tirei crítico"],
  ["Entao vamos", "Então vamos"],
  ["proximo.", "próximo."],
  ["Voce e o proximo", "Você é o próximo"],
  ["maximo para", "máximo para"],
  ["entrarem la", "entrarem lá"],
  ["entrar la", "entrar lá"],
  ["ficar la", "ficar lá"],
  ["por enquanto.", "por enquanto."],
  ["alguem se mexendo", "alguém se mexendo"],
  ["Tem alguem", "Tem alguém"],
  ["servico para", "serviço para"],
  ["por acaso, sao", "por acaso, são"],
  ["Voces gostam", "Vocês gostam"],
  ["ate Elriste", "até Elriste"],
  ["historia.", "história."],
  ["outra historia", "outra história"],
  ["Do lado de dentro, e outra", "Do lado de dentro, é outra"],
  ["galpao", "galpão"],
  ["Volte amanha", "Volte amanhã"],
  ["Quem sao", "Quem são"],
  ["Voces vao", "Vocês vão"],
  ["Voces acordaram", "Vocês acordaram"],
  ["negociacao", "negociação"],
  ["informacao", "informação"],
  ["decisao", "decisão"],
  ["transformacao", "transformação"],
  ["revelacao", "revelação"],
  ["introducao", "introdução"],
  ["explosao", "explosão"],
  ["invocacao", "invocação"],
  ["comunicacao", "comunicação"],
  ["estrategia", "estratégia"],
  ["revolucao", "revolução"],
  ["atencao", "atenção"],
  ["intencao", "intenção"],
  ["expressao", "expressão"],
  ["missao", "missão"],
  ["funcao", "função"],
  ["operacao", "operação"],
  ["situacao", "situação"],
  ["edicao", "edição"],
  ["versao", "versão"],
  ["titulo", "título"],
  ["numero", "número"],
  ["unico", "único"],
  ["ultimo", "último"],
  ["proximo", "próximo"],
  ["magico", "mágico"],
  ["pratico", "prático"],
  ["basico", "básico"],
  ["facil", "fácil"],
  ["possivel", "possível"],
  ["necessario", "necessário"],
  ["publico", "público"],
  ["economico", "econômico"],
  ["historico", "histórico"],
  ["geografico", "geográfico"],
  ["tecnico", "técnico"],
  ["logico", "lógico"],
  ["cientifico", "científico"],
  ["politico", "político"],
  ["automatico", "automático"],
  ["especifico", "específico"],
  ["generico", "genérico"],
  ["classico", "clássico"],
  ["critico no", "crítico no"],
  ["ferias para", "férias para"],
  ["abraco", "abraço"],
  ["licao", "lição"],
  ["coracao", "coração"],
  ["aviao", "avião"],
  ["religiao", "religião"],
  ["regiao", "região"],
  ["uniao", "união"],
  ["opiniao", "opinião"],
  ["visao", "visão"],
  ["memoria", "memória"],
  ["vitoria", "vitória"],
  ["baloes", "balões"],
  ["balao", "balão"],
  ["primaria", "primária"],
  ["Fonte primaria", "Fonte primária"],
  ["condensacao", "condensação"],
  ["adaptacao", "adaptação"],
  ["transcricao", "transcrição"],
  ["Transcricoes", "Transcrições"],
  ["carroca", "carroça"],
  ["prospera", "próspera"],
  ["servico", "serviço"],
  ["Amanha", "Amanhã"],
  ["amanha", "amanhã"],
  ["conteudo", "conteúdo"],
  ["ferias", "férias"],
  ["Narracao", "Narração"],
]

const WORD_FIXES = [
  [/\bvoces\b/g, "vocês"],
  [/\bVoces\b/g, "Vocês"],
  [/\bvoce\b/g, "você"],
  [/\bVoce\b/g, "Você"],
  [/\bnao\b/g, "não"],
  [/\bNao\b/g, "Não"],
  [/\btambem\b/g, "também"],
  [/\bTambem\b/g, "Também"],
  [/\bentao\b/g, "então"],
  [/\bEntao\b/g, "Então"],
  [/\bja\b/g, "já"],
  [/\bate\b/g, "até"],
  [/\bAte\b/g, "Até"],
  [/\bsao\b/g, "são"],
  [/\bSao\b/g, "São"],
  [/\be algum\b/g, "é algum"],
  [/\be um\b/g, "é um"],
  [/\be o\b/g, "é o"],
  [/\be alguma\b/g, "é alguma"],
  [/\bso vou\b/g, "só vou"],
  [/\bso\b/g, "só"],
  [/\bla\b/g, "lá"],
  [/\bLa\b/g, "Lá"],
  [/\balguem\b/g, "alguém"],
  [/\bAlguem\b/g, "Alguém"],
  [/\bmaximo\b/g, "máximo"],
  [/\bmaxima\b/g, "máxima"],
  [/\bproximo\b/g, "próximo"],
  [/\bproxima\b/g, "próxima"],
  [/\bcritico\b/g, "crítico"],
  [/\bsera\b/g, "será"],
  [/\bestara\b/g, "estará"],
  [/\bestao\b/g, "estão"],
  [/\besta\b(?=\s+(observando|mancando|fechado|fazendo|vindo|pesada))/g, "está"],
  [/\bEsta\b(?=\s+fechado)/g, "Está"],
  [/\btecnica\b/g, "técnica"],
  [/\bunica\b/g, "única"],
  [/\bunico\b/g, "único"],
  [/\bultima\b/g, "última"],
  [/\bultimo\b/g, "último"],
  [/\bterceira\b/g, "terceira"], // already correct
  [/\bformacao\b/g, "formação"],
  [/\bposicao\b/g, "posição"],
  [/\bnegociacoes\b/g, "negociações"],
  [/\bconfissoes\b/g, "confissões"],
]

function fixText(text) {
  let t = text
  for (const [a, b] of PHRASE_FIXES) t = t.split(a).join(b)
  for (const [re, rep] of WORD_FIXES) t = t.replace(re, rep)
  return t
}

function fixQuotesInContent(content) {
  let c = content.replace(/"([^"]*)"/g, (_, inner) => `"${fixText(inner)}"`)
  c = c.replace(/\b(baloes|balao|primaria)\b/g, (m) =>
    ({ baloes: "balões", balao: "balão", primaria: "primária" })[m],
  )
  return c
}

function processFile(filePath) {
  const raw = fs.readFileSync(filePath, "utf8")
  const fixed = fixQuotesInContent(raw)
  if (fixed !== raw) {
    fs.writeFileSync(filePath, fixed, "utf8")
    return true
  }
  return false
}

function parseArgs() {
  const caps = []
  for (const a of process.argv.slice(2)) {
    if (a === "--all") {
      for (let i = 0; i <= 25; i++) caps.push(i)
    } else if (a.startsWith("--cap=")) {
      const [s, e] = a.slice(6).split("-").map(Number)
      const end = e || s
      for (let i = s; i <= end; i++) caps.push(i)
    }
  }
  return caps.length ? caps : Array.from({ length: 26 }, (_, i) => i)
}

const caps = parseArgs()
const patterns = ["dialogues.md", "script.md", "concept.md", "README.md"]
let changed = 0

for (const n of caps) {
  const prefix = `cap-${String(n).padStart(2, "0")}-`
  const dir = fs.readdirSync(chaptersDir).find((d) => d.startsWith(prefix))
  if (!dir) continue
  const base = path.join(chaptersDir, dir)
  for (const name of patterns) {
    const fp = path.join(base, name)
    if (fs.existsSync(fp) && processFile(fp)) changed++
  }
  const prompt = path.join(base, "prompt-all-pages.md")
  if (fs.existsSync(prompt) && processFile(prompt)) changed++
}

console.log(`Fixed ${changed} files (caps: ${caps.join(", ")})`)
