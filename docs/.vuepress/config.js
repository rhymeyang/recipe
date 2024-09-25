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
            { text: "Vicky's Recipe Collection", link: '/' },
          ],
        },
        {
          text: '中餐',  // Another section title
          collapsable: true,         // This section is collapsible
          children: [
            { text: "猪肉", link: '/Dish/pork.md' },
            { text: "鸡蛋", link: '/Dish/eggs.md' },
          ],
        },
        {
          text: '面点',
          collapsable: true,
          children: [
            { text: "蛋糕", link: '/Pastry/cake.md' },
            { text: "点心", link: '/Pastry/dimsun.md' },
          ],
        },
        {
          text: '调料',
          collapsable: true,
          children: [
            { text: "五香粉", link: '/Ingredient/powder.md' },
          ],
        }
      ]
    },
  }),
  lang: 'zh-CN',
  title: "Vicky's Recipe",
  description: 'Recipe Collection',
})


