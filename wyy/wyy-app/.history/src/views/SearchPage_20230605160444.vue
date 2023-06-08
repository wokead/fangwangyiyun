<template>
  <div class="searchTop">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-zhixiangzuo"></use>
    </svg>
    <input type="text" v-model="keyWord" @keyup.enter="search">
  </div>
  <div class="history">
    <span class="name">历史记录</span>
    <span class="keyWordItem" v-for="(item, index) in keyWord" :key="index">
      {{ item }}
    </span>
  </div>
</template>

<script>
export default {
  setup(){
    const keyWordList = {};
    const keyWord = '';
    return{keyWord, keyWordList}
  },
  methods:{
    search(){
      this.keyWordList.push(this.keyWord)
    }
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
  width: 100%;
  padding: .1rem;
  .name{
    font-size: .3rem;
  }
}
</style>