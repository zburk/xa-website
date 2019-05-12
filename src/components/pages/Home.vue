<template>
  <div class="flex h-128">
    <div class="flex-1">
      <base-banner
        class="h-full"
        text="Welcome to Family"
        img="https://via.placeholder.com/1000x600"
      ></base-banner>
    </div>
    <div class="flex-1 bg-grey-darkest">
      <get-connected-form>
      </get-connected-form>
    </div>
  </div>
</template>

<script>
import GetConnectedForm from '../GetConnectedForm'

export default {
  name: 'Home',
  components: { GetConnectedForm }
}
</script>

<style scoped>
</style>
