<template>
  <div class="su_user_form">
    <div v-if="!isFinalStep">
      <h2 class="su_form_heading" :class="isLoan ? 'loan-form-heading' : ''">
        <span v-if="isLoan">¿Cuánto dinero necesitas?</span
        ><span v-else>¿Cuánto deseas invertir?</span>
      </h2>
      <div
        class="su_form_container"
        :class="isLoan ? 'loan_form_container' : ''"
      >
        <div class="su_form_flex" :class="isLoan ? 'is-loan' : ''">
          <!--Clase condicional para formulario de prestamos-->
          <div
            class="su_amount_slider_box"
            :class="isLoan ? 'slider-prestamos' : ''"
          >
            <p class="su_amount_selected">
              {{ formatCurrency(intentionToInvest) }}
            </p>
            <input
              v-model="intentionToInvest"
              type="range"
              class="su_amount_slider"
              :min="min"
              :max="max"
              step="5000000"
            />
          </div>
          <!-- <p>{{ minimum }}</p> -->
          <div class="su_amount_results" :class="isLoan ? 'loan-results' : ''">
            <div class="su_amount_interest su_flex">
              <p v-if="isLoan">Interés mensual</p>
              <!--Texto Loan-->
              <p v-else>Interés mensual</p>
              <h3>{{ interest }} <span>%</span></h3>
            </div>
            <div v-if="isLoan" class="su_amount_interest su_flex">
              <p>Pago Mensual</p>
              <h3>
                {{ formatCurrency(monthlyInterestPayment) }}
              </h3>
            </div>
            <div v-else class="su_amount_interest su_flex">
              <p>Estimado anual</p>
              <h3>
                {{ formatCurrency(annualEstimated) }}
              </h3>
            </div>
          </div>
        </div>
        <div class="su_form_flex" :class="isLoan ? 'is-loan' : ''">
          <!--Clase condicional para formulario de prestamos-->
          <Form
            @submit="onNextStep"
            :validation-schema="useFormSchema"
            v-slot="{ errors }"
          >
            <div class="su_user_info">
              <label for="su_mobile">
                <div class="su_input_with_icon">
                  <img
                    src="../../../src/assets/icons/su_icon_telephone.svg"
                    alt="telephone icon"
                  />
                  <Field
                    type="text"
                    id="su_mobile"
                    name="investor_phone"
                    placeholder="Numero de Celular"
                  />
                  <span class="text-red-500 text-xs">{{
                    errors.investor_phone
                  }}</span>
                </div>
              </label>
              <label for="su_email">
                <div class="su_input_with_icon">
                  <img
                    src="../../../src/assets/icons/su_icon_email.svg"
                    alt="email icon"
                  />
                  <Field
                    type="email"
                    id="su_email"
                    name="investor_email"
                    placeholder="Email"
                  />
                </div>
              </label>
            </div>
            <label v-if="isLoan" class="su_checkbox" for="homeOwnerCheckboxId">
              ¿Tienes casa / vivienda propia?
              <input
                v-model="lead_has_home"
                class="su_checkbox_input"
                type="checkbox"
                name="lead_has_home"
                id="homeOwnerCheckboxId"
              />
              <div class="su_checkbox_box"></div>
            </label>
            <div v-if="isLoan">
              <button type="submit" class="su_form_button P-A">
                Aceptar y Solicitar Préstamo
              </button>
            </div>
            <div v-else>
              <button type="submit" class="su_form_button I-A">
                Quiero continuar
              </button>
            </div>
            <div class="su_form_politicas">
              <p>
                Al hacer click en
                {{
                  isLoan
                    ? '"Aceptar y Solicitar Préstamo"'
                    : '"Quiero continuar"'
                }}
                aceptas la
                <router-link to="/transparencia"
                  >Política de privacidad y cookies de sureti.co</router-link
                >
              </p>
            </div>
          </Form>
        </div>
      </div>
    </div>
    <div v-else class="su_user_form_msg">
      <h2>¡Muchas gracias!</h2>
      <p>Te contactaremos en breve.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref, toRefs } from "vue";
import { Field, Form } from "vee-validate";
import type { IFormPublicCard, IPublicCard } from "~/interfaces/IPublicCards";
import { formatCurrency } from "~/plugins/filters/formatCurrency";

