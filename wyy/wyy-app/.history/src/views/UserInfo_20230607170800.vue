<template>
  <div>{{ user.data.profile.nickname }}</div>
  <img :src="user.data.profile.avatarUrl" alt="">
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

</style>