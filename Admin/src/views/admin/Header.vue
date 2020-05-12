<template>
	<div id="header-wrap">
		<div class='pull-left' @click='navState'>
            <span></span><span></span><span></span>
        </div>
        <div class='right'>
            <div class='user-info'>
                <div class='user-center'>{{user}}</div>
                <div class='user-photo'><img src='../../assets/images/one.jpg'/></div>
            </div>
            <div class='user-icon' @click='loginout'>
                <img src='../../assets/icons/out.png'/>
            </div>
        </div>
	</div>
</template>
<script>
export default {
    name:'Header',
    data(){
        return{
            data:'管理员',
        }
    },
    methods:{
        navState(){
            this.$store.commit('app/SET_COLLAPSE')//获取仓库里的值,监听变化
        },
        loginout(){//退出
            this.$store.dispatch('app/loginout').then(()=>{
				this.$router.push('./login')
          })
        }
    },
    computed: {
        user(){
            return this.$store.state.app.username
        },
    }
}
</script>
<style  lang ='less' scoped>
 @import "../../assets/css/base/config.less"; 
	#header-wrap{
		position:fixed;
		left:@navMaxMenu;
		top: 0;
		right: 0;
		height: 75px;
		line-height: 75px;
		background-color:#333;
		/* @include webkit(box-shadow , 0 3px 16px 0  rgba(0,0,0,.1));
		@include webkit(transition ,all .5s ease 0s); */
        /* -webkit-box-shadow:0 3px 16px 0  rgba(0,0,0,.1); */
        transition:all .3s ease 0s;
        >.pull-left{
            float:left;
            box-sizing: border-box;
            right: 55px;
            top: 50px;
            padding-top: 12px;
            width: 40px;
            height: 40px;
            cursor: pointer;
            border-radius: 50%;
            background-color: transparent;
            /* transition: background-color .3s;
            &:hover{
            background-color: #6bc30d;
            } */
            >span{
                position: relative;
                top: 0;
                display: block;
                width: 26px;
                height: 2px;
                margin: 0 auto 5px;
                background-color: #fff;
                transition: all .32s;
                transform: rotate(0deg);
            }
        }
        >.right{
            float:right;
            position:relative;
            .user-info{
                    .user-center{
                        position:absolute;
                        right:180px;
                        top:0;
                        bottom:0;
                        width:60px;
                    }
                    .user-photo{
                        position:absolute;
                        right:250px;
                        top:0;
                        bottom:0;
                        width:60px;
                        text-align:center;
                        img{
                            position:absolute;
                            width:50px;
                            height:50px;
                            top:10px;
                            border-radius: 50%;
                        }
                    }
            }
            .user-icon{
                position:absolute;
                right:30px;
                top:0;
                bottom:0;
                width:25px;
                img{
                right:30px;  
                width:25px;
                  height:25px;
                }
            }
        }
        
    }
    .open{
      #header-wrap{left:@navMaxMenu;}
    }
    .close{
      #header-wrap{left:@navMinMenu;}
    }
</style>

