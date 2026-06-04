import dungeonGateScript from "./scripts/dungeon-gate.inline"
import styles from "./styles/dungeon-gate.scss"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"

const DungeonGate: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <div id="dungeon-gate" class="hidden" aria-hidden="true">
      <div class="dungeon-gate-card" role="dialog" aria-labelledby="dungeon-gate-heading">
        <h2 id="dungeon-gate-heading" data-dungeon-gate-title>
          Dungeon
        </h2>
        <p class="hint" data-dungeon-gate-subtitle>
          Material privado da mesa. Peça a senha ao mestre.
        </p>
        <form id="dungeon-gate-form">
          <label for="dungeon-gate-password">Senha</label>
          <input
            id="dungeon-gate-password"
            type="password"
            autocomplete="current-password"
          />
          <p id="dungeon-gate-error" class="error" aria-live="polite"></p>
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  )
}

DungeonGate.afterDOMLoaded = dungeonGateScript
DungeonGate.css = styles

export default (() => DungeonGate) satisfies QuartzComponentConstructor
