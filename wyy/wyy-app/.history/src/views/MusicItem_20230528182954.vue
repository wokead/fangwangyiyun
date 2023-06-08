<template>
  <ItemMusicTop :playList="state.playList" />
  <ItemMusicList :itemList="state.itemList" :subscribedCount="state.playList.subscribedCount"/>
</template>

<script>
import { useRoute } from "vue-router";
import { onMounted, reactive } from "vue";
import { getMusicItemList, getItemList } from "@/request/api/item.js";
import ItemMusicTop from "@/components/item/ItemMusicTop.vue";
import ItemMusicList from "@/components/item/ItemMusicList.vue";
export default {
  setup() {
    const state = reactive({
      playList: {},
      itemList: {},
    });
    onMounted(async () => {
      let id = useRoute().query.id;
      let res = await getMusicItemList(id);
      state.playList = res.data.playlist;
      let result = await getItemList(id)
      console.log(result)
      state.itemList = result.data.songs;

    });
    return { state };
  },
  components: {
    ItemMusicTop,
    ItemMusicList
  },
};
</script>

<style>
</style>