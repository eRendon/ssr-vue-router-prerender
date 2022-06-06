import { PageContextBuiltInClient } from 'vite-plugin-ssr/client'
import { createApp } from './app'
import { createPinia } from 'pinia'
import NProgress from 'nprogress'
import { PageContext } from './types'

//hydrate()

export { render }
export { onHydrationEnd }
export { onPageTransitionStart }
export { onPageTransitionEnd }

async function render(pageContext: PageContextBuiltInClient & PageContext) {
  //const pageContext = await getPage()
  console.log('hydrate', pageContext)
  const { Page } = pageContext
  const { app, router } = createApp({ Page })
  await router.isReady()
  const store = createPinia()
  app.use(store)
  //  store.state.value = pageContext.initialState;
  app.mount('#app')
}

function onHydrationEnd() {
  console.log('Hydration finished; page is now interactive.')
}

function onPageTransitionStart() {
  console.log('Page transition start')
  NProgress.start();
}
function onPageTransitionEnd() {
  console.log('Page transition end')
  NProgress.done();
}
