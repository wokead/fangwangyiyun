<template>
  <span>1111</span>
</template>

<script>
import {uesRoute} from 'vue-router'
import { onMounted } from "vue";
import { getMusicList } from "@/request/api/item.js";

export default {
    setup(){
        onMounted(async ()=>{
            let id = useRoute().query.id
            let res = await getMusicList()
        })
    }
}
</script>

<style>

</style>