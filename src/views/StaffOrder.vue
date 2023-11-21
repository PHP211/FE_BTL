<template>
    <section class="myorder" style="padding-top: 10%; padding-left: 20%; padding-right: 20%;">
        <div class="card">
            <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">

                    <li class="nav-item">
                        <a class="nav-link active">
                            Đơn đã nhận
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link">
                            <router-link :to="`/order/${SID}`">
                                Đơn đang xử lý
                            </router-link>
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
                        <tr>
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
                            <td style="font-size: 15px;"> {{ i.value.toLocaleString('it-IT', {
                                style: 'currency', currency:
                                    'VND'
                            }) }}</td>
                            <td style="font-size: 15px;"> {{ indexStatus[i.status] }}</td>

                            <td>
                                <div class="btn-group">
                                    <button type="button" class="btn btn-outline-success"
                                        @click="$router.push(`/myorder/${i._id}/detail`)">Chi Tiết</button>
                                    <button type="button" class="btn btn-outline-primary"
                                        @click="validOrder(i._id)">Xác nhận</button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="else text-center m-5" v-else>
                <h3>Chưa Có Đơn Hàng Mới</h3>
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

async function getListOrder() {
    listOrder.value = await Axios.getNonValid()
}
getListOrder()

async function validOrder(id) {
    await Axios.valid(id, SID)
    getListOrder()
}
</script>