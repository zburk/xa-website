<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view
      class="pin-t absolute router-view w-full"
    ></router-view>
  </div>
</template>

<script>
import AppNav from './components/AppNav.vue'

export default {
  name: 'app',
  components: {
    AppNav
  }
}
</script>

<style>
  body {
    font-family: 'Montserrat', 'sans-serif';
  }

  a {
    text-decoration: none;
  }

  .router-view {
    z-index: -999;
  }
</style>
