<template>
    <div id='admin' :class="[Mentab?'close':'open']">
        <Nav/>
         <Header/>
         <Content/>
       </div>
</template>
<script>
import Nav from './admin/Nav'
import Header from './admin/Header'
import Content from './admin/Content'

export default {
    name:'Admin',
    components:{Nav,Header,Content},
    //components:{Nav,Header,Content},
     computed:{
         Mentab(){
           return  this.$store.state.app.isCollapse
       }
 	  }
}


</script>
<style scoped>
#admin{
    height:100vh;
    width:100vw;
    background-color:#eee;
}
</style>