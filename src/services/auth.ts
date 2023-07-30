import { ADMIN_LOGIN } from './api'
import { HttpMethod } from './http'
import { IResponse } from '../types/axios'
import { fetch } from './request'
export type AdminLoginPostResp = {
    userId: string
    username: string
    avatar: string
}
type AdminLoginPostReq = {
    username: string
    password: string
}

export const fetchAdminLoginPost = async (data: AdminLoginPostReq) => {
    return fetch<IResponse<AdminLoginPostResp>>({
        url: ADMIN_LOGIN,
        method: HttpMethod.POST,
        data
    })
}
