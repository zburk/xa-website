import Home from './components/pages/Home'
import About from './components/pages/About'
import Staff from './components/pages/Staff'
import Men from './components/pages/Men'
import Women from './components/pages/Women'
import Blank from './components/pages/Blank'

export default {
    mode: 'history',
    linkActiveClass: 'font-bold',
    routes: [
        {
            path: '/',
            component: Home,
            name: 'home',
            meta: {
                title: 'Home | Chi Alpha at UNC'
            }
        },
        {
            path: '/about',
            component: About,
            name: 'about',
            meta: {
                title: 'About | Chi Alpha at UNC'
            }
        },
        {
            path: '/staff',
            component: Staff,
            name: 'staff',
            meta: {
                title: 'Staff | Chi Alpha at UNC'
            }
        },
        {
            path: '/men',
            component: Men,
            name: 'men',
            meta: {
                title: 'Men | Chi Alpha at UNC'
            }
        },
        {
            path: '/women',
            component: Women,
            name: 'women',
            meta: {
                title: 'Women | Chi Alpha at UNC'
            }
        },
        {
            path: '/give',
            component: Blank,
            name: 'give',
            meta: {
                title: 'Give | Chi Alpha at UNC'
            }
        }
    ]
}