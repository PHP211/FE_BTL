import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/Signup.vue'
import NotFound from '../views/NotFound.vue'
import Cart from '../views/Cart.vue'
import UserInfo from '../views/UserInfo.vue'
import ChangePW from '../views/ChangePassword.vue'
import AddProduct from '../views/AddProduct.vue'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/login',
        component: Login,
        name: 'Login'
    },
    {
        path: '/signup',
        component: SignUp,
        name: 'SignUp'
    },
    {
        path: '/cart',
        component: Cart,
        name: 'Cart'
    },
    {
        path: '/info',
        component: UserInfo,
        name: 'UserInfo'
    },
    {
        path: '/info/changepw',
        component: ChangePW,
        name: 'ChangePW'
    },
    {
        path: '/productadd',
        component: AddProduct,
        name: 'AddProduct'
    },
    {
        path: '/:pathMatch(.*)',
        component: NotFound,
        name: 'NotFound'
    },
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;