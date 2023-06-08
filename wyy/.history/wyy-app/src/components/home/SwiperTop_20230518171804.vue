<template>
    <div>
        <van-swipe :autoplay="3000" lazy-render>
    <van-swipe-item v-for="image in images" :key="image">
      <img :src="image" />
    </van-swipe-item>
  </van-swipe>
    </div>
  
</template>

<script>
export default {
  setup() {
    const images = [
      "https://fastly.jsdelivr.net/npm/@vant/assets/apple-1.jpeg",
      "https://fastly.jsdelivr.net/npm/@vant/assets/apple-2.jpeg",
    ];
    return { images };
  },
};
</script>

<style lang="less">
.van-swipe{
    width: 100%;
    padding: .2rem;
    .van-swipe__track{
        .van-swipe-item{
            img{
                width: 100%;
                height: 3rem;
            }
        }
    }
}
</style>