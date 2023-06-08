import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/userInfo',
        name: 'UserInfo',
        component: () =>
            import ('../views/UserInfo.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router