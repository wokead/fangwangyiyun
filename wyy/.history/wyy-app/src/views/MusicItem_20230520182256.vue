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
      playList: {}
    })
    onMounted(async () => {
      let id = useRoute().query.id;
      let res = await getMusicItemList(id);
      state.playList = res.data.playlist
    });
  },
};
</script>

<style>
</style>