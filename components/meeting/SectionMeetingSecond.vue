<template>
  <div class="paddingDesktop meeting">
    <div class="row">
      <div class="col-12 col-md-12 col-lg-12 col-xl-12" style="text-align: center;">
          <h5 style="font-size: 20px;font-style: italic;font-weight: 300;">บริการ</h5>
          <h2 class="card-title meeting-header">ห้องประชุม</h2>
      </div>
      <div class="col-12 col-md-12 col-lg-12 col-xl-4 meeting-body" v-for="room in rooms" :key="room.roomData">
        <div class="card">
          <div class="card-body">
            <h5 style="font-size: 20px;font-style: italic;font-weight: 300;">ห้องประชุม</h5>
            <h2 class="card-title" style="font-family: 'Sriracha', cursive;font-size: 40px;">{{room.roomData.name}}</h2>
            <hr style="border-top: 1px solid rgba(0,0,0,1);">
            <p class="card-text"><img src="~/assets/img/meeting/icon/Icon ionic-ios-man.png" alt="">{{room.roomData.option1}}</p>
            <p class="card-text"><img src="~/assets/img/meeting/icon/meeting.png" alt="">  {{room.roomData.option2}}</p>
            <p class="card-text"><img src="~/assets/img/meeting/icon/microphone.png" alt="">  {{room.roomData.option3}}</p>
            <p class="card-text"><img src="~/assets/img/meeting/icon/speaker.png" alt="">  {{room.roomData.option4}}</p>
            <p class="card-text"><img src="~/assets/img/meeting/icon/projector.png" alt="">  {{room.roomData.option5}}</p>
            <p class="card-text"><img src="~/assets/img/meeting/icon/work-station.png" alt="">  {{room.roomData.option6}}</p>
          </div>
        </div>
      </div>
      <!-- <div class="col-xl-4">
        
      </div>
      <div class="col-xl-4">
        
      </div> -->
    </div>
  </div>

</template>

<script>
import backgroundUrl from '~/assets/img/meeting/Makmai_0130.jpg'

export default {
   data() {
    return { backgroundUrl,backgroundPercents : '' ,
      window: {
              width: 0,
              height: 0
      },
      rooms : [
        {
          roomData: {
            name : 'ดาหลา',
            option1 :  'รองรับได้ 10-30 ท่าน',
            option2 :  'เก้าอี้และโต๊ะประชุม',
            option3 :  'ไมโครโฟน',
            option4 :  'ระบบเสียง',
            option5 :  'โปรเจคเตอร์',
            option6 :  'คอมพิวเตอร์'
          }
        },
        {
          roomData: {
            name : 'เฟื่องฟ้า',
            option1 :  'รองรับได้ 50 - 100 ท่าน',
            option2 :  'เก้าอี้และโต๊ะประชุม',
            option3 :  'ไมโครโฟน',
            option4 :  'ระบบเสียง',
            option5 :  'โปรเจคเตอร์',
            option6 :  'คอมพิวเตอร์'
          }
        },
        {
          roomData: {
            name : 'จามจุรี',
            option1 :  'รองรับได้ 100 - 300 ท่าน',
            option2 :  'เก้าอี้และโต๊ะประชุม',
            option3 :  'ไมโครโฟน',
            option4 :  'ระบบเสียง',
            option5 :  'โปรเจคเตอร์',
            option6 :  'คอมพิวเตอร์'
          }
        }
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