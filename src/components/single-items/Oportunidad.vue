<template>
  <div class="su_investment_opportunity_card_container">
    <div
      class="su_investment_opportunity_card_top"
      :style="{
        'background-image': 'url(' + publicCard.guarantee_thumbnail + ')',
      }"
    >
      <div class="su_investment_oppportunity_avaluo">
        <h6>Ávaluo</h6>
        <h4>
          {{ formatAmount(publicCard.guarantee_value) }}
        </h4>
        <p>millones</p>
      </div>
    </div>
    <div class="su_investment_opportunity_card_bottom">
      <div class="su_investment_opportunity_title">
        <h2 class="su_purple">
          {{ publicCard.real_estate_type }} en <br />{{ publicCard.real_estate_neighborhood }}
        </h2>
        <p>
          {{ publicCard.real_estate_city }},
          {{ publicCard.real_estate_province }}
        </p>
      </div>
      <div class="su_loan-funded">
        <div class="su_complete-bar">
          <div
            class="su_funded-bar"
            :style="'width:' + barFilled() + '%'"
          ></div>
        </div>
        <div class="su_bar-info">
          <h3 class="su_purple_140">
            {{ formatCurrency(publicCard.amount_committed) }}
            <span class="su_purple_60"> de </span>
            {{ formatCurrency(publicCard.amount_requested) }}
          </h3>
          <div class="su_horizontal_line"></div>
          <div class="su_investors-active">
            <h3>{{ publicCard.number_investors }}</h3>
            <p>inversionistas participando</p>
          </div>
        </div>
      </div>
      <div class="su_data-box">
        <div class="su_min-investment">
          <p>Inv. Mínima</p>
          <h4 class="su_margin_btm_6">
            {{ formatAmount(publicCard.minimum_investment) }}
          </h4>
          <p>millones</p>
        </div>
        <div class="su_vertical_line"></div>
        <div class="su_interest">
          <p>Interés</p>
          <h4 class="su_margin_btm_6">
            {{ publicCard.return_investment }}<span>%</span>
          </h4>
          <p>mensual</p>
        </div>
      </div>
      <button @click="onInterestedUser" class="su_button su_purple_gradient">
        <p class="su_wgt_bold su_no_margin">Te interesa?</p>
        <img
          src="../../../src/assets/icons/su_icon_forward.svg"
          alt="forward icon white"
        />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { IPublicCard } from "~/interfaces/IPublicCards";
import { formatAmount } from "~/plugins/filters/formatAmount";
import { formatCurrency } from "~/plugins/filters/formatCurrency";

const props = defineProps({
  publicCard: {
    type: Object as () => IPublicCard,
    default: () => ({}),
    required: true,
  },
});

const emits = defineEmits(["onInterestedUser"]);

const onInterestedUser = (): void => {
  emits("onInterestedUser");
};

const barFilled = (): number => {
  const amountRequested = parseInt(props.publicCard.amount_requested!);
  const amountCommitted = parseInt(props.publicCard.amount_committed!);
  return (amountCommitted / amountRequested) * 100;
};
</script>

<style lang="scss">
/*------------------------------------*\
  #UTILITY
\*------------------------------------*/

