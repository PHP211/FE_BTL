<template>
    <div class="changepw">
       
        <div class="change">
            <h1>Đổi mật khẩu</h1>
            <div class="input-box">
                <label>Tài khoản</label>
                <input type="text" disabled :value="info.username" style="background-color: #a9c5a0; font-weight: bold; color: #000">
            </div>
            <div class="input-box">
                <label>Mật khẩu hiện tại</label>
                <input type="password" placeholder="Mật khẩu hiện tại" v-model="pass" @change="checkPass(pass, info.password)">
            </div>
            <div class="input-box">
                <label>Mật khẩu mới</label>
                <input type="password" placeholder="Mật khẩu mới" v-model="ndata.password">
            </div>
            <div class="input-box">
                <label>Xác nhận mật khẩu mới</label>
                <input type="password" placeholder="Xác nhận mật khẩu" v-model="newPass" @change="checkPass2(newPass, ndata.password)">
            </div>

            <div class="loginbtn">
                <button class="btns" type="submit" @click="changePassword">Đổi mật khẩu</button>
            </div>
        </div>
        
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Axios from '../services/service'


const pass = ref()
const newPass = ref()
const info = JSON.parse(localStorage.info)
function checkPass(check, ptrue) {
    if (check != ptrue) {
        pass.value = ""
        return alert("Mật khẩu không đúng! Vui lòng nhập lại")
    }
}

function checkPass2(check, ptrue) {
    if (check != ptrue) {
        pass.value = ""
        return alert("Mật khẩu không đúng! Vui lòng nhập lại")
    }
}

const ndata = ref({ password: undefined })

const router = useRouter()

async function changePassword() {
    if (!pass.value) return alert("Nhập mật khẩu cũ")
    if (!ndata.value.password) return alert("Vui lòng nhập mật khẩu mới")
    if (!newPass.value) return alert("Xác nhận lại mật khẩu mới")
    await Axios.UpdateAccount(info._id, ndata.value)
    alert("Đổi mật khẩu thành công!")
    return router.go(-1)
}
</script>

<style>
div .changepw {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 10%;
}

.change {
    width: 400px;
    border-radius: 5px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.change h1 {
    font-size: 36px;
    text-align: center;
    margin-top: 5%;
}

.change .input-box {
    width: 100%;
    height: 50px;
    margin: 30px 0;
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

.input-box label {
    font-size: 15px;
    font-weight: bold;
    padding-left: 3%;
    margin-top: 5px;  
}

.change .remember {
    display: flex;
    justify-content: space-between;
    font-size: 16px;
    margin: -15px 0 15px;
    padding-left: 30px;
    padding-top: 20px;
}

.remember label input {
    margin-right: 3px;
}

.change .loginbtn {
    display: flex;
    flex-wrap: wrap;
    margin-left: 30%;
    margin-bottom: 20px;
}

.change .register {
    font-size: 15px;
    text-align: center;
    padding-bottom: 20px;
}
</style>
