<template>
  <div class="meeting sectionEx-4 paddingDesktop experience-scetion2" :style="{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) ${backgroundPercents}, rgba(255,255,255,0) 90%),url(${backgroundUrl})`}" >
    <div class="row">
      <div class="col-12 col-md-12 col-lg-12 col-xl-12" style="text-align: center;">
          <h5 style="font-size: 20px;font-style: italic;font-weight: 300;">สถานที่ท่องเที่ยวใน</h5>
          <h2 class="card-title meeting-header">“สังขละบุรี”</h2>
      </div>

       <div class="col-12 col-md-12 col-lg-12 col-xl-12 container" style="text-align: left;">
         <div class="row">
           <div :class="`ex-image col-12 col-md-12 col-lg-12 ${columfirst}` ">
             <img src="~/assets/img/ex/blog/Makmai_0021.jpg" alt=""  v-lazy-load>
           </div>
           <div :class="`col-12 col-md-12 col-lg-12 ${columTwo}` ">
             <div class="center-top experience-detail">
                <h2 class="header">สะพานมอญ</h2>
                <p class="detail">
                  สะพานมอญ หรือสะพานอุตตมานุสรณ์ มีลักษณะเป็นสะพานไม้ยาว ทอดข้ามแม่น้ำซองกาเลีย
                  บริเวณตำบลหนองลู มีระยะทางทั้งหมดราว ๆ 800-900 เมตร 
                  ถือได้ว่าเป็นสะพานไม้ที่ยาวที่สุดในเมืองไทยและยาวเป็นอันดับต้น ๆ ของโลก 
                  ยามเช้าต้องไม่พลาดกับการใส่บาตรบนสะพานไม้
                  ​นอกจากจะได้สัมผัสอากาศเย็นๆ เรายังได้เห็นชาวบ้าน ทั้งชาวไทยและชาวมอญสัญจรไป-มาบนสะพานแห่งนี้ 
                  ​เป็นวิถีชีวิตสุดเรียบง่ายแต่เต็มเปี่ยมไปด้วยเสน่ห์ที่ทำให้ใครหลายคนตกหลุมรักโดยไม่รู้ตัว
                </p>
                <h5 class="time">เวลาเปิดปิด : จ - อ 06:00 - 19:00 น.</h5>
              </div>
           </div>
         </div>
      </div>


      <div class="col-12 col-md-12 col-lg-12 col-xl-12 container top60" style="text-align: left;">
         <div class="row">
          <div :class="`ex-image experience-image-top col-12 col-md-12 col-lg-12 ${columfirst}` " style="text-align: right;">
             <img src="~/assets/img/ex/blog/Rectangle94.jpg" alt=""  v-lazy-load>
           </div>
           <div :class="`col-12 col-md-12 col-lg-12 ${columTwo}` ">
             <div class="center-top experience-detail">
               <h2 class="header">วัดวังก์วิเวการาม</h2>
                <p class="detail">
                  วัดวังก์วิเวการาม(ใหม่) ตั้งอยู่ทางฝั่งหมู่บ้านมอญ ที่ตำบลหนองลู อำเภอสังขละบุรี เป็นศูนย์รวมจิตใจ
                  ที่สำคัญของชาวสังขละบุรี ภายในวัดวังก์วิเวการาม(ใหม่) มีสิ่งที่น่าสนใจมากมาย อาทิ พระอุโบสถ, วิหารหลวงพ่ออุตตมะ (ปราสาท 9 ยอด) หรือวิหารหลวงพ่อขาว เป็นต้น ซึ่งนักท่องเที่ยวจะได้รู้ถึงที่มาที่ไปของ
                  เมืองสังขละบุรีและประวัติหลวงพ่ออุตตมะอย่างละเอียด พร้อมกับชมสถาปัตยกรรมแบบมอญที่หาดูได้ยาก  
                </p>
                <h5 class="time">เวลาเปิดปิด : จ - อ 06:00 - 19:00 น.</h5>
             </div>
           </div>
            <div :class="`experience-image col-12 col-md-12 col-lg-12 ${columfirst}` " style="text-align: right;">
             <img src="~/assets/img/ex/blog/Rectangle94.jpg" alt=""  v-lazy-load>
           </div>
         </div>
      </div>

       <div class="col-12 col-md-12 col-lg-12 col-xl-12 container top60" style="text-align: left;">
         <div class="row">
           <div :class="`ex-image col-12 col-md-12 col-lg-12 ${columfirst}` ">
             <img src="~/assets/img/ex/blog/Rectangle94.jpg" alt=""  v-lazy-load>
           </div>
           <div :class="`col-12 col-md-12 col-lg-12 ${columTwo}` ">
             <div class="center-top experience-detail">
                <h2 class="header">เจดีย์พุทธคยา</h2>
                <p class="detail">
                  เจดีย์พุทธคยา ตั้งอยู่ไม่ไกลจากวัดวังก์วิเวการาม (ใหม่) ในจุดที่แม่น้ำ 3 สายมาบรรจบกัน 
