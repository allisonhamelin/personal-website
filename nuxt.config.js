
export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    title: 'Allison Hamelin | Front End Developer | Vancouver BC',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'title', content: 'Allison Hamelin | Front End Developer | Vancouver BC' },
      { name: 'description', content: 'Since my graduation with a Bachelor’s degree majoring in Computer Science, I have pursued a passion for front end development. I am aiming to acquire solid foundations in core skills and gain experience with modern tools and frameworks such as React and Vue.js, possibly in the education or mental health tech industries.' },
      // Facebook
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://allisonhamelin.dev/' },
      { property: 'og:title', content: 'Allison Hamelin | Front End Developer | Vancouver BC' },
      { property: 'og:description', content: 'Since my graduation with a Bachelor’s degree majoring in Computer Science, I have pursued a passion for front end development. I am aiming to acquire solid foundations in core skills and gain experience with modern tools and frameworks such as React and Vue.js, possibly in the education or mental health tech industries.' },
      { property: 'og:image', content: 'https://firebasestorage.googleapis.com/v0/b/allison-hamelin.appspot.com/o/public%2FmetaImage.png?alt=media&token=faa217e3-b93f-4f51-b6ad-42be60b41aaf' },
      // Twitter
      { property: 'twitter:card', content: 'summary_large_image' },
      { property: 'twitter:url', content: 'https://allisonhamelin.dev/' },
      { property: 'twitter:title', content: 'Allison Hamelin | Front End Developer | Vancouver BC' },
      { property: 'twitter:description', content: 'Since my graduation with a Bachelor’s degree majoring in Computer Science, I have pursued a passion for front end development. I am aiming to acquire solid foundations in core skills and gain experience with modern tools and frameworks such as React and Vue.js, possibly in the education or mental health tech industries.' },
      { property: 'twitter:image', content: 'https://firebasestorage.googleapis.com/v0/b/allison-hamelin.appspot.com/o/public%2FmetaImage.png?alt=media&token=faa217e3-b93f-4f51-b6ad-42be60b41aaf' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Spartan:wght@100;200;300;400;500;600;700;800&display=swap',
      },
    ],
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
    },
  },
};
