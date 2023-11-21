import Axios from './api.service'
const defaultURL = 'http://localhost:3000'

class AxiosAPI {
    constructor(URL = defaultURL) {
        this.api = Axios(URL)
    }

    async login(username , password){
        const data = {
            username : username , 
            password : password
        }
        const result = (await this.api
            .post('/api/account/login',data)).data
        return result
    }

    async register(data) {
        const result = (await this.api.post('/api/account',data)).data
        return result
    }

    async UpdateAccount(id, data) {
        return (await this.api.put(`/api/account/${id}`, data)).data
    }

    async getAllPrd() {
        return (await this.api.get('/api/product')).data
    }

    async getPrdByName(name, type) {
        return (await this.api.post('/api/product/name', {productName: name+'', type: type*1})).data
    }

    async getPrdById(id) {
        return (await this.api.get(`api/product/${id}`)).data
    }   

    async deletePrd(id) {
        return (await this.api.delete(`/api/product/${id}`)).data
    }

    async updatePrd(id, data) {
        data.price = data.price*1
        data.quantity = data.quantity*1
        return (await this.api.put(`/api/product/${id}`, data)).data
    }

    async addPrd(data) {
        data.price = data.price*1
        data.quantity = data.quantity*1
        return (await this.api.post(`/api/product`, data)).data
    }

    async getType() {
        return (await this.api.get('/api/type')).data
    }

    async getCart(id) {
        return (await this.api.get(`/api/cart/${id}`)).data
    }

    async addtoCart(id, prd) {
        return (await this.api.post(`/api/cart/${id}`, prd)).data
    }

    async updateCart(id, data) {
        return (await this.api.put(`/api/cart/${id}`, data)).data
    }

    async createOrder(info, detail) {
        return (await this.api.post('/api/bill', {info: info, detail: detail})).data
    }

    async getAvailable(id) {
        return (await this.api.get(`/api/bill/uid/available/${id}`)).data
    }

    async getAllOrder(id) {
        return (await this.api.get(`/api/bill/uid/${id}`)).data
    }

    async getDetail(id) {
        return (await this.api.get(`/api/bill/${id}`)).data
    }

    async cancel(id) {
        return (await this.api.delete(`/api/bill/${id}`)).data
    }

    async getNonValid() {
        return (await this.api.get('/api/bill')).data
    }

    async valid(orderId, staffId) {
        return (await this.api.put(`/api/bill/${orderId}/valid`, {SID: staffId})).data
    }

    async done(orderId, delivery) {
        return (await this.api.put(`api/bill/${orderId}/done`, {deliveryDate: delivery})).data
    }

    async nextStatus(orderId) {
        return (await this.api.get(`/api/bill/status/${orderId}`)).data
    }

    async getOrderBySID(staffId) {
        return (await this.api.get(`api/bill/sid/${staffId}`)).data
    }

    async getAllBySID(staffId) {
        return (await this.api.get(`/api/bill/sid/${staffId}/all`)).data
    }
}

export default new AxiosAPI()