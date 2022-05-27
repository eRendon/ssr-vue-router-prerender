import { PageContextBuiltIn } from 'vite-plugin-ssr'
import { useGetCards } from '../../services/request/publicCards'

export const onBeforeRender = async (pageContext: PageContextBuiltIn) => {
  const publicCards = await useGetCards()
  // console.log('pageContext', pageContext)
  return {
    pageContext: {
      pageProps: {
        publicCard: publicCards.data
      },
      documentProps: {
        // The page's <title>

      },
    },
  }
}
