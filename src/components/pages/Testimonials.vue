<template>
  <div>
    <div class="flex">
      <div class="flex-1">
        <base-banner
          class="h-128"
          text="Testimonials"
          img="https://via.placeholder.com/2000x1200"
        ></base-banner>
      </div>
    </div>

    <div class="container mx-auto mt-20 px-20" ref="testimonials">
      <section v-for="(testimonial, index) in testimonials" :key="index" class="mb-20">
        <base-member
          v-if="testimonial.member.headshot"
          :member="testimonial.member"
          class="float-right">
        </base-member>
        <div class="mb-5">
          <h1 class="uppercase font-bold my-3 text-base font-sans">{{ testimonial.name }}</h1>
          <h2 class="text-grey-darker my-1 text-base font-sans font-normal" v-if="testimonial.school">{{ testimonial.school }}</h2>
          <div :class="classObject(testimonial.school)"></div>
        </div>
        <p v-html="testimonial.text"></p>
      </section>
    </div>

    <div class="donation-button flex flex-row w-full justify-between items-center px-10 bg-white" :class="{ 'show-button': showDonationButton, 'fixed pin-b pin-r': pinToBottom }">
      <img src="/img/T-ShirtDesign.jpg" width="100px">
      <p>We are offering a free T-Shirt to donors who give $25 or more!</p>
      <!-- Paypal button  -->
      <form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
        <input type="hidden" name="cmd" value="_s-xclick">
        <input type="hidden" name="hosted_button_id" value="39VYWBX7ZN2RA">
        <input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!">
        <img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
      </form>
    </div>
  </div>
</template>

<script>
import inView from 'in-viewport';
import moment from 'moment-timezone';

