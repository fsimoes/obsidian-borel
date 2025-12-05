import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 *
 * See https://quartz.jzhao.xyz/configuration for more information.
 */
const config: QuartzConfig = {
  configuration: {
    pageTitle: "Borel RPG",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "pt-BR",
    baseUrl: "quartz.jzhao.xyz", // TODO: Atualizar com seu domínio real
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63", // Azul profundo - tema RPG
          tertiary: "#d4af37", // Dourado - tesouros e conquistas
          highlight: "rgba(212, 175, 55, 0.15)", // Dourado suave
          textHighlight: "#d4af3788", // Dourado para destaques
        },
        darkMode: {
          light: "#0f0f0f", // Preto mais profundo
          lightgray: "#1a1a1a", // Cinza muito escuro
          gray: "#4a4a4a", // Cinza médio
          darkgray: "#b8b8b8", // Cinza claro para texto
          dark: "#e8e8e8", // Quase branco para texto principal
          secondary: "#c9a961", // Dourado envelhecido - tema RPG
          tertiary: "#8b4513", // Marrom terroso - ambiente medieval
          highlight: "rgba(201, 169, 97, 0.2)", // Dourado com transparência
          textHighlight: "#d4af3788", // Dourado para destaques
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage({
        sort: (f1, f2) => {
          const t1 = (f1.frontmatter?.title ?? "").toLowerCase()
          const t2 = (f2.frontmatter?.title ?? "").toLowerCase()
          return t1.localeCompare(t2)
        },
      }),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
