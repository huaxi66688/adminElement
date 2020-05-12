<template>
    <div id="main-wrap">
        <div class="main-content">
			<div class="content">
				<router-view />
			</div>
        </div>
	</div>
</template>
<script>
export default {
    name:'Content'
}
</script>
<style lang='less' scoped>
 @import "../../assets/css/base/config.less";
 #main-wrap{
	height: 100vh;
    .main-content{
		height: 100vh;
		position: fixed;
		top: 75px;
		left:@navMaxMenu;
		display: inline-block;
		right: 0;
		bottom: 0;
		// padding-top:30px;
		// padding-left:30px;
		// padding-right:30px;
		border: 30px solid #fff;
		border-bottom: none;
		transition:all .3s ease 0s;
	}
    .content{
        /* width:100%;
        height:100%;
        padding-top:30px;
				padding-left:30px;
				padding-right: 30px;
				padding-bottom: 0;	 */
				background-color: #fff;
				/* -webkit-box-sizing: border-box; */
				/* box-sizing: border-box; */
				@include webkit(box-sizing ,all .5s ease 0s);
				
		}
 }
   .open{
     #main-wrap{
		 .main-content{left:@navMaxMenu;}
	 }
    }
    .close{
     #main-wrap{
		 .main-content{left:@navMinMenu;}
	 
    }
    }
</style>