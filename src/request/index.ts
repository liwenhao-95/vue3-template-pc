import axios from 'axios'
// import router from '@/router'
import { useAppStore } from '@/stores/app'

const AxiosInstance: any = axios.create({
  baseURL: '/'
  // timeout: 30 * 1000,
  // headers: {
  //   'Content-Type': 'application/json; charset=UTF-8',
  // },
})

// 自定义配置公共headers

AxiosInstance.interceptors.request.use(
  (config: any) => {
    // if (
    //   userInfo?.accessToken &&
    //   !config.headers?.customHeader
    // ) {
    //   config.headers['accessToken'] = userInfo?.accessToken
    // }
    return config
  },
  (err: any) => {
    // const store = useAppStore()
    // store.loading = false
    return Promise.reject(err)
  }
)

// http response 拦截器
AxiosInstance.interceptors.response.use(
  (response: any) => {
    // const store = useAppStore()
    // if (response.config.withFullResponse) {
    //   return response
    // }
    // const bizCode = response.data?.bizCode ?? ''
    // const codeArr = bizCode.split(':')
    // if (codeArr[0] && codeArr[0] === 'SUCCESS') {
    //   return response.data
    // }
    // if (codeArr[0] && codeArr[0] === 'FAIL') {
    //   message.warn(response.data?.message ?? '失败')
    //   return false
    // }
    // if (codeArr[0] && codeArr[0] === 'ERROR') {
    //   message.warn(response.data?.message ?? '失败')
    //   return false
    // }
    return response.data
  },
  async (error: any) => {
    const { response } = error
    // switch (true) {
    //   case response.status === 401 &&
    //     response.data?.bizCode?.includes('FAIL:TOKEN_EXP'): // accessToken 过期 需要刷新
    //     result = await RefreshToken.refresh()
    //     if (result) {
    //       return await AxiosInstance(response.config)
    //     } else {
    //       message.warning('登录信息过期，请重新登录')
    //       router.push('/login')
    //     }
    //     break
    //   case response.status === 401 &&
    //     response.data?.bizCode?.includes(
    //       'FAIL:NO_AUTHENTICATION'
    //     ): // 身份认证无效，适用于需要重新登录场景
    //     message.warning('登录信息过期，请重新登录')
    //     router.push('/login')
    //     break
    //   case response.data?.bizCode?.includes(
    //     'FAIL:NO_AUTHORIZATION'
    //   ):
    //     await userStore.loginOut()
    //     message.warn('暂无权限')
    //     router.push('/login')
    //     break
    //   case response.status === 400:
    //     message.warn(
    //       response?.data?.message ?? '系统错误，请稍后重试'
    //     )
    //     break
    //   case response.status === 413: // 这里上传文件单独处理，413表示请求实体太大，这里用作判断上传文件的大小
    //     return response
    //   default:
    //     message.warning('系统繁忙，请稍后重试')
    //     break
    // }
    return Promise.reject(error) // 返回接口返回的错误信息
  }
)

export default AxiosInstance
