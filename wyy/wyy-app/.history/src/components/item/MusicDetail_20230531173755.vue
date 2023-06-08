<template>
  <img :src="musicList.al.picUrl" class="bg">
  <div class="detailTop">
    <div class="detailTopLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiangzuojiantou"></use>
      </svg>
      <div class="leftMarquee">
        <Vue3Marquee style="color: #fff">{{ musicList.al.name }}</Vue3Marquee>
        <span v-for="(item, index) in musicList.ar" :key="index">
          {{ item.name }}
        </span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjiantou"></use>
        </svg>
      </div>
    </div>
    <div class="detailTopRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-fenxiang"></use>
      </svg>
    </div>
  </div>
  <div class="content">
    <img src="@/assets/needle-ab.png" class="img_needle">
    <img src="@/assets/cd.png" alt="" class="img_cd">
    <img :src="musicList.al.picUrl" alt="" class="img_song">
  </div>
</template>

<script>
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
export default {
components:{
  Vue3Marquee
},
props:["musicList"]
}

</script>

<style lang="less" scoped>
.bg{
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: -1;
  filter: blur(60px);
}
.detailTop {
  width: 100%;
  height: 1rem;
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
  align-items: center;
  fill: #fff;
  .detailTopLeft {
    display: flex;
    align-items: center;
    .leftMarquee {
      width: 2.5rem;
      height: 100%;
      margin-left: 0.4rem;
      span {
        color: #999;
      }
      .icon {
        width: 0.3rem;
        height: 0.3rem;
        fill: #999 !important;
      }
    }
  }
}
.content{
  width: 100%;
  height: 9rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  position: relative;
  .img_needle{
    width: 2rem;
    height: 3rem;
    position: absolute;
    left: 46%;
    transform-origin: 0 0;
    transform: rotate(-13deg);
    transition: all 2s;
  }
  .img_needle_active {
    width: 2rem;
    height: 3rem;
    position: absolute;
    left: 46%;
    transform-origin: 0 0;
    transform: rotate(0deg);
    transition: all 2s;
  }
  .img_cd {
    width: 5rem;
    height: 5rem;
    position: absolute;
    left: 12%;
    bottom: 2.3rem;
    z-index: -1;
  }
  .img_song {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    position: absolute;
    bottom: 3.14rem;
    animation: rotate_song 10s linear infinite;
  }
  .img_song_active {
    animation-play-state: running;
  }
  .img_song_pauesd {
    animation-play-state: paused;
  }
  @keyframes rotate_song {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
}
</style>