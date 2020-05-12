<template>
<div class='text'>
   <div id="editor">
     <input type="hidden" name="content" id="editor_txt"> </div>
    <div class='eee'><el-button type="primary">提交</el-button></div>
  </div>
</template>
<script>
import E from 'wangeditor'
export default {
   name: 'app',
   mounted(){
      var editor = new E("#editor"); 
      editor.create();
  }
}
</script>
<style lang='less' scoped>
 .text{
    .eee{
    
      margin-top:15px;
      
    }
 }

</style>