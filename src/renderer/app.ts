import { createSSRApp } from 'vue'
import { createRouter } from '../router/router'

export { createApp }
const plugins = import.meta.globEager('/src/plugins/*.js')
import '~/assets/styles/main.scss';
import "~/assets/scss/global.scss";
import "~/assets/scss/utility.scss";
import '~/plugins/vee-validate.ts'
import { createGtm } from '@gtm-support/vue-gtm'
import { configGtm } from '../plugins/vue-tag-manager'

function createApp({ Page }: any) {
  console.log('createApp', Page)
  const app = createSSRApp(Page)
  const router = createRouter()
  app.use(createGtm(configGtm))
  app.use(router)
  for (const path in plugins) {
    // @ts-ignore
    plugins[path].default(app, (key: string, value: any) => {
      app.config.globalProperties['$' + key] = value;
    });
  }
  return { app, router }
}

// import { Component, createSSRApp, reactive } from 'vue'
// import { createRouter } from '../router/router'
//
// export { createApp }
// import DefaultLayout from '../layout/DefaultLayout.vue'
// import '~/assets/styles/main.scss';
// import "~/assets/scss/global.scss";
// import "~/assets/scss/utility.scss";
// import '~/plugins/vee-validate.ts'
// import { createGtm } from '@gtm-support/vue-gtm'
// import { configGtm } from '../plugins/vue-tag-manager'
// import { PageContext } from './types'
// import { setPageContext } from './usePageContext'
//
// function createApp(pageContext: PageContext) {
//   const { Page } = pageContext
//   let rootComponent: Component
//
//   console.log('createApp', Page)
//   const PageWithWrapper = defineComponent({
//     data: () => ({
//       Page: markRaw(Page),
//       pageProps: markRaw(pageContext.pageProps || {}),
//     }),
//     created() {
//       rootComponent = this
//     },
//     render() {
//       return h(
//         DefaultLayout,
//         {},
//         {
//           default: () => {
//             return h(this.Page, this.pageProps)
//           },
//         },
//       )
//     },
//   })
//   const app = createSSRApp(PageWithWrapper)
//   const router = createRouter()
//   app.use(createGtm(configGtm))
//   app.use(router)
//   const pageContextReactive = reactive(pageContext)
//
//   // Make `pageContext` accessible from any Vue component
//   setPageContext(app, pageContextReactive)
//   return { app, router }
// }
