import { IResponse } from '../types/axios'
import { fetch } from './request'
import { FILE_ADMIN_UPLOAD, FILE_LIST } from './api'
import { HttpMethod } from './http'
export type FileType = 'OTHER' | 'INFORMATION_LIBRARY' | 'BOOK_LIBRARY' | 'SYSTEM_FILE' | ''
export type FileListGetReq = {
    type?: FileType
    originalName?: string
}
export type FileListGetResp = {
    id: string
    fileName: string
    url: string
    createTime: string
}[]
export type FileAdminUploadPostReq = {
    files: File[]
}
export type FileAdminUploadPostResp = string[]

export const fetchFileListGet = (params: FileListGetReq) => {
    return fetch<IResponse<FileListGetResp>>({
        url: FILE_LIST,
        params
    })
}
export const fetchFileAdminUpload = (data: FileAdminUploadPostReq) => {
    const formData = new FormData()
    for (const item of data.files) {
        formData.append('files', item)
    }
    return fetch<IResponse<FileAdminUploadPostResp>>({
        url: FILE_ADMIN_UPLOAD,
        method: HttpMethod.POST,
        data: formData
    })
}
