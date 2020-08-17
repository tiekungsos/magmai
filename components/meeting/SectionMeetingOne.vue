<template>
<div class="container-fluid section-1" :style="{ backgroundImage: `url(${backgroundUrl})` }">
  <Navbar />
  <NavbarMobile />
  <div class="container-title">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-12 col-xl-6">
        <div class="title-scetion-room">
              <p class="top">บริการ</p>
              <p class="center">ห้องประชุม / งานสมนา</p>
              <p class="button meeting-text-header">บริการให้เช่าสถานที่สำหรับจัดงานเลี้ยงหรือสัมมนา <br class="new-line">
ด้วยห้องประชุมที่สามารถรองรับจำนวนคนได้ตั้งแต่ 20 ท่าน จนถึง 100 ท่าน </p>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-12 col-xl-6">
        <div class="hotel-book hotel-book-room">
            <div class="header-box" style="cursor: pointer;" v-on:click="openBook">
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
import backgroundUrl from '~/assets/img/meeting/Makmai_0136.jpg'
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