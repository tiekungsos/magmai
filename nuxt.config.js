export default {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'spa',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'server',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
        title: 'Suanmagmai Resort',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || ' พักผ่อนกับบรรยากาศของห้องพักริมแม่น้ำสามประสบ โอบล้อมด้วยขุนเขาดูอบอุ่น กับห้องพักที่มีให้เลือกทั้งแบบ Standard,Deluxe และแบบ Family Suite ตามความต้องการ อิ่มอร่อยกับห้องอาหารริมแม่น้ำภายในรีสอร์ท สัมผัสบรรยากาศยามเช้าของสะพาญมอญและความสวยงามของเจดีย์พุทธคยาในยามเย็น ' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/LOGO.png?v=3' },
            { rel: "stylesheet", type: "text/css", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" }
        ],
        script: [
            { src: 'https://code.jquery.com/jquery-3.5.1.slim.min.js' },
            { src: 'https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js' },
            { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js' }
        ]
    },
    /*
     ** Global CSS
     */
    css: [
        '~assets/scss/custom.scss'
    ],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [],
    /*
     ** Nuxt.js modules
     */
    modules: [
        // Doc: https://bootstrap-vue.js.org
        // 'bootstrap-vue/nuxt',
        '@nuxtjs/style-resources', ['nuxt-gmaps', {
            key: 'AIzaSyBBrw69T_WRI_mStEkI6-xOpQ48UPvfWTM',
            //you can use libraries: ['places']
        }],
        ['nuxt-lazy-load', {
            // These are the default values
            images: false,
            videos: true,
            audios: true,
            iframes: true,
            native: false,
            polyfill: true,
            directiveOnly: false,

            // Default image must be in the static folder


            // To remove class set value to false
            // loadingClass: 'isLoading',
            // loadedClass: 'isLoaded',
            // appendClass: 'lazyLoad',

            observerConfig: {
                // See IntersectionObserver documentation
            }
        }]


    ],
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {}
}