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
        <div class="playCount">
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-play1"></use>
          </svg>
          <span>{{ changeCount(playList.playCount) }}</span>
        </div>
      </div>
      <div class="congtentRight">
        <div class="title">{{ playList.name }}</div>
        <div class="creator">
          <img :src="playList.creator.avatarUrl">
          <span>{{ playList.creator.nickname }}</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
        <div class="description">
          <span>{{ playList.description }}</span>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-youjiantou"></use>
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { onMounted, reactive} from "vue";

export default {
  props: ["playList"],
  setup(props) {
    props.playList.creator=""
    function changeCount(num){
      if (num >= 100000000) {
        return (num / 100000000).toFixed(1) + "亿";
      } else if (num >= 10000) {
        return (num / 10000).toFixed(1) + "万";
      }
    }
    return{changeCount}
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
      position: relative;
    img{
      width: 100%;
      height: 100%;
      border-radius: .2rem;
    }
    .playCount{
      position: absolute;
      right: 0.1rem;
      top: 0.1rem;
      .icon {
        width: 0.26rem;
        height: 0.26rem;
        margin-top: -0.02rem;
        vertical-align: middle;
      }
      span {
        font-size: 0.26rem;
        color: #fff;
      }
    }
  }
  .congtentRight{
    width: 3rem;
    height: 2.5rem;
    display: flex;
    justify-content: space-between;
    // align-items: center;
    flex-direction: column;
    color: white;
    margin-left: .6rem;
    .title{
      font-size: .3rem;
      font-weight: 600;
    }
    .creator{
      display: flex;
      line-height: .6rem;
      color: #ccc;
      img{
        width: .6rem;
        height: .6rem;
        border-radius: 50%;
        vertical-align: middle;
      }
      span{
        vertical-align: middle;
        margin-left: .1rem;
      }
      .icon {
        width: 0.3rem;
        height: 0.3rem;
        margin-top: 0.17rem;
        vertical-align: middle;
      }
    }
    .description{
      width: 100%;
      height: 0.6rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      span{
        display: inline-block;
        width: 95%;
        height: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        font-size: 0.24rem;
        color: #ccc;
      }
      .icon {
        width: 0.24rem;
        height: 0.24rem;
      }
    }
  }  
}
</style>