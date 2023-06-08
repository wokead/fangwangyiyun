<template>
  <span>1111</span>
</template>

<script>
import {uesRoute, useRoute} from 'vue-router'
import { onMounted } from "vue";

export default {
    setup(){
        onMounted(()=>{
            let id = useRoute().query.value.id
        })
    }
}
</script>

<style>

</style>