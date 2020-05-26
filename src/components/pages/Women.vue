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

    <div class="flex px-10">
      <h2 class="flex-1 text-center py-24 text-4xl">Mondays at 6:30 at Bottom of Lenoir</h2>
      <h2 class="flex-1 text-center py-24 text-4xl">Tuesdays at 7:00 at Bottom of Lenoir</h2>
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
          text: 'My name is Tynsley Gilchrist and I am a Senior at UNC Chapel Hill, majoring in Human Development and Family Studies. A friend from my hometown had been involved in Chi Alpha before I came to UNC and introduced me to the group when I arrived on campus. When she told me about Chi Alpha, I was eager to meet a group of fellow Christians who would be a positive community for me as I embarked on a new journey. At my first Chi Alpha event, I immediately felt welcomed and accepted. Each person I talked to exemplified Christ’s love and I quickly established deep friendships with the genuine members of this group. Since then, Chi Alpha has given me the opportunity to fellowship with others, learn more about the bible, serve on the worship team, go on my first mission trip, and continue to grow in my personal relationship with Jesus. Through Chi Alpha, I discovered that God’s plan for my life is to share the gospel with others through ministry. I am excited to serve as a student leader and I am looking forward to embracing what the Lord has in store for our campus.'
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
