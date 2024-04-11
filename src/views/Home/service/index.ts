import request from '@/request'

export const getAlbums = (params?: any) => {
  return request({
    url: `/api/albums/2`,
    method: 'get',
    params
  })
}

export const postAlbums = (data: any) => {
  return request({
    url: `/api/albums`,
    method: 'post',
    data
  })
}
