<template>
  <div>
    <div class="flex">
      <div class="flex-1">
        <base-banner
          class="h-128"
          text="About"
          img="/img/about.jpg"
        ></base-banner>
      </div>
    </div>

    <section class="my-10 pb-10">
      <div class="container mx-auto">
        <div class="flex flex-col lg:flex-row">
          <div class="flex-1 pl-32 lg:px-32 lg:-mr-32 mt-10 z-40 text-grey-darkest">
            <p class="rounded p-8 leading-normal devoted-disciples">
              Our vision for Chi Alpha is to learn together to be Devoted Disciples of Jesus who build Deep Friendships with those around us and act as Deliberate Servants of our campus, community, and world.
            </p>
          </div>
          <div class="flex-1 -ml-32 mt-24">
            <img src="img/Pit-Table.jpg" class="rounded">
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 bg-grey-lighter">
      <div class="container mx-auto">
        <div class="flex flex-col lg:flex-row lg:px-32 items-center">
          <div class="flex-none">
            <img src="/img/quelf.jpg" class="rounded">
          </div>
          <div class="flex-grow text-grey-darkest">
            <p class="rounded p-8 mt-24 lg:mt-0 lg:ml-6 leading-normal bg-blue-lighter">
              In Chi Alpha, we believe that no one was meant to live this life alone. We have lots of opportunities to hang out together, learn together, and play together. Check out the Home page for more info about our events and follow us on Facebook and Instagram to see what’s up.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="pb-20">
      <div class="container mx-auto leading-normal">
        <div class="mx-10 lg:mx-0">
          <h2 class="text-center py-20">What We Believe</h2>
          <p>Our core beliefs in a nutshell are: (scroll down for “The Long Version”)</p>
          <ol>
            <li class="my-6">God is real.</li>
            <li class="my-6">God has revealed Himself in Jesus.</li>
            <li class="my-6">The Bible is God’s word.</li>
            <li class="my-6">God still does supernatural stuff.</li>
            <li class="my-6">God ought to be at the center of every aspect of a person’s life.</li>
          </ol>


          <h2 class="text-5xl text-center py-10">The Long Version</h2>

          <p class="my-6">Our beliefs can be described as Orthodox, Evangelical, and Pentecostal.</p>

          <p class="my-6">By orthodox, we mean that we affirm the historic declarations of the Christian faith: specifically the Apostles’ Creed and the Nicene Creed.</p>

          <p class="my-6">By evangelical, we mean that we take the Bible seriously and believe that faith is something you have to choose for yourself.</p>

          <p class="my-6">By Pentecostal, we mean that we believe that the ministry of the Holy Spirit includes miracles, and this is an important part of the life of the church.</p>

          <ol class="py-8">
            <li>WE BELIEVE… the Bible is God’s message to us.</li>
            SO WE SEEK… to understand and obey its truth.

            <div>
              <li>WE BELIEVE… there is one God who is three persons.</li>
              SO WE YEARN… to know Him in all of His complexity and beauty.
            </div>

            <div>
              <li>WE BELIEVE… Jesus is fully God and fully human.</li>
              SO WE REJOICE… that Christ can be a bridge between us and God.
            </div>

            <div>
              <li>WE BELIEVE… people, throughout history, have sinned against God.</li>
              SO WE ARE… deeply aware that we too are marked by willful disobedience.
            </div>

            <div>
              <li>WE BELIEVE… God extends forgiveness to us through Christ.</li>
              SO WE REPENT…. and rejoice in our forgiveness.
            </div>

            <div>
              <li>WE BELIEVE… God offers freedom from sin’s grasp.</li>
              SO WE LIVE… lives that are pleasing to God.
            </div>

            <div>
              <li>WE BELIEVE… followers of Jesus must be empowered by the Holy Spirit.</li>
              SO WE EXPECT… supernatural power in our daily lives.
            </div>

            <div>
              <li>WE BELIEVE… that God can heal both the body and the heart.</li>
              SO WE PRAY… with faith and hope.
            </div>

            <div>
              <li>WE BELIEVE… the mark of surrender to the Holy Spirit is speaking in tongues.</li>
              SO WE PRAY… that God would grant us this supernatural gift.
            </div>

            <div>
              <li>WE BELIEVE… in the Church.</li>
              SO WE LIVE… in this community of faith, inviting others to join us.
            </div>

            <div>
              <li>WE BELIEVE… God gives leaders as gifts to His Church.</li>
              SO WE SERVE… those whom the Lord entrusts to us.
            </div>

            <div>
              <li>WE BELIEVE… God commands his followers to celebrate communion and baptism.</li>
              SO WE PRACTICE… these symbolic actions, reflecting on their significance.
            </div>

            <div>
              <li>WE BELIEVE… Jesus will return to claim His Church.</li>
              SO WE LIVE… in expectancy of his coming.
            </div>

            <div>
              <li>WE BELIEVE… Christ will one day be seen clearly as King on earth.</li>
              SO WE LIVE… as citizens of His Kingdom now.
            </div>

            <div>
              <li>WE BELIEVE… God is the ultimate Judge.</li>
              SO WE LIVE… knowing that our choices will echo through eternity.
            </div>

            <div>
              <li>WE BELIEVE… we will live with God forever.</li>
              SO WE LIVE… with hope regardless of our circumstances.
            </div>
          </ol>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
  .devoted-disciples {
    background-color: rgba(241, 245, 248, 0.8);
  }

  ol > div {
    @apply my-6
  }
</style>
