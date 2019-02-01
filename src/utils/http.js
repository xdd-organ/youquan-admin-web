import axios from 'axios'
import { getToken } from '@/utils/auth'

const http = axios.create({
    baseURL: 'http://127.0.0.1:8080/',
    timeout: 30000,
    headers: {'ticket': '100000'},
})

// request 拦截器
http.interceptors.request.use(
    config => {
        // config.headers['ticket'] = "123456";
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// respone 拦截器
http.interceptors.response.use(
    response => {
        const res = response.data
        if (res.error) {
            if (res.code === '') {
                // 接口自定义错误代码
                // 移除登陆token 显示接口错误消息
            }
            return Promise.reject(res)
        }
        return Promise.resolve(res)
    },
    error => {
        return Promise.reject(error)
    }
)

export default http