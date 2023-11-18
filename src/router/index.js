import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../views/Home.vue'
import Login from '../views/Login.vue'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/login',
        component: Login
    },
    // {
    //     path: '/signup',
    //     component: SignUp
    // },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;