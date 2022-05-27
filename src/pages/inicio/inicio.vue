<template>
  <PageSection
    :first-section="true"
    :full-width="true"
  >
    <InicioHero></InicioHero>
  </PageSection>

  <PageSection>
    <InicioExpo></InicioExpo>
  </PageSection>

  <PageSection
    :full-width="true"
    :pink-section="true"
  >
    <InicioAliados></InicioAliados>
  </PageSection>

  <PageSection>
    <InicioTestimonios></InicioTestimonios>
  </PageSection>

  <PageSection
    :full-width="true"
    :pink-section="true"
  >
    <InicioCTA></InicioCTA>
  </PageSection>
</template>

<script lang="ts" setup>
import InicioHero from "~/components/page-sections/inicio/inicio-hero/InicioHero.vue"
import InicioExpo from "~/components/page-sections/inicio/inicio-expo/InicioExpo.vue"
import InicioAliados from "~/components/page-sections/inicio/inicio-aliados/inicioAliados.vue"
import InicioTestimonios from "~/components/page-sections/inicio/inicio-testimonios/InicioTestimonios.vue"
import InicioCTA from "~/components/page-sections/inicio/inicio-cta/InicioCTA.vue"
import PageSection from "~/components/page-sections/shared/PageSection.vue"
</script>