คือแม่น้ำซองกาเลีย แม่น้ำบีคลี่ และแม่น้ำรันตี มีลักษณะเป็นเจดีย์ทรงกรวยสี่เหลี่ยม มียอดแหลม 
สีเหลืองทองทั้งองค์เจดีย์ มีรูปปั้นสิงห์คู่แบบมอญตั้งอยู่ด้านหน้า ภายในยอดเจดีย์ประดิษฐานพระบรมสารีริกธาตุ ​ซึ่งหลวงพ่ออุตตมะได้อัญเชิญมาจากประเทศศรีลังกาเหมาะแก่การพาครอบครัวไปไหว้สักการะและขอพร
                </p>
                <h5 class="time">เวลาเปิดปิด : จ - อ 06:00 - 19:00 น.</h5>
              </div>
           </div>
         </div>
      </div>

      <div class="col-12 col-md-12 col-lg-12 col-xl-12 container top60" style="text-align: left;">
         <div class="row">
            <div :class="`ex-image experience-image-top col-12 col-md-12 col-lg-12 ${columfirst}` " style="text-align: right;">
             <img src="~/assets/img/ex/blog/Rectangle94.jpg" alt=""  v-lazy-load>
           </div>
           <div :class="`col-12 col-md-12 col-lg-12 ${columTwo}` ">
             <div class="center-top experience-detail">
               <h2 class="header">เมืองบาดาล</h2>
                <p class="detail">
                  อันซีนไทยแลนด์กับเมืองใต้ผืนน้ำในเขตเขื่อนเขาแหลมหรือเขื่อนวชิราลงกรณ
