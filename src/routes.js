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
            name: 'home'
        },
        {
            path: '/about',
            component: About,
            name: 'about'
        },
        {
            path: '/staff',
            component: Staff,
            name: 'staff'
        },
        {
            path: '/men',
            component: Men,
            name: 'men'
        },
        {
            path: '/women',
            component: Women,
            name: 'women'
        },
        {
            path: '/give',
            component: Blank,
            name: 'give'
        }
    ]
}