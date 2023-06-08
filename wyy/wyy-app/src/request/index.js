import axios from 'axios';
let service = axios.create({
    baseURL: 'http://8.139.7.208:3000/',
    timeout: 3000
})
export default service
