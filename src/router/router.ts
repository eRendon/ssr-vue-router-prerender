import { createMemoryHistory, createRouter as _createRouter, createWebHistory } from 'vue-router'
export { createRouter }
import { routes } from './routes'

export const router = _createRouter({
  // use appropriate history implementation for server/client
  // import.meta.env.SSR is injected by Vite.
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes
})

function createRouter() {
  return router
}