export default {
  name: 'Testimonials',
  data() {
    return {
      pinToBottom:        true,
      showDonationButton: false,
      testimonials: [
        {
          name: 'Christopher Piccirillo',
          text: 'What I learned most from Chi Alpha is the importance of community in the Christian life. I came to college as a super young and naïve Christian with the notion that I didn’t really need a community to follow God. But gradually through the persistent outreach of friends and mentors at Chi Alpha I began to realize that I was wrong and that God created me for community too. God showed me through Chi Alpha that when I was saved I became just a single member of His body and that it is only when the members gather together that we can fully experience the movement of God in our hearts and on our campus. Through Chi Alpha God has given me brothers and sisters who can build me up and support me in fighting the good fight of faith.',
          school: 'University of North Carolina at Chapel Hill',
          member: {
            headshot: '/img/ChristopherPicc-Headshot.jpg'
          }
        },
        {
          name: 'Jane Stonehouse',
          text: 'Beginning at Carolina, I was more focused on myself and plans for my life, than what plans God had for me in these years at college. I was not valuing the opportunity God had given me to do His will in the current moments I was in. Through Chi Alpha discipleship and life group, I have learned how critical it is to love and serve the people God has placed around me now. My identity as a Child of God means I have the purpose of spreading light in every space He puts me in.',
          school: 'University of North Carolina at Chapel Hill',
          member: {
            headshot: '/img/JaneStonehouse-Headshot.jpg'
          }
        },
        {
          name: 'Madelyn Smith',
          text: 'My name is Madelyn Smith and I am a rising Junior at UNC Chapel Hill. I am from Lenoir, North Carolina, studying Political Science with minors in Spanish and Women and Gender Studies. Upon coming to UNC, I found a strong Christian community in Chi Alpha. As worship leader, my favorite part of Chi Alpha would be worshiping God through music. The passion for Christ that both the staff and my fellow students possess has inspired me to grow closer to the Lord while providing me with support, advice, and love while figuring out what that means for me, individually. Chi Alpha has provided me with opportunities I never thought possible, such as going on two international missions trips to Africa and Ecuador, which completely changed the trajectory of my future by opening my eyes to the Lord\'s calling on my life as an international missionary. I believe that Chi Alpha is a spiritual sanctuary where college students have an opportunity like no other to truly find the Lord and in one of the most authentic Christian communities I have ever been a part of.',
          school: 'University of North Carolina at Chapel Hill',
          member: {
            headshot: '/img/MadelynSmith-Headshot.jpg'
          }
        },
        {
          name: 'Ndabe Mahluza',
          text: `XA, A Place Where I Experienced God<br><br>

          When I think about XA, I think about a place where I experienced God in a way that evidenced his presence in my life throughout my time at UNC. <br><br>

          When I got placed on North Campus-something that rarely happens for freshman-and I met a fella called Ray Vickery who invited me to my first XA meeting. That was God looking out for me. When a guest speaker gave a word of knowledge that someone in the audience needed to pay an outstanding debt, and that someone was me. That was God convicting me and letting me know that he cares about my affairs.<br><br>

          Once again, when I met my future boss. Now get this: Joe Newell, our campus pastor, had served in South Africa and visited my home country, Eswatini, before we ever knew each other. Then one day, while taking a walk in his neighbourhood in Durham, he and Michelle met another couple that had served in SA and visited Eswatini. He invited one of them, Nathan Clendenin, to come speak at XA. About two years later, Nathan would become my boss at StoryDriven, a very successful video marketing firm with a mission to tell stories about the good things that God is doing in the world through people. How wild is that!? I mean, what were the odds of all those connections happening.<br><br>

          On top of the supernatural, I experienced the tenderness of God through XA in the moments when I was hurting. Like when I had to withdraw from UNC for personal reasons, and the then campus pastors, Gina and Jared, took me in while I regrouped, and Gina made me some of the most delicious vegetarian food I have ever tasted! <br><br>

          All in all, I experienced God in big and small ways at XA. And it helped lay the foundation for the amazing relationship that I enjoy with him today!`,
          school: 'University of North Carolina at Chapel Hill',
          member: {
            headshot: ''
          }
        },
        {
          name: 'Zachary Burk',
          text: `Hello, I’m Zach. I came to Carolina wanting to pursue a professional program in health
          after undergrad. I believed that I had to do everything on my own and rely on myself to
          succeed. I placed pressure on myself to excel in everything while trying to shape myself
          to be who I thought others wanted me to be. As I became connected to Chi Alpha, I
          realized that I had a community of friends that I could rely on and be who I am rather
          than who I thought people wanted me to be.`,
          school: 'University of North Carolina at Chapel Hill',
          member: {
            headshot: '/img/ZachBurk-Headshot.jpg'
          }
        }
      ]
    }
  },
  methods: {
    classObject(school) {
      var color;
      switch (school) {
        case 'North Carolina State University':
          color = 'red';
          break;
        case 'Virginia Commonwealth University':
          color = 'yellow';
          break;
        case 'Reinhardt University':
          color = 'orange';
          break;
        default:
          color = 'blue';
          break;
      }

      return {
        'w-12 h-1': true,
        ['bg-' + color]: true
      }
    },
    handleScroll: function () {
      var body = document.body;
      var html = document.documentElement;

      var height = Math.max( body.scrollHeight, body.offsetHeight,
                       html.clientHeight, html.scrollHeight, html.offsetHeight );

			if (window.scrollY + window.innerHeight > height - 72) {
        this.pinToBottom = false;
			} else {
        this.pinToBottom = true;
      }
		}
  },
  created: function () {
		window.addEventListener('scroll', this.handleScroll);
	},
  destroyed: function () {
		window.removeEventListener('scroll', this.handleScroll);
	},
  mounted() {
    inView(this.$refs['testimonials'], () => {
      this.showDonationButton = true;
    });

    moment.tz.setDefault('America/New_York');
    if (moment().isAfter(moment('2019-07-14', 'YYYY-MM-DD').set('hour', 18))) {
      this.testimonials.push({
        name: 'Megan Wood',
        text: `Before I arrived at UNC, I knew I wanted to be a part of Chi Alpha because I have always loved
        XA’s mission for reaching college students. Little did I know, UNC’s Chi Alpha is full of some of
        the most loving and welcoming people that I have ever met. Less than two weeks after
        transferring to UNC, there was a death in my close family and I found myself an hour away from
        my home. XA stepped in as my new support system and helped me through that rough point in
        my life. A few months after that, I decided to go to West Africa with XA and was able to see
        how Chi Alpha fulfills its mission of reaching the world. Chi Alpha has renewed my passion to
        reach the lost, no matter where they are in the world or on our campuses, and I am looking
        forward to seeing all that God is going to do through XA in the coming years!`,
        school: 'University of North Carolina at Chapel Hill',
        member: {
          headshot: '/img/MeganWood-Headshot.jpg'
        }
      });
    }

    if (moment().isAfter(moment('2019-07-15', 'YYYY-MM-DD').set('hour', 18))) {
      this.testimonials.push({
        name: 'Amber Ellerbe',
        text: 'Hi! I\'m Amber. Going into Carolina, I was hoping for a chance to escape from my ties to God and carve out my own identity through the "typical" college experience. I had no interest in trying to maintain the "good Christian" facade that I had been using for so long, and had grown frustrated and annoyed with people viewing me in such a way. Chi Alpha allowed for me to see and experience the realness of my spiritual walk: messy, frustrating, confusing, and HUMAN. I was connected with believers who were just as imperfect as I was, yet understood the perfect and merciful nature of God. Through my new family, I have learned to discard the lies that had been keeping me from God and appreciate the beauty of the journey, along with calling that He has over my life.',
        school: 'University of North Carolina at Chapel Hill',
        member: {
          headshot: '/img/AmberEllerbe-Headshot.jpg'
        }
      });
    }

    if (moment().isAfter(moment('2019-07-16', 'YYYY-MM-DD').set('hour', 18))) {
      this.testimonials.push({
        name: 'Seth Collins',
        text: `I didn’t have Chi Alpha in college. I grew up in the church. I loved being part of it and loved getting to worship with the same folks every week. When I entered into my college-aged years, I began to notice that these people I enjoyed worshipping the Lord with every week were a lot older than me; there were very few who were my age.<br><br>

        One Sunday, a Chi Alpha pastor came to share why Chi Alpha is necessary on the college campuses and I thought to myself, “This is so cool! I think I would like to do this, too.” Fast forward five years and I’m doing an internship with Chi Alpha at UVA learning the ropes of campus ministry. Upon completion of the internship, I feel that the Lord is calling me to stay involved with it.<br><br>

        The reason I got involved with Chi Alpha and continue to serve this day is because there are a lot of college-aged people who may not feel that Sunday morning church is a good fit for them. Chi Alpha has been a place for those on the fringes of faith to find a safe, suitable setting to pursue an authentic relationship with Jesus. This movement invites those who are deeply grounded in their Christian faith, and those who aren’t sure what it means to follow Jesus.<br><br>

        I’m so thankful that God allows me to continue doing this life-changing work!`,
        school: 'University of North Carolina at Chapel Hill',
        member: {
          headshot: '/img/SethCollins-Headshot.jpg'
        }
      });
    }

    if (moment().isAfter(moment('2019-07-17', 'YYYY-MM-DD').set('hour', 18))) {
      this.testimonials.push({
        name: 'Brigitte Madan',
        text: `Hi I’m Brigitte! I am a transfer from Miami. When I first came to Carolina I felt alone and
        need to be perfect. I was always known as the girl who didn’t fit in, but at Chi Alpha that
        changed. Before, I didn’t know what it felt like to have a community, especially one filled
        with women of God. After a few weeks at Chi Alpha I found my home. I found my people
        who accepted me as the silly, energetic girl that I am.`,
        school: 'University of North Carolina at Chapel Hill',
        member: {
          headshot: ''
        }
      });
    }

    if (moment().isAfter(moment('2019-07-18', 'YYYY-MM-DD').set('hour', 18))) {
      this.testimonials.push({
        name: 'Danny Dana-Lê',
        text: ``,
        school: 'University of North Carolina at Chapel Hill',
        member: {
          headshot: ''
        }
      });
    }

    if (moment().isAfter(moment('2019-07-19', 'YYYY-MM-DD').set('hour', 18))) {
      this.testimonials.push({
        name: 'Kayla Piccirillo',
        text: `I'm Kayla. Before I joined Chi Alpha I thought that living God's will for my life meant striving for perfection. Through Family Group and discipleship in Chi Alpha I learned that perfection is not something I can create, but rather something that God is. By walking closer with Him, I am being increasingly transformed. I don't need to concoct my own perfect world, but rather give up mine so I can join God in His.`,
        school: 'University of North Carolina at Chapel Hill',
        member: {
          headshot: '/img/KaylaPiccirillo-Headshot.jpg'
        }
      });
    }

    if (moment().isAfter(moment('2019-07-20', 'YYYY-MM-DD').set('hour', 18))) {
      this.testimonials.push({
        name: 'Chris Webb',
        text: `When I transferred to Virginia Commonwealth University in the fall of 2013 I knew I desired Christian community but didn’t know where I’d find it and how transformative it be in my life. Within forty eight hours of arriving on campus I’d been able to attend two Chi Alpha events and met two upperclassmen who lived in the same dorm as me and were small group leaders. A week later I joined their small group and the rest is history. Amidst regular bible study, social events, retreats and many random times of hanging out I not only learned the value of living in authentic community but also the importance of diving into the word devotionally with others and embracing the responsibility we all have as Christ followers to “make disciples who make disciples”.<br><br>

        As I’ve felt the Lord specifically lead me to fulfill this call in marketplace as a middle and high school teacher, it’s my privilege to give back to the ministry that so blessed my life by empowering those who are called to the college campus to be the hands and feet of Christ to students from all around the world. It’s encouraging to know that God his positioning his people to minister to the next generation of leaders and influencers in such a strategic place as the college campus and during a time of life that is so consequential to most. The harvest is ready, it’s time to support the laborers in the field!`,
        school: 'Virginia Commonwealth University',
        member: {
          headshot: '/img/ChrisWebb-Headshot.jpg',
          borderColor: 'yellow'
        }
      });
    }

    if (moment().isAfter(moment('2019-07-21', 'YYYY-MM-DD').set('hour', 18))) {
      this.testimonials.push({
        name: 'Kelley Horton',
        text: `Why Chi Alpha?<br><br>

        Because Jesus.<br><br>

        As a teacher and coach at a small university in North Georgia, I get to spend a lot of time with students who are not only trying to find themselves, but searching for truth and understanding. They want to connect in some way. They need community. I see what they are looking for, but as a Christian teacher and coach, I know the answer isn’t just truth, understanding, connection, or community. It’s Jesus. HIS truth. Connecting with a community that shares His love. Understanding He is what we need most to discover our purpose and find direction.  So, Why Chi Alpha? Why do I choose to invest? Because Jesus. Jesus! I want more college students to have the opportunity to know Him! When I was first introduced to Chi Alpha and learned of their vision and mission, I knew immediately that I wanted to help in some way.  It is my hope to one day see Chi Alpha on every college and university campus... even the small ones located in obscure places!`,
        school: 'Reinhardt University',
        member: {
          headshot: '/img/KelleyHorton-Headshot.jpg',
          borderColor: 'orange'
        }
      });
    }

    if (moment().isAfter(moment('2019-07-22', 'YYYY-MM-DD').set('hour', 18))) {
      this.testimonials.push({
        name: 'Andy',
        text: `I came to college in August 2008 unsure about a lot of things. Will I make friends? Which subject should I major in? What career path should I pursue? But if I'm honest, the greatest uncertainty I felt on that sweltering move-in day was this:  Will I still be a Christian four years from now when I leave this place? I was raised in a Christian home and desired to pursue Christ in college, but my perception was that it was basically impossible for someone to go to college and maintain their faith in Jesus. I had seen so many people I knew go to college and quickly falter in their commitment to Christ amidst the many temptations of life on a college campus. Looking back more than a decade later, I'm so thankful that I was not resigned to this all-too-familiar path because I found Chi Alpha. Or rather, because Chi Alpha found me.<br><br>

        On move-in day, students from Chi Alpha greeted me in my dorm room and invited me to a party that night. I met many friendly students who invited me to all kinds of other Chi Alpha events in the first few weeks of school, including a weekly men's core group for first-year students where I had the opportunity to meet guys my age who also wanted to pursue Christ. I attended weekly large group meetings and semester retreats where I was side by side with hundreds of other college students who were there because they loved God and wanted to grow in their relationship with him. Needless to say, I was blown away. This was not at all what I expected. Fast forward over the years at school and during my time as a student with Chi Alpha I had the opportunity to truly experience biblical discipleship on both the receiving and the giving end; grow in my devotional life and personal relationship with Jesus; participate in biblical community; and begin to live out the commands of scripture in my everyday life in a real and genuine way. I so enjoyed my experience with Chi Alpha that I decided to stay on for a year after graduating as an intern to continue my involvement with the ministry.<br><br>

        I support Chi Alpha today because I know the unmistakable effect it had on my life and on my relationship with Christ. If Chi Alpha had not found me, I honestly don't know where I'd be today in my faith. I'd like to think I'd still be following Jesus, but who knows? I know there are so many others like me who are looking for Christian community as they head to college but need to be pursued. And there are countless others who do not know Jesus but who are also seeking community of some kind. They need to be pursued too. My wife Kate and I are thankful for the opportunity to support Chi Alpha missionaries on multiple college campuses because we know and believe that God is using this ministry to raise up disciples of Christ who will live out the Great Commission for the rest of their lives.`,
        school: '',
        member: {
          headshot: '/img/Andy-Headshot.jpg'
        }
      });
    }

    if (moment().isAfter(moment('2019-07-23', 'YYYY-MM-DD').set('hour', 18))) {
      this.testimonials.push({
        name: 'Emily Shuman',
        text: `I’m Emily. I came to UNC as a fearful perfectionist who only showed the most put
        together parts of my life to those around me. I thought that being a “good Christian”
        meant having it all together, all the time, and I didn’t want even my closest friends to
        know that the “good Christian” I was supposed to be actually had real life struggles. The
        more time I spent with the incredibly genuine friends I made in my Chi Alpha life group,
        and the more they shared their real, messy lives with me, the more God showed me
        that His grace means there is no shame in imperfection. My Chi Alpha family showed
        me what it looks like to let go of the perfect “good Christian” life I’d so carefully crafted
        and to boldly proclaim God’s love and grace in even the messiest parts of my life. There
        is no sweeter freedom than being myself among my XA family.`,
        school: 'University of North Carolina at Chapel Hill',
        member: {
          headshot: '/img/EmilyShuman-Headshot.jpg'
        }
      });
    }

    if (moment().isAfter(moment('2019-07-24', 'YYYY-MM-DD').set('hour', 18))) {
      this.testimonials.push({
        name: 'Richard & Sherry',
        text: `Sherry and I have served with Assemblies of God World Missions for the past 45
        years. And one of the joys of our ministry has been to work closely with university
        ministries while serving in Belgium. In an atmosphere of agnosticism and
        secularism, the universities have sought to deny access to the campuses, but
        through prayer, one-on-one witnessing, and social gatherings God has
        penetrated many of these schools. Now many of these campuses have viable
        student ministries that reach the student body. Chi Alpha Missionaries are
        winning and training others as student leaders who will impact and multiply the
        outreach among students. Not only will they reach students from the country
        where they study, but many international students are being discipled and will
        take the Good News back to their homeland. There, they will serve in places of
        influence in business, education, and government.<br><br>
        We personally support several Chi Alpha Missionaries because we see how this
        ministry is reaching young people that represent the best and the brightest. The
        Chi Alpha Worker having had his/her personal faith tested in the fire of atheism
        and agnosticism, understand what the students are facing and they lead by
        example, understanding the language of academia and loving the students into
        the Kingdom. Chi Alpha is one of the best investments we have ever made in
        ministry and missions and we will continue to support this vital ministry of
        reaching the youth of our generation.`,
        school: '',
        member: {
          headshot: '/img/RichardSherry-Headshot.jpg'
        }
      });
    }

    if (moment().isAfter(moment('2019-07-25', 'YYYY-MM-DD').set('hour', 18))) {
      this.testimonials.push({
        name: 'Annie Lin',
        text: `When I was 17-year-old, I came to the US by myself for undergraduate study. As formidable the experience might sound, I got to know these amazing people across the globe, I got to have another 'family' in this unfamiliar country. I attended Chi Alpha services during my freshman year and kept this routine till I graduated. Through Chi Alpha, I got to know the Bible and Christianity for the first time. My time spent with this big family changed my view about the world, not in a way like a sudden moment, but gradually like the way God is slowly guiding our life. Then I began to see these slow change in my life as well. Along the way, I gained amazing fellowship experience and more importantly I feel God worked his way through my heart and taught me so many things that cannot be gained otherwise.`,
        school: 'University of North Carolina at Chapel Hill',
        member: {
          headshot: ''
        }
      });
    }

    if (moment().isAfter(moment('2019-07-26', 'YYYY-MM-DD').set('hour', 18))) {
      this.testimonials.push({
        name: 'Michael',
        text: `Growing up, my parents, my older brother, and I would go to church together,
        however, I still remember the feelings of relief every now and again when I would
        awake only to realize that we weren’t going to church that morning. It’s not that I
        didn’t care about God or that my church was “boring”. I believed in Jesus, and my
        church had an awesome band and great preacher. Nonetheless, when I went to
        college, I was on the fence of whether or not I would continue going to church.<br><br>

        That question was soon answered, not because of a change of heart, but
        because on move-in day I met a Chi Alpha student who invited me to come with
        him. I joined him for church and soon met many other guys. I began to attend Chi
        Alpha’s worship night and even joined a small group. It would take some time
        before my heart would really change, but I went because of the guys I was with.<br><br>

        I was caught by an older Chi Alpha student on move-in day. I was kept by the
        guys in my small group. Because of that, I met Jesus “face-to-face” for the first
        time. If I want to see how God used Chi Alpha to change my life, it’s easy. I just
        have to look at my older brother. Spiritually we were the same leaving high
        school, but sadly today, he is far from God. The difference...Chi Alpha`,
        school: '',
        member: {
          headshot: '/img/Michael-Headshot.jpg'
        }
      });
    }

    if (moment().isAfter(moment('2019-07-27', 'YYYY-MM-DD').set('hour', 18))) {
      this.testimonials.push({
        name: 'Marisa',
        text: ``,
        school: '',
        member: {
          headshot: ''
        }
      });
    }
  }
}
</script>

<style scoped>
  .donation-button {
    opacity: 0;
    visibility: hidden;
  }

  .show-button {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.5s linear;
  }
</style>
