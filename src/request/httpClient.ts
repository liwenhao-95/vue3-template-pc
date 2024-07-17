import { ElMessage } from 'element-plus'
import instance from './index'
import type { AxiosRequestConfig } from 'axios'


export interface Response<T = any> {
  code: number
  message: string
  data: T
}

export interface PostBodyModel {}

class HttpClient {
  constructor() {}

  async get<T>(api: string, params?: Record<string, any>, options?: AxiosRequestConfig): Promise<T> {
    return await new Promise((resolve, reject) => {
      instance.get<Response>(`${api}`, { params, ...options }).then((res) => {
        if (options?.responseType === 'blob' && res.status === 200) {
          resolve(res.data as any)
        } else if (res.data && res.data.code === 200) {
          resolve(res.data.data)
        } else if (res.data && res.data.code !== 200) {
          reject(res.data.message)
        }
      })
    })
  }

  async post<T>(api: string, body: Record<string, any>): Promise<T> {
    return await new Promise((resolve, reject) => {
      instance.post<Response>(api, body).then((res) => {
        if (res.data && res.data.code === 200) {
          resolve(res.data.data)
        } else if (res.data && res.data.code !== 200) {
          reject(res.data.message)
        }
      })
    })
  }
  
  async del<T>(api: string, params?: Record<string, any>): Promise<T> {
    return await new Promise((resolve, reject) => {
      instance.delete<Response>(api, params).then((res) => {
        if (res.status === 204) {
          resolve(res.data.data)
        } else {
          ElMessage.error(res.data.message || 'error')
          reject(res.data.message)
        }
      })
    })
  }
}

const httpClient = new HttpClient()
export default httpClient