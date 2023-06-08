<template>
  <!-- <div class="home">
    
  </div> -->
  <TopNav/>
  <SwiperTop/>
</template>

<script>
import TopNav from '@/components/home/TopNav.vue'
import SwiperTop from '@/components/home/SwiperTop.vue'
export default {
  name: 'HomeView',
  components: {
    TopNav,
    SwiperTop
  }
}
</script>
