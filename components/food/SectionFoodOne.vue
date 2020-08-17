<template>
<div class="container-fluid section-1 food-section" :style="{ backgroundImage: `url(${backgroundUrl})` }">
  <Navbar />
  <NavbarMobile />
  <div class="container-title">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-12 col-xl-6">
        <div class="title-scetion-room">
              <p class="top">ห้องอาหาร</p>
              <p class="center">“ ครัวแมกไม้ ”</p>
              <p class="button food-text-header">จากแรงบันดาลใจและความชื่นชอบในการทำอาหาร “ครัวแมกไม้” จึงเป็นร้านอาหารที่ให้บริการ <br class="new-line">
                มากว่า 10 ปี จึงทำให้ท่านมั่นใจได้ว่า การคัดสรรค์วัตถุดิบ กรรมวิธีในการปรุง <br class="new-line">
                และรสชาติของอาหารทุกจานเป็นอาหารที่สด สะอาด และอร่อย <br class="new-line">
                ตามสูตรดั้งเดิมของเราในทุกๆจาน</p>
            <br><br>
            <p class="button food-button-time1">อาหารเช้าเปิดให้บริการตั้งแต่เวลา 7.00 – 9.30 น.</p>
            <p class="button food-button-time2">ห้องอาหารเปิดให้บริการตั้งแต่ 10.00 – 21.30 น. </p>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-12 col-xl-6">
        <div class="hotel-book hotel-book-food" style="background-color: #FBB018;">
            <div class="header-box" style="cursor: pointer;" v-on:click="openBook">
              <p style="     text-align: center;position: relative;color: #fff;font-style: italic;left: 0;top: 0;padding-top: 40px;">จองโต๊ะทานอาหาร</p>
              
            </div>
            <div class="body-box">
                <img src="~/assets/img/food/แกงป่าไก่บ้าน.jpg" alt="" v-lazy-load>
            </div>
        </div>
        <div class="hotel-book-mobile food-mobile-button">
            <div class="header-box">
              <p>จองโต๊ะทานอาหาร</p>
            </div>
        </div>
      </div>

  
    </div>
  </div>

</div>

</template>

<script>
import backgroundUrl from '~/assets/img/food/Makmai_0151.jpg'
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