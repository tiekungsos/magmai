<template>
<div>
  <SectionFoodOne />
  <!-- <SectionSecond />
  <SectionThree /> -->
  <div class="col-12 col-md-12 col-lg-12 col-xl-12 top100" style="text-align: center;">

    <picture>  
      <source class="img-fluid" media="(max-width: 1024px)" srcset="~/assets/img/food/ปลาเก๋าราดพริก.png" width="768px"/>
      <source class="img-fluid" srcset="~/assets/img/food/ปลาเก๋าราดพริก.png">
      <img class="img-fluid" srcset="~/assets/img/food/ปลาเก๋าราดพริก.png" alt="">
    </picture>
    <div style="position: absolute;top: 50%;left: 50%;transform: translate(-50%, -50%);font-size: 30px;color: #FFF;font-style: italic;font-weight: 600;">
          <p>รองรับการจัดเลี้ยงได้มากกว่า 200 ท่าน </p>
            <p>ด้วยจำนวนโต๊ะอาหารกว่า 30 โต๊ะ </p>
            <p>และยังมีบริการจัดเลี้ยงสำหรับกรุ๊ปทัวร์หรืองานสำคัญต่างๆ</p>
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