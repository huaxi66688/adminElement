<template>
    <div class='login'> 
        <div class='logins'>
            <ul class='menu'>
                <li v-for='(item) in tab'  :key='item.id' :class="{'current':item.current}" @click='tagMenu(item)'>{{item.tag}}</li>
            </ul>
            <el-form :model="ruleForm" status-icon :rules="rules" label-width="100" class="loginruleForm" ref='loginForm'>
            <el-form-item prop="email">
                <label>邮箱</label>
                <el-input type="text" v-model="ruleForm.email" ></el-input>
            </el-form-item>
            <el-form-item prop="pass">
                <label>密码</label>
                <el-input type="text" v-model="ruleForm.pass"></el-input>
            </el-form-item>
            <el-form-item prop="password" v-show="model==='register'">
                <label>确认密码</label>
                <el-input type="text" v-model="ruleForm.password"></el-input>
            </el-form-item>
            <el-form-item prop="svg">
                <label>验证码</label>
                <el-row :gutter="20">
                  <el-col :span="15"><el-input v-model="ruleForm.svg"></el-input></el-col>
                  <el-col :span="9"><el-button  type="primary" :disabled='svgCode.status' @click="getSms">{{svgCode.text}}</el-button></el-col>
                </el-row>
            </el-form-item>
            <el-form-item>
                <el-button  type="primary" @click="submitForm('loginForm')" c class="sumbit" :disabled='loginBtn'>{{model==='login'?"登录":"注册"}}</el-button>
            </el-form-item>
            </el-form> 
        </div>
    </div>
</template>
<script>
import sha1 from 'js-sha1';
import  { GetSms , Register , Login } from '../api/login.js'
import  { stripscript, valEmail,valPass,valSvg} from '../utils/validate'
//console.log(stripscript)
export default {
    name:'Login',
      data() {
         //验证码
        let validateEmail = (rule, value, callback) => {
            //过滤后的数据     //console.log( stripscript(value))
            //   let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;//邮箱格式正则
            if (value === '') {
              callback(new Error('请输入邮箱'));
            } else if(valEmail(value)) {// else if( !reg.test(value)) {
              callback(new Error('邮箱格式有误'));
            }else{
              callback();
            }
        };
        //密码
        let validatePass = (rule, value, callback) => {
            //过滤后的数据     //console.log( stripscript(value))
            this.ruleForm.pass = stripscript(value)
            if (value === '') {
                return   callback(new Error('请输入密码'));
            } else if(valPass(value)) {
                return   callback(new Error('密码格式有误'));
            }else{
                  callback();//执行
            }
        };
        let validatePassword = (rule, value, callback) => {
            if(this.model === "login"){
                callback();//直接执行
            }
            this.ruleForm.password = stripscript(value)
            if (value === '') {
            callback(new Error('请再次输入密码'));
            } else if (value !== this.ruleForm.pass) {
            callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
        };
        let validateSvg = (rule, value, callback) => {
                this.ruleForm.svg = stripscript(value)
                if ( value === '') {
                 return   callback(new Error('请输入验证码'));
                } else if(valPass(value)) {
                  return  callback(new Error('验证有误'));
                }else{
                  callback();//执行
                }
        };
        return {
            ruleForm: {
                email: '',
                pass: '',
                password:'',
                svg:''
            },
            rules: {
                email: [
                    { validator: validateEmail, trigger: 'blur' }
                ],
                pass: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                password: [
                    { validator: validatePassword, trigger: 'blur' }
                ],
                svg: [
                    { validator:validateSvg , trigger: 'blur' }
                ]
            },
            tab:[
                {tag:'登录',current:true,type:"login"},//属性绑定
                 {tag:'注册',current:false,type:"register"}
            ],
            model:'login',
            loginBtn:false,
            svgCode:{
                status:false,
                text:'获取验证码'
            },
            timer: null
        }
      },
      methods:{
        tagMenu(date){//接收传进去的值
            console.log(date)
            //data.current = true
            //this.model = data.type
            this.tab.forEach((ele,index) =>{
                //console.log(ele,index)
                ele.current = false;
            });
                date.current = true;
                this.model = date.type;
                //重置表单
                // this.$refs[formName].resetFields();
                this.$refs["loginForm"].resetFields();
        },
        //验证码
        getSms(){
            //获取之前先判断邮箱是否为空
            if(this.ruleForm.email==''){ 
                this.$message.error("邮箱不能为空！！")
                return false
            }
            if(valEmail(this.ruleForm.email)){
                this.$message.error("邮箱格式不正确！！")   
                return false
            }
            //赋值
            let requestData={
                username:this.ruleForm.email,
                module:this.model
            }
            //修改获取验证码状态
            this.svgCode.status = true
            //this.svgCode.text = '正在发送中'
            this.svgCode.text = '正在发送中'
            setTimeout(()=>{//延长方法
               GetSms(requestData).then(res=>{ 
                 let data =res.data
                 //console.log(data)
                 this.$message({
                    // message:'获取验证码成功',
                    message:data.message,
                    type:'success'
                })
                this.loginBtn = false;//开启登录按钮
                this.cutDown(10);
                }).catch(error=>{
                    console.log(error);
                })
            },3000)
        },
        submitForm(formName){
            //
            this.$refs[formName].validate((valid) => {
             if (valid){
                    //  model === 'login'?this.login():this.register() //三目写法
                    if( this.model === 'login'){
                        this.login()
                    }else{
                        this.register()
                    }
            }else{
                    console.log('error submit!!');
                    return false;
            }
            });
        },
        register(){
           let data={
                username:this.ruleForm.email,
                password:sha1(this.ruleForm.pass),//加密
                code:this.ruleForm.svg,
                // module:'regsiter'
            }
            Register(data).then(res => {
                       //console.log(response)
                let datas=res.data
                this.$message({
                    message:datas.message,
                    type:'success'
            })    
               //模拟注册成功
                togMenu (tab[0])
                clearCountDown()
           }).catch(error=>{
              console.log(error);
           })
        },
        login(){
            let requestData={
                username:this.ruleForm.email,
                password:sha1(this.ruleForm.pass),//sha1加密,在NETWORK查看
                code:this.ruleForm.svg,
            } 
            //Login(requestData).then(res => {
            this.$store.dispatch('app/login',requestData).then(response=>{
                //console.log(res)
               console.log('登录成功')
              //Deugger
               this.$router.push('/admin')
           }).catch(error=>{
                console.log('登录失败');
           })
       },
        //定时器,
        cutDown(number){
               //console.log('setTimeout')
                let time = number;
                this.timer = setInterval(()=>{
                  time--;
                  //console.log(time)
                  if(time === 0){
                    clearInterval(this.timer)
                    this.svgCode.text ='再次发送';
                    this.svgCode.status = false;
                  }else{
                    this.svgCode.text =`倒计时${time}`
                  }
               },1000)
        }

      
      
      }

}
</script>
<style lang='less' scoped>
  @import 'assets/css/login.less';
</style>