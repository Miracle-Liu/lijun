import axios from 'axios'
import { Message,MessageBox } from 'element-ui'
import store from '@/store'


const http = axios.create({
    baseURL: process.env.BASE_API,
    timeout: 20000
})

http.interceptors.request.use(
    config => {
        config.headers['X-Requested-With'] = 'XMLHttpRequest';
        return config
    },
    error => {

        console.log(error)
        Promise.reject(error)
    }
)


http.interceptors.response.use(
    response => {
        const res = response.data
     if (res.code == 40007) {
          MessageBox.confirm('你已被登出，请重新登录', '确定登出', {
            confirmButtonText: '重新登录',
            showCancelButton:false,
            type: 'warning'
          }).then(() => {
            location = "/ecommerce_shop?newui";
          })
        }else{
            return response
        }
    },
    error => {
        console.log('err' + error)
        Message({
            message: error.message,
            type: 'error',
            duration: 5 * 1000
        })
        return Promise.reject(error)
    }
)

export default http
