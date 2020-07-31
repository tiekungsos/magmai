<template>
  <div class="sectionRoom-4" :style="{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${backgroundPercents}, rgba(255,255,255,0) 75%),url(${backgroundUrl})`}">
      <div class="block">

        <div class="row ">
          <!-- Makmai _0136.png -->
          <div class="col-12 col-md-12 col-lg-12 col-xl-6 top40" v-for="imgUrl in imgUrls" :key="imgUrl.img">
            <picture>
              <source media="(max-width: 1024px" :srcset="imgUrl.img" />
              <source :srcset="imgUrl.img">
              <img :src="imgUrl.img" alt="">
            </picture>

            <div class="detail">
                <p class="inFirst">ห้องนอน</p>
                <p class="inSec">{{imgUrl.text}}</p>
            </div>
          </div>
   
        </div>
      </div>
      
  </div>

</template>

<script>
import backgroundUrl from '~/assets/img/room/EAK_0964.png'

const imageUrl1 = require('~/assets/img/room/room_in/EAK_1038-HDR-Edit.png')
const imageUrl2 = require('~/assets/img/room/room_in/EAK_1561-HDR.png')
const imageUrl3 = require('~/assets/img/room/room_in/EAK_1463-HDR.png')
const imageUrl4 = require('~/assets/img/room/room_in/EAK_1338-HDR.png')
const imageUrl5 = require('~/assets/img/room/room_in/EAK_0835-HDR.png')
const imageUrl6 = require('~/assets/img/room/room_in/EAK_0903-HDR-Edit.png')

export default {
   data() {
    return { backgroundUrl,backgroundPercents : '' ,
      window: {
              width: 0,
              height: 0
      },
      imgUrls : [
        {img : imageUrl1,text:'Standard'},
        {img : imageUrl2,text:'Superior'},
        {img : imageUrl3,text:'Deluxe'},
        {img : imageUrl4,text:'Deluxe Jacuzzi'},
        {img : imageUrl5,text:'Family Room'},
        {img : imageUrl6,text:'Deluxe Panorama View'}
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
              this.backgroundPercents = '45%';
            }else{
              this.backgroundPercents = '0%';
            }
        }
    }
  
}
</script>