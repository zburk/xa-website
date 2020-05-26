<template>
  <div class="flex flex-row bg-blue-500 py-5 justify-around">
    <a href="https://www.facebook.com/XAatUNC/" target="_blank">
      <font-awesome-icon
        :icon="['fab', 'facebook-square']"
        size="2x"
        class="text-white">
      </font-awesome-icon>
    </a>
    <a href="https://www.instagram.com/uncchialpha/" target="_blank">
      <font-awesome-icon
        :icon="['fab', 'instagram']"
        size="2x"
        class="text-white">
      </font-awesome-icon>
    </a>
  </div>
</template>

<script>
export default {
  name: 'AppFooter'
}
</script>

<style scoped>
</style>
