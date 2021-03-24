export default {
  dev: process.env.NODE_ENV !== "production",
  head: {
    title: "hello-nuxt",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  css: ["vant/lib/index.css"],

  plugins: [{ src: "@/plugins/vant", ssr: true }],

  router: {
    middleware: "auth", // 需要在middleware文件夹中新建auth.js/auth.ts
  },

  components: true,

  buildModules: ["@nuxt/typescript-build"],

  modules: ["@nuxtjs/axios", "cookie-universal-nuxt"],

  axios: {
    proxy: true,
    // prefix: '/api' // baseUrl
  },
  proxy: {
    "/api": {
      target: "http://localhost:3001", // 代理转发地址
      changeOrigin: true,
      pathRewrite: {
        "^/api/admin": "/api",
      },
    },
  },

  // 定义loading样式，或者指定一个loading组件
  // loading: {
  //   color: '#300', height: '3px'
  // },
  loading: "~/components/Loading.vue",

  build: {},

  server: {
    port: 3333,
    host: "0.0.0.0",
  },
};
