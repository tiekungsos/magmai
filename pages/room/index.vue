<template>
<div>
  <BookRoom />
  <SectionRoomOne />
 
  <div class="col-12 col-md-12 col-lg-12 col-xl-12 top100" style="text-align: center;padding-left: 0;padding-right: 0;">
    <picture>  
      <source class="img-fluid" media="(max-width: 1024px)" srcset="~/assets/img/room/Group-522.jpg" />
      <source class="img-fluid" srcset="~/assets/img/room/Makmai_0136.jpg">
      <img class="img-fluid" srcset="~/assets/img/room/Makmai_0136.jpg" alt="">
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