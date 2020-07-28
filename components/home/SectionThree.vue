<template>
  <div class="section-3" :style="{ backgroundImage: `url(${backgroundUrl})` }">
      <p class="title">“ ครัวแมกไม้ ”</p>
      <p class="content">
        จากแรงบันดาลใจและความชื่นชอบในการทำอาหาร “ครัวแมกไม้” จึงเป็นร้านอาหารที่ให้บริการมากว่า 10 ปี 
        จึงทำให้ท่านมั่นใจได้ว่า การคัดสรรค์วัตถุดิบ กรรมวิธีในการปรุง และรสชาติของอาหารทุกจาน <br class="newlint">
        เป็นอาหารที่สด สะอาด และอร่อย ตามสูตรดั้งเดิมของเราในทุกๆจาน
      </p>
      <div class="silder align-self-end">
          <div class="button">
              <p>ห้องอาหาร</p>
          </div>
      </div>
  </div>

</template>

<script>
import backgroundUrl from '~/assets/img/home/section3/แกงส้มแป๊ะซะปลาช่อน1.png'
export default {
   data() {
    return { backgroundUrl }
  }
}
</script>