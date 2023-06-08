<template>
  <div class="searchTop">
    <svg class="icon" aria-hidden="true">
      <use xlink:href="#icon-zhixiangzuo"></use>
    </svg>
    <input type="text" v-model="keyWord" @keyup.enter="search" />
  </div>
  <div class="history">
    <span class="name">历史记录</span>
    <span
      class="keyWordItem"
      v-for="(item, index) in keyWordList"
      :key="index"
      @click="searchAgain(item)"
    >
      {{ item }}
    </span>
    <svg class="icon" aria-hidden="true" @click="del">
      <use xlink:href="#icon-shanchu"></use>
    </svg>
  </div>
  <div class="itemList">
    <div class="item" v-for="(item, index) in songsList" :key="index">
      <div class="itemLeft" @click="playTheSong(item)">
        <span class="leftSpan">{{ index + 1 }}</span>
        <div>
          <p>{{ item.name }}</p>
          <span v-for="(creator, index) in item.artists" :key="index">{{
            creator.name
          }}</span>
        </div>
      </div>
      <div class="itemRight">
        <svg class="icon bofang" aria-hidden="true" v-if="item.mvid != 0">
          <use xlink:href="#icon-duanshipinhuati"></use>
        </svg>
        <svg class="icon liebiao" aria-hidden="true">
          <use xlink:href="#icon-liebiao"></use>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
import { searchMusic } from "@/request/api/home.js";
export default {
  data() {
    return {
      keyWordList: [],
      keyWord: "",
      songsList: [],
    };
  },
  mounted() {
    this.keyWordList = JSON.parse(localStorage.getItem("keyWordList")) || [];
  },
  methods: {
    async search() {
      if (this.keyWord.trim() !== "") {
        this.keyWordList.unshift(this.keyWord);
        this.keyWordList = [...new Set(this.keyWordList)];
        if (this.keyWordList.length > 4) {
          this.keyWordList.pop();
        }
        localStorage.setItem("keyWordList", JSON.stringify(this.keyWordList));
        let res = await searchMusic(this.keyWord);
        console.log(res);
        this.songsList = res.data.result.songs;
        this.keyWord = "";
      }
    },
    del() {
      this.keyWordList = [];
      localStorage.removeItem("keyWordList");
    },
    async searchAgain(key) {
      let res = await searchMusic(key);
      this.songsList = res.data.result.songs;
    },
    playTheSong(song){
      song.al = song.album
      song.al.picUrl = song.
      this.$store.commit('pushIntoPlayList', song)
      this.$store.commit('updatePlayListIndex', this.$store.state.playList.length-1)
    }
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
  align-items: center;
  .name {
    font-size: 0.3rem;
    font-weight: 700;
  }
  .keyWordItem {
    margin: 0.1rem 0.2rem;
    padding: 0.1rem;
    background-color: #d4d4d4;
    border-radius: 0.3rem;
    display: inline-block;
  }
  .icon {
    width: 0.34rem;
    height: 0.34rem;
    position: absolute;
    right: 0.42rem;
  }
}
.itemList {
  width: 100%;
  padding: .3rem;
  .item {
    width: 100%;
    height: 1.4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .itemLeft {
      width: 85%;
      height: 100%;
      display: flex;
      align-items: center;
      .leftSpan {
        display: inline-block;
        width: 0.2rem;
        text-align: center;
      }
      div {
        p {
          width: 4.54rem;
          height: 0.4rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 700;
        }
        span {
          font-weight: 400;
          font-size: 0.24rem;
          color: #999;
        }
        margin-left: 0.3rem;
      }
    }
    .itemRight {
      width: 20%;
      height: 100%;
      display: flex;
      // justify-content: space-between;
      align-items: center;
      position: relative;
      .icon {
        fill: #999;
      }
      .bofang {
        position: absolute;
        left: 0;
      }
      .liebiao {
        position: absolute;
        right: 0;
      }
    }
  }
}
</style>