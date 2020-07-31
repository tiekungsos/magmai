<template>
<div class="container-fluid section-1" :style="{ backgroundImage: `url(${backgroundUrl})` }">
  <Navbar />
  <NavbarMobile />
  <div class="container-title">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-12 col-xl-6">
        <div class="title-scetion-room">
              <p class="top">ห้องอาหาร</p>
              <p class="center">“ ครัวแมกไม้ ”</p>
              <p class="button">จากแรงบันดาลใจและความชื่นชอบในการทำอาหาร “ครัวแมกไม้” จึงเป็นร้านอาหารที่ให้บริการมากว่า 10 ปี จึงทำให้ท่านมั่นใจได้ว่า การคัดสรรค์วัตถุดิบ กรรมวิธีในการปรุง 
และรสชาติของอาหารทุกจานเป็นอาหารที่สด สะอาด และอร่อย 
ตามสูตรดั้งเดิมของเราในทุกๆจาน</p>
            <br><br>
            <p class="button">อาหารเช้าเปิดให้บริการตั้งแต่เวลา 7.00 – 9.30 น.</p>
            <p class="button">ห้องอาหารเปิดให้บริการตั้งแต่ 10.00 – 21.30 น. </p>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-12 col-xl-6">
        <div class="hotel-book" style="background-color: #FBB018;">
            <div class="header-box">
              <p style="     text-align: center;position: relative;color: #fff;font-style: italic;left: 0;top: 0;padding-top: 40px;">จองโต๊ะทานอาหาร</p>
              
            </div>
            <div class="body-box">
                <img src="~/assets/img/food/แกงป่าไก่บ้าน.png" alt="">
            </div>
        </div>
        <div class="hotel-book-mobile">
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
import backgroundUrl from '~/assets/img/food/Makmai_0151.png'
export default {
   data() {
    return { backgroundUrl }
  }
}
</script>