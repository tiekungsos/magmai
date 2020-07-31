  <template>
    <div class="navbar navbar-expand-lg non-mobile" >
        <div class="container-fluid">
            <div class="col-md-2 col-lg-1 col-xl-2 logo">
                <div class="logo">
                    <Logo />
                </div>
            </div> 
            <div class="col-md-10 col-lg-11 col-xl-8 menu">
                <nav class="nav menunave">
                <nuxt-link to="/" class="nav-link link first" >หน้าแรก</nuxt-link>
                <nuxt-link to="/room" class="nav-link next link-next">ห้องพัก</nuxt-link>
                <nuxt-link to="/food" class="nav-link link-next" href="#">ห้องอาหาร</nuxt-link>
                <a class="nav-link link-next" href="#">ห้องประชุม</a>
                <a class="nav-link link-next" href="#">พักกับเรา</a>
                <a class="nav-link link-next" href="#">โปรโมชั่น</a>
                <a class="nav-link link-next" href="#">ติดต่อเรา</a>
                </nav>
            </div>
            <div class="col-lg-2 social">
                <nav class="nav menunave">
                <a class="nav-link" href="#">
                    <img src="~/assets/img/icon/Group 17.png" alt="">
                </a>
                <a class="nav-link link-social" href="#">
                    <img src="~/assets/img/icon/Subtraction 2.png" alt="">
                </a>
                <a class="nav-link link-social" href="#">
                    <img src="~/assets/img/icon/line.png" alt="">
                </a>
                <a class="nav-link link-social" href="#">
                    <img src="~/assets/img/icon/instagram-sketched-2.png" alt="">
                </a>

                </nav>
            </div>
        </div>
    </div>

    


  </template>