const props = defineProps({
  publicCard: {
    type: Object as () => IPublicCard,
    default: () => ({}),
    required: true,
  },
  max: {
    type: Number,
    default: 0,
  },
  min: {
    type: Number,
    default: 0,
  },
  interest: {
    type: Number,
    default: 0,
  },
  isFinalStep: {
    type: Boolean,
    default: false,
  },
  isLoan: {
    type: Boolean,
    default: false,
  },
});

const { interest } = toRefs(props);

const intentionToInvest = ref(props.min);

const annualEstimated = computed(() => {
  return intentionToInvest?.value * (Number(interest?.value) / 100) * 12;
});

const monthlyInterestPayment = computed(() => {
  return (intentionToInvest?.value * (Number(interest?.value) / 100)).toFixed(
    2
  );
});

const lead_has_home = ref(false);

const emits = defineEmits(["onSubmitForm"]);

const onNextStep = (useForm: IFormPublicCard): void => {
  useForm.request_date = new Date().toISOString();
  useForm.request_amount = Number(intentionToInvest.value!).toFixed();
  useForm.investor_persona = "persona_2";
  useForm.investor_id = "";
  useForm.investor_tracking = "";
  useForm.investor_notes = "";
  if (!useForm.investor_email) {
    useForm.investor_email = `+57${useForm.investor_phone}@crm.sureti.co`;
  }
  useForm.lead_has_home = lead_has_home.value
    ? "Si tiene vivienda"
    : "No tiene vivienda";
  emits("onSubmitForm", useForm);
  setTimeout(() => {
    lead_has_home.value = false;
  }, 2000);
};

const useFormSchema: IFormPublicCard = {
  investor_email: "",
  investor_id: "",
  investor_notes: "",
  investor_persona: "",
  investor_phone: "required|max:12|phone_number",
  investor_tracking: "",
  request_amount: "",
  request_date: "",
  lead_has_home: "",
};
</script>

