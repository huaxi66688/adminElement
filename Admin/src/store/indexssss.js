// import Vue from "vue";
// import Vuex from "vuex";
// import { Login } from '../api/login.js'
// Vue.use(Vuex);
// export default new Vuex.Store({
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
 

