import { defineConfig } from 'vitepress'
import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import { enConfig } from './locales/en'
import { cnConfig } from './locales/cn'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/naive-pro-components/',
  locales: {
    root: { label: '简体中文', lang:'cn', ...cnConfig  },
    // en: { label: 'English', lang: 'en', ...enConfig },
  },
  markdown: {
    config: (md) => {
      md.use(demoblockPlugin)
    }
  },
  vite: {
    plugins: [demoblockVitePlugin()]
  }
})
