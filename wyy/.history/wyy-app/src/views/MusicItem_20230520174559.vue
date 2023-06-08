<template>
  <span>1111</span>
</template>

<script>
import {uesRoute} from 'vue-router'
import { onMounted } from "vue";
import { getMusicList } from "@/request/api/item.js";

export default {
    setup(){
        onMounted(()=>{
            let id = useRoute().query.id
        })
    }
}
</script>

<style>

</style>