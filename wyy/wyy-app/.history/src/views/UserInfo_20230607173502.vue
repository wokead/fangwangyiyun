<template>
  <div class="top">
    <div class="name">{{ user.data.profile.nickname }}</div>
    <img :src="user.data.profile.avatarUrl" alt="">
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
  img{
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
  .name{
    font-weight: 600;
    font-size: .5rem;
  }
}
</style>