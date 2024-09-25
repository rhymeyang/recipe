import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { defineUserConfig } from 'vuepress'

export default defineUserConfig({
  bundler: viteBundler(),
  base: '/recipe/',
  theme: defaultTheme({
    logo: '/recipe/images/logo.png',
    navbar: false,
    sidebar: {
      '/': [
        {
          text: 'Main Pages',
          children: [
            '/',
          ],
        },
        {
          text: '中餐',  // Another section title
          collapsable: true,         // This section is collapsible
          children: [
            '/Dish/pork.md',
            '/Dish/eggs.md',
          ],
        },
        {
          text: '面点',
          collapsable: true,
          children: [
            '/Pastry/cake.md',
            '/Pastry/dimsun.md',
          ],
        },
        {
          text: '调料',
          collapsable: true,
          children: [
            '/Ingredient/powder.md',
          ],
        }
      ]
    },
  }),
  lang: 'zh-CN',
  title: "Vicky's Recipe",
  description: 'Recipe Collection',
})


