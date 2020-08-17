<template>
<div>
  <BookRoom />
   <RoomHeader :room="room" :backgroundUrlHeader="backgroundUrlHeader" :backgroundUrlHeaderMobile="backgroundUrlHeaderMobile"/>
  <div class="col-12 col-md-12 col-lg-12 col-xl-12 room-section" style="text-align: center;">
      <h5 style="text-align: left;">สิ่งอำนวยความสะดวกภายในห้อง</h5>
    <TabOptionRoom />
  </div>
  
 <div class="room-background-bottom" :style="{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${backgroundPercents}, rgba(255,255,255,0) 80%),url(${backgroundUrlUse})`}">
    <div class="non-mobile">
        <GallerySlide :imgUrls="imgUrls" :imgUrlsFull="imgUrlsFull" :backgroundUrl="backgroundUrl" :paddingBottom="paddingBottom"/>  
    </div>
    <div class="mobile-promotion">
      <GaSuperior />
    </div>
 </div>

  

  <!-- <SectionMeetingTree class="top50"/> -->
  <SectionButtom />
</div>


</template>

<script>

import backgroundUrlIn from '~/assets/img/room/EAK_0964.jpg'
import backgroundUrlInMobile from '~/assets/img/room/Group449.jpg'
import backgroundUrlHeader from '~/assets/img/room/superior/EAK_1561-HDR.jpg'
import backgroundUrlHeaderMobile from '~/assets/img/room/superior/Group458.jpg'

const imageUrlFull1 = require('~/assets/img/room/standard/full/EAK_1038-HDR-Edit.jpg')
const imageUrlFull2 = require('~/assets/img/room/standard/full/EAK_1038-HDR-Edit.jpg')
const imageUrlFull3 = require('~/assets/img/room/standard/full/EAK_1020-HDR.jpg')
const imageUrlFull4 = require('~/assets/img/room/standard/full/EAK_1200-HDR.jpg')
const imageUrlFull5 = require('~/assets/img/room/standard/full/EAK_0987-Edit.jpg')

const imageUrl1 = require('~/assets/img/room/standard/EAK_1038-HDR-Edit.jpg')
const imageUrl2 = require('~/assets/img/room/standard/EAK_1038-HDR-Edit.jpg')
const imageUrl3 = require('~/assets/img/room/standard/EAK_1020-HDR.jpg')
const imageUrl4 = require('~/assets/img/room/standard/EAK_1200-HDR.jpg')
const imageUrl5 = require('~/assets/img/room/standard/EAK_0987-Edit.jpg')

export default {
   data() {
       return { 
          room : {
            name : 'superior',
            roomType : 'ห้องนอน',
            roomSize : 'รองรับผู้เข้าพักได้ 2-3 ท่าน'
          },
             backgroundUrlHeader,
           backgroundUrlIn,
           backgroundPercents : '',
           backgroundUrlHeaderMobile,
           backgroundUrlInMobile,
           page : true ,
           backgroundUrl : false,
           paddingtop : '0',
           window: {
                width: 0,
                height: 0
            },
           paddingBottom : '50px',
            imgUrls : [
                {img : imageUrl1},
                {img : imageUrl2},
                {img : imageUrl3},
                {img : imageUrl4},
                {img : imageUrl5}
            ],  
            imgUrlsFull : [
              {img : imageUrlFull1},
              {img : imageUrlFull2},
              {img : imageUrlFull3},
              {img : imageUrlFull4},
              {img : imageUrlFull5}
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
            this.backgroundUrlUse = backgroundUrlIn;

            if(this.window.width > 1440){
              this.backgroundPercents = '65%';
            }else if(this.window.width > 1024) {
              this.backgroundPercents = '75%';
            }else if(this.window.width <= 768) {
              this.backgroundPercents = '75%';
              this.backgroundUrlUse = backgroundUrlInMobile;
            } else {
              this.backgroundPercents = '0%';
            }
        }
    }
  
}
</script>