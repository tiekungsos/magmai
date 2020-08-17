<template>
<div class="container-fluid section-1" :style="{ backgroundImage: `url(${backgroundUrl})` }">
  <Navbar />
  <NavbarMobile />
  <div class="container-title">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-12 col-xl-6">
        <div class="title-scetion-room">
              <p class="top">{{header}}</p>
              <p class="center">{{detailHeader}}</p>
        </div>
      </div>

    </div>
  </div>

</div>

</template>

<script>
export default {
  props: ['header','detailHeader','backgroundUrl'],
   data() {
    return {  }
  }
}
</script>