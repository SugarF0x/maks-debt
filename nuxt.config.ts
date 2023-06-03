export default defineNuxtConfig({
  ssr: false,
  app: {
    head: {
      title: 'Максим-максим',
      link: [{ rel: "icon", type: "image/x-icon", href: "/icon.png" }],
      meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=0' }]
    }
  },
})
