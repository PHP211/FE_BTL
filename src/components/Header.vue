<template>
    <header>
        <div id="menu-bar" class="fas fa-bars"></div>

        <a href="#" class="logo"><img src="../assets/images/logo.png" alt=""></a>

        <nav class="navbar">
            <RouterLink to="/">Trang chủ</RouterLink>
            <RouterLink to="/products">Sản phẩm</RouterLink>
            <RouterLink to="/contact">Liên hệ</RouterLink>
        </nav>

        <div class="icons">
            <RouterLink to="/cart"><i class="fa-solid fa-cart-shopping"></i></RouterLink>
            <RouterLink to="/login">Đăng nhập</RouterLink>
            <RouterLink to="/signup">Đăng ký </RouterLink>
        </div>
    </header>
</template>

<script>
import '../assets/css/header.css'
import { RouterLink } from 'vue-router'
export default {
    name: 'Header'
}
</script>