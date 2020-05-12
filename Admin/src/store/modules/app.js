// const app=({
//   state: {
//     isCollapse:JSON.parse(sessionStorage.getItem('isCollapse')) || false,//优先拿取本地,否则初始false
//     count:10
//   },
//   getters:{//获取数据
//     //count:state =>state.count+10 有参数    count:()=>state.count+10

//   },
//   mutations: {
//     // SET_COUNT(state,value){  //自定义一个方法来更改state里面的值 ,里面的state指向前面的
//      // state.count =value
//     // }
//     SET_COLLAPSE(state){
//       state.isCollapse = !state.isCollapse
//       //console.log(state.isCollapse )
//       //html5本地存储
//       sessionStorage.setItem('isCollapse',JSON.stringify( state.isCollapse))
//     }},
//     actions:{
//       //定义名称出来
//       login(content,requestData){
//               return new Promise((resolve,reject)=>{
//                 //接口
//                 Login(requestData).then((response)=>{

//                     resolve(response)
//                 }).catch((error)=>{
//                     reject()
//                 })
//               })
//             }
//     }
//   })
 
// export default app;

import { Login } from "../../api/login";
import Cookie from 'cookie_js';
import {setToKen,setUser,removeToken,removeUser} from "../../utils/app.js";
   const state={
      isCollapse:false,
      to_Ken:'',
      username:Cookie.get('username') || ''
      //username:getUsername() || ''
   }
   const getters = {//计算,获取数据
          count:state =>state.count+10,//有参数    count:()=>state.count+10
         //  username:state =>state.username//只的变化
   }
   const  mutations= {//提交更改数据      使用用this.$store.commit
      SET_COLLAPSE(state,value){
         //console.log(state)
            state.isCollapse = !state.isCollapse
            //console.log(state.isCollapse )
            //html5本地存储
           // sessionStorage.setItem('isCollapse',JSON.stringify( state.isCollapse))
      },
      SET_TOKEN(state,value){
         state.to_Ken = value
      },
      SET_USERNAME(state,value){
         state.username= value
      }


}
 const actions = {
      login({commit},requestData){//{commit}
                       return new Promise((resolve,reject)=>{
                         //接口
                         Login(requestData).then((response)=>{
                            let data = response.data.data//
                            console.log(data) //获取登录信息
                           //  context.commit('SET_TOKEN',data.token)
                           //  context.commit('SET_USERNAME',data.username)
                           commit('SET_TOKEN',data.token)
                           commit('SET_USERNAME',data.username)
                           
							       setToKen(data.token)
							       setUser(data.username)
                             resolve(response)
                         }).catch((error)=>{
                             reject(error)
                         })
                       })
          },
          	//退出
		loginout({commit}){
			return new Promise((resolve,reject)=>{
            //清除
				removeUser()
				removeToken()
				// commit('SET_TOKEN','')
				// commit('SET_USERNAME','')
				resolve()
			})
		}
   }


export default {
	namespaced:true,
	state,
	mutations,
	getters,
	actions,
};