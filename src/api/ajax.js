/**
 * 能发送异步ajax 请求的函数模块
 * 封装axios
 * 函数的返回值是promise对象
 * 统一处理请求异常   在外层自己创建promise对象  就有了两个状态
 *                  然后在里面接住请求返回的promise值进行判断，
 *                  成功的话将数据返回给最外层的成功状态
 *                  失败的话不返回什么   抛出异常
 */
import axios from 'axios'
import {message} from 'antd'

export default function myAjax(url, data={}, type='GET') { 
    // if(type == 'GET'){
    //     return axios.get(url,{
    //         params: data
    //     })
    // }else{
    //     return axios.post(url,data)
    // }
    /*
        用promise处理请求中的异常

    */ 
   return new Promise((resolve,reject)=>{
       let promise = null;
        //    执行异步ajax请求
       if(type == 'GET'){
            promise = axios.get(url,{params: data})
        }else{
            promise = axios.post(url,data)
        }
        //  如果成功了  调用resolve(value)
        promise.then(respone =>{
            resolve(respone.data)
        //  如果失败了 不调用resolve(value)  直接提示异常
        }).catch(error=>{
            message.error('请求出错：'+error.message)
        })
   })



}