<template>
    <section>
        <div id="notfound">
            <h2 id="oops">OOPS!!! Không tìm thấy trang.</h2>
            <!-- <router-link to='/'>Trở về Trang Chủ</router-link> -->
            <a class="b" @click.prevent="router.go(-1)">
                <h3>
                    Trở về trước 
                </h3>
            </a>
        </div>
    </section>
</template>

<script setup>
    import { useRouter } from 'vue-router';
    const router = useRouter()
</script>

<style>
#notfound{
    padding-top: 10%;
}

#oops {
    text-align: center;
    font-size: 25px;
}
.b h3 {
    text-align: center;
    font-size: 20px;
    cursor: pointer;
}
</style>