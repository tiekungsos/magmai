<template>
<div class="galleryPage" :style="{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${backgroundPercents}, rgba(255,255,255,0) 90%),url(${backgroundUrlBottom})`}">
    <div class="row">
      <div class="col-12 col-xl-6 image-in"  v-for="(imgUrl, index) in images" :key="index">
          <img class="img-fluid" :src="imgUrl.pathLong" alt="">
      </div>

 
    </div>
    <div class="text-center" v-on:click="clickMore">
        <p>
            รูปภาพเพิ่มเติม <br>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="25px" height="30px"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
            <br>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="black" width="25px" height="30px" style="margin-top: -40px;"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"/></svg>
        </p>
    </div>
</div>

</template>

<script>
export default {
  props: ['backgroundUrlBottom','pageGalley'],
    data() {
        return {  
            images: [] ,
            backgroundPercents : '' ,
            window: {
                width: 0,
                height: 0
            },
            limitImage : 6
        }
    },

    mounted() {
        this.importAll(require.context('~/assets/img/gallery/page1/', true, /\.jpg$/));
    },
    created() {
        window.addEventListener('resize', this.handleResize);
        this.handleResize();
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },

    methods: {
        importAll(r) {
                var count = 1
            r.keys().forEach(key => {
                var checkImage = this.checkImg(key)
            
                if(checkImage && count <= this.limitImage){
                    count = count + 1;
                    this.images.push({ pathLong: r(key), pathShort: key })
                }
            });
        },
        checkImg(img){
            var x = []
            this.images.forEach(element => {
                x.push(element.pathShort)
            });

            var a = x.indexOf(img);
           
            if(a < 0){
                return true; 
            }

            return false;
        },
        handleResize() {
            this.window.width = window.innerWidth;
            this.window.height = window.innerHeight;

            if(this.window.width > 1024){
                this.backgroundPercents = '80%';
            }else{
                this.backgroundPercents = '0%';
            }
        },
        clickMore() {
            this.importAll(require.context('~/assets/img/gallery/page1/', true, /\.jpg$/))
        }
    }

}
</script>