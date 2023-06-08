<template>
  <div class="footerItem">
    <div class="footerLeft" @click="updateDetailShow">
      <img :src="playList[playListIndex].al.picUrl" alt="" />
      <div>
        <p>{{ playList[playListIndex].name }}</p>
        <span>横滑切换上下首</span>
      </div>
    </div>
    <div class="footerRight">
      <svg class="icon" aria-hidden="true" v-show="!isPlay" @click="play">
        <use xlink:href="#icon-bofang"></use>
      </svg>
      <svg class="icon" aria-hidden="true" v-show="isPlay" @click="play">
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon--Todo-List"></use>
      </svg>
    </div>
    <audio
      ref="audio"
      :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"
    ></audio>
    <van-popup
      v-model:show="detailShow"
      position="bottom"
      :style="{ height: '100%' }"
    >
      <MusicDetail :musicList="playList[playListIndex]" :play="play" :isPlay="isPlay"/>
    </van-popup>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import MusicDetail from "@/components/item/MusicDetail.vue"
export default {
  components:{
    MusicDetail
  },
  computed: {
    ...mapState(["playList", "playListIndex", "isPlay", "detailShow"]),
  },
  mounted(){
    this.$store.dispatch("getLyrics",this.playList[this.playListIndex].id)
  },
  updated(){
    this.$store.dispatch("getLyrics",this.playList[this.playListIndex].id)
  },
  methods: {
    play() {
      if (!this.isPlay) {
        this.$refs.audio.play();
        this.updateIsPlay();
      } else {
        this.$refs.audio.pause();
        this.updateIsPlay();
      }
    },
    updateTime(){
      setInterval(() => {
        
      })
    },
    ...mapMutations(["updateIsPlay", "updateDetailShow"]),
  },
  watch: {
    playListIndex: function () {
      this.$refs.audio.autoplay = true;
      if (this.$refs.audio.paused) {
        this.updateIsPlay();
      }
    },
    playList: function () {
      if (!this.isPlay) {
        this.$refs.audio.autoplay = true;
        this.updateIsPlay();
      }
    },
  },
};
</script>

<style lang="less" scoped>
.footerItem {
  width: 100%;
  height: 1.3rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  box-shadow: 0 10px 12px rgba(0, 0, 0, 0.9);
  display: flex;
  padding: 0.2rem;
  justify-content: space-between;
  .footerLeft {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img {
      height: 0.9rem;
      width: 0.9rem;
      border-radius: 50%;
    }
  }
  .footerRight {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon {
      width: 0.6rem;
      height: 0.6rem;
    }
  }
}
</style>