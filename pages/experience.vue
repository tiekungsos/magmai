<template>
<div>
  <BookRoom />
  <SectionExOne />

  <div class="col-12 col-md-12 col-lg-12 col-xl-12 top100 no-padding-1440 experience-page" >
    <h2 class="text-left-hd">สวนแมกไม้รีสอร์ท</h2>
    <p class="text-left-hd" >ตั้งอยู่ใจกลางสถานที่ท่องเที่ยวในตัวอำเภอสังขละบุรี ทำให้คุณสามารถท่องเที่ยวได้อย่างสบายใจ เดินทางสะดวกแม้ไม่ได้เอารถส่วนตัวมาเอง</p>
    <picture>  
      
      <source class="img-fluid" media="(max-width: 767px)" srcset="~/assets/img/ex/Group585.jpg" width="100%"/>
      <source class="img-fluid" media="(max-width: 1024px)" srcset="~/assets/img/ex/Makmai_0141.jpg" width="768px"/>
      <source class="img-fluid" srcset="~/assets/img/ex/Makmai_0141.jpg">
      <img class="img-fluid" srcset="~/assets/img/ex/Makmai_0141.jpg" alt="" style="width: 100%;">
    </picture>
  </div>

  <SectionExSecond />

  <SectionButtom />
</div>


</template>

<script>

export default {
   data() {
       return { page : true }
  }
}
</script>