<template>
  <div>
    <div class="flex">
      <div class="flex-1">
        <base-banner
          class="h-128"
          text="Women"
          img="/img/womens_escape_banner.jpg"
        ></base-banner>
      </div>
    </div>

    <div class="flex">
      <h2 class="flex-1 text-center py-24">Mondays at 6:30 in Rams Village 5</h2>
    </div>

    <div class="container mx-auto mb-24">
      <div class="flex flex-col lg:flex-row items-center mb-10" v-for="(member, index) in leaders" :key="index">
        <div class="flex-none px-6">
          <base-member
            :member="member">
          </base-member>
          <h3 class="text-center pt-3 text-grey-darkest font-semibold">{{ member.name }}</h3>
        </div>
        <div class="flex-grow mt-4 lg:-mt-10 mx-10 lg:mx-0 leading-normal">
          {{ member.text }}
        </div>
      </div>
    </div>

    <div class="bg-grey-lighter">
      <div class="container mx-auto pb-24">
        <div class="flex flex-col mx-10 lg:mx-0">
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
          name: 'Jane Stonehouse',
          headshot: '/img/JaneStonehouse-Headshot.jpg',
          text: 'Beginning at Carolina, I was more focused on myself and plans for my life, than what plans God had for me in these years at college. I was not valuing the opportunity God had given me to do His will in the current moments I was in. Through Chi Alpha discipleship and life group, I have learned how critical it is to love and serve the people God has placed around me now. My identity as a Child of God means I have the purpose of spreading light in every space He puts me in.'
        },
        {
          name: 'Megan Wood',
          headshot: '/img/MeganWood-Headshot.jpg',
          text: 'Before I arrived at UNC, I knew I wanted to be a part of Chi Alpha because I have always loved XA’s mission for reaching college students. Little did I know, UNC’s Chi Alpha is full of some of the most loving and welcoming people that I have ever met. Less than two weeks after transferring to UNC, there was a death in my close family and I found myself an hour away from my home. XA stepped in as my new support system and helped me through that rough point in my life. A few months after that, I decided to go to West Africa with XA and was able to see how Chi Alpha fulfills its mission of reaching the world. Chi Alpha has renewed my passion to reach the lost, no matter where they are in the world or on our campuses, and I am looking forward to seeing all that God is going to do through XA in the coming years!'
        },
        {
          name: 'Tynsley Gilchrist',
          headshot: '/img/TynsleyGilchrist-Headshot.jpg',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
        },
        {
          name: 'Madelyn Smith',
          headshot: '/img/MadelynSmith-Headshot.jpg',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
        },
        {
          name: 'Mackenzie Harris',
          headshot: '/img/MackenzieHarris-Headshot.jpg',
          text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
