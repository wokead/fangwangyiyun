<template>
  <span>1111</span>
</template>

<script>
import { useRoute } from 'vue-router';
import { onMounted, reactive } from 'vue';
import { getMusicItemList } from '@/request/api/item.js';

export default {
  setup() {
    const state = reactive({
      
    })
    onMounted(async () => {
      let id = useRoute().query.id;
      let res = await getMusicItemList(id);
      console.log(res);
    });
  },
};
</script>

<style>
</style>