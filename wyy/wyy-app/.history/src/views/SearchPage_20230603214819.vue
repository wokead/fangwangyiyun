<template>
  <div class="searchTop">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-zhixiangzuo"></use>
    </svg>
    <input type="text">
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.searchTop{
  width: 100%;
  height: 1.1rem;
  padding: .1rem .2rem;
  display: flex;
  align-items: center;
  input{
    margin-left: .17rem;
    border: none;
    border-bottom: 1px solid #c2c2c2;
    width: 88%;
  }
}
</style>