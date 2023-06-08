import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/about',
        name: 'about',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/AboutView.vue')
    },
    {
        path: '/musicItem',
        name: 'musicItem',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/MusicItem.vue')
    },
    {
        path: '/musicItem',
        name: 'musicItem',
        component: () =>
            import ( /* webpackChunkName: "about" */ '../views/MusicItem.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router