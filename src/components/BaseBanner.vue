<template>
  <div class="w-full flex text-center items-center bg-center bg-cover" :style="styleObject">
    <h1 once class="flex-1 text-white">{{ text }}</h1>
  </div>
</template>

<script>
export default {
  name: 'BaseBanner',
  props: ['text', 'img'],
  computed: {
    styleObject() {
      return "background-image: url('" + this.img + "')"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-family: 'Underland', 'sans-serif';
    font-size: 4rem;
    transform: rotate(-10deg);
  }
  
  div {
    /*height: 25rem;*/
  }
</style>
