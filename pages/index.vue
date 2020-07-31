<template>
<div>
  <SectionOne />
  <SectionSecond />
  <SectionThree />
  <SectionFour />
  <SectionButtom />
</div>


</template>

<script>

export default {
 transitionName: 'slide-top',
   data() {
        return { page : true }
  }
}
</script>


<style lang="scss">

    .page-enter-active {
      animation: acrossIn .30s ease-out both;
    } 

    @keyframes acrossIn {
      0% {
        transform: translate3d(0, 100%, 0);
      }
      100% {
        transform: translate3d(0, 0, 0);
      }
    }

    
  // $t-duration: 500ms;
  // $t-delay: 0;

  // .intro-enter-active,
  // .intro-leave-active {
  //   transition-duration: $t-duration * 2;

  //   &::before,
  //   &::after {
  //     content: "";
  //     position: fixed;
  //     top: 0;
  //     left: 0;
  //     z-index: 2;
  //     display: block;
  //     width: 100%;
  //     height: 100%;
  //     transition-property: opacity, transform;
  //     transition-timing-function: ease-in-out;
  //   }

  //   &::before {
  //     background-color: #ffffff;
  //   }

  //   &::after {
  //     // top: 50%;
  //     background-color: #ffffff;
  //   }
  // }

  // .intro-leave {
  //   &::before,
  //   &::after {
  //     transform: scaleY(0);
  //   }
  // }

  // .intro-leave-active {
  //   &::before {
  //     transition-duration: $t-duration;
  //   }

  //   &::after {
  //     transition-duration: $t-duration - $t-delay;
  //     transition-delay: $t-delay;
  //   }
  // }

  // .intro-leave-to {
  //   &::before,
  //   &::after {
  //     transform: scaleY(1);
  //     transform-origin: bottom;
  //   }
  // }

  // .intro-enter {
  //   &::before,
  //   &::after {
  //     transform: scaleY(1);
  //   }
  // }

  // .intro-enter-active {
  //   &::before {
  //     transition-duration: $t-duration;
  //   }

  //   &::after {
  //     transition-duration: $t-duration - $t-delay;
  //     transition-delay: $t-delay;
  //   }
  // }

  // .intro-enter-to {
  //   &::before,
  //   &::after {
  //     transform: scaleY(0);
  //     transform-origin: top;
  //   }
  // }
</style>