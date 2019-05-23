<template>
  <div>
    <div class="flex">
      <div class="flex-1">
        <base-banner
          class="h-128"
          text="Staff"
          img="/img/student-leaders.jpg"
        ></base-banner>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row flex-wrap mx-auto justify-center">
      <div class="mt-20 m-10" v-for="(member, index) in staff1" :key="index">
        <base-member
          :member="member"
          :selectedMember="selectedMember"
          v-on:select="selectedMember = $event">
        </base-member>

        <div class="lg:hidden">
          <h2 class="text-3xl my-3">{{ member.name }}</h2>
          <h3 class="font-sans text-black text-xl my-3" v-if="member.title">
            {{ member.title }}
          </h3>

          <p class="leading-normal">{{ member.text }}</p>
        </div>
      </div>
    </div>

    <div class="flex flex-col lg:flex-row flex-wrap mx-auto justify-center">
      <div class="m-10" v-for="(member, index) in staff2" :key="index">
        <base-member
          :member="member"
          :selectedMember="selectedMember"
          v-on:select="selectedMember = $event">
        </base-member>

        <div class="lg:hidden">
          <h2 class="text-3xl my-3">{{ member.name }}</h2>
          <h3 class="font-sans text-black text-xl m6-3" v-if="member.title">
            {{ member.title }}
          </h3>

          <p class="leading-normal">{{ member.text }}</p>
        </div>
      </div>
    </div>

    <div class="container mx-auto my-10 hidden lg:block">
      <h2 class="text-4xl">{{ selectedMember.name }}
        <span class="font-sans text-black text-2xl" v-if="selectedMember.title">
          <span class="mx-4">|</span>
          {{ selectedMember.title }}
        </span>
      </h2>

      <div class="flex flex-row my-10">
        <p class="flex-grow leading-normal pr-6" v-html="selectedMember.text"></p>
        <div class="flex-none">
          <img :src="selectedMember.img" class="rounded">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Staff',
  data() {
    return {
      selectedMember: {},
      staff1: [
        {
          name: 'Joe Newell',
          headshot: '/img/JoeNewell-Headshot.jpg',
          img: '/img/JoeNewell.jpg',
          title: 'Campus Pastor',
          text: 'Joe is in his tenth year with Chi Alpha. He currently directs XA along with his wife Mishael. He is a graduate of Hampden-Sydney College (History), earning his ordination through Global University and the Assemblies of God. He and Mishael met as single missionaries in Costa Rica in 1996 and celebrated their 20th anniversary in March. They have two children — Josiah(14) and Elijah(9). Joe loves sports — especially the Cubs — history and art.'
        },
        {
          name: 'David Lao',
          headshot: '/img/DavidLao-Headshot.jpg',
          img: '/img/DavidLao.jpg',
          title: '',
          text: 'David Lao has been involved with Chi Alpha as a staff since Fall 2014 and has recently completed Chi Alpha’s Campus Missionary In-Training (CMIT) internship at NC State for the 2017-2018 school year. David is originally from Albemarle, NC, a small city close to Charlotte. He graduated from UNC-Chapel Hill in 2012 with a BA in Math, and to this day people still ask him how exams are going. David loves to hear testimonies that demonstrates God’s love, faithfulness, and provisions, and looks forward to seeing more people experience God’s presence and come to know Christ as Lord and Savior. David values a fit lifestyle and has recently picked up archery on the side. He loves to eat and does not meet many people who can eat more than he can. Perhaps due to his “unique” personality he finds himself the source of everyone’s laughter. He also enjoys playing Nintendo video games and watching anime.'
        },
        {
          name: 'Seth Collins',
          headshot: '/img/SethCollins-Headshot.jpg',
          img: '/img/SethandBrooke.jpg',
          title: '',
          text: `Seth grew up in the rural mountains of southwest VA. He studied Business Administration at The University of Virginia’s College at Wise and graduated with a degree in 2007. He went to work in the marketplace afterward for 5 years before giving that up to pursue full-time ministry with Chi Alpha Christian Fellowship.<br><br>

            Seth completed his internship with Chi Alpha at the University of Virginia in Charlottesville in 2013 and served on staff for 2 years. During those 2 years, he also served as Chi Alpha Interim Director at Virginia Commonwealth University in Richmond, VA.<br><br>

            In 2014, Seth and Brooke got married and both continued serving simultaneously at UVA and VCU.  In 2015, both Seth and Brooke moved to New Haven to help pioneer Chi Alpha at Yale University. In June 2018, Seth and Brooke moved to Chapel Hill to work with Chi Alpha at UNC.`
        }
      ],
      staff2: [
        {
          name: 'Brooke Collins',
          headshot: '/img/BrookeCollins-Headshot.jpg',
          img: '/img/SethandBrooke.jpg',
          title: '',
          text: `Brooke was born and raised in the plains of Kansas and will always have a soft spot for the Sunflower State. She attended Central Bible College (now Evangel University) and earned a B.A. in Preaching and Evangelism. Which means she loves public speaking and finding ways to help people connect with God. She has worked with Chi Alpha at Georgetown University, the University of Virginia, Virginia Commonwealth University, and Yale University prior to coming to UNC-Chapel Hill.<br><br>

            Somewhere along the way she met Seth and they got married in 2014. Most of their major relationship milestones have occurred at Chi Alpha events. You should ask her about how they met. Brooke loves watching movies and reading Wonder Woman comic books. She’s also a big baseball fan. One of her life goals is to see a game at every MLB ballpark.<br><br>

            In 2014, Seth and Brooke got married and both continued serving simultaneously at UVA and VCU.  In 2015, both Seth and Brooke moved to New Haven to help pioneer Chi Alpha at Yale University. In June 2018, Seth and Brooke moved to Chapel Hill to work with Chi Alpha at UNC.`
        },
        {
          name: 'Emily Shuman',
          headshot: '/img/EmilyShuman-Headshot.jpg',
          img: '/img/EmilyShuman.jpg',
          title: '',
          text: 'An Atlanta native, Emily moved to North Carolina to be a Tarheel. As a student, she found family away from home in Chi Alpha. In 2018, Emily graduated from UNC with degrees in Political Science and Music. She loved Chi Alpha, and the Triangle, so much that she stayed in North Carolina to complete a Chi Alpha internship at NC State. Emily loves empowering students with the knowledge of their identity in Christ, so she joined the staff team to do just that in her favorite place - Chapel Hill, of course! When she\'s not on campus, Emily is probably in a coffee shop somewhere. In fact, you may never see Emily without coffee. She also loves all things music, hanging out in nature, cooking, and Carolina basketball!'
        },
        {
          name: 'Tyler Brotton',
          headshot: '/img/TylerBrotton-Headshot.jpg',
          img: '/img/TylerBrotton.jpg',
          title: '',
          text: `Hello! My name is Tyler. I am originally from the great state of Kansas. I went to college at a small Christian school in Kansas called Sterling College. A couple of years ago, God called me into college ministry and led me to Bellingham, Washington to do my CMIT internship. While there, God really opened my eyes to the fact that I could do college ministry long term. As I was looking for different schools I could do college ministry at, UNC - Chapel Hill checked all of the boxes I was looking for.<br><br>

            This will be my first year on staff and I'm super excited. You will probably find me on campus playing any type of sports with people. I love playing Ultimate, softball, ping pong, curling, spikeball, basketball, tennis, and anything else I can get my hands on. I also really love my Nintendo Switch and am down to play Mario Kart with anyone!<br><br>

            I'm really excited to become a Tar Heel fan and cheering them on! Besides that I am passionate about the Kansas City Chiefs and the Kansas City Royals! I also love being out in nature and experiencing God's creation. I look forward to getting to know you. I would love to talk about anything really. I would love to get to know you more!`
        }
      ]
    }
  },
  methods: {
    select(member) {
      this.selectedMember = member;
    }
  },
  created() {
    this.selectedMember = this.staff1[0];
  }
}
</script>

<style scoped>
</style>
