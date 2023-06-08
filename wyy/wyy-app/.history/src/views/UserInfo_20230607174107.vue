<template>
  <div class="top">
    <img :src="user.data.profile.avatarUrl" alt="">
    <div class="name">{{ user.data.profile.nickname }}</div>
  </div>
  <div class="content">
    <span>已关注：{{user.data.profile.follows}}</span>
    <span>被关注：{{ user.data.profile.followeds }}</span>
  </div>
  
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed:{
    ...mapState(['user'])
  }
}
</script>

<style lang="less" scoped>
.top{
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .4rem;
  img{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
  .name{
    margin-top: .3rem;
    font-weight: 600;
    font-size: .5rem;
  }
}
.content{
  width: 100%;
  height: 2rem;
}
</style>