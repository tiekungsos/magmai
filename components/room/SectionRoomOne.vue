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
              <p class="button">การตกแต่งภายในห้องเน้นความเป็นธรรมชาติควบคู่กับสไตล์โมเดิร์นได้อย่างลงตัว
ทำให้คุณได้รู้สึกถึงการพักผ่อนที่แท้จริงท่ามกลางธรรมชาติ
และความอบอุ่นจากการบริการของเรา</p>
        </div>
      </div>
      <div class="col-12 col-md-12 col-lg-12 col-xl-6">
        <div class="hotel-book">
            <div class="header-box">
              <p>จองห้องพัก</p>
              
            </div>
            <div class="body-box">
                <img src="~/assets/img/EAK_1436-HDR.png" alt="">
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
import backgroundUrl from '~/assets/img/room/EAK_1451-HDR.png'
export default {
   data() {
    return { backgroundUrl }
  }
}
</script>