<template>
<div class="container-fluid section-1" :style="{ backgroundImage: `url(${backgroundUrl})` }">
  <Navbar />
  <div class="container-title">
    <div class="row">
      <div class="col-lg-6">
        <div class="title-scetion">
              <p class="top">เป็นมากกว่าที่พักเพราะเราคือ</p>
              <p class="center">“ บ้านอีกหลังของคุณ ”</p>
              <p class="button"> @ สังขะบุรี</p>
        </div>
      </div>
      <div class="col-lg-6">
        <div class="hotel-book">
            <div class="header-box">
              <p>จองห้องพัก</p>
              
            </div>
            <div class="body-box">
                <img src="~/assets/img/EAK_1436-HDR.png" alt="">
            </div>
        </div>
      </div>
    </div>
  </div>

  <div class="covid-po">
      <div class="covid-po-box">
          <p class="mr-3">เราใส่ใจทุกรายละเอียด <span>เพื่อป้องกันการแพร่ระบาดไวรัส COVID-19</span></p>
          <div class="row">
            <div class="col-lg-3 right">

            </div>
            <div class="col-lg-3 left">
              <span><img src="~/assets/img/1.png" alt=""></span>
              <span class="text-in">
                  จุดบริการแอลกอฮอล์เจลทั่วรีสอร์ท
              </span>
            </div>
            <div class="col-lg-6 left">
              <span><img src="~/assets/img/2.png" alt=""></span>
              ให้ใส่หน้ากากอนามัยในพื้นที่ส่วนกลาง
            </div>
            <div class="col-lg-3 right">

            </div>
            <div class="col-lg-3 left">
              <span><img src="~/assets/img/3.png" alt=""></span>
              จุดตรวจเช็คอุณหภูมิเข้ารีสอร์ท
            </div>
            <div class="col-lg-6 left">
              <span><img src="~/assets/img/4.png" alt=""></span>
              ทำความสะอาดพื้นที่ส่วนกลางทุกๆ 1 ชั่วโมง
            </div>
          </div>
      </div>
  </div>

</div>

</template>

<script>
import backgroundUrl from '~/assets/img/Makmai_0025.png'
export default {
   data() {
    return { backgroundUrl }
  }
}
</script>