<template>
    <div class="itemMusicTop">
        <div class="topLeft">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xiangzuojiantou"></use>
            </svg>
            <span>歌单</span>
        </div>
        <div class="topRight">
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-sousuo"></use>
            </svg>
            <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-danlieliebiao"></use>
            </svg>
        </div>
    </div>
</template>

<script>
export default {
  setup() {

  },
  props:['playList']
};
</script>

<style lang="less" scoped>
.itemMusicTop{
    width: 100%;
    height: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
</style>