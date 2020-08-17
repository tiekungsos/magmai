<template>
<div class="bookContect" v-bind:style='{"display": (isActiveBook? "block" : "none" )}'>
    <div class="bookRoomLeft" v-on:click="closeNav">
      .
    </div>
    <div class="bookRoom" v-bind:style='{"width": (isActiveBookSlide? sizeContect : "0" ), "padding-left":(isActiveBookSlide? "50px" : "0"), "padding-right":(isActiveBookSlide? "50px" : "0")}'>
       <div v-bind:style='{"display": (displayEl? "block" : "none" )}'>
          <div class="row">
          <p class="left">ทำไม ? ถึงต้อง</p>
          <p class="right" v-on:click="closeNav">< กลับ</p>
          </div>

          <h2 style="font-weight: 600; ">จองห้องพักกับเรา</h2>
          <h5 style="font-size: 19px; width: max-content;" class="header-text">คุณจะได้รับสิทธิพิเศษมากกว่าจองผ่านตัวแทน</h5>
          <br>
          <div class="detail">
            <p class="detail-in">
              ◇ ห้องพักพร้อมอาหารเช้า <br>
              ◇ ส่วนลดอาหาร ณ ครัวแมกไม้ 10% <br>
              ◇ เช็คเอาท์ได้เลทถึงบ่ายสองโดยไม่เสียค่าใช้จ่าย
            </p>
            <p class="tel"><img src="~/assets/img/icon/line.png" alt=""> 081 - 8386311</p>
            <p class="tel">โทร 091 – 2677199</p>
          </div>

          <div class="buttom">
                <div class="row align-items-end" style="border-bottom: 2px solid black;">
                  <p class="left">จองห้องพักผ่าน</p>
                  <p class="right" v-on:click="closeNav"><img src="~/assets/img/icon/agoda-vector-logo.png" alt=""></p> 
                </div>
                
            <div class="row socialin">
                <a class="nav-link link-social" href="#">
                    <img src="~/assets/img/icon/social/Group 18.png" alt="">
                </a>
                <a class="nav-link link-social" href="#">
                    <img src="~/assets/img/icon/social/twitter.png" alt="">
                </a>
                <a class="nav-link link-social" href="#">
                    <img src="~/assets/img/icon/social/line.png" alt="">
                </a>
                <a class="nav-link link-social" href="#">
                    <img src="~/assets/img/icon/social/instagram-sketched-2.png" alt="">
                </a>
   
            </div>


          </div>
       </div>
    </div>
</div>
 
    


</template>

<script>

export default {
   data() {
    return {   isActiveBook: false , 
              isActiveBookSlide : false , 
              displayEl: false, 

                width: 0,
                height: 0,

              sizeContect : ''
            }
  }, 
  created() {
        this.$root.$refs.bookRoom = this;
          window.addEventListener('resize', this.handleResize);
        this.handleResize();
  },
  destroyed() {
      window.removeEventListener('resize', this.handleResize);
  },
  methods: {
    openNav: function () {
        this.isActiveBook = !this.isActiveBook;
        setTimeout(() => this.isActiveBookSlide = !this.isActiveBookSlide, 400);
          setTimeout(() => this.displayEl = !this.displayEl, 1000);
        
    },
    closeNav: function (){
        this.isActiveBookSlide = !this.isActiveBookSlide;
        this.displayEl = !this.displayEl;
        setTimeout(() => this.isActiveBook = !this.isActiveBook, 400);
    },
    handleResize() {
        this.width = window.innerWidth;
        this.height = window.innerHeight;

        if(this.width > 1440){
          this.sizeContect = '25vw';
        }else if(this.width > 1024){
          this.sizeContect = '30vw';
        }else if(this.width > 768) {
          this.sizeContect = '50vw';
        }else if (this.width < 768){
          this.sizeContect = '100vw';
        } else{
          this.sizeContect = '70vw';
        }
    }
  }
}
</script>
