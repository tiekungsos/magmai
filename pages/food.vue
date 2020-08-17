<template>
<div>
  <BookRoom />
  <SectionFoodOne />

  <div class="col-12 col-md-12 col-lg-12 col-xl-12 top100 no-padding-1440" style="text-align: center;">

    <picture>  
      <source class="img-fluid" media="(max-width: 1024px)" srcset="~/assets/img/food/ปลาเก๋าราดพริก-mobile.jpg" width="768px"/>
      <source class="img-fluid" srcset="~/assets/img/food/ปลาเก๋าราดพริก.jpg">
      <img class="img-fluid" srcset="~/assets/img/food/ปลาเก๋าราดพริก.jpg" alt="">
    </picture>
    <div class="food-image-section">
          <p>รองรับการจัดเลี้ยงได้มากกว่า 200 ท่าน </p>
            <p>ด้วยจำนวนโต๊ะอาหารกว่า 30 โต๊ะ </p>
            <p style="width: max-content;">และยังมีบริการจัดเลี้ยงสำหรับกรุ๊ปทัวร์หรืองานสำคัญต่างๆ</p>
      </div>
  </div>
  <SectionFoodSecond class="top50"/>
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