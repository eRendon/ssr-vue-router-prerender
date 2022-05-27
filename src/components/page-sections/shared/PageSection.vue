<template>
    <section :class="'su-page-section' + (firstSection ? ' first-section' : '') + (fullWidth ? ' full-width': '') + (pinkSection ? ' pink-section': '')">
        <slot></slot>
    </section>
</template>

<script lang="ts">import { defineComponent } from "vue";


export default defineComponent({
    name:"PageSection",
    props: {
        firstSection: {
            type: Boolean,
            default: false
        },
        fullWidth: {
            type: Boolean,
            default: false
        },
        pinkSection: {
            type: Boolean,
            default: false
        }
    }
})
</script>

<style scoped>

</style>