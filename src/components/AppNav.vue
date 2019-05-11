<template>
  <div class="flex flex-row pt-5 align-top">
    <div class="flex-1 pl-5">
      <span class="font-sans text-xl">Chi Alpha at UNC</span>
    </div>
    <div class="flex-1">
      <ul class="list-reset text-right">
        <li><router-link :to="{ name: 'home' }" exact class="text-black mr-10">Home</router-link></li>
        <li><router-link :to="{ name: 'about' }" class="text-black mr-10">About</router-link></li>
        <li><router-link :to="{ name: 'staff' }" class="text-black mr-10">Staff</router-link></li>
        <li><router-link :to="{ name: 'men' }" class="text-black mr-10">Men</router-link></li>
        <li><router-link :to="{ name: 'women' }" class="text-black mr-10">Women</router-link></li>
        <li><router-link :to="{ name: 'give' }" class="text-black mr-10">Give</router-link></li>
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
</style>
