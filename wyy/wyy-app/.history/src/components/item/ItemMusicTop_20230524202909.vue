<template>
  <div>
    <div class="itemMusicTop">
      <img :src="playList.coverImgUrl" alt="" class="bg" />
      <div class="topLeft">
        <svg class="icon" aria-hidden="true" @click="$router.go(-1)">
          <use xlink:href="#icon-xiangzuojiantou"></use>
        </svg>
        <span>歌单</span>
      </div>
      <div class="topRight">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-sousuo1"></use>
        </svg>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-danlieliebiao"></use>
        </svg>
      </div>
    </div>
    <div class="middleContent">
      <div class="contentLeft">
        <img :src="playList.coverImgUrl">
      </div>
      <div class="congtentRight">
        <div class="title">{{ playList.name }}</div>
        <div class="creator">
          <img :src="List.user">
        </div>
        <div>3</div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive} from "vue";

export default {
  props: ["playList"],
  setup(props) {
    const List = reactive({
      ...props.playList
    })
    return{ List }
  },
};
</script>

<style lang="less" scoped>
.itemMusicTop {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  // padding: .2rem;
  position: relative;
  .topLeft,
  .topRight {
    width: 20%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 0.2rem;
    span {
      font-size: 0.4rem;
      color: white;
    }
  }
  .bg {
    width: 100%;
    height: 11rem;
    position: fixed;
    z-index: -1;
    filter: blur(30px);
  }
}
.middleContent{
  width: 100%;
  height: 5.8rem;
  padding: .6rem;
  display: flex;
  .contentLeft{
      width: 2.5rem;
      height: 2.5rem;
    img{
      width: 100%;
      height: 100%;
      border-radius: .2rem;
    }
  }
  .congtentRight{
    width: 3rem;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    color: white;
    margin-left: .6rem;
    .title{
      font-size: .3rem;
      font-weight: 600;
    }
    .creator{
      display: flex;
      img{
        width: .8rem;
        height: .8rem;
        border-radius: 50%;
      }
    }
  }  
}
</style>