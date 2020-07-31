<template>
  <div class="sectionFood-4" :style="{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${backgroundPercents}, rgba(255,255,255,0) 90%),url(${backgroundUrl})`}">
      <div class="block">

        <div class="row ">
          <!-- Makmai _0136.png -->
          <div class="col-12 col-md-12 col-lg-6 col-xl-4 top17" v-for="imgUrl in imgUrls" :key="imgUrl.img">
            <picture>
              <source media="(max-width: 1024px" :srcset="imgUrl.img" />
              <source :srcset="imgUrl.img">
              <img :src="imgUrl.img" alt="">
            </picture>
          </div>
   
        </div>
        
          <div class="col-md-12 button-sction">
            <h2>หลากหลายเมนูให้คุณเลือกสรร</h2>
            <div class="button">
              <p>ดาวน์โหลดเมนูอาหาร</p>
            </div>
          </div>
      </div>
      
  </div>

</template>

<script>
import backgroundUrl from '~/assets/img/food/ลาบปลาทับทิม.png'

const imageUrl1 = require('~/assets/img/food/food_in/แกงเผ็ดเป็ดย่าง.png')
const imageUrl2 = require('~/assets/img/food/food_in/ต้มยำกุ้งแม่น้ำ1.png')
const imageUrl3 = require('~/assets/img/food/food_in/แกงส้มแป๊ะซะปลาช่อน1.png')
const imageUrl4 = require('~/assets/img/food/food_in/ต้มแซบไก่ย่าง1.png')
const imageUrl5 = require('~/assets/img/food/food_in/ปลาทับทิมน่ึงซีอิ้ว.png')
const imageUrl6 = require('~/assets/img/food/food_in/ฉู่ฉี่ปลาคลังกระทะร้อน.png')

export default {
   data() {
    return { backgroundUrl,backgroundPercents : '' ,
      window: {
              width: 0,
              height: 0
      },
      imgUrls : [
        {img : imageUrl1},
        {img : imageUrl2},
        {img : imageUrl3},
        {img : imageUrl4},
        {img : imageUrl5},
        {img : imageUrl6}
      ]
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
              this.backgroundPercents = '60%';
            }else{
              this.backgroundPercents = '0%';
            }
        }
    }
  
}
</script>