<template>
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
</template>

<script>
export default {
  setup() {},
  props: ["playList"],
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
</style>