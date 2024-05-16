import type {DefaultTheme, LocaleSpecificConfig} from 'vitepress'
export const enConfig: LocaleSpecificConfig<DefaultTheme.Config> = {
    title: 'VMS',
    description: 'Vulnerability Management System',
    themeConfig: {
        editLink: {
            pattern: 'https://github.com/vitejs/vite/edit/main/docs/:path',
            text: 'Suggest changes to this page'
        },

        nav: [
            {
                text: 'Docs',
                link: '/en/guide/',
                activeMatch: '/en/guide/'
            }
        ],
        sidebar: [
            {
                text: 'Guide',
                items: [
                    {
                        text: 'Introduction',
                        link: '/en/guide/guide.md'
                    },
                    {
                        text: 'Development Notes',
                        link: '/en/guide/base/development_notes.md'
                    },
                ]
            },
        ],
    }
}