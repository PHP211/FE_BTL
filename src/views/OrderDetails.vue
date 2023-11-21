<template>
    <section class="details" style="padding-top: 10%;">
        <div class="card" style="width: 60%; margin-left: 20%;">
            <div class="card-header text-center">
                <h1>Chi Tiết Hoá Đơn</h1>
            </div>
            <div class="card-body">
                <div class="row mt-3">
                    <div class="col-3">
                        <strong>Mã Hoá Đơn</strong>
                    </div>
                    <div class="col-4" style="font-size: 20px;">{{ order._id }}</div>

                    <div class="col-3">
                        <strong>Trạng Thái</strong>
                    </div>
                    <div class="col-2" style="font-size: 20px;">{{ indexStatus[order.status] }}</div>
                </div>

                <div class="row mt-3">
                    <div class="col-3">
                        <strong>Ngày Đặt Hàng</strong>
                    </div>
                    <div class="col-4" style="font-size: 20px;">{{ order.createDate }}</div>
                    <div class="col-3">
                        <strong>Ngày Giao Hàng</strong>
                    </div>
                    <div class="col-2" style="font-size: 20px;">{{ order.deliveryDate == -1 ? "Chưa giao" :
                        order.deliveryDate }}</div>
                </div>

                <div class="row mt-3">
                    <table class="table text-center">
                        <thead>
                            <tr>
                                <th scope="col" style="text-align: left; font-weight: bold; font-size: 20px;">Tên Sản Phẩm
                                </th>
                                <th scope="col" style="text-align: left; font-weight: bold; font-size: 20px;">Đơn giá
                                </th>
                                <th scope="col" style="text-align: center; font-weight: bold; font-size: 20px;">Số Lượng
                                </th>
                                <th scope="col" style="text-align: right; font-weight: bold; font-size: 20px;">Tổng Tiền
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="align-middle" v-for="(i, index) in order.detail.prdId" :key="i._id">
                                <td style="text-align: left; font-size: 18px;">{{ i.productName }}</td>
                                <td style="text-align: left; font-size: 18px;"> {{ i.price.toLocaleString('it-IT', {
                                    style: 'currency', currency: 'VND'
                                }) }}</td>
                                <td style="text-align: center; font-size: 18px;">
                                    {{ order.detail.quantity[index] }}
                                </td>
                                <td style="text-align: right; font-size: 18px;">{{ (i.price *
                                    order.detail.quantity[index]).toLocaleString('it-IT', {
                                        style: 'currency',
                                        currency: 'VND'
                                    }) }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <table class="total">
                            <tr>
                                <td style="font-weight: bold;">Tổng giá trị đơn hàng</td>
                                <td>{{ order.value.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) }}</td>
                            </tr>
                        </table>

                    </div>
                </div>
            </div>
            <div class="card-footer text-center">
                <button class="btn btn-outline-danger" @click='$router.go(-1)'>Quay Lại</button>
            </div>
        </div>
    </section>
</template>
    
<script setup>
import { ref } from 'vue';
import Axios from '../services/service'

const props = defineProps(['id'])
const indexStatus = ["Đã huỷ", "Chờ xác nhận", "Đang đóng gói", "Đang giao", "Đã thanh toán", "Đã huỷ"]
const order = ref()

async function getInfo() {
    order.value = await Axios.getDetail(props.id)
}
getInfo()
</script>

<style>.col-3 strong {
    font-size: 20px;
}</style>