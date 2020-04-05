import axios from 'axios'
import qs from 'qs'  //cdn引入后是Qs


// let baseURL = window.location.origin || 'http://www.he360.com.cn'
// if (process.env.NODE_ENV === "development") { //开发环境
//     baseURL = 'http://localhost'
// }


const service = axios.create({ // 创建axios实例           
    timeout: 120000, // 请求超时时间
    headers: {
        // 'Content-Type': 'application/json;charset=UTF-8'
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    },
    // baseURL,
    withCredentials: true
})

service.interceptors.request.use(config => { //请求拦截器
    // config.cancelToken = new axios.CancelToken(function (cancel) { //将请求的cancelToken存到 vuex中的pushToken中

    // })

    return config
}, error => {
    Promise.reject(error)
})

service.interceptors.response.use(  //响应拦截器                
    response => {
        return response
    },
    error => {
        return Promise.reject('拦截请求') //抛出拦截响应错误
    }
)


export default function (obj) {
    let method = obj.method || 'get'
    let url = obj.url || ''
    let params = obj.data || {}
    let data = obj.data || {}
    if (method == 'get') {
        return new Promise((resolve, reject) => {
            service.get(url, { params: { ...params, isolate: 1 } }).then(res => {
                if (res.status == 200) {
                    resolve(res.data)
                } else {
                    //提示信息
                }

            }, err => {
                reject(err)
            })
        })
    } else {
        data = Qs.stringify({ ...data, isolate: 1 }) //post请求，转化格式
        return new Promise((resolve, reject) => {
            service.post(url, data).then(res => {
                if (res.status == 200) {
                    resolve(res.data)
                } else {
                    //提示信息
                }
            }, err => {
                reject(err)
            })
        })
    }
}