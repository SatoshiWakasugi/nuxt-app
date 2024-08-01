import type { NuxtPage } from 'nuxt/schema'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxt/eslint'],
  eslint: {
    config: {
      stylistic: {
        indent: 2,
        quotes: 'single',
        semi: false,
      },
    },
  },
  hooks: {
    'pages:extend'(pages) {
      const removePagesMatching = (pattern: RegExp, pages: NuxtPage[] = []) => {
        const pagesToRemove = []
        for (const page of pages) {
          if (page.file == null) continue
          if (pattern.test(page.file)) pagesToRemove.push(page)
          else removePagesMatching(pattern, page.children)
        }
        for (const page of pagesToRemove) {
          pages.splice(pages.indexOf(page), 1)
        }
      }
      removePagesMatching(/\/_.*\//, pages)
    },
  },
  components: {
    dirs: [
      {
        path: 'components',
        extensions: ['.vue'],
        pathPrefix: false,
        global: true,
      },
      {
        path: '~/pages/**/_components',
        extensions: ['.vue'],
        pathPrefix: true,
        global: true,
      },
    ],
  },
  imports: {
    dirs: [
      '~/components',
      '~/components/ui',
      '~/components/container',
      '~/components/presentation',
      '~/composables/',
      '~/utils',
      '~/pages/**/_components',
      '~/pages/**/_composables',
    ],
  },
  css: ['~/assets/styles/global.css'],
})
