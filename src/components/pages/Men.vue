<template>
  <div>
    <div class="flex">
      <div class="flex-1">
        <base-banner
          class="h-128"
          text="Men"
          img="/img/mens_campout.jpg"
        ></base-banner>
      </div>
    </div>

    <div class="flex px-10">
      <h2 class="flex-1 text-center py-24 text-4xl">Tuesdays at 7:00 in Union 2511</h2>
      <h2 class="flex-1 text-center py-24 text-4xl">Thursdays at 7:00 at Bottom of Lenoir</h2>
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
  name: 'Men',
  data() {
    return {
      leaders: [
        {
          name: 'Christopher Piccirillo',
          headshot: '/img/ChristopherPicc-Headshot.jpg',
          text: 'What I learned most from Chi Alpha is the importance of community in the Christian life. I came to college as a super young and naïve Christian with the notion that I didn’t really need a community to follow God. But gradually through the persistent outreach of friends and mentors at Chi Alpha I began to realize that I was wrong and that God created me for community too. God showed me through Chi Alpha that when I was saved I became just a single member of His body and that it is only when the members gather together that we can fully experience the movement of God in our hearts and on our campus. Through Chi Alpha God has given me brothers and sisters who can build me up and support me in fighting the good fight of faith.'
        },
        {
          name: 'Stephen Kenney',
          headshot: '/img/StephenKenney-Headshot.jpg',
          text: 'At first, UNC was my opportunity to bury my issues from high school. No one knew the bitterness I still held, and frankly, no one cared. Things changed fast, though, when God stepped in! Through His guidance and my awesome friends in Chi Alpha, I’ve overcome and found my true worth in God alone. His goodness extends to all, and none more so than when we need Him most. God is doing incredible things through Chi Alpha; come join us and see!'
        },
        {
          name: 'Thomas Dix',
          headshot: '/img/TomDix-Headshot.jpg',
          text: 'On campus as a first year, I was starting to make a few friends here and there in different classes and clubs I was trying out, but I only hung out with those people IN those clubs and classes. Very rarely did those people ask me to hang out with them afterwards, much less return my food/hangout invites. I was looking at campus ministries, and when I came to the Chi Alpha Family Group, I was quickly and warmly welcomed by several friendly faces, who asked me about me and as much as I wanted to ask them about them. It meant so much to me;  the genuinely interested expressions given by people who wanted to talk to me, and cared about what I thought, though they had only known me a few minutes. I was soon invited to have lunch with them and to come to a game/food night, and asked if I would give them my number. The difference might seem insignificant, but the simple switch in my life from being the one asking others to hang out to being asked to hang out really made me feel wanted, feel welcome. God works much in the same way – he always and forever invites us to talk to him, and desires that we walk closer to him. Chi Alpha members emulate so well the boldness and vulnerability that God exudes towards us, and I pray always that I’ll be able to show God’s love for everyone to other new faces on campus in this way.'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
