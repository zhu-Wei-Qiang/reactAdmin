/**
 * 跟进接口文档定义接口请求
 * 包含应用中所有的额接口请求函数的模块
 * 每个函数的返回值都是promise
 */
import ajax from './ajax.js'
const BASE = ''

export const reqLogin = (data)=>ajax(BASE+'/login',data,'POST')