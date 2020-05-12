import Vue from 'vue'
import Router from 'vue-router'
//引入对应的组件

import Login from '../views/Login'
import Admin from '../views/Admin'
import Index from '../components/Index'

import UserInfo from '../components/info/UserInfo'
import UserList from '../components/info/UserList'
import InfoList from '../components/info/InfoList'
import InfoClassify from '../components/info/InfoClassify'


Vue.use(Router)
//需要进行进行配置路由
export default new Router({
  mode: 'history',
  routes:[
  {
    path: '/',//跳转对应组件的路由的路由
    redirect:'login',//对应的组件的名称
    hidden:true,
    meta:{name:'登录'}
  },
  {
    path: '/login',
    hidden:true,
    component: Login,
    name:"login",
    meta:{name:'登录'}
  },
  {
    path: '/admin',
    component: Admin,
    name:"admin",
    meta:{name:'控制台'},
      children:[
     {
      path:"/index",
      component:Index,
      meta:{name:"首页"}
     }
     ]
  },
  {
      path:"/Info",
      meta:{
       name:"信息管理",
     },
     component:Admin,
     children:[
       {
         path:"/infolist",
         component:InfoList,
         meta:{
            name:"信息列表"
         }
       },
       {
        path:"/infolist",
        component:InfoClassify,
        meta:{
           name:"信息分类"
        }
      },

      ]
  },
  {
    path:"/User",
    meta:{name:"用户管理"},
    component:Admin,
    children:[
      {
        path:"/userinfo",
        component:UserInfo,
        meta:{name:"用户信息"},
      },
      {
        path:"/userlist",
        component:UserList,
        meta:{name:"用户列表"},
      }
    ]
  },
    

    
  ]  
})

  
  


