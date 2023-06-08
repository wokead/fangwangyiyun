<template>
  <img :src="musicList.al.picUrl" class="bg">
  <div class="detailTop">
    <div class="detailTopLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiangzuojiantou"></use>
      </svg>
      <div class="leftMarquee">
        <p>{{ musicList.name }}</p>
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
</template>

<script>
export default {
props:["musicList"]
}
</script>

<style lang="less" scoped>
.bg{
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
      width: 3rem;
      height: 100%;
      margin-left: 0.4rem;
      span {
        color: #999;
      }
      .icon {
        width: 0.3rem;
        height: 0.3rem;
        fill: #999;
      }
    }
  }
}
</style>