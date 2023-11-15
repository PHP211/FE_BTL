import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../views/Home.vue'
import ProductPage from '../views/Product.vue'
import ContactPage from '../views/Contact.vue'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/products',
        component: ProductPage
    },
    {
        path: '/contact',
        component: ContactPage
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;