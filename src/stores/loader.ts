import { defineStore } from "pinia"
import { ref } from "vue"


export const useLoaderStore = defineStore('loader', () => {
  const loader = ref(false)
  
  const showLoader = (): void => {
    loader.value = true
  }

  const hideLoader = (): void => {
    loader.value = false
  }

  return { loader, showLoader, hideLoader}

})