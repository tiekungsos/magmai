<template>
<div>
  <BookRoom />
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

    
</style>