<template>
<div class="container-fluid section-1 " :style="{ backgroundImage: `url(${backgroundUrl})` }">
  <Navbar />
  <NavbarMobile />
  <div class="container-title">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-12 col-xl-6">
        <div class="title-scetion-room">
              <p class="top">ที่นี่</p>
              <p class="center">สังขละบุรี</p>
        </div>
      </div>

    </div>
  </div>

</div>

</template>

<script>
import backgroundUrl from '~/assets/img/ex/Makmai_0020.jpg'
export default {
   data() {
    return { backgroundUrl }
  }
}
</script>