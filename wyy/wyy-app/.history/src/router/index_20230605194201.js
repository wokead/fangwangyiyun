import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store/index.js'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'About',
        component: () =>
            import ('../views/AboutView.vue')
    },
    {
        path: '/musicItem',
        name: 'MusicItem',
        component: () =>
            import ('../views/MusicItem.vue')
    },
    {
        path: '/search',
        name: 'Search',
        component: () =>
            import ('../views/SearchPage.vue')
    },
    {
        path: '/loginPage',
        name: 'LoginPage',
        component: () =>
            import ('../views/LoginPage.vue')
    },
    {
        path: '/userInfo',
        name: 'UserInfo',
        beforeEnter(to, from, next) {
            if (store.state.isLogin) {
                next()
            } else {
                next('/login')
            }
        },
        component: () =>
            import ('../views/UserInfo.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router