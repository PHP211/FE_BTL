<template>
    <section class="myorder" style="padding-top: 10%; padding-left: 20%; padding-right: 20%;">
        <div class="card">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">

                    <li class="nav-item">
                        <a class="nav-link">
                            <router-link :to="`/order`">
                                Đơn đã nhận
                            </router-link>
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link active">
                            Đơn đang xử lý
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link">
                            <router-link :to="`/order/${SID}/all`">
                                Đơn đã hoàn thành
                            </router-link>
                        </a>
                    </li>

                </ul>
            </div>
            <div class="card-body" v-if="listOrder.length > 0">
                <table class="table text-center">
                    <thead>
                        <tr >
                            <th scope="col" style="text-align: center;">Số hoá đơn</th>
                            <th scope="col" style="text-align: center;">Ngày lập</th>
                            <th scope="col" style="text-align: center;">Tổng giá tiền</th>
                            <th scope="col" style="text-align: center;">Trạng Thái</th>
                            <th scope="col" style="text-align: center;"></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="align-middle " v-for="i in listOrder" :key="i._id">
                            <th scope="row" style="text-align: center; font-size: 15px;"> {{ i._id }} </th>
                            <td style="font-size: 15px;"> {{ i.createDate }}</td>
                            <td style="font-size: 15px;"> {{ i.value.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) }}</td>
                            <td style="font-size: 15px;"> {{ indexStatus[i.status] }}</td>

                            <td>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-outline-success"
                                        @click="$router.push(`/myorder/${i._id}/detail`)">Chi Tiết</button>
                                    <button v-if="i.status < 4" type="button" class="btn btn-outline-primary"
                                        @click="nextStatus(i._id,i.status)">{{ handler[i.status] }}</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="else text-center m-5" v-else>
                <h3>
                    Bạn Đang Không Xử Lý Đơn Nào
                </h3>
            </div>
            <div class="card-footer text-center">
                <button class="btn btn-outline-danger" @click='$router.push("/info")'>Quay Lại</button>
            </div>
        </div>
    </section>
</template>
    
<script setup>
import { ref } from 'vue'
import Axios from '../services/service'

const props = defineProps(['id'])
const listOrder = ref([])
const indexStatus = ["Đã huỷ", "Chờ xác nhận", "Đang đóng gói", "Đang giao", "Đã thanh toán", "Đã huỷ"]
const SID = JSON.parse(localStorage.info)._id
const handler = ['Huỷ', '2', 'Giao hàng', 'Xác nhận thanh toán']

async function getListOrder() {
    listOrder.value = await Axios.getOrderBySID(SID)
}
getListOrder()

function getTime() {
    const now = new Date()
    const date = now.getDate()
    const month = now.getMonth()+1
    const year = now.getFullYear()
    return `${year}-${month}-${date}`
}

const now = getTime()
const time = ref()

async function nextStatus(id, status) {
    time.value = now
    if(status === 0) {
        await Axios.done(id, -1)
    }
    if(status < 3) {
        await Axios.nextStatus(id)
    }
    else await Axios.done(id, time.value)
    getListOrder()
}
</script>