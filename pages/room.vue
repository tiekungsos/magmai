<template>
<div>
  <SectionRoomOne />
  <!-- <SectionSecond />
  <SectionThree /> -->
  <div class="col-12 col-md-12 col-lg-12 col-xl-12 top100" style="text-align: center;">
    <picture>  
      <source class="img-fluid" media="(max-width: 1024px)" srcset="~/assets/img/room/Makmai_0136.png" width="768px"/>
      <source class="img-fluid" srcset="~/assets/img/room/Makmai_0136.png">
      <img class="img-fluid" srcset="~/assets/img/room/Makmai_0136.png" alt="">
    </picture>
  </div>
  <SectionRoomSecond class="top50"/>
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