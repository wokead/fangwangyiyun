<template>
  <span>1111</span>
</template>

<script>
import { useRoute } from 'vue-route';
import { onMounted } from 'vue';
import { getMusicItemList } from '@/request/api/item.js';

export default {
  setup() {
    onMounted(async () => {
      let id = uesRoute().query.id;
      let res = await getMusicItemList(id);
      console.log(res);
    });
  },
};
</script>

<style>
</style>