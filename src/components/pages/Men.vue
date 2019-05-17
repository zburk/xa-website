<template>
  <div>
    <div class="flex">
      <div class="flex-1">
        <base-banner
          class="h-128"
          text="Men"
          img="https://via.placeholder.com/2000x1200"
        ></base-banner>
      </div>
    </div>

    <div class="flex">
      <h2 class="flex-1 text-center py-24">Mondays at 6:30 in Connor</h2>
    </div>

    <div class="container mx-auto mb-24">
      <div class="flex flex-row items-center mb-10" v-for="(member, index) in leaders" :key="index">
        <div class="flex-none px-6">
          <base-member
            :member="member">
          </base-member>
        </div>
        <div class="flex-grow">
          {{ member.text }}
        </div>
      </div>
    </div>

    <div class="bg-grey-lighter">
      <div class="container mx-auto pb-24">
        <div class="flex flex-col">
          <h2 class="flex-1 text-center py-24">What We're Studying</h2>

          <p class="flex-1 leading-normal">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Men',
  data() {
    return {
      leaders: [
        {
          name: 'Christopher Piccirillo',
          headshot: 'https://via.placeholder.com/200x200',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
        },
        {
          name: 'Stephen Kenney',
          headshot: 'https://via.placeholder.com/200x200',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
