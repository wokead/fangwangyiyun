<template>
  <div class="btnOfTop">
    <svg class="icon back" aria-hidden="true" @click="$router.push('/')">
      <use xlink:href="#icon-zhixiangzuo"></use>
    </svg>
    <van-button type="danger" round class="btn" @click="quit">登出</van-button>
  </div>
  <div class="top">
    <img :src="user.data.profile.avatarUrl" alt="" />
    <div class="name">{{ user.data.profile.nickname }}</div>
  </div>
  <div class="content">
    <span>已关注：{{ user.data.profile.follows }}</span>
    <span>被关注：{{ user.data.profile.followeds }}</span>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  },
  methods:{
    quit(){
      localStorage.removeItem('token')
      this.$store.state.user = {}
    }
  }
};
</script>

<style lang="less" scoped>
.btnOfTop {
  width: 100%;
  height: 1rem;
  display: flex;
  justify-content: space-between;
  .back {
    margin: .2rem;
  }
  .btn{
    height: .6rem;
    margin: .16rem;
  }
}
.top {
  width: 100%;
  height: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.4rem;
  img {
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
  }
  .name {
    margin-top: 0.3rem;
    font-weight: 600;
    font-size: 0.5rem;
  }
}
.content {
  width: 100%;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
}
</style>