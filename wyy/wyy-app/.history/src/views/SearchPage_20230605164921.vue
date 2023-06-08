<template>
  <div class="searchTop">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-zhixiangzuo"></use>
    </svg>
    <input
      type="text"
      v-model="keyWord"
      @keyup.enter="search"
    />
  </div>
  <div class="history">
    <span class="name">历史记录</span>
    <span class="keyWordItem" v-for="(item, index) in keyWordList" :key="index">
      {{ item }}
    </span>
  </div>
</template>

<script>
export default {
  data(){
    return{
      keyWordList:[],
      keyWord:''
    }
  },
  methods: {
    search() {
      this.keyWordList.push(this.keyWord)
      console.log(this.keyWordList);
    },
  },
};
</script>

<style lang="less" scoped>
.searchTop {
  width: 100%;
  height: 0.9rem;
  padding: 0.1rem 0.2rem;
  display: flex;
  align-items: center;
  input {
    margin-left: 0.17rem;
    border: none;
    border-bottom: 1px solid #c2c2c2;
    padding: 0.1rem;
    width: 88%;
  }
}
.history {
  width: 100%;
  padding: 0.3rem;
  .name {
    font-size: 0.3rem;
    font-weight: 700;
  }
  .keyWordItem {
    margin: .1rem .2rem;
    padding: .1rem;
    background-color: #d4d4d4;
    border-radius: .2rem;
  }
}
</style>