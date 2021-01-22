import axios from 'axios';
import { HttpResponse } from '../assets/types/beans';
import Token from './Token';

export const baseURL = import.meta.env.VITE_APP_BASE_URL as string;

// 创建axios实例
const service = axios.create({
  baseURL, // api 的 base_url
  timeout: 5000, // 请求超时时间
  withCredentials: true
})

const logError = (msg: string) => {
  console.warn(`[HTTP] ${msg}`);
}

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
    logError(`request error: ${error.message}`);
  }
)

// response 拦截器
service.interceptors.response.use(
  response => {
    /**
     * code为非0是抛错 可结合自己业务进行修改
     */
    const res = response.data;
    let responseFrom = response.request.responseURL;

    if (res.code >= 400 && responseFrom !== `${baseURL}/login`) {
      if (res.code === 401) {
        Token.remove();
        logError("unauth")
      }
      if (res.code === 403) {
        logError("unauth")
      }
    }
    return response.data
  },
  error => {
    logError(`response error: ${error.message}`)
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
  static async get(url: string, params: any = null): Promise<HttpResponse> {
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