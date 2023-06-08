<template>
  <div class="searchTop">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-zhixiangzuo"></use>
    </svg>
    <input type="text">
  </div>
  <div class="history">
    <span>历史记录</span>
    <span v-for="(item, index) in keyWord" :key="index"></span>
  </div>
</template>

<script>
export default {
  setup(){
    const keyWord = {}
    return{keyWord}
  }
};
</script>

<style lang="less" scoped>
.searchTop{
  width: 100%;
  height: .9rem;
  padding: .1rem .2rem;
  display: flex;
  align-items: center;
  input{
    margin-left: .17rem;
    border: none;
    border-bottom: 1px solid #c2c2c2;
    padding: .1rem;
    width: 88%;
  }
}
.history{

}
</style>