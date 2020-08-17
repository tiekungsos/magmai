<template>
<div class="container-fluid section-room-header-1" :style="{ backgroundImage: `url(${backgroundUrl})` }" >
  <Navbar />
  <NavbarMobile />

      <!-- <div class="col-12 col-md-12 col-lg-12 col-xl-12">
        <div class="title-scetion-room">
              <p class="top">แพคเกจ</p>
              <p class="center">ที่พักพร้อมอาหารเย็น</p>
              <p class="button">เพื่ออำนวยความสะดวกให้ผู้เข้าพักที่ไม่ต้องการออกไปทานอาหารด้านนอกโรงแรม</p>
        </div>
      </div> -->
      <div class="col-12 col-md-12 col-lg-12 col-xl-12 promotion paddingDesktop" style="text-align: center;">
        <div class="hotel-book">

            <picture>  
              <source class="img-fluid" media="(max-width: 767px)" :srcset="backgroundUrlHeaderMobile"/>
              <source class="img-fluid" :srcset="backgroundUrlHeader" >
              <img class="img-fluid" :srcset="backgroundUrlHeader" alt="">
            </picture>


            <div class="header-box center-top non-mobile" style="cursor: pointer;" v-on:click="openBook">
              <p class="center-el">จองเลย!</p>
            </div>

            <div class="title-scetion-room center-top">
              <p class="top-room">{{room.roomType}}</p>
              <p class="center-text">{{room.name}}</p>
              <p class="button">{{room.roomSize}}</p>
            </div>

            <div class="header-box center-top mobile" style="cursor: pointer;" v-on:click="openBook">
              <p class="center-el">จองเลย!</p>
            </div>

        </div>
      </div>


</div>

</template>

<script>
import backgroundUrl from '~/assets/img/room/EAK_1062-HDR.jpg'
export default {
    props: ['room','backgroundUrlHeader','backgroundUrlHeaderMobile'],
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