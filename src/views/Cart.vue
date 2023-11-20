<template>
    <section>
        <div class="small-container cart-page">
            <h1>Giỏ hàng của tôi</h1>
            <table>
                <tr>
                    <th>Product</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
                <tr>
                    <td>
                        <div class="cart-info">
                            <img src="images/electronic/speaker2.jpg">
                            <div>
                                <p>Speaker</p>
                                <small>Price: ₹340.00</small>
                                <br>
                                <a href="" class="remove">Remove</a>
                            </div>
                        </div>
                    </td>
                    <td><input type="number" value="1" class="quantity"></td>
                    <td class="price">₹340.00</td>
                </tr>
                <tr>
                    <td>
                        <div class="cart-info">
                            <img src="images/gifts/fram1.png">
                            <div>
                                <p>Gift</p>
                                <small>Price: ₹290.00</small>
                                <br>
                                <a href="" class="remove">Remove</a>
                            </div>
                        </div>
                    </td>
                    <td><input type="number" value="1" class="quantity"></td>
                    <td class="price">₹290.00</td>
                </tr>
                <tr>
                    <td>
                        <div class="cart-info">
                            <img src="images/footware/foot1.jpg">
                            <div>
                                <p>Shoes</p>
                                <small>Price: ₹300.00</small>
                                <br>
                                <a href="" class="remove">Remove</a>
                            </div>
                        </div>
                    </td>
                    <td><input type="number" value="1" class="quantity"></td>
                    <td class="price">₹300.00</td>
                </tr>
            </table>

        <div class="total-price">

        <table class="total">
            <tr>
                <td>Subtotal</td>
                <td>₹930.00</td>
            </tr>
            <tr>
                <td>Delevery Charge</td>
                <td>₹40</td>
            </tr>
            <tr>
                <td>Total</td>
                <td>₹970.00</td>
            </tr>
        </table>

        </div>
        </div>
    </section>

</template>

<script setup>
import { useRouter } from "vue-router"
const router = useRouter()
if(localStorage.isLogin !== 'user')
{
        alert("Vui Đăng Nhập Tài Khoản Khách Hàng")
        router.push('/login')

}
</script>

<style>
.cart-page{
    padding-top: 5%;
    margin-top: 5%;
}
.cart-page h1 {
    text-align: center;
    font-size: 30px;
    padding: 10px
}
table{
    width: 100%;
    border-collapse: collapse;
}
.cart-info{
    display: flex;
    flex-wrap: wrap;
}
.cart-info p{
    font-size: 20px;
}
.cart-info small{
    font-size: 15px;
}
th{
    text-align: left;
    padding: 5px;
    color: #fff;
    background: rgb(3, 170, 212);
    font-weight: normal;
    font-size: 25px;
}
td{
    padding: 10px 5px;
}
td input{
    width: 40px;
    height: 30px;
    padding: 5px;
}
td a{
    color: #ff523b;
    font-size: 12px;
}
td img{
    width: 120px;
    height: 120px;
    margin-right: 10px; 
}
.total-price{
display: flex;
justify-content: flex-end;
}
.total-price table{
    border-top: 3px solid rgb(3, 170, 212);
    width: 100%;
    max-width: 400px;
}
td:last-child{
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
.total{
    font-size: 20px;
}
</style>