<style lang="scss">
.su_user_form {
  padding: 1.6rem;
  .loan_form_container {
    display: flex;
    flex-direction: column;
    @include for-tablet-landscape-up {
      flex-direction: row;
      gap: 3.2rem;
    }
    .is-loan {
      flex: 1;
    }
  }
  .su_form_politicas {
    margin: 1.6rem 0 0;
    a {
      color: $su-purple-light;
    }
    p {
      color: $su-gray-dark;
      padding: 0 1.6rem;
      line-height: 120%;
    }
  }
  .su_form_heading {
    font-size: 1.6rem;
    font-weight: 700;
    color: $su-purple-160;
    margin-bottom: 2.4rem;
    letter-spacing: -0.017em;
    line-height: 120%;
    @include for-tablet-landscape-up {
      font-size: 3.2rem;
      margin-bottom: 2.4rem;
    }
  }

  .su_form_heading.loan-form-heading {
    font-size: 2.4rem;
    color: $su-purple-100;
    @include for-tablet-landscape-up {
      font-size: 3.2rem;
      margin: 1rem 0 3.2rem;
    }
  }

  .su_amount_slider_box {
    padding: 2rem 1.6rem 2.4rem;
    background-color: $su-purple-80;
    border-radius: 5px;
    @include for-tablet-landscape-up {
      padding: 2.4rem 2.4rem 3.2rem;
    }

    .su_amount_selected {
      margin: 0 0 1rem;
      font-family: "Montserrat", "Roboto", Arial, sans-serif;
      font-size: 2.4rem;
      font-weight: 700;
      letter-spacing: 0.05em;
      color: #fff;
    }

    .su_amount_slider {
      -webkit-appearance: none; /* Override default CSS styles */
      appearance: none;
      width: 100%; /* Full-width */
      height: 2px;
      border-radius: 1px;
      background-color: $su_purple_40;
    }

    .su_amount_slider::-webkit-slider-thumb {
      -webkit-appearance: none; /* Override default look */
      appearance: none;
      width: 25px; /* Set a specific slider handle width */
      height: 25px; /* Slider handle height */
      border-radius: 25px;
      border: 3px solid $su-purple-100;
      background: $su-yellow-100; /* Green background */
      cursor: pointer; /* Cursor on hover */
    }

    .su_amount_slider::-moz-range-thumb {
      appearance: none;
      width: 24px; /* Set a specific slider handle width */
      height: 24px; /* Slider handle height */
      border-radius: 25px;
      border: 3px solid $su-purple-100;
      background: $su-yellow-100; /* Green background */
      cursor: pointer; /* Cursor on hover */
    }
  }

  .su_amount_slider_box.slider-prestamos {
    background-color: $su-purple-100;
    p {
      padding: 1.6rem 0 1rem;
      @include for-tablet-landscape-up {
        font-size: 3.2rem;
      }
    }
    input {
      margin: 0 0 1.6rem;
    }
  }

  .su_amount_results {
    margin: 1rem 0 1.8rem;
    & > * {
      padding: 1rem;
      border-bottom: 1px solid $su-purple-20;
      margin: 0;
      p {
        font-size: 1.4rem;
        color: $su-gray-dark;
        @include for-tablet-portrait-up {
          font-size: 1.6rem;
        }
      }
      h3 {
        font-size: 1.6rem;
        color: $su-purple-light;
        font-weight: 400;
      }
      &:last-child {
        p {
          font-size: 1.5rem;
          font-weight: 700;
          color: $su-purple-light;
          @include for-tablet-portrait-up {
            font-size: 1.8rem;
          }
        }
        h3 {
          font-size: 1.5rem;
          font-weight: 700;
          @include for-tablet-portrait-up {
            font-size: 1.8rem;
          }
        }
      }
    }
    & > :last-child {
      border: none;
    }
    @include for-tablet-landscape-up {
      margin: 2.4rem 0;
    }

    .su_amount_interest {
      justify-content: space-between;
      align-items: center;

      p {
        margin: 0;
      }

      h3 {
        font-family: "Roboto", "Montserrat", Arial, sans-serif;
      }
    }
  }

  .su_amount_results.loan-results {
    .su_amount_interest {
      p,
      h3 {
        @include for-tablet-landscape-up {
          font-size: 2.4rem;
          padding: 0 0 0.8rem;
        }
      }
      &:last-child {
        @include for-tablet-landscape-up {
          padding: 1.6rem 1rem 0;
        }
      }
    }
  }

  .su_user_info {
    .su_input_with_icon {
      display: flex;
      margin-bottom: 1.6rem;
      padding: 1.6rem;
      border: 1px solid $su-purple-100;
      border-radius: 5px;
      cursor: pointer;
      input {
        border: none;
        margin-left: 10px;
        background: none;
        &::placeholder {
          font-weight: 300;
          font-size: 1.4rem;
          color: $su_purple_60;
        }
      }
      .text-red-500 {
        display: none;
        color: rgb(212, 40, 40);
        .text-red-500::after {
          position: absolute;
          content: 'Por favor ingresa un número de celular';
          width: 100%;
          height: 24px;
          color: red;
        }
      }
    }
  }
  .su_checkbox {
    position: relative;
    width: 100%;
    padding: 2.4rem;
    background: url(src/assets/img/su_pattern_elipses_dark.png),
      $su-purple-gradient-light;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top right;
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.6rem;
    color: #ffffff;
    font-weight: 500;
    letter-spacing: 0.05em;
    margin-bottom: 1rem;
    cursor: pointer;
    &_input {
      display: none;
    }
    &_box {
      width: 2em;
      height: 2em;
      background-color: #fff;
      border-radius: 3px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
      &::after {
        content: "\2713";
        color: $su-purple-100;
        transform: scale(0);
      }
    }
  }

  .su_form_button {
    width: 100%;
    position: relative;
    margin-top: 0.5rem;
    padding: 1.6rem;
    min-height: 64px;
    text-align: left;
    border: none;
    font-family: "Roboto", "Montserrat", Arial, sans-serif;
    color: $su_purple_100;
    font-size: 1.6rem;
    border-radius: 5px;
    font-weight: 700;
    background-color: $su-yellow-100;
    box-shadow: 3px 3px 0 $su-purple-darkest;
    cursor: pointer;

    &::after {
      content: "";
      background-repeat: no-repeat;
      position: absolute;
      background-image: url(src/assets/icons/su_icon_next_purple.svg);
      background-size: contain;
      width: 14px;
      height: 16px;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
    }

    &:hover {
      background-color: $su-purple-light;
      color: #ffffff;
    }
  }
  .su_user_form_msg {
    padding: 1rem 0;
    border-radius: 5px;
    h2 {
      color: $su-purple-120;
      font-weight: 400;
      margin-bottom: 2.4rem;
    }

    p {
      padding: 2.4rem;
      font-size: 1.6rem;
      background-color: $su-purple-100;
      box-shadow: 3px 3px 0 $su-yellow-100;
      border-radius: 5px;
      color: #fff;
    }
  }
}
</style>
