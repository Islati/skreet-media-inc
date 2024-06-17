// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-8',
            titleTemplate: '%s',  // This sets the title template to use only the page title without any suffix

            htmlAttrs: {
                class: "dark bg-background text-foreground",
                lang: "en",
                viewport: 'width=device-width, initial-scale=1',

            },
            link: [
                {rel: 'icon', type: 'image/png', href: '/img/logo.png'},
                {name: 'description', content: 'Skreet Media Inc - The Culture Collective'},
                {
                    name: 'keywords',
                    content: 'Skreet Media Inc., Skreet Media Inc, Skreet, Skreet Media, Culture Collective'
                },
            ]
        }
    },
    devtools: {enabled: true},
    ssr: true,
    css: [`assets/css/styles.css`],
    modules: [
        '@nuxtjs/tailwindcss',
        'shadcn-nuxt',
        "@nuxtjs/sitemap",
        "@nuxtjs/seo",
        '@nuxtjs/robots',
        "@nuxt/content",
        '@nuxtjs/color-mode',
        "@nuxt/image",
        "nuxt-icon"
    ],
    robots: {},
    seo: {
        redirectToCanonicalSiteUrl: true
    },
    site: {
        url: 'https://skreet.ca',
        title: 'Skreet',
        description: 'Skreet Media Inc. Record Label Official Website',
    },
    sitemap: {
        cacheMaxAgeSeconds: 3600, // 1 hour
        discoverImages: true,
        // routes: ['/'],
    },
    shadcn: {
        /**
         * Prefix for all the imported component
         */
        prefix: '',
        /**
         * Directory that the component lives in.
         * @default "./components/ui"
         */
        componentDir: './components/ui'
    },

    nitro: {
        prerender: {
            routes: ['/sitemap.xml']
        },
        routeRules: {
            "/img/**": {headers: {'cache-control': `public,max-age=${32536000},s-maxage=${32536000}`}},
            "/_nuxt/**": {headers: {'cache-control': `public,max-age=${32536000},s-maxage=${32536000}`}},
        },
        publicAssets: [
            {
                baseURL: "video",
                dir: "public/video",
                maxAge: 60 * 60 * 24 * 365,
            },
            {
                baseURL: "images",
                dir: "public/imgs",
                maxAge: 60 * 60 * 24 * 365,
            },
            {
                baseURL: "animations",
                dir: "public/animations",
                maxAge: 60 * 60 * 24 * 365,
            },
        ],
        compressPublicAssets: {
            brotli: true,
            gzip: true,
        },
    },
    content: {}
})