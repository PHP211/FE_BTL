<template>
    <section class="products" id="products">

        <h1 class="heading" style="top: 0px;"> Latest <span>products</span> </h1>
        <div class="search">
            <input type="text" class="form-control" placeholder="Tìm sản phẩm...">
            <button class="btn btn-primary">Tìm</button>
        </div>

        <div class="additem">
            <button v-if='login == "staff"' class="btn btn-primary" @click="$router.push('/productadd')">
                Thêm Mới
            </button>            
        </div>


        <div class="box-container" v-if="prdList.length != 0">
            <div class="box" v-for="i in prdList" :key="i._id" :value="i._id">
                <div class="icons">
                    <a href="#" class="fas fa-heart"></a>
                    <a href="#" class="fas fa-share"></a>
                    <a href="#" class="fas fa-eye"></a>
                </div>
                <img :src="i.PrdImage" alt="PrdImage">
                <div class="content">
                    <h3>{{ i.productName }}</h3>
                    <div class="price">{{ i.price.toLocaleString('it-IT', { style:'currency', currency:'VND' }) }}</div>
                    <div class="stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="far fa-star"></i>
                    </div>
                    <button class="btns" v-if="login !== 'staff'" @click="additem(i)">Thêm vào giỏ hàng</button>
                </div>
            </div>


        </div>
    </section>
</template>

<script setup>
import '../assets/css/prdsection.css'
import Axios from '../services/service'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const prdList = ref([])
const typeList = ref([])
const type = ref(0)
const input = ref('')

var userid = localStorage.info ? JSON.parse(localStorage.info)._id : null
const login = localStorage.isLogin

async function showPrd() {
    prdList.value = await Axios.getAllPrd()
}
showPrd()

async function getPrdByName() {
    const ct = type.value == 0 ? undefined : type.value
    prdList.value = await Axios.getPrdByName(input.value, ct)
}

async function getType() {
    typeList.value = await Axios.getType()
}
getType()

async function additem(prd) {
    if (!userid) {
        alert('Vui lòng đăng nhập')
        router.push('/login')
    }
    else {
        await Axios.addtoCart(userid, prd)
        alert(`Đã thêm ${prd.productName} vào giỏ hàng`)
    }
}

async function deletePrd(id) {
    await Axios.deletePrd(id)
    alert('Xoá sản phẩm thành công')
    getPrdByName()
}
</script>