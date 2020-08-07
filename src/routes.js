import Home from './components/pages/Home'
import About from './components/pages/About'
import Staff from './components/pages/Staff'
import Men from './components/pages/Men'
import Women from './components/pages/Women'
import Give from './components/pages/Give'
import Resources from './components/pages/Resources'
import Testimonials from './components/pages/Testimonials'
import Connect from './components/pages/connect/index'
import Events from './components/pages/connect/events'
// import Blank from './components/pages/Blank'

export default {
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  mode: 'history',
  linkActiveClass: 'font-bold',
  routes: [
    {
      path: '/',
      component: Home,
      name: 'home',
      meta: {
        title: 'Home | Chi Alpha at UNC',
        metaTags: [
          {
            name: 'description',
            content: 'Our vision for Chi Alpha is to learn together to be Devoted Disciples of Jesus who build Deep Friendships with those around us and act as Deliberate Servants of our campus, community, and world. Chi Alpha is a ministry that exists to reach college students, build them up in their faith and send them out to serve and make a difference in a world in great need.'
          },
          {
            property: 'og:description',
            content: 'Our vision for Chi Alpha is to learn together to be Devoted Disciples of Jesus who build Deep Friendships with those around us and act as Deliberate Servants of our campus, community, and world. Chi Alpha is a ministry that exists to reach college students, build them up in their faith and send them out to serve and make a difference in a world in great need.'
          }
        ]
      }
    },
    {
      path: '/about',
      component: About,
      name: 'about',
      meta: {
        title: 'About | Chi Alpha at UNC',
        metaTags: [
          {
            name: 'description',
            content: 'Our vision for Chi Alpha is to learn together to be Devoted Disciples of Jesus who build Deep Friendships with those around us and act as Deliberate Servants of our campus, community, and world. Chi Alpha is a ministry that exists to reach college students, build them up in their faith and send them out to serve and make a difference in a world in great need.'
          },
          {
            property: 'og:description',
            content: 'Our vision for Chi Alpha is to learn together to be Devoted Disciples of Jesus who build Deep Friendships with those around us and act as Deliberate Servants of our campus, community, and world. Chi Alpha is a ministry that exists to reach college students, build them up in their faith and send them out to serve and make a difference in a world in great need.'
          }
        ]
      }
    },
    {
      path: '/staff',
      component: Staff,
      name: 'staff',
      meta: {
        title: 'Staff | Chi Alpha at UNC',
        metaTags: [
          {
            name: 'description',
            content: 'Our vision for Chi Alpha is to learn together to be Devoted Disciples of Jesus who build Deep Friendships with those around us and act as Deliberate Servants of our campus, community, and world. Chi Alpha is a ministry that exists to reach college students, build them up in their faith and send them out to serve and make a difference in a world in great need.'
          },
          {
            property: 'og:description',
            content: 'Our vision for Chi Alpha is to learn together to be Devoted Disciples of Jesus who build Deep Friendships with those around us and act as Deliberate Servants of our campus, community, and world. Chi Alpha is a ministry that exists to reach college students, build them up in their faith and send them out to serve and make a difference in a world in great need.'
          }
        ]
      }
    },
    {
      path: '/men',
      component: Men,
      name: 'men',
      meta: {
        title: 'Men | Chi Alpha at UNC',
        metaTags: [
          {
            name: 'description',
            content: 'Our vision for Chi Alpha is to learn together to be Devoted Disciples of Jesus who build Deep Friendships with those around us and act as Deliberate Servants of our campus, community, and world. Chi Alpha is a ministry that exists to reach college students, build them up in their faith and send them out to serve and make a difference in a world in great need.'
          },
          {
            property: 'og:description',
            content: 'Our vision for Chi Alpha is to learn together to be Devoted Disciples of Jesus who build Deep Friendships with those around us and act as Deliberate Servants of our campus, community, and world. Chi Alpha is a ministry that exists to reach college students, build them up in their faith and send them out to serve and make a difference in a world in great need.'
          }
        ]
      }
    },
    {
      path: '/women',
      component: Women,
      name: 'women',
      meta: {
        title: 'Women | Chi Alpha at UNC',
        metaTags: [
          {
            name: 'description',
            content: 'Our vision for Chi Alpha is to learn together to be Devoted Disciples of Jesus who build Deep Friendships with those around us and act as Deliberate Servants of our campus, community, and world. Chi Alpha is a ministry that exists to reach college students, build them up in their faith and send them out to serve and make a difference in a world in great need.'
          },
          {
            property: 'og:description',
            content: 'Our vision for Chi Alpha is to learn together to be Devoted Disciples of Jesus who build Deep Friendships with those around us and act as Deliberate Servants of our campus, community, and world. Chi Alpha is a ministry that exists to reach college students, build them up in their faith and send them out to serve and make a difference in a world in great need.'
          }
        ]
      }
    },
    {
      path: '/give',
      component: Give,
      name: 'give',
      meta: {
        title: 'Give | Chi Alpha at UNC',
        metaTags: [
          {
            name: 'description',
            content: 'Our vision for Chi Alpha is to learn together to be Devoted Disciples of Jesus who build Deep Friendships with those around us and act as Deliberate Servants of our campus, community, and world. Chi Alpha is a ministry that exists to reach college students, build them up in their faith and send them out to serve and make a difference in a world in great need.'
          },
          {
            property: 'og:description',
            content: 'Our vision for Chi Alpha is to learn together to be Devoted Disciples of Jesus who build Deep Friendships with those around us and act as Deliberate Servants of our campus, community, and world. Chi Alpha is a ministry that exists to reach college students, build them up in their faith and send them out to serve and make a difference in a world in great need.'
          }
        ]
      }
    },
    {
      path: '/resources',
      component: Resources,
      name: 'resources',
      meta: {
        title: 'Resources | Chi Alpha at UNC',
        metaTags: [
          {
            name: 'description',
            content: 'Our vision for Chi Alpha is to learn together to be Devoted Disciples of Jesus who build Deep Friendships with those around us and act as Deliberate Servants of our campus, community, and world. Chi Alpha is a ministry that exists to reach college students, build them up in their faith and send them out to serve and make a difference in a world in great need.'
          },
          {
            property: 'og:description',
            content: 'Our vision for Chi Alpha is to learn together to be Devoted Disciples of Jesus who build Deep Friendships with those around us and act as Deliberate Servants of our campus, community, and world. Chi Alpha is a ministry that exists to reach college students, build them up in their faith and send them out to serve and make a difference in a world in great need.'
          }
        ]
      }
    },
    {
      path: '/testimonials',
      component: Testimonials,
      name: 'testimonials',
      meta: {
        title: 'Testimonials | Chi Alpha at UNC',
        metaTags: [
          {
            name: 'description',
            content: 'Our vision for Chi Alpha is to learn together to be Devoted Disciples of Jesus who build Deep Friendships with those around us and act as Deliberate Servants of our campus, community, and world. Chi Alpha is a ministry that exists to reach college students, build them up in their faith and send them out to serve and make a difference in a world in great need.'
          },
          {
            property: 'og:description',
            content: 'Our vision for Chi Alpha is to learn together to be Devoted Disciples of Jesus who build Deep Friendships with those around us and act as Deliberate Servants of our campus, community, and world. Chi Alpha is a ministry that exists to reach college students, build them up in their faith and send them out to serve and make a difference in a world in great need.'
          }
        ]
      }
    },
    {
      path: '/connect',
      component: Connect,
      name: 'connect',
      meta: {
        title: 'Connect | Chi Alpha at UNC',
        metaTags: [
          {
            name: 'description',
            content: 'Our vision for Chi Alpha is to learn together to be Devoted Disciples of Jesus who build Deep Friendships with those around us and act as Deliberate Servants of our campus, community, and world. Chi Alpha is a ministry that exists to reach college students, build them up in their faith and send them out to serve and make a difference in a world in great need.'
          },
          {
            property: 'og:description',
            content: 'Our vision for Chi Alpha is to learn together to be Devoted Disciples of Jesus who build Deep Friendships with those around us and act as Deliberate Servants of our campus, community, and world. Chi Alpha is a ministry that exists to reach college students, build them up in their faith and send them out to serve and make a difference in a world in great need.'
          }
        ]
      },
      children: [
        {
          path: '/events',
          component: Events,
          name: 'events',
          meta: {
            title: 'Events | Chi Alpha at UNC',
            metaTags: [
              {
                name: 'description',
                content: 'Our vision for Chi Alpha is to learn together to be Devoted Disciples of Jesus who build Deep Friendships with those around us and act as Deliberate Servants of our campus, community, and world. Chi Alpha is a ministry that exists to reach college students, build them up in their faith and send them out to serve and make a difference in a world in great need.'
              },
              {
                property: 'og:description',
                content: 'Our vision for Chi Alpha is to learn together to be Devoted Disciples of Jesus who build Deep Friendships with those around us and act as Deliberate Servants of our campus, community, and world. Chi Alpha is a ministry that exists to reach college students, build them up in their faith and send them out to serve and make a difference in a world in great need.'
              }
            ]
          }
        }
      ]
    }
  ]
}
