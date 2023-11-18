<template>
    <section class="footer">

        <div class="box-container">

            <div class="box">
                <h3>Chuyển đến</h3>
                <RouterLink to="/">Trang chủ</RouterLink>
                <RouterLink to="/products">Sản phẩm</RouterLink>
                <RouterLink to="/contact">Liên hệ</RouterLink>
            </div>

            <div class="box">
                <h3>Liên kết ngoài</h3>
                <a href="#">my account</a>
                <a href="#">my favorite</a>
                <a href="#">my orders</a>
            </div>

            <div class="box">
                <h3>Theo dõi chúng tôi tại</h3>
                <a href="https://facebook.com" target="_blank"><i class="fa-brands fa-facebook"></i> Facebook</a>
                <a href="https://twitter.com" target="_blank"><i class="fa-brands fa-x-twitter"></i> Twitter</a>
                <a href="https://instagram.com" target="_blank"><i class="fa-brands fa-instagram"></i> Instagram</a>
            </div>

            <div class="credit">created by <span> mr. web designer </span> | all rights reserved</div>

        </div>

    </section>
</template>

<script>
import '../assets/css/footer.css'
import { RouterLink } from 'vue-router'
export default {
    name: 'Footer',
}
</script>