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
        data.quatity = data.quantity*1
        return (await this.api.put(`/api/product/${id}`, data)).data
    }

    async addPrd(data) {
        data.price = data.price*1
        data.quatity = data.quantity*1
        return (await this.api.put(`/api/product`, data)).data
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
}

export default new AxiosAPI()