<template>
    <div id="main-menu-box" class="cover-bg" :class="openMenu ? 'open' : 'closed'">
      <img class="sureti-menu-close" src="../../../../src/assets/icons/close-white.svg" @click="closeMenu" />
      <!-- MAIN MENU ------------>
      <nav id="site-navigation" class="main-navigation">
        <ul>
          <li>
            <router-link to="/" @click="closeMenu">
                INICIO
            </router-link>
          </li>
          <li>
            <router-link to="/nosotros" @click="closeMenu">
                NOSOTROS
            </router-link>
          </li>
          <li>
            <router-link to="/transparencia" @click="closeMenu">
                TRANSPARENCIA
            </router-link>
          </li>
          <li>
            <router-link to="/prestamos" @click="closeMenu" class="loan-modal-toggle">
                SOLICITA TU PRÉSTAMO
            </router-link>
          </li>
          <li>
            <router-link to="/inversiones" @click="closeMenu" class="investment-modal-toggle">
                INVIERTE CON NOSOTROS
            </router-link>
          </li>
        </ul>
      </nav>
      <!-- #site-navigation -->
    </div>
</template>

<script lang="ts">
  import { defineComponent } from "vue"

    export default defineComponent({
        name:'NavMenu',
        props:{
            openMenu: {
                type: Boolean,
                default: false
            }
        },
        data(){
            return {}
        },
        methods: {
          closeMenu(){
            this.$emit('closeMenu');
          }
        }
    });
</script>


<style scoped>
/* SITE MENU */
#main-menu-box {
  height: calc(100vh - 62px);
  background-color: #5747dc;
  width: 320px;
  padding: 25px;
  position: fixed;
  z-index: 9994;
  right: 0;
  top: 62px;
  opacity: 1;
  transition: right 0.25s ease-in-out, opacity 0.25s ease-in-out;
}
#main-menu-box.closed {
  opacity: 0;
  right: -400px;
}
#main-menu-box .sureti-menu-close {
  position: absolute;
  top: 12px;
  right: 12px;
  width: 25px;
  height: 25px;
  padding: 5px;
  transition: background-color 0.15s ease-in-out;
  cursor: pointer;
  border-radius:5px;
}
#main-menu-box .sureti-menu-close:hover {
  background-color: #3727bc;
}
#main-menu-box ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
#main-menu-box li {
  list-style: none;
  padding: 0;
  margin: 0 0 5px;
  display: block;
}
#main-menu-box li a {
  color: #fff;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 1px;
  display: block;
  padding: 10px;
}
#main-menu-box li a:hover {
  background-color: #3727bc;
  transition: background-color 0.15s ease-in-out;
}
#main-menu-box li.current-menu-item a {
  background-color: #fff;
  color: #5747dc;
}
#site-navigation {
  margin-top: 80px;
}
</style>
