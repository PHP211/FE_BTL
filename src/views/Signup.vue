<template>

    <div class="log">
        <div class="login" id="login">
            <form action="" method="post">
                <h1>Đăng ký tài khoản</h1>

                <div class="input-box">
                    <input type="text" placeholder="Tên đăng nhập" v-model="data.username" @change="checkUsername">
                </div>
                <div class="input-box">
                    <input type="password" placeholder="Mật khẩu" v-model="data.password">
                </div>
                <div class="input-box">
                    <input type="password" placeholder="Xác nhận mật khẩu" v-model="rePass" @change="checkPass">
                </div>
                <div class="input-box">
                    <input type="text" placeholder="Họ và tên" v-model="data.name">
                </div>
                <div class="input-box">
                    <input type="text" placeholder="Email" v-model="data.email">
                </div>
                <div class="input-box">
                    <input type="phone" placeholder="Số điện thoại" v-model="data.phone">
                </div>
    
                <div class="regbtn">			
                    <button class="btns" type="submit" @click.prevent="DangKi">Đăng Ký</button>
                </div>
            </form>
        </div>
        
    </div>
    
</template>
    
<script setup>
import {ref} from 'vue'
import AxiosAPI from '../services/service'
import { useRouter } from 'vue-router';
const router = useRouter()
const rePass = ref()
const data = ref(
    {
        "username": undefined,
        "password": undefined,
        "name": undefined,
        "phone": undefined,
        "email": undefined,
        "role": 1
    }
)

function checkPass() {
    if(data.value.password !== rePass.value) {
        rePass.value = ""
        alert("Mật khẩu chưa trùng khớp!")
    }
}

async function checkUsername(){
    const result = await AxiosAPI.login(data.value.username)
    if(result.isAvailable) {
        data.value.username = ''
        alert("Tài khoản đã tồn tại")
    }
    return result.isAvailable
}

async function DangKi() {
    if (!data.value.username) return alert('Vui Lòng Nhập Tài Khoản')
    if (!data.value.password) return alert('Vui Lòng Nhập Mật Khẩu')
    if (!rePass.value) return alert('Vui Lòng Nhập Lại Mật Khẩu')
    if (!data.value.name) return alert('Vui Lòng Nhập Tên')
    if (!data.value.email) return alert('Vui Lòng Nhập Email')
    if (!data.value.phone) return alert('Vui Lòng Nhập Số Điện Thoại')
    await AxiosAPI.register(data.value)
    data.value = {role : 1}
    rePass.value = ""
    alert("Đăng Kí Thành Công")
    return router.push('/login')
}

</script>

    
<style>
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
    
div .log{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
}

.footer {
    padding-top: 5%;
}

.login {
    width: 400px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.login h1 {
    font-size: 36px;
    text-align: center;
    margin-top: 10%;
}

.login .input-box {
    width: 100%;
    height: 50px;
    margin: 20px 0;
    padding: 0 10px;
}

.input-box input {
    width: 100%;
    height: 100%;
    background: transparent;
    outline: none;
    /* border: none; */
    border: 2px solid black;
    border-radius: 40px;
    padding: 20px 45px 20px 20px;
    font-size: 16px;
}

.login .regbtn {
    display: flex;
    flex-wrap: wrap;
    margin-left: 30%;
    margin-bottom: 20px;
}

.login .register {
    font-size: 15px;
    text-align: center;
    padding-bottom: 20px;
}
</style>