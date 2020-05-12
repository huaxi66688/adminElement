import axios from "axios";
// import {getToKen,getUsername} from "@/utils/app.js";
//http://www.web-jshtml.cn/productapi
const BASEURL=process.env.NODE_ENV ==='production'? "" :"devapi";
//np创建axios,赋给变量service
const service = axios.create({
  baseURL: BASEURL,
  //baseURL: 'https://www.baidu.com',
  timeout: 150000,
});
//console.log(process.env.NODE_ENV);

// 添加请求拦截器
service.interceptors.request.use(function (config) {
  //在发送请求之前做的事情
 //consoel.log(config)  在发送请求之前做的事情

 //Tokey
  return config;
},function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});



// 添加响应拦截器
service.interceptors.response.use(function (response) {

 // console.log(response)  //拦截后的数据,请求成功后台返回数据,拦截的信息
  //拦截后的数据,响应拦截
  let data = response.data
  if (data.resCode !==0 ){//后台返回状态码不等于,说明有异常
        // alert(111)
        Message.error(data.message)//把错误的信息发送到前端
        return Promise.reject(data);//对应cathch
  }else{

       return response;//接受正确返回信息
       return  Promise.resolve(data)//对应then
  }
}, function (error) {
  // 对响应错误做点什么
    return Promise.reject(error);
});

export default service;