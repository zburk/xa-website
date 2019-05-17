<template>
  <div>
    <div class="flex lg:h-128 flex-col lg:flex-row">
      <div class="flex-1">
        <base-banner
          class="h-64 lg:h-full"
          text="Welcome to Family"
          img="https://via.placeholder.com/1000x600"
        ></base-banner>
      </div>
      <div class="flex-1 bg-black">
        <get-connected-form>
        </get-connected-form>
      </div>
    </div>

    <section class="pb-20">
      <div class="container mx-auto">
        <h2 class="text-center py-20">Who We Are</h2>
        <div class="flex flex-col lg:flex-row px-4 lg:px-0">
          <div class="flex-1 lg:px-32 text-grey-darkest">
            <p class="mb-10">Chi Alpha is a ministry that exists to reach college students, build them up in their faith and send them out to serve and make a difference in a world in great need.</p>
            <p>Chi Alpha has groups on more than 300 campuses in the United States and around the world.</p>
          </div>
          <div class="flex-1">
            <img src="https://via.placeholder.com/500x250" class="rounded mt-6 lg:-mt-4">
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-grey-lighter flex flex-row justify-center text-blue text-2xl leading-loose">
      <span class="block w-1/2 text-center">We use the Greek name to reflect the Apostle Paul's words in 2 Corinthians 5:20. The X (Chi) and A (Alpha) are abbreviations for "Christ's ambassadors".</span>
    </section>

    <section class="py-20 flex flex-col items-center text-grey-darkest text-lg leading-loose">
      <p class="block w-1/2 text-center mb-8">Life Groups are where we get together in small groups in dorms around campus every week to talk about anything and everything as we try to figure out how to do life together.</p>

      <p class="block w-1/2 text-center">We believe that the Bible is the word of God and we are going to look at it to see how it applies to our lives. We encourage and invite questions as we figure it out together.</p>
    </section>

    <section class="flex flex-col lg:flex-row lg:h-128">
      <div class="flex-1 h-64 lg:h-full mens bg-center lg:bg-cover">
        <div class="flex w-full h-64 lg:h-full items-center justify-center">
            <router-link :to="{ name: 'men' }">
              <button class="bg-blue p-4 rounded text-white hover:bg-blue-light">Men's Lifegroup</button>
            </router-link>
        </div>
      </div>
      <div class="flex-1 h-64 lg:h-full womens bg-center lg:bg-cover">
        <div class="flex w-full h-64 lg:h-full items-center justify-center">
            <router-link :to="{ name: 'women' }">
              <button class="bg-blue p-4 rounded text-white hover:bg-blue-light">Women's Lifegroup</button>
            </router-link>
        </div>
      </div>
    </section>
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
  .mens {
    background-image: url('https://via.placeholder.com/600x600');
  }

  .womens {
    background-image: url('https://via.placeholder.com/600x600');
  }
</style>
