<template>
  <div v-if="showModal" class="sureti-movement-modal z-modal " id="sureti-new-guarantee-modal">
    <div class="absolute bg-black opacity-80 inset-0 z-0"></div><!-- OVERLAY -->
    <!--body-->
    <div class="sureti-movement-modal-body">
      <img class="sureti-movement-modal-close sureti-close" src="../../../../src/assets/icons/expand.svg" @click="onDismissModal" />

      <div>
        <slot></slot>
      </div>
    </div>
  </div>

</template>

<script setup lang="ts">
defineProps({
  showModal: {
    type: Boolean,
    default: false,
  },
});

const emits = defineEmits(["onDismissModal"]);

const onDismissModal = (): void => {
  emits("onDismissModal");
};
</script>

<style scoped>
.sureti-movement-modal-body {
  background-color: #fff;
  margin: 15px auto;
  width: calc(100% - 30px);
  padding: 10px 20px;
  max-height: calc(100vh - 45px);
  max-width: 600px;
  overflow: auto;
  border-radius: 10px;
}
</style>
