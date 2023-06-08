<template>
  <img :src="musicList.al.picUrl" class="bg" />
  <div class="detailTop">
    <div class="detailTopLeft">
      <svg class="icon" aria-hidden="true" @click="updateDetailShow">
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
  <div class="content" v-show="isLyricsShow">
    <img
      src="@/assets/needle-ab.png"
      class="img_needle"
      :class="{ img_needle_active: isPlay }"
    />
    <img src="@/assets/cd.png" class="img_cd" />
    <img
      :src="musicList.al.picUrl"
      class="img_song"
      :class="{ img_song_active: isPlay, img_song_paused: !isPlay }"
    />
  </div>
  <div class="musicLyrics">
    {{ lyricsList.lyric }}
  </div>
  <div class="footer">
    <div class="footerTop">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-aixin"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiazai"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-changpian"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiaoxi"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-liebiao"></use>
      </svg>
    </div>
    <div class="footerContent"></div>
    <div class="footerOfFooter">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-repeatOnce2"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-shangyishoushangyige"></use>
      </svg>
      <svg
        class="icon bofang"
        aria-hidden="true"
        @click="play"
        v-show="!isPlay"
      >
        <use xlink:href="#icon-play2"></use>
      </svg>
      <svg class="icon bofang" aria-hidden="true" @click="play" v-show="isPlay">
        <use xlink:href="#icon-pause2"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiayigexiayishou"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon--Todo-List"></use>
      </svg>
    </div>
  </div>
</template>

<script>
import { Vue3Marquee } from "vue3-marquee";
import "vue3-marquee/dist/style.css";
import { mapMutations, mapState } from "vuex";
export default {
  setup() {
    const isLyricsShow = false;
    return { isLyricsShow };
  },
  computed: {
    ...mapState(["lyricsList"]),
    lyrics: function(){
      let arr;
      if(this.lyricsList.lyric){
        arr = this.lyricsList.lyric.split(/[(\r\n)\r\n]+/).map((item, index) => {
          let min = item.slice(1,3);
          let sec = item.slice(4,6);
          let mill = item.slice(7,10);
          let lrc = item.slice(11, item.length)
          if(isNaN(Number(mill))){
            mill = item.slice(7,9);
            let lrc = item.slice(10, item.length)
          }
        })
      }
    }
  },
  components: {
    Vue3Marquee,
  },
  props: ["musicList", "play", "isPlay"],
  methods: {
    ...mapMutations(["updateDetailShow"]),
  },
};
</script>

<style lang="less" scoped>
.bg {
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
.content {
  width: 100%;
  height: 9rem;
  display: flex;
  flex-direction: column;
  align-content: center;
  position: relative;
  .img_needle {
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
    left: 1.2rem;
    bottom: 2.3rem;
    z-index: -1;
  }
  .img_song {
    width: 3.2rem;
    height: 3.2rem;
    border-radius: 50%;
    position: absolute;
    left: 2.1rem;
    bottom: 3.16rem;
    animation: rotate_song 10s linear infinite;
  }
  .img_song_active {
    animation-play-state: running;
  }
  .img_song_paused {
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
.footer {
  width: 100%;
  height: 3rem;
  position: absolute;
  bottom: 0.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .footerTop {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon {
      width: 0.6rem;
      height: 0.6rem;
      fill: rgb(245, 234, 234);
    }
  }
  .footerOfFooter {
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .icon {
      fill: rgb(245, 234, 234);
    }
    .bofang {
      width: 1rem;
      height: 1rem;
    }
  }
}
</style>