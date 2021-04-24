// 进行local数据存储管理的模块
import store from 'store'
const USER_KEY = 'user_key'

export default {
    // 保存
    saveUser(data){
        // localStorage.setItem(USER_KEY,JSON.stringify(data))
        store.set(USER_KEY,data);
    },

    // 读取
    getUser(data){
        // return JSON.parse(localStorage.getItem(USER_KEY) || '{}')
        return store.get(USER_KEY,data) || {}
    },
    // 删除
    removeUser(data){
        // localStorage.removeItem(USER_KEY)
        store.remove(USER_KEY);
    }
}