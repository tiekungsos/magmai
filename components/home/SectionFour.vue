<template>
  <div class="section-4" :style="{ backgroundImage: `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 56%, rgba(255,255,255,0) 100%),url(${backgroundUrl})`}">
      <div class="block">
        <p class="title">แกลเลอรี่ภาพ</p>
        <div class="row">
          <div class="col-md-6 gelly-left">
            <img src="~/assets/img/home/section4/Makmai _0017.png" alt="">
            <div class="detail">
                <p class="inFirst">ที่นี่</p>
                <p class="inSec">สังขละบุรี</p>
            </div>
          </div>
          <div class="col-md-6 gelly-right">
            <img src="~/assets/img/home/section4/Makmai _0155.png" alt="">
            <div class="detail">
                <p class="inFirst">รูปภาพบรรยากาศ</p>
                <p class="inSec">สวนแมกไม้</p>
            </div>
          </div>
          <div class="col-md-12 button-sction">
            <div class="button">
              <p>มีอีกหลายสิ่งให้คุณทำ</p>
            </div>
          </div>
        </div>
      </div>
      
  </div>

</template>

<script>
import backgroundUrl from '~/assets/img/home/section4/EAK_1521.png'
import backgroundUrl2 from '~/assets/img/home/section4/Rectangle257.png'

export default {
   data() {
    return { backgroundUrl,backgroundUrl2 }
  }
}
</script>