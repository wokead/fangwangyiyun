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
            import ('../views/AboutView.vue'),
        meta: { isShow: true }
    },
    {
        path: '/musicItem',
        name: 'MusicItem',
        component: () =>
            import ('../views/MusicItem.vue'),
        meta: { isShow: true }
    },
    {
        path: '/search',
        name: 'Search',
        component: () =>
            import ('../views/SearchPage.vue'),
        meta: { isShow: true }
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
                next('/loginPage')
            }
        },
        component: () =>
            import ('../views/UserInfo.vue'),
        meta: { isShow: true }

    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router