import { computed, defineComponent, onMounted, ref } from "vue";
// import { useGetCards, usePostForm } from "@/api-client/request/publicCards";
import type { IFormPublicCard, IPublicCard } from "../../interfaces/IPublicCards";
import FormularioDeOportunidades from "~/components/single-items/FormularioDeOportunidad.vue";
import Oportunidad from "~/components/single-items/Oportunidad.vue";
import Modal from "~/components/general/site-modal/Modal.vue";
import type { IReferred } from '../../interfaces/IReferred'
import { useLoaderStore } from "../../stores/loader";
import { useGetCards, usePostForm } from '../../services/request/publicCards'
import { router } from '../../router/router'
export { onBeforeRender } from './onBeforeRender'

export default defineComponent({
  name: "Inversiones",
  components: {
    "form-card": FormularioDeOportunidades,
    card: Oportunidad,
    Modal,
  },
  props: {
    publicCard: {
      type: Object as () => IPublicCard,
      default: () => ({}),
      required: true,
    },
  },
  setup() {
    const test = "tessting";

    const showDetail = ref(false);
    const isFinalStep = ref(false);
    const publicCards = ref<IPublicCard[]>([]);
    const selectedCard = ref<IPublicCard>({});

    const loaderStore = useLoaderStore()
    const { showLoader, hideLoader } = loaderStore

    const referred = ref<IReferred>({
      isReferred: false,
      utm_term: '',
      utm_content: ''
    })
    const formInvestment = ref<IFormPublicCard>({
      request_amount: "",
      request_date: "",
      investor_email: "",
      investor_persona: "",
      investor_phone: "",
    });

    const getCards = async (): Promise<void> => {
      showLoader()
      const { data, success } = await useGetCards();
      if (success) {
        publicCards.value = data;
      }
      hideLoader()
    };

    const onSubmitForm = async (form: IFormPublicCard) => {
      showLoader()
      formInvestment.value.investor_persona = form.investor_persona;
      formInvestment.value.investor_phone = form.investor_phone;
      formInvestment.value.investor_email = form.investor_email;
      formInvestment.value.investor_id = form.investor_id;
      formInvestment.value.investor_notes = form.investor_notes;
      formInvestment.value.request_amount = form.request_amount;
      formInvestment.value.request_date = form.request_date;
      const { success } = await usePostForm(
        formInvestment.value,
        selectedCard.value.guarantee_id!
      );
      if (success) {
        isFinalStep.value = true;
        localStorage.removeItem('referred')
        referred.value.utm_term = ''
        referred.value.isReferred = false
        referred.value.utm_content = ''
        // await router.replace(router.currentRoute.value.path)
      }
      hideLoader()
    };

    const interest = computed<number>(() => {
      return Number(selectedCard.value.return_investment);
    });

    const min = computed<number>(() => {
      return Number(selectedCard.value.minimum_investment!);
    });

    const max = computed<number>(() => {
      return (
        Number(selectedCard.value.amount_requested!) -
        Number(selectedCard.value.amount_committed!)
      );
    });

    const onDismissModal = (): void => {
      showDetail.value = false;
      isFinalStep.value = false;
    };

    const onInterestedUser = (publicCard: IPublicCard): void => {
      console.log(publicCard);
      showDetail.value = true;
      selectedCard.value = publicCard;
    };

    // const persistedReferral = {utm_content: localStorage.getItem('referred')}

    onMounted(async () => {
      // console.log('persistedReferral:',persistedReferral)
      const referredStore = localStorage.getItem('referred')

      if (!referredStore) {
        const { query } = router.currentRoute.value;
        const { utm_content, utm_term } = query;
        if (utm_content) {
          referred.value.isReferred = !!utm_content
          referred.value.utm_content = utm_content
          referred.value.utm_term = utm_term
          localStorage.setItem('referred', JSON.stringify(referred.value))
        }
        if (router.currentRoute.value.query) {
          formInvestment.value.investor_tracking = JSON.stringify(
              router.currentRoute.value.query
          );
        }
      } else {
        referred.value.isReferred = true
        referred.value.utm_content = JSON.parse(referredStore).utm_content
        referred.value.utm_term = JSON.parse(referredStore).utm_term
        formInvestment.value.investor_tracking = JSON.stringify(
            referred.value
        );
      }
      await getCards();
    });

    return {
      referred,
      test,
      onSubmitForm,
      onDismissModal,
      onInterestedUser,
      interest,
      min,
      max,
      isFinalStep,
      selectedCard,
      showDetail,
      publicCards
    };
  },
});
