import router from './index.js';
//用cookiejiance
import { getToKen} from '../utils/app'
const whiteRouter=['/login']
router.beforeEach((to, from, next) => {
    // if(getToken()){
    //     console.log('存在')
    // }else{
    //     next('./login')//路由指向
    //     console.log('不存在')
    // }//会进入死循环
    if(getToKen()){
        console.log('存在')
        if(to.path === '/login'){
            //清掉
            //removeToken();
           // removeUsername();
            next();
        }else{
            next();
        }
        next();
    }else{ 
        //console.log('不存在')
        if(whiteRouter.indexOf(to.path) !== -1){
            next();
        }else{
            next('./login');//路由指向
        }
        //console.log('不存在')
    }//会进入死循环
   
})