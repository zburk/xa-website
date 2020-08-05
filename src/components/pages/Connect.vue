<template>
  <div>
    <app-nav class="flex flex-col lg:flex-row bg-blue-500 lg:bg-transparent pt-5 align-top lg:pin-t lg:absolute w-full"></app-nav>
    <div class="flex">
      <div class="flex-1">
        <BaseBanner
          class="h-128"
          text="Connect"
          img="https://via.placeholder.com/2000x1200"
        />

        <div class="flex flex-col sm:flex-row py-20">
          <div class="flex px-10 flex-col flex-1">
            <h2 class="flex-1 pb-10 text-4xl">Men</h2>
            <ul class="flex-1">
              <li>Monday 7 PM @ Location TBD</li>
              <li>Tuesday 8 PM @ Hooker Fields</li>
              <li>Thursday 7 PM @ Bell Tower</li>
            </ul>
          </div>
          <div class="flex px-10 flex-col flex-1">
            <h2 class="flex-1 pb-10 text-4xl">Women</h2>
            <ul class="flex-1">
              <li>Monday 7 PM @ Location TBD</li>
              <li>Tuesday 7 PM @ Olde Campus Lower Quad</li>
              <li>Thursday 6:30 PM @ Hooker Fields</li>
            </ul>
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
</style>
