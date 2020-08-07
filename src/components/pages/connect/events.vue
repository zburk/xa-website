<template>
  <div>
    <app-nav class="flex flex-col lg:flex-row bg-blue-500 lg:bg-transparent pt-5 align-top lg:pin-t lg:absolute w-full"></app-nav>
    <div class="flex">
      <div class="flex-1">
        <div class="w-full flex bg-center bg-cover h-128 bg-blue-500 flex-col justify-around px-10">
          <h1 once class="text-white text-center">Connect</h1>
          <h2 once class="text-white text-left"><a href>Events</a></h2>
        </div>

        <div class="py-20">
          <div class="px-10">
            <h2>Links</h2>
            <div class="text-xl">
              <div class="py-3">
                <a class="text-blue-800">Events</a>
              </div>
              <div class="py-3">
                Life Groups: <a class="text-blue-800">Men</a> | <a class="text-blue-800">Women</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <app-nav class="md:hidden lg:pin-t lg:absolute w-full"></app-nav>
  </div>
</template>

<script>
import AppNav from '@/components/AppNav.vue'

export default {
  name: 'Connect',
  components: {
    AppNav
  },
}
</script>

<style scoped>
h1 {
  font-family: 'Underland', 'sans-serif';
  font-size: 4rem;
  transform: rotate(-10deg);
}

h2 {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
}

a:hover {
  text-decoration: underline;
  cursor: pointer;
}
</style>
