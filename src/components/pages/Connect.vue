<template>
  <div>
    <app-nav class="hidden md:block lg:pin-t lg:absolute w-full"></app-nav>
    <div class="flex">
      <div class="flex-1">
        <base-banner
          class="h-128"
          text="Connect"
          img="https://via.placeholder.com/2000x1200"
        ></base-banner>
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
</style>
