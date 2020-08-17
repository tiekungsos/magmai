<template>
<div>
  <BookRoom />
  <SectionContactOne />
  <div class="col-12 col-md-12 col-lg-12 col-xl-12 top100 no-padding-1440" style="text-align: center;">
    <picture>  
      <source class="img-fluid" media="(max-width: 1024px)" srcset="~/assets/img/contact/Makmai_0036.jpg" width="768px"/>
      <source class="img-fluid" srcset="~/assets/img/contact/Makmai_0036.jpg">
      <img class="img-fluid" srcset="~/assets/img/contact/Makmai_0036.jpg" alt="">
    </picture>
  </div>
  <SectionContactSecond class="top50"/>
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