import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8080/api'

const torneoApi = axios.create({
    baseURL: baseUrl,

})

export default torneoApi