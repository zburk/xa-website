<template>
  <div id="app">
    <div class="container">
      <app-nav></app-nav>
      <router-view
        class="pin-t absolute"
      ></router-view>
    </div>
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

</style>
