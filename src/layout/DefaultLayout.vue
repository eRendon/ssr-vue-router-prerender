<template>
  <NavBar></NavBar>

  <router-view v-slot="{ Component }">
    <Suspense>
      <component :is="Component" />
    </Suspense>
  </router-view>

  <SiteFooter></SiteFooter>

  <!-- WhatsApp Link -->
  <a
    id="whatsapp-button"
    href="https://wa.me/573507642000"
    target="_blank"
    class="whatsapp whatsapp-bottom"
  >
    <img
      src="src/assets/img/whatsapp-button.png" alt="Whatsapp icon"
    />
  </a>

  <!-- FOR THINGS THAT NEED USER TO STAY PUT UNTIL DONE, USE GLOBAL LOADING OVERLAY-->
  <div v-if="loader" id="sureti-loading-overlay">
    <LoadingSpinner id="sureti-loading-overlay-spinner" :white="true"></LoadingSpinner>
  </div>
</template>

<script lang="ts" setup>
import NavBar from "../components/general/site-navbar/NavBar.vue";
import SiteFooter from "../components/general/site-footer/SiteFooter.vue";
import LoadingSpinner from "../components/general/loader/LoadingSpinner.vue";
import { useLoaderStore } from '~/stores/loader'
import { storeToRefs } from 'pinia'

const loaderStore = useLoaderStore()
const { loader } = storeToRefs(loaderStore)
</script>

<style scoped>
@import "~/assets/base.css";

#sureti-loading-overlay {
  position:fixed;
  z-index:9999999;
  background-color:#5747D7;
  opacity: 0.97;
  width:100vw;
  height:100vh;
  top:0;
  left:0;
}
#sureti-loading-overlay-spinner {
  margin-top: calc(50vh - 40px);
  margin-left: calc(50vw - 40px);
}
</style>
