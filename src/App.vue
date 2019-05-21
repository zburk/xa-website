<template>
  <div id="app">
    <app-nav></app-nav>
    <router-view
      class="lg:pin-t absolute router-view w-full"
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

  h2 {
    font-family: 'Underland', 'sans-serif';
    color: #4B9CD3;
    font-size: 3.5rem;
  }
</style>
