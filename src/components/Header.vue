<template>
    <header>
        <div id="menu-bar" class="fas fa-bars"></div>

        <a href="/" class="logo"><img src="../assets/images/logo.png" alt=""></a>

        <div class="icons">
            <RouterLink to="/cart"><i class="fa-solid fa-cart-shopping"></i></RouterLink>
            <RouterLink to="/info" v-if="login === 'user'">Tài khoản</RouterLink>
            <span v-else>
                <RouterLink to="/login" >Đăng nhập</RouterLink>
                <RouterLink to="/signup" >Đăng ký </RouterLink>
            </span>
        </div>
    </header>
</template>

<script>
import '../assets/css/header.css'
import { RouterLink } from 'vue-router'
const login = localStorage.isLogin
export default {
    name: 'Header'
}
</script>