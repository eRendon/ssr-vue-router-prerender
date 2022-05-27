import { renderToString } from '@vue/server-renderer'
import { escapeInject, dangerouslySkipEscape } from 'vite-plugin-ssr'
import { createApp } from './app'
import type { PageContext } from './types'
import type { PageContextBuiltIn } from 'vite-plugin-ssr'
import { createPinia } from 'pinia'

export { render }
// See https://vite-plugin-ssr.com/data-fetching

async function render(pageContext: PageContextBuiltIn & PageContext) {
  const { Page } = pageContext
  const { app, router } = createApp({ Page })

  // set the router to the desired URL before rendering
  await router.push(pageContext.url)
  await router.isReady()
  const store = createPinia()
  app.use(store)
  pageContext.initialState = store.state.value
  const appHtml = await renderToString(app)

  return escapeInject`<!DOCTYPE html>
    <html>
      <body>
        <div id="app">${dangerouslySkipEscape(appHtml)}</div>
      </body>
    </html>`
}
