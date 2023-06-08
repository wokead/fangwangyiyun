<template>
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in images" :key="image">
        <img :src="image" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import axios from 'axios'
import {onMounted} from 'vue'
export default {
  setup() {
    const images = [
      "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
      "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
    ];
    onMounted(()=>{
        axios.get('http://localhost:3000/banner?type=2')
    })
    return { images };
  },
};
</script>

<style lang="less">
#swiperTop {
  .van-swipe {
    width: 100%;
    height: 4rem;
    .van-swipe-item {
      padding: 0 0.2rem;
      img {
        width: 100%;
        height: 100%;
        border-radius: 0.2rem;
      }
    }
    .van-swipe__indicator--active {
        background-color: #fa4444;
    }
    
  }
}
</style>