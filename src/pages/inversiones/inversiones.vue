<template src="./inversiones.html"></template>

<script lang="ts" src="./inversiones.ts"></script>

<style scoped lang="scss">
.su_investment {
  margin-top: 64px;

  &_mensaje_referido {
    margin: 0 auto;
    background-color: $su-yellow-100;

    &_container {
      display: flex;
      flex-direction: column;
      max-width: 1120px;
      margin: 0 auto;
      padding: 2.4rem 1.6rem;
      color: #333;
      gap: 1.6rem;
      @include for-tablet-landscape-up {
        flex-direction: row;
        align-items: center;
        gap: 2.4rem;
      }

      h2 {
        font-size: 2.4rem;
        line-height: 120%;
        @include for-tablet-landscape-up {
          font-size: 3.2rem;
        }

        span {
          color: $su-purple-140;
          font-weight: 700;
          margin-right: 0.8rem;
        }
      }
      
      p {
        line-height: 135%;
        font-size: 1.6rem;
        @include for-tablet-landscape-up {
          font-size: 1.8rem;
        }
        span {
          font-weight: 700;
        }
      }
    }
  }

  &_intro {
    display: flex;
    flex-direction: column;
    max-width: 1120px;
    padding: 3.2rem 1.6rem 1.6rem;
    gap: 1.6rem;
    @include for-tablet-landscape-up {
      flex-direction: row;
      align-items: center;
      margin: 0 auto 3.2rem;
      gap: 6.4rem;
    }

    h1 {
      max-width: 350px;
      line-height: 120%;
      font-weight: 700;
      letter-spacing: -0.017em;
      color: #222222;
      @include for-tablet-landscape-up {
        font-size: 3.8rem;
        flex: 4;
      }
    }

    p {
      font-size: 1.8rem;
      font-family: "Montserrat", "Inter", Arial, Helvetica, sans-serif;
      font-weight: 500;
      line-height: 135%;
      letter-spacing: -0.017em;
      @include for-tablet-landscape-up {
        padding-left: 2.4rem;
        border-left: 4px solid $su-purple-80;
        font-size: 2.8rem;
        flex: 8;
      }

      b {
        color: $su-purple-100;
      }
    }
  }
}

.su_investment_opportunities_marketplace_container {
  background-color: $su-purple-lightest;
  padding: 3.2rem 0;
  .su_investment_opportunities_marketplace {
    max-width: 1120px;
    margin: 0 auto;
    padding: 1.6rem;
    display: flex;
    flex-wrap: wrap;
    gap: 4rem;
    @include for-tablet-landscape-up {
      gap: 3.2rem;
    }

    & > * {
      flex: 1;
      @include for-tablet-landscape-up {
        max-width: 362px;
      }
    }
  }
}
</style>
