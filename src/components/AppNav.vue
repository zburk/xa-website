<template>
  <div class="flex flex-col lg:flex-row bg-blue lg:bg-transparent pt-5 align-top">
    <div class="flex-1 pl-5">
      <span class="text-xl text-white">Chi Alpha at UNC</span>
    </div>
    <div class="flex-1 pl-10 pr-6">
      <ul class="list-reset text-right flex flex-col lg:flex-row items-center justify-between">
        <li class="py-3 lg:py-0"><router-link :to="{ name: 'home' }" exact class="text-black">Home</router-link></li>
        <li class="py-3 lg:py-0"><router-link :to="{ name: 'about' }" class="text-black">About</router-link></li>
        <li class="py-3 lg:py-0"><router-link :to="{ name: 'staff' }" class="text-black">Staff</router-link></li>
        <li class="py-3 lg:py-0"><router-link :to="{ name: 'men' }" class="text-black">Men</router-link></li>
        <li class="py-3 lg:py-0"><router-link :to="{ name: 'women' }" class="text-black">Women</router-link></li>
        <li class="py-3 lg:py-0"><router-link :to="{ name: 'give' }" class="text-black">Give</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppNav'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  li {
    display: inline;
  }

  a {
    color: #fff;
  }
</style>
