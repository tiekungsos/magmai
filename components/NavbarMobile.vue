<template>
<div>
    <div class="navbar navbar-expand-lg mobile" >
      <nuxt-link to="/" class="navbar-brand" href="#">
          <div class="logo">
              <Logo />
          </div>
      </nuxt-link>

      <button class="navbar-toggler" type="button" v-on:click="openNav">
          <img src="~/assets/img/icon/Menu.png" alt="">
      </button>
    </div>

    <div id="mySidenav" class="sidenav mobile-nav" v-bind:style='{"width": (isActive? "100%" : "0" )}'>
            <a href="javascript:void(0)" class="closebtn" v-on:click="openNav">&times;</a>
            <nuxt-link to="/">หน้าแรก</nuxt-link>
            <nuxt-link to="/room">ห้องพัก</nuxt-link>
            <nuxt-link to="/food">ห้องอาหาร</nuxt-link>
            <nuxt-link to="/meeting">ห้องประชุม</nuxt-link>
            <nuxt-link to="/experience">พักกับเรา</nuxt-link>
            <nuxt-link to="/promotion">โปรโมชั่น</nuxt-link>
            <nuxt-link to="/contact">ติดต่อเรา</nuxt-link>

            <div class="social">
                <img src="~/assets/img/icon/social/Group 18.png" alt="">
                <img src="~/assets/img/icon/social/line.png" alt="">
                <img src="~/assets/img/icon/social/twitter.png" alt="">
                <img src="~/assets/img/icon/social/instagram-sketched-2.png" alt="">
            </div>
    </div>

</div>
 
    


</template>

<script>

export default {
   data() {
    return {   isActive: false }
  }, 
  methods: {
    openNav: function () {
        console.log(this.isActive);
        this.isActive = !this.isActive;
    }
  }
}
</script>

<style>
    /* The side navigation menu */
.sidenav {
  height: 100%; /* 100% Full-height */
  position: fixed; /* Stay in place */
  z-index: 1; /* Stay on top */
  top: 0; /* Stay at the top */
  right: 0;
  background-color: #ffffff; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /* 0.5 second transition effect to slide in the sidenav */
}

/* The navigation menu links */
.sidenav a {
  position: relative;
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 16px;
  color: #000000;
  display: block;
  transition: 0.3s;
}

.sidenav .social{
    position: absolute;
    left:30px;
    bottom:94px;
}

.sidenav .social img{
    padding-left: 5px;
    padding-right: 5px;
}

/* When you mouse over the navigation links, change their color */
.sidenav a:hover {
  color: #f1f1f1;
}

/* Position and style the close button (top right corner) */
.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

/* On smaller screens, where height is less than 450px, change the style of the sidenav (less padding and a smaller font size) */
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 16px;}
}
</style>