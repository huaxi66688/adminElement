<template>
    <div id='admin'>
        <Header/>
        <Nav/>
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
    // con     :class="[menuState?'colse':'open']"
}
</script>
<style scoped>
#admin{
    height:100vh;
    width:100vw;
    background-color:#eee;
}
</style>