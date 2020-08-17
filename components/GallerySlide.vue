<template>
  <div class="image-slide gerllery" :style="{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${backgroundPercents}, rgba(255,255,255,0) 90%),url(${backgroundUrl})`,paddingBottom:`${paddingBottom}`}">
   <div class="slide">
         <VueSlickCarousel
    @beforeChange="onBeforeChangeC2"
    :arrows="false"
    :adaptiveHeight ="true"
    ref="c1"
    :asNavFor="$refs.c2"
    :focusOnSelect="true">
    <div v-for="imgUrl in imgUrlsFull" :key="imgUrl.img">
       <img class="img-fluid" :src="imgUrl.img" alt="" >
    </div>
    </VueSlickCarousel>
    <VueSlickCarousel
     @beforeChange="onBeforeChangeC1"
    :arrows="true"
    ref="c2"
    :asNavFor="$refs.c1"
    :slidesToShow="4"
    :focusOnSelect="true">
    <div v-for="imgUrl in imgUrls" :key="imgUrl.img">
        <picture>
            <source class="img-fluid" media="(max-width: 1024px" :srcset="imgUrl.img">
            <source class="img-fluid" :srcset="imgUrl.img">
            <img class="img-fluid" :src="imgUrl.img" alt="" width="223">
        </picture>
    </div>

    </VueSlickCarousel>
   </div>
  </div>
</template>


<script>
import VueSlickCarousel from 'vue-slick-carousel'
import 'vue-slick-carousel/dist/vue-slick-carousel.css'
// optional style for arrows & dots
import 'vue-slick-carousel/dist/vue-slick-carousel-theme.css'

export default {
    props: ['imgUrls','imgUrlsFull','backgroundUrl','paddingBottom'],
    data() {
        return {backgroundPercents : '' ,
            window: {
                width: 0,
                height: 0
            }
        }
    },
    components: { VueSlickCarousel },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        onBeforeChangeC1(currentPosition, nextPosition) {
            this.$refs.c1.goTo(nextPosition)
        },
        onBeforeChangeC2(currentPosition, nextPosition) {
            this.$refs.c2.goTo(nextPosition)
        },
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
<style>

@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
