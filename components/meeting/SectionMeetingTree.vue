<template>
  <div class="sectionFood-4 paddingDesktop meeting-section-2"  :style="{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${backgroundPercents}, rgba(255,255,255,0) 90%),url(${backgroundUrl})`}">
      <div class="block">

        <div class="row ">
          <!-- Makmai _0136.jpg -->
          <div class="col-12 col-md-6 col-lg-6 col-xl-4 top17" v-for="imgUrl in imgUrls" :key="imgUrl.img">
            <picture>
              <source class="img-fluid"media="(max-width: 1024px" :srcset="imgUrl.img">
              <source class="img-fluid" :srcset="imgUrl.img">
              <img class="image-in-meeting img-fluid" :src="imgUrl.img" alt="">
            </picture>
          </div>
   
        </div>
        
      </div>
      
  </div>

</template>

<script>
import backgroundUrl from '~/assets/img/meeting/Makmai_0130.jpg'

const imageUrl1 = require('~/assets/img/meeting/room/Photo_45.jpg')
const imageUrl2 = require('~/assets/img/meeting/room/Photo_51.jpg')
const imageUrl3 = require('~/assets/img/meeting/room/S__62259205.jpg')
const imageUrl4 = require('~/assets/img/meeting/room/S__62259206.jpg')
const imageUrl5 = require('~/assets/img/meeting/room/S__62259208.jpg')
const imageUrl6 = require('~/assets/img/meeting/room/S__82288668.jpg')

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