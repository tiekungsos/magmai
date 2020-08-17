<template>
  <div class="sectionRoom-4" :style="{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${backgroundPercents}, rgba(255,255,255,0) ${backgroundPercents2}),url(${backgroundUrl})`}">
      <div class="block">

        <div class="row ">
          <!-- Makmai _0136.jpg -->
          <nuxt-link :to="`/room/${imgUrl.link}`" class="col-12 col-md-12 col-lg-12 col-xl-6 top40" v-for="imgUrl in imgUrls" :key="imgUrl.img">
            <picture>
              <source media="(max-width: 1024px" :srcset="imgUrl.img" v-lazy-load>
              <source :srcset="imgUrl.img" v-lazy-load>
              <img :src="imgUrl.img" alt="" v-lazy-load>
            </picture>

            <div class="detail detailimg-room-page">
                <p class="inFirst">ห้องนอน</p>
                <p class="inSec">{{imgUrl.text}}</p>
            </div>
          </nuxt-link>
   
        </div>
      </div>
      
  </div>

</template>

<script>
import backgroundUrl from '~/assets/img/room/EAK_0964.jpg'

const imageUrl1 = require('~/assets/img/room/room_in/EAK_1038-HDR-Edit.jpg')
const imageUrl2 = require('~/assets/img/room/room_in/EAK_1561-HDR.jpg')
const imageUrl3 = require('~/assets/img/room/room_in/EAK_1463-HDR.jpg')
const imageUrl4 = require('~/assets/img/room/room_in/EAK_1338-HDR.jpg')
const imageUrl5 = require('~/assets/img/room/room_in/EAK_0835-HDR.jpg')
const imageUrl6 = require('~/assets/img/room/room_in/EAK_0903-HDR-Edit.jpg')

export default {
   data() {
    return { backgroundUrl,backgroundPercents : '' , backgroundPercents2 : '',
      window: {
              width: 0,
              height: 0
      },
      imgUrls : [
        {img : imageUrl1,text:'Standard',link:'standard'},
        {img : imageUrl2,text:'Superior',link:'superior'},
        {img : imageUrl3,text:'Deluxe',link:'deluxe'},
        {img : imageUrl4,text:'Deluxe Jacuzzi',link:'jacuzzi'},
        {img : imageUrl5,text:'Family Room',link:'family'},
        {img : imageUrl6,text:'Deluxe Panorama View',link:'panorama'}
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
            if(this.window.width > 1024 && this.window.width <= 1440){
                this.backgroundPercents = '70%';
                this.backgroundPercents2 = '90%';
            }else if(this.window.width > 1440){
                this.backgroundPercents = '45%';
                 this.backgroundPercents2 = '70%';
            }else{
              this.backgroundPercents = '0%';
              this.backgroundPercents2 = '70%';
            }
        }
    }
  
}
</script>