เดิมทีที่นี่เป็นที่ตั้งของวัดวังก์วิเวการาม แต่เมื่อมีโครงการสร้างเขื่อนเขาแหลม
ตัววัดจึงต้องย้ายไปยังพื้นที่สูง เหลือเพียงซากปรักหักพังของอุโบสถและหอระฆังที่จะจมน้ำในฤดูฝน และจะโผล่ขึ้นอวดโฉมอีกครั้งในฤดูแล้ง การมาเที่ยวที่นี่นักท่องเที่ยวสามารถนั่งเรือมาเที่ยวชมได้ ติดต่อเรือได้บริเวณสะพานมอญ
                </p>
                <h5 class="time">เวลาเปิดปิด : จ - อ 06:00 - 17:00 น.</h5>
             </div>
           </div>
            <div :class="`ex-image experience-image col-12 col-md-12 col-lg-12 ${columfirst}` " style="text-align: right;">
             <img src="~/assets/img/ex/blog/Rectangle94.jpg" alt=""  v-lazy-load>
           </div>
         </div>
      </div>

      <div class="col-12 col-md-12 col-lg-12 col-xl-12 container top60" style="text-align: left;">
         <div class="row">
           <div :class="`ex-image col-12 col-md-12 col-lg-12 ${columfirst}` ">
             <img src="~/assets/img/ex/blog/Rectangle94.jpg" alt=""  v-lazy-load>
           </div>
           <div :class="`col-12 col-md-12 col-lg-12 ${columTwo}` ">
             <div class="center-top experience-detail">
                <h2 class="header">น้ำตกนพพิบูลย์</h2>
                <p class="detail">
                  น้ำตกนพพิบูลย์ หรือน้ำตกหมวดเดช ตั้งอยู่บริเวณตำบลหนองลู อำเภอสังขละบุรี ไม่ไกลจากถนนทางหลวงชนบท 2078 โดดเด่นด้วยชั้นหินปูนที่ไล่ระดับลดหลั่นกันลงมา ก่อนที่สายน้ำจะไหลลงสู่หน้าผาหินสูงประมาณ 25 เมตร น้ำใสสะอาด ​โดยรอบมีต้นไม้นานาพรรณ บรรยากาศร่มรื่นและน่าท่องเที่ยวมาก ๆ

                </p>
                <h5 class="time">เวลาเปิดปิด : จ - อ 06:00 - 19:00 น.</h5>
              </div>
           </div>
         </div>
      </div>

      
      <div class="col-12 col-md-12 col-lg-12 col-xl-12 container top60" style="text-align: left;">
         <div class="row">
             <div :class="`ex-image experience-image-top col-12 col-md-12 col-lg-12 ${columfirst}` " style="text-align: right;">
             <img src="~/assets/img/ex/blog/Rectangle94.jpg" alt=""  v-lazy-load>
           </div>
           <div :class="`col-12 col-md-12 col-lg-12 ${columTwo}` ">
             <div class="center-top experience-detail">
               <h2 class="header">ถนนคนเดิน</h2>
                <p class="detail">
                  ถนนคนเดินสังขละบุรี ตั้งอยู่บริเวณตลาดใหม่ ใกล้กับโรงพยาบาลสังขละบุรี เป็นกิจกรรมท่องเที่ยวที่ส่งเสริมให้คนในชุมชนได้นำสินค้าท้องถิ่นของตนเองมาจำหน่ายให้กับนักท่องเที่ยว ซึ่งจะมีทั้งอาหารพื้นบ้าน ขนมโบราณ สินค้าแฮนด์เมด สินค้าพื้นเมือง ราคาย่อมเยา ให้ได้เดินเลือกซื้อกันอย่างเพลิดเพลิน อีกทั้งยังมีการแสดงจากเยาวชนในท้องถิ่นให้ได้ชมกันแบบฟรี ๆ อีกด้วย 
ถนนคนเดินสังขละบุรีจะจัดขึ้นทุกวันเสาร์
                </p>
                <h5 class="time">ทุกวันเสาร์ 15:00 - 24:00 น.</h5>
             </div>
           </div>
            <div :class="`experience-image col-12 col-md-12 col-lg-12 ${columfirst}` " style="text-align: right;">
             <img src="~/assets/img/ex/blog/Rectangle94.jpg" alt=""  v-lazy-load>
           </div>
         </div>
      </div>

      <div class="col-12 col-md-12 col-lg-12 col-xl-12 container top60" style="text-align: left;">
         <div class="row">
           <div :class="`ex-image col-12 col-md-12 col-lg-12 ${columfirst}` ">
             <img src="~/assets/img/ex/blog/Rectangle94.jpg" alt=""  v-lazy-load>
           </div>
           <div :class="`col-12 col-md-12 col-lg-12 ${columTwo}` ">
             <div class="center-top experience-detail">
                <h2 class="header">ด่านเจดีย์สามองค์</h2>
                <p class="detail">
                  ด่านเจดีย์สามองค์ ตั้งอยู่บริเวณชายแดนไทย - เมียนมา ตำบลหนองลู อำเภอสังขละบุรี มีลักษณะเป็นเจดีย์สีขาว 3 องค์ ตั้งเรียงรายกันอย่างสวยงาม ซึ่งเป็นสิ่งศักดิ์สิทธิ์ที่ยึดเหนี่ยวจิตใจของชาวบ้านมาตั้งแต่อดีต 
