import {GetCategory} from "@/api/news.js"
const state={
    qiniuUrl:"http://www-web-jshtml-cn-idva7mx.web-jshtml.cn/"
}
const getters={
    qiniuUrl:state=>state.qiniuUrl
}
const actions = {  // 可以回调处理事情 
    getInfoCategory(content, repuestData) {
        // console.log(123);     
        return new Promise((resolve, reject) => {
            GetCategory({}).then((response) => {
                resolve(response.data.data.data)
            }).catch(error => {
                reject(error)
            })
        })
    }
}

export default {
    namespaced: true,
    actions,
    state,
    getters
};
