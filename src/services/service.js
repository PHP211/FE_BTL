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
}

export default new AxiosAPI()