<template>
  <div id="swiperTop">
    <van-swipe :autoplay="3000" lazy-render>
      <van-swipe-item v-for="image in state.images" :key="image">
        <img :src="image.pic" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import axios from 'axios'
import {getBanner} from '@/request/api/home.js'
import {onMounted, reactive} from 'vue'
export default {
  setup() {
    const state = reactive({
        images:[],
    })
    onMounted(()=>{
        axios.get('http://localhost:3000/banner?type=2').then((res)=>{
            console.log(res)
            state.images = res.data.banners
        })
    })
    return { state };
  },
};
</script>

<style lang="less">
#swiperTop {
  .van-swipe {
    width: 100%;
    height: 3rem;
    // margin-top: 1rem;
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