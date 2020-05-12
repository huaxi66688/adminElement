import Cookie from 'cookie_js';//用cookie存储token值
// import cookie from 'cookie_js';




// export function setToKen(token){
//     return cookie.set('adminToken',token);//把token存储到adminToken
// }
const adminToken='admin_toKen';
const username='username';
//获取token
export function setToKen(toKen){        
    return Cookie.set(adminToken,toKen);
}
//获取
export function getToKen(){
    return Cookie.get(adminToken);
}
//清除Token
export function removeToken(toKen){
    return Cookie.remove(adminToken);
}
export function setUser(value){
    return Cookie.set(username,value);
}

export function getUser(){
    return Cookie.get(username);
}
export function removeUser(){
    return Cookie.remove(username);
}
// export function getToKen(){
//     return cookie.get('adminToken');
// }
