<template>
  <ItemMusicTop :playList="state.playList" />
  <ItemMusicList/>
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
      itemList:{}
    });
    onMounted(async () => {
      let id = useRoute().query.id;
      let res = await getMusicItemList(id);
      console.log(res)
      state.playList = res.data.playlist;
      // sessionStorage.setItem('itemDetail',JSON.stringify(state))
      let result = await getItemList(id)
      console.log(result)
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