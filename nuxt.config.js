export default {
  // Target (https://go.nuxtjs.dev/config-target)
  //target: 'static',


  router: {
    routes: [
      {
        name: 'index',
        path: '/',
        component: 'pages/index.vue'
      },
      {
        name: 'vestidos',
        path: '/vestidos',
        component: 'pages/vestidos/index.vue'
      },
      {
        name: 'faldas',
        path: '/faldas',
        component: 'pages/faldas/index.vue'
      },

    ]
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'moonshop',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      {
        name: "google-site-verification",
        content: "rQ1gW0dtlxhf7KN_YaFnojE1DV9hmxjZsRfjJ-WW5Lc"
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap' }

    ],
    script: [{
      src: 'https://www.googletagmanager.com/gtag/js?id=UA-185945101-1',
      async: true
    }],
  },

  loading: { color: 'black', height: '3px' },
  //loading: '~/components/LoadingBar.vue',

  loadingIndicator: {
    name: 'circle',
    color: '#3B8070',
    background: 'white'
  },


  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    'vuesax/dist/vuesax.css',
    'assets/main.css',
    'boxicons/css/boxicons.min.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '@/plugins/vuesax',
    { src: '~/plugins/contentful' },
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    '@nuxtjs/google-analytics'
  ],

  googleAnalytics: {
    id: 'UA-185945101-1',
  },


  markdownit: {
    injected: true,
    html: true,
    quotes: '“”‘’',
    linkify: true,
    typographer: true
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }
}
