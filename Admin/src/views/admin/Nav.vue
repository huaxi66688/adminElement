<template>
  <div id='nav_wrap' >
    <h3>Anonymity</h3>
     <el-menu
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      :collapse= isCollapse
      active-text-color="#ffd04b"
      router>
            <!--一级菜单-->
            <template  v-for='(item,index) in routers'>
                <el-submenu  v-if='!item.hidden' :key='item.id' :index="index + '' ">
                <template slot="title">
                   <i class="el-icon-location">{{item.meta.icon}}</i>
                   <span slot="title">{{item.meta.name}}</span>
                </template>
                <!--子级菜单-->
               <template v-for="subItem in item.children">
                    <el-menu-item  :key="subItem.id" :index="subItem.path">{{subItem.meta.name}}</el-menu-item>
               </template>
              </el-submenu>
            </template>
     </el-menu> 
  </div>  
</template>
<script>
  export default {
    name:"Nav",
    data(){
      return{
        //data:console.log(this.$router.options.routes),
        routers:this.$router.options.routes,
        //isCollapse:""
        //isCollapse:this.$store.state.app.isCollapse
        //isCollapse:''
    }
    },
    computed:{
         isCollapse(){
           return  this.$store.state.app.isCollapse
       }
 	  }
  }
</script>
<style lang='less' scoped>
@import "../../assets/css/base/elementui.less";
@import "../../assets/css/base/config.less";
#nav_wrap{
  position:fixed;
  top:0;
  left:0;
  right:0;
  width:@navMaxMenu;
  height:100vh;
  background-color: #344a5f; 
  transition:all .3s ease 0s;
  h3{
    height:75px;
    text-align:center;
    line-height:75px;
    background-color: #eee;
  }
  >.el-menu{
         width:@navMaxMenu; 
  }
}
.open{
  #nav_wrap{ width:@navMaxMenu;}
}
.close{
    #nav_wrap{ 
      width:@navMinMenu;
      h3{
       width:@navMinMenu; 
      //  height:75px;
      //  text-align:center;
      //  line-height:75px;
    
      }
      >.el-menu{
         width:@navMinMenu; 
      }
    }
}
</style>
   <!-- :collapse='isCollapse' -->