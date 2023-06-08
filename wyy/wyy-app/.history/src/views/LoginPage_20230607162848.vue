<template>
  <div class="title">
    <span>登录</span>
  </div>
  <van-form class="form">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="account"
        label="账号"
        placeholder="账号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="password"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 1rem">
      <van-button round block type="danger" native-type="submit" @click="onSubmit">
        登录
      </van-button>
    </div>
  </van-form>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const username = ref("");
    const password = ref("");
    return {
      username,
      password,
    };
  },
  methods:{
    async onSubmit(){
      let res = await this.$store.dispatch("getUserInfo", {account:this.username, password:this.password});
      console.log(res)
      // if(res.data.code === 200){
      // }
    }
  }
};
</script>

<style lang="less" scoped>
.title {
  width: 100%;
  height: 4rem;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
}
.form {
  width: 100%;
  padding: 0.6rem;
}
</style>