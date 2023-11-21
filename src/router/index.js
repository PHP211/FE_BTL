import { createRouter, createWebHistory } from "vue-router";

import HomePage from '../views/Home.vue'
import Login from '../views/Login.vue'
import SignUp from '../views/Signup.vue'
import NotFound from '../views/NotFound.vue'
import Cart from '../views/Cart.vue'
import UserInfo from '../views/UserInfo.vue'
import ChangePW from '../views/ChangePassword.vue'
import AddProduct from '../views/AddProduct.vue'
import UpdateProduct from '../views/UpdateProduct.vue'
import OrderDetails from '../views/MyOrder.vue'
import AllOrder from '../views/AllOrder.vue'

const routes = [
    {
        path: '/',
        component: HomePage
    },
    {
        path: '/login',
        component: Login,
        name: 'Login',
        props : true ,
    },
    {
        path: '/signup',
        component: SignUp,
        name: 'SignUp',
        props : true ,
    },
    {
        path: '/cart',
        component: Cart,
        name: 'Cart',
        props : true ,
    },
    {
        path: '/info',
        component: UserInfo,
        name: 'UserInfo',
        props : true ,
    },
    {
        path: '/info/changepw',
        component: ChangePW,
        name: 'ChangePW',
        props : true ,
    },
    {
        path: '/productadd',
        component: AddProduct,
        name: 'AddProduct',
        props : true ,
    },
    {
        path: '/product/:id',
        component: UpdateProduct,
        name: 'UpdateProduct',
        props: true,
    },
    {
        path: '/myorder/:id',
        component: OrderDetails, 
        props: true,
    },
    {
        path: '/myorder/:id/all',
        component: AllOrder, 
        props: true,
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