<template>
  <span>1111</span>
</template>

<script>
import {uesRoute} from 'vue-router'
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