<template>
  <div class="detailTop">
    <div class="detailTopLeft">
      <svg class="icon" aria-hidden="true">
        <use xlink:href="#icon-xiangzuojiantou"></use>
      </svg>
      <div>
        <p>{{ musicList.al.name }}</p>
        <span></span>
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-youjiantou"></use>
        </svg>
      </div>
    </div>
    <div class="detailTopRight"></div>
  </div>
</template>

<script>
export default {
props:["musicList"]
}
</script>

<style>

</style>