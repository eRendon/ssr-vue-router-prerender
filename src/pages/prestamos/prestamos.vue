<template src="./prestamos.html"></template>

<script lang="ts" src="./prestamos.ts"></script>

<style lang="scss">
.su_prestamos {
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
    position: relative;
    max-width: 1120px;
    margin: 0 auto;

    &_header {
      display: flex;
      flex-direction: column;
      gap: 1.6rem;
      padding: 3.2rem 1.6rem 1.6rem;
      @include for-tablet-landscape-up {
        flex-direction: row;
        align-items: center;
        margin: 0 auto 3.2rem;
        gap: 6.4rem;
      }
      h1 {
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
    .su_prestamos_requisitos {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1.6rem 2.4rem;
      margin: 1rem 1.6rem 2.4rem;
      border-radius: 10px;
      background: url(src/assets/img/su_pattern_elipses_dark.png),
        $su-purple-gradient-light;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: top right;
      @include for-tablet-landscape-up {
        padding: 2.4rem;
        margin: 0 1.6rem 4.8rem;
      }

      h2 {
        font-size: 1.6rem;
        line-height: 120%;
        font-weight: 700;
        color: white;
        margin-right: 1.6rem;
        @include for-tablet-landscape-up {
          font-size: 2.4rem;
          margin-right: 2.4rem;
        }
      }
      img {
        min-height: 44px;
      }
    }
  }
  .su_prestamos_form {
    padding: 1.6rem 0;
    background-color: $su-purple-lightest;
    .su_form {
      max-width: 1120px;
      margin: 0 auto;
    }
  }
    .su_user_form_msg {
    padding: 2.4rem 0;
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

.su_checkbox_input:checked + .su_checkbox_box {
  background-color: $su-yellow-100;
  border-color: $su-yellow-120;
}

.su_checkbox_input:checked + .su_checkbox_box::after {
  transform: scale(1.2);
  transition: transform 0.15s;
}


</style>
