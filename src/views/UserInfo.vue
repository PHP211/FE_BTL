<template>
    <section>
        <div class="container">
            <div class="main-body">
                <div class="row gutters-sm">
                    <div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="card-body">
                                <div class="d-flex flex-column align-items-center text-center">
                                    <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin"
                                        class="rounded-circle" width="110">
                                    <div class="mt-3">
                                        <h4>{{ info.name }}</h4>
                                        <button class="btn btn-primary" @click="Logout">Đăng xuất</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card mb-3">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Họ và tên</h6>
                                    </div>
                                    <div class="col-sm-9 " v-if="!setting">
                                        {{ info.name }}
                                    </div>
                                    <div class="col-sm-9 " v-else>
                                        <input type="text" placeholder="Họ tên" v-model="info.name">
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Email</h6>
                                    </div>
                                    <div class="col-sm-9 " v-if="!setting">
                                        {{ info.email }}
                                    </div>
                                    <div class="col-sm-9 " v-else>
                                        <input type="text" placeholder="Email" v-model="info.email">
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Số điện thoại</h6>
                                    </div>
                                    <div class="col-sm-9 " v-if="!setting">
                                        {{ info.phone }}
                                    </div>
                                    <div class="col-sm-9 " v-else>
                                        <input type="text" placeholder="Số điện thoại" v-model="info.phone">
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-3">
                                        <h6 class="mb-0">Địa chỉ</h6>
                                    </div>
                                    <div class="col-sm-9 " v-if="!setting">
                                        {{ info.address }}
                                    </div>
                                    <div class="col-sm-9 " v-else>
                                        <input type="text" placeholder="Địa chỉ" v-model="info.address">
                                    </div>
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col-sm-2">
                                        <button class="btn btn-info " @click="setting = !setting" v-if="!setting">Chỉnh sửa thông tin</button>
                                        <button class="btn btn-info " @click="updateInfo" v-else>Xác nhận</button>
                                    </div>
                                    <div class="col-sm-2">
                                        <RouterLink to="/info/changepw" class="btn btn-info">Đổi mật khẩu</RouterLink>
                                    </div>
                                    <div class="col-sm-2" v-if="isLogin === 'user'">
                                        <RouterLink :to="'/myorder/'+root._id" class="btn btn-info">Giỏ hàng của tôi</RouterLink>
                                    </div>
                                    <div class="col-sm-2" v-else>
                                        <RouterLink to="/order" class="btn btn-info">Quản lý giỏ hàng</RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import Axios from '../services/service'
import { useRouter } from 'vue-router';

const router = useRouter()
const root = JSON.parse(localStorage.info)
const info = ref({...root})

delete info.value._id
const isLogin = localStorage.isLogin
const setting = ref(false)

async function updateInfo() {
    setting.value = !setting.value
    await Axios.UpdateAccount(root._id, info.value)
    alert("Cập nhật thông tin thành công!")
    localStorage.info = JSON.stringify({"_id": root._id, ...info.value})
}

function Logout() {
    localStorage.clear()
    router.push('/login')
}
</script>

<style>
.container {
    padding-top: 5%;
}
body{
    margin-top:20px;
    color: #1a202c;
    text-align: left;
    background-color: #fff;    
}
a {
    text-decoration: none;
}
.main-body {
    padding: 15px;
}
.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}

.gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
}

.gutters-sm>.col, .gutters-sm>[class*=col-] {
    padding-right: 8px;
    padding-left: 8px;
}
.mb-3, .my-3 {
    margin-bottom: 1rem!important;
}

.bg-gray-300 {
    background-color: #fff;
}
.h-100 {
    height: 100%!important;
}
.shadow-none {
    box-shadow: none!important;
}
h6 {
    font-size: 15px;
}
.col-sm-9 {
    font-size: 15px;
}
h4 {
    font-size: 25px;
}
</style>