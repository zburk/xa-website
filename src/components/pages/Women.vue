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

    <div class="flex flex-col my-20 mx-10 justify-center items-center">
      <ul class="flex-1">
        <li class="py-3 text-xl">Monday 7 PM @ Location TBD with Indira Lujano and Mackenzie Harris</li>
        <li class="py-3 text-xl">Tuesday 7 PM @ Olde Campus Lower Quad with Emily Shuman and Megan Wood</li>
        <li class="py-3 text-xl">Thursday 6:30 PM @ Hooker Fields with Adriana Jimenez-Guzman and Madelyn Smith</li>
      </ul>
    </div>

    <div class="container mx-auto mb-24">
      <div class="flex flex-col lg:flex-row items-center mb-10 py-10" v-for="(member, index) in leaders" :key="index">
        <div class="flex-none px-6">
          <base-member
            :member="member">
          </base-member>
          <h3 class="text-center pt-3 text-gray-900 font-semibold">{{ member.name }}</h3>
        </div>
        <div class="flex-grow mt-4 lg:-mt-10 mx-10 lg:mx-0 leading-normal">
          {{ member.text }}
        </div>
      </div>
    </div>

    <div class="bg-gray-lighter" style="display: none;">
      <div class="container mx-auto pb-24">
        <div class="flex flex-col mx-10 lg:mx-0">
          <h2 class="flex-1 text-center py-24">What We're Studying</h2>

          <p class="flex-1 leading-normal">Coming soon for Fall 2020!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Women',
  data() {
    return {
      leaders: [
        {
          name: 'Megan Wood',
          headshot: '/img/MeganWood-Headshot.jpg',
          text: 'Before I arrived at UNC, I knew I wanted to be a part of Chi Alpha because I have always loved XA’s mission for reaching college students. Little did I know, UNC’s Chi Alpha is full of some of the most loving and welcoming people that I have ever met. Less than two weeks after transferring to UNC, there was a death in my close family and I found myself an hour away from my home. XA stepped in as my new support system and helped me through that rough point in my life. A few months after that, I decided to go to West Africa with XA and was able to see how Chi Alpha fulfills its mission of reaching the world. Chi Alpha has renewed my passion to reach the lost, no matter where they are in the world or on our campuses, and I am looking forward to seeing all that God is going to do through XA in the coming years!'
        },
        {
          name: 'Madelyn Smith',
          headshot: '/img/MadelynSmith-Headshot.jpg',
          text: 'My name is Madelyn Smith and I am a rising Junior at UNC Chapel Hill. I am from Lenoir, North Carolina, studying Political Science with minors in Spanish and Women and Gender Studies. Upon coming to UNC, I found a strong Christian community in Chi Alpha. As worship leader, my favorite part of Chi Alpha would be worshiping God through music. The passion for Christ that both the staff and my fellow students possess has inspired me to grow closer to the Lord while providing me with support, advice, and love while figuring out what that means for me, individually. Chi Alpha has provided me with opportunities I never thought possible, such as going on two international missions trips to Africa and Ecuador, which completely changed the trajectory of my future by opening my eyes to the Lord\'s calling on my life as an international missionary. I believe that Chi Alpha is a spiritual sanctuary where college students have an opportunity like no other to truly find the Lord and in one of the most authentic Christian communities I have ever been a part of.'
        },
        {
          name: 'Mackenzie Harris',
          headshot: '/img/MackenzieHarris-Headshot.jpg',
          text: 'When I started at UNC, I joined many different clubs. Though I didn’t know it at the time, I was searching for community and a place to belong and grow in my faith. I had good Christian friends and strong connections in high school, and I was looking for that at UNC. I found that in Chi Alpha. Through life groups, I found friends who support me and help me grow in God.'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
