<template>
  <div class="home">
    <TopNav/>
    <SwiperTop/>
  </div>
</template>

<script>
import TopNav from '@/components/home/TopNav.vue'
import TopNav from '@/components/home/SwiperTop.vue'
export default {
  name: 'HomeView',
  components: {
    TopNav,
    SwiperTop
  }
}
</script>
