//获取
import service from "../utils/request.js"
//邮箱验证码接口
export function GetSms(data){
  return service.request ({
    method: 'post',
    url: '/getSms/',
    data 
  });
};

//注册接口
export function Register(data){
  return service.request({
    method:'post',
    url:'/register/',
    data
  });
};

//登录接口
export function Login(data){
  return service.request({
    method:'post',
    url:'/login/',
    data
  })
}