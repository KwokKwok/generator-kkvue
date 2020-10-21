import axios from 'axios';
import Token from './Token';

export class HttpResponse {
    code!: number
    message!: string
    data?: any
}

export const baseURL = process.env.VUE_APP_BASE_URL;

// 创建axios实例
const service = axios.create({
    baseURL, // api 的 base_url
    timeout: 5000, // 请求超时时间
    withCredentials: true
})

// request拦截器
service.interceptors.request.use(
    config => {
        if (Token.get()) {
            config.headers['Authorization'] = `Bearer ${Token.get()}` // 让每个请求携带自定义token 请根据实际情况自行修改
        }
        return config
    },
    error => {
        // Do something with request error
        // Message({
        //     message: `网络请求出错:${error.message}`,
        //     type: 'error',
        //     duration: 5 * 1000
        // })
    }
)

// response 拦截器
service.interceptors.response.use(
    response => {
        /**
         * code为非200抛错 可结合自己业务进行修改
         */
        let res = response.data;
        let responseFrom = response.request.responseURL;
        if (res.code >= 400 && responseFrom !== `${baseURL}/login`) {
            if (res.code === 401) {
                Token.remove();
                // MessageBox.confirm(
                //     '你已被登出，可以取消继续留在该页面，或者重新登录',
                //     '确定登出',
                //     {
                //         confirmButtonText: '重新登录',
                //         cancelButtonText: '取消',
                //         type: 'warning'
                //     }
                // )
                // .then(() => {
                // location.reload(); // 重新初始化vue-router
                // })
                location.reload(); // 重新初始化vue-router
            }
            if (res.code === 403) {
                // Message.error("该操作不被允许，请联系管理员")
            }
            return Promise.reject('error')
        } else {
            return response.data
        }
    },
    error => {
        // Message({
        //     message: `服务器响应出错，请检查网络是否连接`,
        //     type: 'error',
        //     duration: 3 * 1000
        // })
        return Promise.reject(error)
    }
)

function encodeQuery(query: any) {
    if (!query) return "";
    let queryStrs: string[] = [];
    Object.getOwnPropertyNames(query).forEach(param => {
        if (query[param]) {
            queryStrs.push(`${encodeURIComponent(param)}=${encodeURIComponent(query[param])}`);
        }
    });
    return "?" + queryStrs.join("&");
}

export default class Http {
    static async get(url: string, params: any): Promise<HttpResponse> {
        return await service.get(`${url}/${encodeQuery(params)}`);
    };
    static async post(url: string, data: any): Promise<HttpResponse> {
        return await service.post(url, data);
    };
    static async put(url: string, data: any): Promise<HttpResponse> {
        return await service.put(url, data);
    };
    static async delete(url: string): Promise<HttpResponse> {
        return await service.delete(url);
    };
}