import httpClient from '@/request/httpClient'

export const getBooks = (params?: any) => httpClient.get<any>('/api/user/books', params)

export const postBooks = (data: any) => httpClient.post('/api/user/books', data)

export const deleteBooks = (id: string | number) => httpClient.del(`/api/user/books?id=${id}`)