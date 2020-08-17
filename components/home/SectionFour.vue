<template>
  <div class="section-4" :style="{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${backgroundPercents}, rgba(255,255,255,0) 100%),url(${backgroundUrl})`}">
      <div class="block">
        <p class="title">แกลเลอรี่ภาพ</p>
        <div class="row">
          <div class="col-12 col-md-12 col-lg-12 col-xl-6 gelly-left">
            <nuxt-link to="/gallery/sangkraburi"> 
               <picture>
                <source media="(max-width: 1024px" srcset="~/assets/img/home/section4/Group507.jpg">
                <source srcset="~/assets/img/home/section4/Makmai_0017.jpg">
                <img src="~/assets/img/home/section4/Makmai_0017.jpg" alt=""  v-lazy-load>
              </picture>

              <div class="detail" >
                  <p class="inFirst">ที่นี่</p>
                  <p class="inSec">สังขละบุรี</p>
              </div>

            </nuxt-link>
          </div>

          
          <div class="col-12 col-md-12  col-lg-12 col-xl-6 gelly-right">
            <nuxt-link to="/gallery/suanmagmairesort">
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
          <nuxt-link to="/experience" class="col-md-12 button-sction">
            <div class="button">
              <p>มีอีกหลายสิ่งให้คุณทำ</p>
            </div>
          </nuxt-link>
        </div>
      </div>
      
  </div>

</template>

<script>
import backgroundUrl from '~/assets/img/home/section4/EAK_1521.jpg'

export default {
   data() {
    return { backgroundUrl,backgroundPercents : '' ,
      window: {
              width: 0,
              height: 0
      }
    }
  },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;

            if(this.window.width > 1024){
              this.backgroundPercents = '50%';
            }else{
              this.backgroundPercents = '0%';
            }
        }
    }
  
}
</script>