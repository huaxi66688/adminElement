<template>
    <div>
        <el-row :gutter=20>
            <el-col :span='8'><div class='box bc-gray'>11</div></el-col>
            <el-col :span='8'><div class='box bc-red'>22</div></el-col>
            <el-col :span='8'><div class='box bc-gray'>11</div></el-col>
         </el-row>
    </div>
</template>
<script>
export default {
    name:'Index'
}
</script>
<style lang='less' scoped>
.box{
    height:20px;
}
.bc-gray{
    color:#f60;
    background-color:blue;
}
.bc-red{
    background-color:green;
}
</style>