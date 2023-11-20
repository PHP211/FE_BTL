<template>
	<div class="log">
		<div class="login" id="login">
			<form action="" method="post">
				<h1>Đăng nhập</h1>
				<div class="input-box">
					<input type="text" placeholder="Tên đăng nhập" v-model="input.username" required>
				</div>
				<div class="input-box">
					<input type="password" placeholder="Mật khẩu" v-model="input.password" required>
				</div>
				<div class="remember">
					<label><input type="checkbox"> Ghi nhớ đăng nhập</label>
				</div>

				<div class="loginbtn">
					<button class="btns" type="submit" @click.prevent="login">Đăng nhập</button>
				</div>

				<div class="register">
					<p>Chưa có tài khoản? <RouterLink to="/signup">Đăng ký ngay</RouterLink>
					</p>
				</div>
			</form>
		</div>
	</div>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import Axios from '../services/service';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const input = ref({
	username: undefined,
	password: undefined
})

const router = useRouter()
const result = ref('init')

if (localStorage.isLogin)
	router.push('/info')

async function login() {
	result.value = await Axios.login(input.value.username, input.value.password)

	if (!result.value.isAvailable) {
		input.value.username = ''
		return alert('Không Tìm Thấy Tài Khoản Đăng Nhập ')
	}

	if (!result.value.isTruePassword) {
		input.value.password = ''
		return alert('Nhập Sai Mật Khẩu Vui Lòng Nhập Lại')
	}

	const roleTable = {
		1: "user",
		2: "staff",
		3: "admin"
	}

	localStorage.info = JSON.stringify(result.value.infomation)
	localStorage.isLogin = roleTable[result.value.infomation.role]

	router.push(`/info`)
}
</script>

<style>
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

div .log {
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

.login .remember {
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

.login .loginbtn {
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