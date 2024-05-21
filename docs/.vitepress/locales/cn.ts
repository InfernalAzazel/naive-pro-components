import type {DefaultTheme, LocaleSpecificConfig} from 'vitepress'

export const cnConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    title: 'Naive Pro Components',
    description: 'Naive UI 增强组件',
    themeConfig: {
        editLink: {
            pattern: 'https://github.com/vitejs/vite/edit/main/docs/:path',
            text: 'Suggest changes to this page'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/InfernalAzazel/naive-pro-components' }
        ],
        nav: [
            {
                text: '指南',
                link: '/cn/guide.md',
                activeMatch: '/cn/guide.md'
            },
            {
                text: '组件',
                link: '/cn/form/index.md',
                activeMatch: '/cn/form/index.md'
            }
        ],
        sidebar: [
            {
                text: '表单',
                items: [
                    {
                        text: 'ProForm',
                        link: '/cn/form/index.md'
                    },
                ]
            },
        ],
    },

}

