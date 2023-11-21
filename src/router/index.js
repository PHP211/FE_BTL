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
import MyOrder from '../views/MyOrder.vue'
import AllOrder from '../views/AllOrder.vue'
import OrderDetail from '../views/OrderDetails.vue'
import StaffOrder from '../views/StaffOrder.vue'
import AllStaffOrder from '../views/AllStaffOrder.vue'
import Confirm from '../views/ConfirmOrder.vue'

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
        component: MyOrder, 
        props: true,
    },
    {
        path: '/myorder/:id/all',
        component: AllOrder, 
        props: true,
    },
    {
        path: '/myorder/:id/detail',
        component: OrderDetail, 
        props: true,
    },
    {
        path: '/order',
        component: StaffOrder, 
        props: true,
    },
    {
        path: '/order/:id',
        component: Confirm, 
        props: true,
    },
    {
        path: '/order/:id/all',
        component: AllStaffOrder, 
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