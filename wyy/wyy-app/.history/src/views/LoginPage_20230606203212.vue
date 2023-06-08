<template>
  <div class="title">
    <span>登录</span>
  </div>
  <van-form @submit="onSubmit" class="form">
    <van-cell-group inset>
      <van-field
        v-model="username"
        name="账号"
        label="账号"
        placeholder="账号"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
    </van-cell-group>
    <div style="margin: 1rem">
      <van-button round block type="danger" native-type="submit">
        登录
      </van-button>
    </div>
  </van-form>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    const username = ref('');
    const password = ref('');
    const onSubmit = (values) => {
      console.log('submit', values);
    };

    return {
      username,
      password,
      onSubmit,
    };
  },
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
.form{
  width: 80%;
}
</style>