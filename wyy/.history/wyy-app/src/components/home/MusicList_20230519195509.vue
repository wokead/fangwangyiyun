<template>
  <div class="musicList">
    <div class="musicTop">
      <div class="title">发现好歌单</div>
      <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
      <van-swipe
        :loop="false"
        :width="150"
        :show-indicators="false"
        class="mySwipe"
      >
        <van-swipe-item v-for="item in state.musicList" :key="item">
          <img :src="item.picUrl" />
          <span class="playCount">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-play1"></use>
            </svg>
            {{ changeCount(item.playCount) }}
          </span>
          <span class="name">
            {{ item.name }}
          </span>
        </van-swipe-item>
      </van-swipe>
    </div>
  </div>
</template>

<script>
import { getMusicList } from "@/request/api/home.js";
import { onMounted, reactive } from "vue";

export default {
  setup() {
    const state = reactive({
      musicList: [],
    });
    const changeCount = (num)=>{
        if(num >= 100000000){
            return (num/100000000).toFixed(1) + "亿"
        }else if(num >= 10000){
            return (num/10000).toFixed(1) + "万"
        }
    }
    onMounted(async () => {
      let res = await getMusicList();
      state.musicList = res.data.result;
    });
    return { state, changeCount }
  },
};
</script>

<style lang="less" scoped>
.musicList {
  width: 100%;
  height: 5rem;
  padding: 0.2rem;
  .musicTop {
    width: 100%;
    height: 0.6rem;
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.2rem;
    .title {
      font-size: 0.4rem;
      font-weight: 900;
    }
    .more {
      border: 1px solid #ccc;
      text-align: center;
      line-height: 0.6rem;
      padding: 0 0.2rem;
      border-radius: 0.4rem;
    }
  }
  .musicContent {
    width: 100%;
    height: 4rem;
    .mySwipe {
      height: 100%;
      .van-swipe-item{
        padding: .1rem;
      }
      img{
        width: 100%;
        height: 3rem;
        border-radius: 0.3rem;
      }
      .playCount{
        position: absolute;
        top: .1rem;
        right: .2rem;
        color: #fff;
        .icon{
            vertical-align: middle;
            color: #fff;
        }
      }
    }
  }
}
</style>