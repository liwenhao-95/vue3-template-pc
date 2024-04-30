import axios, { type InternalAxiosRequestConfig, type AxiosResponse } from 'axios'
import qs from 'qs'
import router from '@/router'
import { ElMessage } from 'element-plus'

const instance = axios.create({
  baseURL: '/',
  timeout: 30 * 1000,
  withCredentials: true,
  paramsSerializer: (params) => {
    return qs.stringify(params, { indices: false })
  }
})

// 自定义配置公共headers

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

// http response 拦截器
instance.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.data?.code === 401) {
      router.push('/login')
    }
    return response.data
  },
  async (error: any) => {
    const { response } = error
    if (response.status !== 200) {
      ElMessage.error(error.response.data.message || '网络异常')
    } else {
      ElMessage.error('网络异常，请检查网络连接')
    }
    return Promise.reject(error)
  }
)

export default instance
