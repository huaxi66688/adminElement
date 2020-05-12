//封装的方法要暴露出去
export function stripscript(str) {
        var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{ }【】‘；：”“'。，、？]")
        var rs = "";
        for (var i = 0; i < str.length; i++) {
                rs = rs + str.substr(i, 1).replace(pattern, '');
         }
        return rs;
} 
//验证邮箱
export function valEmail(value) {
         let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;//邮箱格式正则
    //  if(!reg.test(value)){
    //    return false
    //  }else{
    //      return true
    //  }
    return !reg.test(value)?true:false
} 
//验证密码
export function valPass(value) {
    let reg = /^(?!\D+$)(?![^a-zA-Z]+$)\S{6,20}$/;//邮箱格式正则
    //  if(!reg.test(value)){
    //    return false
    //  }else{
    //      return true
    //  }
    return !reg.test(value)?true:false
} 
//验证验证名
export function valSvg(value) {//传递参数出去
    let reg = /^[a-z0-9]{6}$/;//邮箱格式正则
    //  if(!reg.test(value)){
    //    return false
    //  }else{
    //      return true
    //  }
    return !reg.test(value)?true:false
}




    
    