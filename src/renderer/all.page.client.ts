import { getPage } from 'vite-plugin-ssr/client'
import { createApp } from './app'
import { createPinia } from 'pinia'
import NProgress from 'nprogress'

hydrate()

async function hydrate() {
  const pageContext = await getPage()
  console.log('hydrate', pageContext)
  const { Page } = pageContext
  const { app, router } = createApp({ Page })
  await router.isReady()
  const store = createPinia()
  app.use(store)
  //  store.state.value = pageContext.initialState;
  app.mount('#app')
}


function onTransitionStart() {
  console.log('Page transition start')
  NProgress.start();
}
function onTransitionEnd() {
  console.log('Page transition end')
  NProgress.done();
}
