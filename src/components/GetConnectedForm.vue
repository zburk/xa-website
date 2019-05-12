<template>
  <div class="flex flex-col items-center h-full justify-center">
    <h1 class="text-white mb-8">Get Connected</h1>
    <form class="w-1/2">
      <div class="flex mb-6">
        <div class="w-full">
          <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-blue-light" id="name" type="text" placeholder="Name">
        </div>
      </div>
      <div class="flex mb-6">
        <div class="w-full">
          <input class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-blue-light" id="name" type="text" placeholder="Email">
        </div>
      </div>
      <div class="flex mb-6">
        <div class="w-full">
          <textarea class="bg-grey-lighter appearance-none border-2 border-grey-lighter rounded w-full py-2 px-4 text-grey-darker leading-tight focus:outline-none focus:bg-white focus:border-blue-light" id="name" type="text" placeholder="Message"></textarea>
        </div>
      </div>
      <div class="flex justify-center">
        <button class="bg-blue hover:bg-blue-light focus:shadow-outline focus:outline-none text-white py-4 px-10 rounded" type="button">
          Send
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'GetConnectedForm'
}
</script>

<style scoped>
</style>
