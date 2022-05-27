import { defineComponent } from "vue";
import NosotrosHeader from "~/components/page-sections/nosotros/nosotros-header/NosotrosHeader.vue"
import NosotrosEquipo from "~/components/page-sections/nosotros/nosotros-equipo/NosotrosEquipo.vue"
import NosotrosValores from "~/components/page-sections/nosotros/nosotros-valores/NosotrosValores.vue"
import NosotrosCta from "~/components/page-sections/nosotros/nosotros-cta/NosotrosCta.vue"
import PageSection from "~/components/page-sections/shared/PageSection.vue"
import NosotrosAliados from "~/components/page-sections/nosotros/nosotros-aliados/NosotrosAliados.vue"

export default defineComponent({
  name: "Nosotros",
  components:{
    NosotrosHeader,
    NosotrosValores,
    NosotrosEquipo,
    NosotrosCta,
    PageSection,
    NosotrosAliados
  }
});
