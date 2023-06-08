<template>
  <router-view/>
  <FooterItem v-show="!$route.meta.isHidden"/>
</template>
<script>
import FooterItem from "@/components/item/FooterItem.vue";
export default{
  components:{
    FooterItem
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