.su_investment_opportunity_card_container {
  line-height: 1;
  min-width: 288px;
  box-shadow: 4px 4px 0 $su-purple-40;
  border-radius: 10px;
  @include for-tablet-landscape-up {
    margin-bottom: 2rem;
  }

  /*------------------------------------*\
  #CARD TOP
\*------------------------------------*/

  .su_investment_opportunity_card_top {
    position: relative;
    width: 100%;
    height: 200px;
    background-size: cover;
    background-position: center center;
    background-color: $su-purple-80;
    border-radius: 10px 10px 0 0;

    .su_investment_oppportunity_avaluo {
      position: absolute;
      top: 1rem;
      left: 1rem;
      padding: 1.2rem;
      text-align: center;
      background: #ffffff;
      border-radius: 5px;
      @include for-tablet-landscape-up {
        top: 2rem;
        left: 2rem;
      }

      h6,
      p {
        font-size: 1em;
        font-family: "Roboto", "Montserrat", Arial, sans-serif;
        margin: 0;
      }

      h6 {
        font-weight: 400;
        color: $su-purple-80;
        margin-bottom: 0.6rem;
      }

      h4 {
        font-size: 1.4em;
        font-family: "Roboto", "Montserrat", Arial, sans-serif;
        font-weight: 700;
        color: $su-purple-180;
        margin-bottom: 0.4rem;
      }

      p {
        font-weight: 300;
        color: $su-purple-60;
      }
    }
  }

  /*------------------------------------*\
  #CARD BOTTOM STYLES
\*------------------------------------*/

  .su_investment_opportunity_card_bottom {
    background: #ffffff;
    border-radius: 0px 0px 10px 10px;
    padding: 1.6rem 1rem;
    @include for-tablet-landscape-up {
      padding: 1.6rem 2rem;
    }

    .su_investment_opportunity_title {
      padding: 0 1rem;

      h2 {
        margin-bottom: 0.8rem;
        color: $su-purple-100;
        font-size: 2rem;
        font-weight: 700;
        line-height: 120%;
        letter-spacing: -0.019em;
        @include for-tablet-landscape-up {
          font-size: 2.4rem;
        }
      }

      p {
        font-size: 1.6rem;
        letter-spacing: 0.02em;
        color: $su-purple-60;
        margin: 0 0 1.6rem;
        font-weight: 400;
        @include for-tablet-landscape-up {
          font-size: 1.8rem;
        }
      }
    }
  }

  .su_loan-funded {
    padding: 1rem 1.6rem 1.6rem;
    margin-bottom: 1.2rem;
    background: #ffffff;
    border-radius: 5px;
    box-shadow: 0px 2px 8px rgba(29, 29, 29, 0.1);
    @include for-tablet-landscape-up {
      padding-bottom: 1.6rem;
      margin-bottom: 1.6rem;
    }

    .su_horizontal_line {
      background-color: $su-purple-20;
      margin: 1rem 0;
    }

    .su_complete-bar {
      position: relative;
      width: 100%;
      min-height: 0.8rem;
      margin-bottom: 1rem;
      background: #d8e8d7;
      border-radius: 5px;
      @include for-phone-only {
        padding-bottom: 8px;
      }
    }

    .su_funded-bar {
      position: absolute;
      left: 0;
      min-height: 0.8rem;
      background: #45c742;
      border-radius: 5px;
    }

    .su_bar-info {
      h3 {
        font-size: 1.4rem;
        font-weight: 700;
        letter-spacing: -0.017em;
        margin-bottom: 0.625rem;
        font-family: "Roboto";
        color: $su-purple-180;
        @include for-tablet-landscape-up {
          font-size: 1.6rem;
          margin-bottom: 6px;
        }

        span {
          font-weight: 300;
          color: $su-purple-80;
        }
      }
    }

    .su_investors-active {
      display: flex;
      align-items: center;

      h3 {
        font-size: 1.4rem;
        margin-right: 8px;
        color: #514ac6;
        margin-bottom: 0;
        @include for-tablet-landscape-up {
          font-size: 1.8rem;
        }
      }

      p {
        font-weight: 300;
        color: #9792dd;
        margin: 0;
        @include for-tablet-landscape-up {
          font-size: 1.6rem;
        }
      }
    }
  }
  .su_data-box {
    display: flex;
    width: 100%;
    margin-bottom: 1.2rem;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    padding: 1.6rem;
    background: #fff;
    border-radius: 5px;
    box-shadow: 0px 2px 8px rgba(29, 29, 29, 0.1);
    @include for-tablet-landscape-up {
      margin-bottom: 1.6rem;
    }

    .su_vertical_line {
      background-color: $su-purple-20;
      min-height: 40px;
    }

    h4 {
      font-size: 1.8rem;
      font-weight: 700;
      color: $su-purple-180;
      margin-bottom: 0.6rem;
      @include for-tablet-landscape-up {
        font-size: 2.1rem;
      }
    }

    p {
      font-size: 1.4rem;
      color: $su-purple-80;
      margin: 0;
      &:first-child {
        margin-bottom: 0.6rem;
      }
    }
  }

  .su_divisor-vertical {
    width: 1px;
    height: 40px;
  }

  button {
    border: none;
    img {
      height: 16px;
    }
    p {
      color: #ffffff;
      font-size: 1.6rem;
    }
  }

  .su_button {
    background: url(@/assets/img/su_pattern_elipses_light.png),
      $su-purple-gradient-dark;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top right;
    box-shadow: 3px 3px 0 $su-yellow-100;
    &:hover {
      opacity: 0.9;
    }
  }
}
</style>
