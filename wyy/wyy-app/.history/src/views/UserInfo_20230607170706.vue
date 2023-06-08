<template>
  <div>{{ user.data.profile.nickname }}</div>
  <img src="" alt="">
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed:{
    ...mapState(['user'])
  }
}
</script>

<style>

</style>