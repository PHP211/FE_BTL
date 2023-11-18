<template>
    <section class="home" id="home">
        <div class="adv">
            <div class="content">
                <span><i class="fa-brands fa-apple"></i> Apple iPhone 15 Pro Max</span>
                <h3>Hoàn thiện hơn, tinh xảo hơn</h3>
                <p>Thiết kế titan tạo nên phiên bản pro nhẹ nhất.<br>Cạnh viền uốn cong nhẹ nhàng và thoải mái hơn.</p>
                <a href="#" class="btn">Mua Ngay</a>
            </div>
            <div class="image">
                <img src="../assets/images/ip15.png" class="phone" alt="">
            </div>
        </div>
    </section>
    <Service/>
    <ProductSection/>
    <Featured/>
</template>

<script>
import '../assets/css/home.css'
import Service from '../components/Service.vue';
import ProductSection from '../components/ProductSection.vue';
export default {
    name: 'HomePage',
    components: { Service, ProductSection }
}
</script>
