<template>
    <div class="loading-graphic lds-roller" :class="small ? white ? 'small white' : 'small' : white ? 'white' : ''">
        <div><!----></div><div><!----></div><div><!----></div><div><!----></div><div><!----></div><div><!----></div><div><!----></div><div><!----></div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'LoadingSpinner',
    props: {
        small: {
            type: Boolean,
            default: false,
        },
        white:{
            type: Boolean,
            default: false,
        }
    },
}
</script>

<style scoped>

/* LOADER GRAPHIC */
.lds-roller {
    display: inline-block;
    position: relative;
    width: 80px;
    height: 80px;
  }
  .lds-roller div {
    animation: lds-roller 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 40px 40px;
  }
  .lds-roller div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: #5747D7;
    margin: -4px 0 0 -4px;
  }
  .lds-roller div:nth-child(1) {
    animation-delay: -0.036s;
  }
  .lds-roller div:nth-child(1):after {
    top: 63px;
    left: 63px;
    opacity:0.1;
  }
  .lds-roller div:nth-child(2) {
    animation-delay: -0.072s;
  }
  .lds-roller div:nth-child(2):after {
    top: 68px;
    left: 56px;
    opacity:0.22;
  }
  .lds-roller div:nth-child(3) {
    animation-delay: -0.108s;
  }
  .lds-roller div:nth-child(3):after {
    top: 71px;
    left: 48px;
    opacity:0.33;
  }
  .lds-roller div:nth-child(4) {
    animation-delay: -0.144s;
  }
  .lds-roller div:nth-child(4):after {
    top: 72px;
    left: 40px;
    opacity:0.44;
  }
  .lds-roller div:nth-child(5) {
    animation-delay: -0.18s;
  }
  .lds-roller div:nth-child(5):after {
    top: 71px;
    left: 32px;
    opacity:0.55;
  }
  .lds-roller div:nth-child(6) {
    animation-delay: -0.216s;
  }
  .lds-roller div:nth-child(6):after {
    top: 68px;
    left: 24px;
    opacity:0.70;
  }
  .lds-roller div:nth-child(7) {
    animation-delay: -0.252s;
  }
  .lds-roller div:nth-child(7):after {
    top: 63px;
    left: 17px;
    opacity:0.88;
  }
  .lds-roller div:nth-child(8) {
    animation-delay: -0.288s;
  }
  .lds-roller div:nth-child(8):after {
    top: 56px;
    left: 12px;
  }
  @keyframes lds-roller {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

/* SMALL LOADER GRAPHIC */
.lds-roller.small {
    display: inline-block;
    position: relative;
    width: 20px;
    height: 20px;
    }
    .lds-roller.small div {
    animation: lds-roller 1s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    transform-origin: 10px 10px;
    }
    .lds-roller.small div:after {
    content: " ";
    display: block;
    position: absolute;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: #5747D7;
    margin:0;
    }
    .lds-roller.small div:nth-child(1) {
    animation-delay: -0.036s;
    }
    .lds-roller.small div:nth-child(1):after {
    top: 16px;
    left: 16px;
    opacity:0.15;
    }
    .lds-roller.small div:nth-child(2) {
    animation-delay: -0.072s;
    }
    .lds-roller.small div:nth-child(2):after {
    top: 17px;
    left: 14px;
    opacity:0.32;
    }
    .lds-roller.small div:nth-child(3) {
    animation-delay: -0.108s;
    }
    .lds-roller.small div:nth-child(3):after {
    top: 18px;
    left: 12px;
    opacity:0.45;
    }
    .lds-roller.small div:nth-child(4) {
    animation-delay: -0.144s;
    }
    .lds-roller.small div:nth-child(4):after {
    top: 18px;
    left: 10px;
    opacity:0.6;
    }
    .lds-roller.small div:nth-child(5) {
    animation-delay: -0.18s;
    }
    .lds-roller.small div:nth-child(5):after {
    top: 18px;
    left: 8px;
    opacity:0.7;
    }
    .lds-roller.small div:nth-child(6) {
    animation-delay: -0.216s;
    }
    .lds-roller.small div:nth-child(6):after {
    top: 17px;
    left: 6px;
    opacity:0.8;
    }
    .lds-roller.small div:nth-child(7) {
    animation-delay: -0.252s;
    }
    .lds-roller.small div:nth-child(7):after {
    top: 16px;
    left: 5px;
    opacity:0.9;
    }
    .lds-roller.small div:nth-child(8) {
    animation-delay: -0.288s;
    }
    .lds-roller.small div:nth-child(8):after {
    top: 14px;
    left: 3px;
    opacity:1;
    }
    @keyframes lds-roller {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
    }

    /* MAKE WHITE */
    .lds-roller.white div:after {
    background: #fff;
  }
</style>