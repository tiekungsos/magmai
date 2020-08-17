<template>
<div>
  <BookRoom />
  <SectionGaOne :backgroundUrl="backgroundUrl" :header="header" :detailHeader="detailHeader" />
  <SectionGaSecoundPage2 :backgroundUrlBottom="backgroundUrlBottom" :pageGalley="pageGalley"/>
  <SectionButtom />
</div>


</template>

<script>
import backgroundUrl from '~/assets/img/gallery/IMG_2181.jpg';
import backgroundUrlDesktop from '~/assets/img/gallery/DJI_0010.jpg';
import backgroundUrlMobile from '~/assets/img/gallery/Group552.jpg';

export default {
   data() {
       return { backgroundUrl, backgroundUrlDesktop, backgroundUrlMobile, backgroundUrlBottom:'', header : 'เป็นมากกว่าสถานที่ท่องเที่ยว',detailHeader: 'สังขละบุรี' ,page : true ,pageGalley : 1, width: 0,height: 0}
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
            this.width = window.innerWidth;
            this.height = window.innerHeight;
            this.backgroundUrlBottom = backgroundUrlDesktop;

            if(this.width > 1440){
            }else if(this.width > 1024) {
            }else if(this.width <= 768) {
              this.backgroundUrlBottom = backgroundUrlMobile;
            }
    }
  }
}
</script>