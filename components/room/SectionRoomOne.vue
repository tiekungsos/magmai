<template>
<div class="container-fluid section-1" :style="{ backgroundImage: `url(${backgroundUrl})` }">
  <Navbar />
  <NavbarMobile />
  <div class="container-title">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-12 col-xl-6">
        <div class="title-scetion-room">
              <p class="top">หลากหลายห้องพัก</p>
              <p class="center">“ ตามสไตล์คุณ ”</p>
              <p class="button text-widte">การตกแต่งภายในห้องเน้นความเป็นธรรมชาติควบคู่กับสไตล์โมเดิร์นได้อย่างลงตัว <br class="new-line">
ทำให้คุณได้รู้สึกถึงการพักผ่อนที่แท้จริงท่ามกลางธรรมชาติ <br class="new-line">
และความอบอุ่นจากการบริการของเรา</p>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-12 col-xl-6">
        <div class="hotel-book hotel-book-room" style="cursor: pointer;" v-on:click="openBook">
            <div class="header-box">
              <p>จองห้องพัก</p>
              
            </div>
            <div class="body-box">
                <img src="~/assets/img/EAK_1436-HDR.jpg" alt=""  v-lazy-load>
            </div>
        </div>
        <div class="hotel-book-mobile" style="cursor: pointer;" v-on:click="openBook">
            <div class="header-box">
              <p>จองห้องพัก</p>
            </div>
        </div>
      </div>

  
    </div>
  </div>

</div>

</template>

<script>
import backgroundUrl from '~/assets/img/room/EAK_1451-HDR.jpg'
export default {
   data() {
    return { backgroundUrl }
  },
  methods: {
    openBook: function () {
        this.$root.$refs.bookRoom.openNav();
    }
  }
}
</script>