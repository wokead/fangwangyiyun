<template>
  <div class="footerItem">
    <div class="footerLeft">
      <img :src="playList[playListIndex].al.picUrl" alt="">
      <div>
        <p>{{playList[playListIndex].al.name}}</p>
        <span>横滑切换上下首</span>
      </div>
    </div>
    <div class="footerRight">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-bofang" @click="play" v-show="!isPlay"></use>
      </svg>
      <svg class="icon" aria-hidden="true" v-show="isPlay">
        <use xlink:href="#icon-zanting"></use>
      </svg>
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon--Todo-List"></use>
      </svg>
    </div>
    <audio ref="audio" :src="`https://music.163.com/song/media/outer/url?id=${playList[playListIndex].id}.mp3`"></audio>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['playList','playListIndex','isPlay'])
  },
  methods: {
    play() {
      if(!this.isPlay){
        this.$refs.audio.play()
        this.updateIsPlay()
      }else{
        this.$refs.audio.pause()
        this.updateIsPlay()
      }
    },
    ...mapMutations(['updateIsPlay'])
  },
}
</script>

<style lang="less" scoped>
.footerItem{
  width: 100%;
  height: 1.3rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  box-shadow: 0 10px 12px rgba(0,0,0,0.9);
  display: flex;
  padding: .2rem;
  justify-content: space-between;
  .footerLeft{
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    img{
      height: .9rem;
      width: .9rem;
      border-radius: 50%;
    }
  }
  .footerRight{
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .icon{
      width: .6rem;
      height: .6rem;
    }
  }
}
</style>