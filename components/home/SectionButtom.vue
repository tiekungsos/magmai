<template>
  <div class="section-buttom">
     <div class="row">

      <div class="col-12 col-md-12 col-lg-12 col-xl-6 right mobile">
         <div class="box">
           <div class="header">
             <p>จองห้องพักกับเรา</p>
           </div>
           <div class="body"> 
             <iframe class="iframe" src="https://maps.google.com/maps?q=สวนแมกไม้รีสอร์ท&z=15&output=embed"  frameborder="0" style="border:0"></iframe>
           </div>
         </div>
       </div>

       <div class="col-12 col-md-12 col-lg-12 col-xl-6 left">
         <div class="title">
            <p class="top">สวนแมกไม้รีสอร์ท</p>
            <p class="center">ที่พักสะอาด สะดวก สบาย</p>
            <p class="buttom">ใกล้สะพานมอญ</p>
         </div>
         <div class="contect">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                <p class="title">สวนแมกไม้รีสอร์ท</p>
                <p class="content">200/8 หมู่ 3 ต.หนองลู</p>
                <p class="content">อ.สังขละบุรี จ.กาญจนบุรี 71240</p>
              </div>
              <div class="col-12 col-md-6 col-lg-6 col-xl-6">
                <p class="title">ติดต่อได้ตลอด 24 ชั่วโมง</p>
                <p class="content">Reception : 091 – 2677199</p>
                <p class="content">Email : suanmagmai@gmail.com</p>
                <p class="content">Id Line : 081 – 8386311</p>
              </div>
            </div>
         </div>
         <div class="social">
            <img src="~/assets/img/icon/social/Group 18.png" alt=""  v-lazy-load>
            <img src="~/assets/img/icon/social/line.png" alt=""  v-lazy-load>
            <img src="~/assets/img/icon/social/twitter.png" alt=""  v-lazy-load>
            <img src="~/assets/img/icon/social/instagram-sketched-2.png" alt=""  v-lazy-load>
         </div>
       </div>
       <div class="col-12 col-md-12 col-lg-12 col-xl-6 right non-mobile">
         <div class="box">
           <div class="header">
             <p>จองห้องพักกับเรา</p>
           </div>
           <div class="body"> 
              <iframe class="iframe" src="https://maps.google.com/maps?q=สวนแมกไม้รีสอร์ท&z=15&output=embed"  frameborder="0" style="border:0" v-lazy-load></iframe>
           </div>
         </div>
       </div>

     </div>
  </div>

</template>

<script>

export default {
   data() {
    return { 
     }
  }
}
</script>