import { defineComponent, onMounted, ref } from "vue";
import FormularioDeOportunidades from "~/components/single-items/FormularioDeOportunidad.vue";
import type { IFormLoanCard, IFormPublicCard } from "~/interfaces/IPublicCards";
import type { IReferred } from '~/interfaces/IReferred'
import Modal from "~/components/general/site-modal/Modal.vue"
import { useLoaderStore } from "~/stores/loader";
import { usePostFormLoan } from '../../services/request/publicCards'
export { onBeforeRender } from './onBeforeRender'

export default defineComponent({
  name: "Prestamos",
  components: {
    "form-card": FormularioDeOportunidades,
    modal: Modal,
  },
  setup() {
    const test = "tessting";
    const loaderStore = useLoaderStore()
    const { showLoader, hideLoader } = loaderStore
    const showModal = ref(false);
    const openModal = () => {
      showModal.value = true;
    };
    const onDismissModal = (): void => {
      showModal.value = false;
    };

    const referred = ref<IReferred>({
      isReferred: false,
      utm_term: '',
      utm_content: ''
    })
    const formLoan = ref<IFormLoanCard>({
      lead_email: "",
      lead_id: "",
      lead_notes: "",
      lead_persona: "persona_1",
      lead_phone: "",
      lead_tracking: "",
      lead_type: "",
      request_date: "",
      request_amount: "",
      lead_has_home: "No tiene vivienda"
    });

    const onSubmitForm = async (form: IFormPublicCard) => {
      showLoader(),
      (formLoan.value.lead_email = form.investor_email),
        (formLoan.value.lead_notes = form.investor_notes!),
        (formLoan.value.lead_persona = "persona_1"),
        (formLoan.value.lead_phone = form.investor_phone),
        (formLoan.value.request_date = form.request_date),
        (formLoan.value.request_amount = form.request_amount);
      formLoan.value.lead_has_home = form.lead_has_home!
      console.log(form)
      const { success, data } = await usePostFormLoan(formLoan.value);
      console.log(data);
      if (success) {
        openModal();
        //en este paso ya se envió correctamente el formulario, entonces, sólo es poner la propiedad de showModal
        //que usted haya creado a true.
        localStorage.removeItem('referred')
        referred.value.utm_term = ''
        referred.value.isReferred = false
        referred.value.utm_content = ''
        //await router.replace(router.currentRoute.value.path)
      }
      hideLoader()
    };

    // onMounted(() => {
    //   const referredStore = localStorage.getItem('referred')
    //
    //   if (!referredStore) {
    //     const { query } = router.currentRoute.value;
    //     const { utm_content, utm_term } = query;
    //     if (utm_content) {
    //       referred.value.isReferred = !!utm_content
    //       referred.value.utm_content = utm_content
    //       referred.value.utm_term = utm_term
    //       localStorage.setItem('referred', JSON.stringify(referred.value))
    //     }
    //     if (router.currentRoute.value.query) {
    //       formLoan.value.lead_tracking = JSON.stringify(router.currentRoute.value.query)
    //     }
    //   } else {
    //     referred.value.isReferred = true
    //     referred.value.utm_content = JSON.parse(referredStore).utm_content
    //     referred.value.utm_term = JSON.parse(referredStore).utm_term
    //     formLoan.value.lead_tracking = JSON.stringify(referred.value)
    //   }
    // });

    return {
      onSubmitForm,
      test,
      onDismissModal,
      showModal,
      openModal,
      referred
    };
  },
});
