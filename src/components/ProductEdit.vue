<template>
    <section class="add">
        <div class="card">
            <div class="card-header">
                <h3 class="text-center">
                    <slot></slot>
                </h3>
            </div>
            <div class="card-body text-center">
                <div class="row g-3 justify-content-center mb-3">
                    <div class="col-3 text-start">
                        <h2>Tên Sản Phẩm</h2>
                    </div>
                    <div class="col-9">
                        <input v-model="product.productName" type="text" class="form-control" placeholder="Tên sản phẩm" style="::placeholder{font-size: 20px}">
                    </div>
                </div>
                <div class="row g-3 justify-content-center mb-3">
                    <div class="col-3 text-start">
                        <h2>Phân loại</h2>
                    </div>
                    <div class="col-9">
                        <select class="form-select" v-model="product.type">
                            <option :value="0">Chọn Loại Sản Phẩm</option>
                            <option v-for='i in listType' :key="i._id" :value='i._id'> {{ i.Name }}
                            </option>
                        </select>
                    </div>
                </div>
                <div class="row g-3 justify-content-center mb-3">
                    <div class="col-3 text-start">
                        <h2>Đơn giá bán</h2>
                    </div>
                    <div class="col-9">
                        <input v-model="product.price" type="text" class="form-control ">
                    </div>
                </div>
                <div class="row g-3 justify-content-center mb-3">
                    <div class="col-3 text-start">
                        <h2>Số lượng</h2>
                    </div>
                    <div class="col-9">
                        <input v-model="product.quantity" type="text" class="form-control ">
                    </div>
                </div>
                <div class="row g-3 justify-content-center mb-3">
                    <div class="col-3 text-start">
                        <h2>Minh hoạ sản phẩm</h2>
                    </div>
                    <div class="col-9">
                        <input v-model="product.PrdImage" type="text" class="form-control ">
                    </div>
                </div>
                <div class="row g-3 justify-content-center mb-3">
                    <div class="col-12">
                        <label for="floatingTextarea2" style="font-size: 20px;">Mô tả sản phẩm</label>
                        <div class="form-floating">
                            <textarea v-model="product.description" class="form-control" placeholder="Nhập Mô Tả"
                                id="floatingTextarea2" style="height: 80px" ></textarea>
                        </div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <div class="d-grid gap-3 d-md-flex justify-content-md-center">
                    <button class="btn btn-outline-success" type="button" v-if="$props.id" @click="update">
                        Xác Nhận
                    </button>

                    <button class="btn btn-outline-success" type="button" @click="create" v-else>
                        Thêm Mới
                    </button>

                    <button class="btn btn-outline-danger" type="button" @click.prevent='$router.go(-1)'>
                        Quay Về
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
    
<script setup>
import Axios from '../services/service'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const props = defineProps(['id'])

const product = ref({
    "productName": undefined,
    "type": 0,
    "description": undefined,
    "price": undefined,
    "quantity": undefined,
    "PrdImage": undefined
})

async function getPrd(id) {
    product.value = await Axios.getPrdById(id)
}

if (props.id) {
    getPrd(props.id)
}

const listType = ref([])
async function getType() {
    listType.value = await Axios.getType()
}
getType()

async function update() {
    if (!product.value.productName) return alert('Tên sản phẩm không được để trống!')
    if (product.value.type === 0) return alert('Loại sản phẩm không được để trống!')
    if (!product.value.PrdImage) return alert('Đường dẫn hình ảnh không được trống!')
    if (!product.value.description) return alert('Mô tả không được để trống!')
    if (!(Number.isInteger(product.value.quantity * 1) && product.value.quantity !== '' && product.value.quantity * 1 > 0)) {
        product.value.quantity = 1
        return alert('Số lượng sản phẩm phải lớn hơn 0!')
    }
    if (!(Number.isInteger(product.value.price * 1) && product.value.price !== '' && product.value.price * 1 > 0)) {
        product.value.price = 10000
        return alert('Giá tiền phải lớn hơn 0!')
    }
    await Axios.updatePrd(props.id, props.value)
    alert('Chỉnh sửa thành công!')
    router.go(-1)
}

async function create() {
    if (!product.value.productName) return alert('Tên sản phẩm không được để trống!')
    if (product.value.type === 0) return alert('Loại sản phẩm không được để trống!')
    if (!product.value.PrdImage) return alert('Đường dẫn hình ảnh không được trống!')
    if (!product.value.description) return alert('Mô tả không được để trống!')
    if (!(Number.isInteger(product.value.quantity * 1) && product.value.quantity !== '' && product.value.quantity * 1 > 0)) {
        product.value.quantity = 1
        return alert('Số lượng sản phẩm phải lớn hơn 0!')
    }
    if (!(Number.isInteger(product.value.price * 1) && product.value.price !== '' && product.value.price * 1 > 0)) {
        product.value.price = 10000
        return alert('Giá tiền phải lớn hơn 0!')
    }
    await Axios.addPrd(product.value)
    alert('Thêm sản phẩm thành công!')
    router.go(-1)
}
</script>

    
<style>

.card {
    margin-top: 5%;
    margin-left: 13%;
    width: 70%;
}
</style>