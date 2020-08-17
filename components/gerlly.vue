<template>
  <div class="section-costom-4" :style="{paddingTop:`${paddingtop}`}">
      <div class="block">
        <div class="row">
          <div class="col-12 col-md-12 col-lg-12 col-xl-6 gelly-left">
          <nuxt-link to="/gallery/sangkraburi" style="cursor: pointer;">
            <picture>
              <source media="(max-width: 1024px" srcset="~/assets/img/home/section4/Group507.jpg">
              <source srcset="~/assets/img/home/section4/Makmai_0017.jpg">
              <img src="~/assets/img/home/section4/Makmai_0017.jpg" alt=""  v-lazy-load>
            </picture>

            <div class="detail">
                <p class="inFirst">ที่นี่</p>
                <p class="inSec">สังขละบุรี</p>
            </div>
          </nuxt-link>
          </div>
          <div class="col-12 col-md-12  col-lg-12 col-xl-6 gelly-right">
            <nuxt-link to="/gallery/suanmagmairesort" style="cursor: pointer;">
            <picture>
              <source media="(max-width: 1024px" srcset="~/assets/img/home/section4/Group505.jpg">
              <source srcset="~/assets/img/home/section4/Makmai_0155.jpg">
              <img src="~/assets/img/home/section4/Makmai_0155.jpg" alt=""  v-lazy-load>
            </picture>

            <div class="detail">
                <p class="inFirst">รูปภาพบรรยากาศ</p>
                <p class="inSec">สวนแมกไม้</p>
            </div>
            </nuxt-link>
          </div>
          <div class="col-md-12 button-sction">
            <div class="button">
              <p>มีอีกหลายสิ่งให้คุณทำ</p>
            </div>
          </div>
        </div>
      </div>
      
  </div>

</template>

<script>

export default {
  props: ['paddingtop'],
   data() {
    return { }
  },

  
}
</script>