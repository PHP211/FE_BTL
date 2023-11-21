<template>
    <section>
        <div class="small-container cart-page">
            <h1>Giỏ hàng của tôi</h1>
            <div v-if="quantity.length != 0">
                <table>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                    </tr>
                    <tr v-for="(i, index) in cart.prdId" :key="i._id">
                        <td style="width: 500px;">
                            <div class="cart-info">
                                <img :src="i.PrdImage">
                                <div>
                                    <p>{{ i.productName }}</p>
                                    <small>{{ i.price.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
                                    }}</small>
                                    <br>
                                    <a href="" class="remove" @click.prevent="deleteItem(index)">Remove</a>
                                </div>
                            </div>
                        </td>
                        <td style="width: 240px;"><input class="form-control" type="number" v-model="quantity[index]"
                                min="0" max="200" @change="updateItem"></td>
                        <td class="price" style="width: 240px;">{{ (i.price * quantity[index]).toLocaleString('it-IT', {
                            style:
                                'currency', currency: 'VND'
                        }) }}</td>
                    </tr>
                </table>

                <div class="total-price">

                    <table class="total">
                        <tr>
                            <td>Total</td>
                            <td>{{ total.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) }}</td>
                        </tr>
                    </table>

                </div>
                <div class="d-flex justify-content-center">
                    <button class="btn btn-outline-success" @click="createOrder" style="font-size: 15px;">Đặt Hàng</button>
                </div>
            </div>
            <div class="card-body" style="text-align: center;" v-else>
                <h3>Giỏ hàng trống!</h3>
            </div>
        </div>

    </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRouter } from "vue-router"
import Axios from '../services/service'
const router = useRouter()
if (localStorage.isLogin !== 'user') {
    alert("Vui Đăng Nhập Tài Khoản Khách Hàng")
    router.push('/login')
}
const cart = ref()
const quantity = ref([])
const userid = JSON.parse(localStorage.info)._id

async function getCart() {
    cart.value = await Axios.getCart(userid)
    quantity.value = cart.value.quantity
}
getCart()

const total = computed(() => {
    return quantity.value.reduce((account, value, index) => {
        return account + value * cart.value.prdId[index].price
    }, 0)
})

async function updateItem(index) {
    if (quantity.value[index] === 0)
        deleteItem(index)
    else await Axios.updateCart(userid, { quantity: quantity.value })
}

async function deleteItem(index) {
    const newPrd = cart.value.prdId.filter((value, index1) => index1 != index)
    const newQuantity = quantity.value.filter((value, index2) => index2 != index)
    await Axios.updateCart(userid, { prdId: newPrd, quantity: newQuantity })
    getCart()
}

async function clearCart() {
    const newPrd = []
    const newQuantity = []
    await Axios.updateCart(userid, { prdId: newPrd, quantity: newQuantity })
    getCart()
}

function getTime() {
    const now = new Date()
    const date = now.getDate()
    const month = now.getMonth() + 1
    const year = now.getFullYear()
    return `${year}-${month}-${date}`
}

const now = getTime()
const newOrder = ref()

async function createOrder() {
    newOrder.value = {
        info: {
            "UID": userid,
            "SID": -1,
            "status": 1,
            "createDate": now,
            "deliveryDate": -1,
            "value": total
        },
        detail: {
            prdId: cart.value.prdId,
            quantity: quantity.value
        }
    }
    await Axios.createOrder(newOrder.value.info, newOrder.value.detail)
    await clearCart()
    alert('Đặt hàng thành công')
    router.push(`/myorder/${userid}`)
}

</script>

<style>
.cart-page {
    padding-top: 5%;
    margin-top: 5%;
}

.cart-page h1 {
    text-align: center;
    font-size: 30px;
    padding: 10px
}

table {
    width: 100%;
    border-collapse: collapse;
}

.cart-info {
    display: flex;
    flex-wrap: wrap;
}

.cart-info p {
    font-size: 20px;
}

.cart-info small {
    font-size: 15px;
}

th {
    text-align: left;
    padding: 5px;
    color: #fff;
    background: rgb(3, 170, 212);
    font-weight: normal;
    font-size: 25px;
}

td {
    padding: 10px 5px;
}

td input {
    width: 40px;
    height: 30px;
    padding: 5px;
}

td a {
    color: #ff523b;
    font-size: 12px;
}

td img {
    width: 120px;
    height: 120px;
    margin-right: 10px;
}

.total-price {
    display: flex;
    justify-content: flex-end;
}

.total-price table {
    border-top: 3px solid rgb(3, 170, 212);
    width: 100%;
    max-width: 400px;
}

td:last-child {
    text-align: right;
}

.remove {
    font-size: 15px;
}

.quantity {
    font-size: 20px;
}

.price {
    font-size: 20px;
}

.total {
    font-size: 20px;
}
</style>