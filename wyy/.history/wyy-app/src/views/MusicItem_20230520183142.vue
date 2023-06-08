<template>
  <ItemMusicTop :playList="state.playList"/>
</template>

<script>
import { useRoute } from 'vue-router';
import { onMounted, reactive } from 'vue';
import { getMusicItemList } from '@/request/api/item.js';
import ItemMusicTop from '@/components/item/ItemMusicTop.vue'
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
    return {state}
  },
  components:{
    ItemMusicTop
  }
};
</script>

<style>
</style>