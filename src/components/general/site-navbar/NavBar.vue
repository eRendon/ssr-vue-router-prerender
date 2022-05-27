<template>
  <header id="masthead" class="site-header su_flex">
    <div
      id="site-identity"
      class="su_flex su_flex_ai_center su_flex_jc_space-between"
    >
      <router-link id="site-logo" to="/">
        <img src="../../../../src/assets/img/su_logo_vertical.svg" alt="SURETI" title="SURETI" />
      </router-link>
      <div class="su_nav_buttons su_flex su_flex_ai_center">
        <div id="nav-whatsapp">
          <!-- WhatsApp Icon Header -->
          <a
            href="https://wa.me/573507642000"
            target="_blank"
            id="whatsapp-icon"
            class="whatsapp whatsapp-header"
          >
            <img
              src="../../../../src/assets/icons/su_whatsapp_icon.svg"
              alt="WHATSAPP"
              title="WHATSAPP"
            />
          </a>
        </div>
        <a class="sureti-menu-toggle" @click="menu_on = !menu_on">
          <div id="nav-toggle">
            <img
              src="../../../../src/assets/icons/su_menu_icon.svg"
              alt="MENU"
              title="MENU"
            />
          </div>
        </a>
      </div>
    </div>

    <NavMenu :open-menu="menu_on" @close-menu="menu_on = false"></NavMenu>
    <!-- WhatsApp Link BOTTOM - Make single component -->
    <a
      id="whatsapp-button"
      href="https://wa.me/573507642000"
      target="_blank"
      class="whatsapp whatsapp-bottom"
    >
      <img src="../../../../src/assets/icons/whatsapp-button.png" />
    </a>
  </header>
  <!-- #masthead -->

  <div class="sureti-menu-overlay" :class="menu_on ? 'active' : ''"></div>
</template>

<!-- •••••••••••••••• -->
<!-- •••••••••••••••• -->
<!-- •••••••••••••••• -->

<script lang="ts">
import { defineComponent, ref } from "vue";
import NavMenu from "~/components/general/site-menu/NavMenu.vue";

export default defineComponent({
  name: "NavBar",
  components: { NavMenu },
  setup() {
    const menu_on = ref(false);

    return {
      menu_on,
    };
  },
});
</script>

<!-- •••••••••••••••• -->
<!-- •••••••••••••••• -->
<!-- •••••••••••••••• -->

<style scoped lang="scss">
/* SITE HEADER NAVBAR */
#masthead {
  background-color: $su-purple-100;
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  min-height: 6.4rem;
  border-bottom: 4px solid $su-purple-180;
  z-index: 9998;
  padding: 0;
}
#site-identity {
  max-width: 1184px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.6rem;
  position: relative;
}
#nav-toggle,
#nav-whatsapp {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 35px;
  min-height: 35px;
  border-radius: 5px;

  transition: background-color 0.075s ease-in-out;
  cursor: pointer;
}
#nav-whatsapp {
  margin-right: 0.8rem;
}
#nav-toggle:hover,
#nav-whatsapp:hover {
  background-color: #e6e6e6;
}
#nav-toggle img,
#nav-whatsapp img {
  width: 19px;
}
#site-logo {
  line-height: 1;
  img {
    min-height: 1.4rem;
    width: auto;
    display: inline-block;
  }
}

/* WHATSAPP BUTTON AT THE BOTTOM OF SITE */
#whatsapp-button {
  width: 55px;
  min-height: 55px;
  display: block;
  position: fixed;
  bottom: -75px;
  right: 3px;
  padding: 0;
  z-index: 10000;
  outline: none;
  text-decoration: none;
  transition: bottom 0.2s ease-in-out;
}

#whatsapp-button.active {
  bottom: 0;
}
#whatsapp-button:hover {
  bottom: 5px;
}
#whatsapp-button img {
  width: 50px;
  height: 50px;
}

/* DARK MENU OVERLAY */
.sureti-menu-overlay {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  z-index: 9990;
  top: 0;
  left: 0;
  display: none;
}
.sureti-menu.active,
.sureti-menu-overlay.active {
  display: block;
  position: fixed;
}
.sureti-menu-overlay.active {
  top: 0;
  left: 0;
}
</style>
