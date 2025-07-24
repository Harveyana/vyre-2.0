// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // devtools: { enabled: true },
  ssr:false,
  runtimeConfig: {
    public: {
      baseUrl: 'http://localhost:5000/api/v1',
    }
    // https://vyre-africa-backend.onrender.com/api/v1
    // http://localhost:5000/api/v1
  },
  
  modules: ['@nuxtjs/tailwindcss', 'nuxt-primevue', '@nuxt/image', 'radix-vue/nuxt', '@vueuse/nuxt', '@pinia/nuxt', 'vue-sonner/nuxt', 'vue3-carousel-nuxt'],
  pinia: {
    storesDirs: ['./stores/**', './custom-folder/stores/**'],
  },
  css: ['~/assets/css/main.css'],

  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
  

  app: {
    head: {
      title: "Vyre Africa",
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'True seamless finance across borders', name: 'Smart and secured mediums to effortlessly send and receive money for individuals and businesses', content: 'Smart and secured mediums to effortlessly send and receive money for individuals and businesses' }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/vyreLogo.png' }],
      script: [
        {
            src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBBYUi-MAFpiGyHI67x-xCrAWArKPm4n7w&libraries=places',
        }
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  primevue: {
    usePrimeVue: true,
    importPT: { as: 'Tailwind', from: 'primevue/passthrough/tailwind' },
    cssLayerOrder: 'tailwind-base, primevue, tailwind-utilities',
    components: {
      // include: '*',
      include: ['Timeline', 'Button', 'Dialog', 'ProgressSpinner','Ripple','Sidebar','Menu','SelectButton','InputNumber','TabView','TabPanel'],
    },
    directives: {
      include: '*'
    },
    composables: {
      include: '*'
  },
  options: {
    ripple: true,
    unstyled: true
  }
  }
})