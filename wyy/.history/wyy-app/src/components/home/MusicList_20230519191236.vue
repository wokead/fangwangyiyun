<template>
  <div class="musicList">
    <div class="musicTop">
        <div class="title">发现好歌单</div>
        <div class="more">查看更多</div>
    </div>
    <div class="musicContent">
        <van-swipe :loop="false" :width="150" show-indicators="false" class="mySwipe">
            <van-swipe-item v-for="item in musicList" :key="index"></van-swipe-item>
        </van-swipe>
    </div>
  </div>
</template>

<script>
import {getMusicList} from '@/request/api/home.js'
import {onMounted, reactive} from 'vue'

export default {
    setup(){
        const state = reactive({
            musicList: []
        })
        onMounted(async ()=>{
            let res = await getMusicList();
            state.musicList = res.data.result
        })
    }

}
</script>

<style lang="less" scoped>
.musicList{
    width: 100%;
    height: 5rem;
    padding: .2rem;
    .musicTop{
        width: 100%;
        height: .6rem;
        display: flex;
        justify-content: space-between;
        margin-bottom: .2rem;
        .title{
            font-size: .4rem;
            font-weight: 900;
        }
        .more{
            border: 1px solid #ccc;
            text-align: center;
            line-height: .6rem;
            padding: 0 0.2rem;
            border-radius: .4rem;
        }
    }
    .musicContent{
        width: 100%;
        height: 4rem;
        .mySwipe{
            height: 100%;
        }
    }
}
</style>