<template>
<div class="container-fluid section-contact-1" :style="{ backgroundImage: `url(${backgroundUrl})` }">
  <Navbar />
  <NavbarMobile />
  <div class="container-title">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-12 col-xl-6">
        <div class="title-scetion-contact">
              <p class="top">ติดต่อเรา</p>
              <p class="center">ได้ตลอด 24 ชั่วโมง</p>
              <p class="button">
                Reception : 091 – 2677199 <br>
                Email : suanmagmai@gmail.com <br>
                Id Line : 081 – 8386311
              </p>
              <br>
              <p class="button">200/8 หมู่ 3 ต.หนองลู อ.สังขละบุรี จ.กาญจนบุรี 71240</p>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-12 col-xl-6">
        <div class="hotel-book">
            <div class="header-box" style="cursor: pointer;" v-on:click="openBook">
              <p>จองห้องพัก</p>
              
            </div>
            <div class="body-box">
                <img src="~/assets/img/EAK_1436-HDR.jpg" alt="">
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
import backgroundUrl from '~/assets/img/contact/Makmai_0113.jpg'
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