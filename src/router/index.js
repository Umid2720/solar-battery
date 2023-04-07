import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: () => import('../components/Home/Home.vue'),
    },
    {
        path: '/company',
        name: 'Company',
        component: () => import('../pages/Company.vue'),
    },
    {
        path: '/products',
        name: 'Products',
        component: () => import('../pages/Products.vue'),
    },
    {
        path: '/projects',
        name: 'Projects',
        component: () => import('../pages/Projects.vue'),
    },
    {
        path: '/news',
        name: 'News',
        component: () => import('../pages/News.vue'),
    },
    {
        path: '/downloads',
        name: 'downloads',
        component: () => import('../pages/Downloads.vue'),
    },
    {
        path: '/contact-us',
        name: 'Contact Us',
        component: () => import('../pages/ContactUs.vue'),
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})


export default router
