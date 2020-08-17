<template>
<div>
  <BookRoom />
  <SectionPromotionOne />
  <gerlly />

  <div class="non-mobile">
    <GallerySlide :imgUrls="imgUrls" :imgUrlsFull="imgUrlsFull" :backgroundUrl="backgroundUrl"/>
  </div>
  <div class="mobile-promotion">
     <SectionGaPromotion :backgroundUrlBottom="backgroundUrlMobile" />
  </div>

  
  <!-- <div class="col-12 col-md-12 col-lg-12 col-xl-12 top100" style="text-align: center;">
    <picture>  
      <source class="img-fluid" media="(max-width: 1024px)" srcset="~/assets/img/room/Makmai_0136.jpg" width="768px"/>
      <source class="img-fluid" srcset="~/assets/img/room/Makmai_0136.jpg">
      <img class="img-fluid" srcset="~/assets/img/room/Makmai_0136.jpg" alt="">
    </picture>
  </div> -->
  <!-- <SectionMeetingTree class="top50"/> -->
  <SectionButtom />
</div>


</template>

<script>
import backgroundUrl from '~/assets/img/promotion/EAK_1232.jpg'
import backgroundUrlMobile from '~/assets/img/promotion/Group-632.jpg'

const imageUrl1 = require('~/assets/img/promotion/slide/EAK_1218.jpg')
const imageUrl2 = require('~/assets/img/promotion/slide/EAK_1220.jpg')
const imageUrl3 = require('~/assets/img/promotion/slide/EAK_1229.jpg')
const imageUrl4 = require('~/assets/img/promotion/slide/Makmai_0052.jpg')
const imageUrl5 = require('~/assets/img/promotion/slide/Makmai_0060.jpg')


const imageUrlFull1 = require('~/assets/img/promotion/full/EAK_1218.jpg')
const imageUrlFull2 = require('~/assets/img/promotion/full/EAK_1220.jpg')
const imageUrlFull3 = require('~/assets/img/promotion/full/EAK_1229.jpg')
const imageUrlFull4 = require('~/assets/img/promotion/full/Makmai_0052.jpg')
const imageUrlFull5 = require('~/assets/img/promotion/full/Makmai_0060.jpg')

export default {
   data() {
       return { backgroundUrl, backgroundUrlMobile, page : true ,
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
  }
}
</script>