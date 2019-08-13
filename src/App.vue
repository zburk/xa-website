<template>
  <div id="app">
    <app-nav class="lg:pin-t lg:absolute w-full"></app-nav>
    <router-view
      class="router-view w-full"
    ></router-view>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppNav from './components/AppNav.vue'
import AppFooter from './components/AppFooter.vue'

export default {
  name: 'app',
  components: {
    AppNav,
    AppFooter
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

  p.year {
    visibility: hidden;
  }

  h3.month-item {
    visibility: hidden;
  }
</style>
