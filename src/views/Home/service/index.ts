import request from '@/request'

export const getBooks = (params?: any) => {
  return request({
    url: `/api/user/books`,
    method: 'get',
    params
  })
}

export const postBooks = (data: any) => {
  return request({
    url: `/api/user/books`,
    method: 'post',
    data
  })
}
