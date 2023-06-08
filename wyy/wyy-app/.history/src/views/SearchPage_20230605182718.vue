<template>
  <div class="searchTop">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-zhixiangzuo"></use>
    </svg>
    <input type="text" v-model="keyWord" @keyup.enter="search" />
  </div>
  <div class="history">
    <span class="name">历史记录</span>
    <span class="keyWordItem" v-for="(item, index) in keyWordList" :key="index">
      {{ item }}
    </span>
    <svg class="icon" aria-hidden="true" @click="del">
      <use xlink:href="#icon-shanchu"></use>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keyWordList: [],
      keyWord: "",
    };
  },
  mounted() {
    this.keyWordList = JSON.parse(localStorage.getItem("keyWordList")) || [];
  },
  methods: {
    search() {
      if(this.keyWord !== ''){
        this.keyWordList.unshift(this.keyWord);
        this.keyWordList = [...new Set(this.keyWordList)]
        localStorage.setItem("keyWordList", JSON.stringify(this.keyWordList));
        this.keyWord = "";
      }
    },
    del() {
      this.keyWordList = [];
      localStorage.removeItem("keyWordList");
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
  position: relative;
  .name {
    font-size: 0.3rem;
    font-weight: 700;
  }
  .keyWordItem {
    margin: 0.1rem 0.2rem;
    padding: 0.1rem;
    background-color: #d4d4d4;
    border-radius: 0.3rem;
  }
  .icon {
    width: 0.34rem;
    height: 0.34rem;
    position: absolute;
    right: 0.42rem;
  }
}
</style>