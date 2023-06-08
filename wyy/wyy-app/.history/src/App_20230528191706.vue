<template>
  <router-view/>
</template>
<script>
import Footer from "@/components/item/Footer.vue";
export default{
  components:{
    Footer
  }
}

</script>
<style lang="less">
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.icon{
  width: .4rem;
  height: .4rem;
}
a{
  color: black;
}
</style>