ไม่ว่าใครผ่านไปผ่านมาในเส้นทางนี้เป็นต้องแวะไหว้เคารพสักการะและขอพร เพื่อความเป็นสิริมงคลต่อตัวเองและครอบครัว บริเวณใกล้เคียงกับเจดีย์ มีตลาดพญาตองซูแหล่งช้อปปิ้งสินค้าไทย - เมียนมา ราคาไม่แพง 
​ซึ่งจะมีสินค้าจากฝั่งเมียนมานำมาขายมากมาย ใครอยากได้ของฝากเก๋ ๆ ก็มาเดินช้อปปิ้งกันได้เลย
                </p>
                <h5 class="time">เวลาเปิดปิด : จ - อ 06:00 - 19:00 น.</h5>
              </div>
           </div>
         </div>
      </div>
      

      <div class="col-12 col-md-12 col-lg-12 col-xl-12 container top60" style="text-align: left;">
         <div class="row">
            <div :class="`ex-image experience-image-top col-12 col-md-12 col-lg-12 ${columfirst}` " style="text-align: right;">
             <img src="~/assets/img/ex/blog/Rectangle94.jpg" alt=""  v-lazy-load>
           </div>
           <div :class="`col-12 col-md-12 col-lg-12 ${columTwo}` ">
             <div class="center-top experience-detail">
               <h2 class="header">ห้วยซองกาเลีย</h2>
                <p class="detail">
                  ล่องแพลำน้ำซองกาเลีย เป็นอีกหนึ่งกิจกรรมสนุกสนานที่ห้ามพลาดของเมืองสังขละบุรี ซึ่งผู้ประกอบการจะใช้แพไม้ไผ่หรือแพยางล่องไปตามลำห้วยซองกาเลีย นักท่องเที่ยวจะได้นั่งชมวิวป่าเขาสองฟากฝั่งแม่น้ำซองกาเลีย พร้อมกับแวะพักเล่นน้ำอันเย็นฉ่ำ 
สายน้ำไม่แรงมากนัก สามารถเล่นได้ทั้งเด็กและผู้ใหญ่
                </p>
                <h5 class="time">เวลาเปิดปิด : จ - อ 06:00 - 19:00 น.</h5>
             </div>
           </div>
            <div :class="`experience-image col-12 col-md-12 col-lg-12 ${columfirst}` " style="text-align: right;">
             <img src="~/assets/img/ex/blog/Rectangle94.jpg" alt=""  v-lazy-load>
           </div>
         </div>
      </div>


       <div class="col-12 col-md-12 col-lg-12 col-xl-12 container top60" style="text-align: center;">
          <img class="img-fluid" src="~/assets/img/ex/blog/sceen.jpg" alt=""  v-lazy-load>
      </div>


    </div>
  </div>

</template>

<script>
import backgroundUrl from '~/assets/img/ex/Makmai_0030.jpg'

export default {
   data() {
    return { backgroundUrl,backgroundPercents : '' ,
      window: {
              width: 0,
              height: 0
      },
      style :  {
          columfirst: 'col-xl-5',
          columTwo: 'col-xl-7',
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

            if(this.window.width <= 1440) {
              this.columfirst = 'col-xl-6'
              this.columTwo = 'col-xl-6'
            }else{
              this.columfirst = 'col-xl-5'
              this.columTwo = 'col-xl-7'
            }

            if(this.window.width > 1024){
              this.backgroundPercents = '85%';
            }else{
              this.backgroundPercents = '0%';
            }
        }
    }
  
}
</script>