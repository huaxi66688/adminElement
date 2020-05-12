<template>
  <div id="Container">
    <el-container>
      <el-main>
           <!-- <ArticleShow></ArticleShow> -->
      </el-main>
      <el-aside>
          <div class='author'>
            <div class='author-info'>
              <h3>关于博主</h3>
              <ul>
                  <li>个人简介：一枚穷屌丝，三流毕业，传统文化爱好者，IT民工，日语の动漫</li>
                  <li>座右铭：不在绝望中僭牄，就在绝望中鵚橃。</li>
                  <li>不知前方</li>
              </ul>
                </div>
          </div>

          <div class="search">
              <div class="search-main">
                <input type="text" placeholder="请输入搜索内容">
               <i class="el-icon-search"></i>
             </div>
             <div class="search-article">
               <ul>
                  <li v-for='item in articleTag'><router-link to=''>{{item}}</router-link></li>
               </ul>
                <div class="cover"></div>
             </div> 
          </div>
      </el-aside>
    </el-container>
  </div>
</template>
<script>
// import ArticleShow from "./ArticleShow";
export default {
    name: "Container",
    data(){
      return{
         articleTag:['全部文章','React','Vue','Nodejs','JavaScript','HtmlCSS']
      }
      
    },
    components:{
      
    },
    
}
</script>
<style scoped lang="less">
  #Container{
    padding-top: 36px;
    width: 100%;
    user-select: none;
    height:2000px;
    background: #6bc30d;
    >.el-container{
      box-sizing: border-box;
      width: 100%;
      margin:0 auto;
      padding:0 50px;
      >.el-aside{
        width: 300px;
        // background-color: aqua;
        >.author{
          width: 100%;
          background-color:#fff;
          // padding-bottom:10px;
          >.author-info{
            box-sizing: border-box;
            width:100%;
            height:210px;
            >h3{
              height:50px;
              width:100%;
              padding:10px;
              // background-color: aqua;
            }
            >ul{
              width:100%;
              >li{
                 width:100%;
                 padding:10px;
              }
            }
          }
        }
        >.search{
          width:100%;
          margin-top:20px;
          padding-bottom: 20px;
           background-color: #fff;
          >.search-main{
            position:relative;
            box-sizing:border-box;
            height:80px;
            padding:20px;
            background-color:grey;
            >input{
              border:40px;
              width:100%;
              //overflow: hidden;
              height:40px;
              border-radius:22px;
              text-indent: 2rem;
            }
            >i{
              position: absolute;
              right: 40px;
              top: 32px;
              width: 22px;
              height: 22px;
              font-size: 16px;
              cursor: pointer;//点击
            }
          }
          >.search-article{
            position: relative;//为cover设置的
            margin-top:10px;
            width:100%;
            >ul{
              width:100%;
              >li{
              position: relative;//相对于提升本身层级
              z-index: 1;
              width:100%;
              height:40px;
              line-height: 40px;
              border-bottom:1px solid #f60;
              >a{
                width:100%;
                height:40px;
                line-height: 40px;
                padding:0 30px;
               }
                &:hover{
                  background-color: #6bc30d;
               }
              }
            }
            >.cover{
              position: absolute;
              left:0;
              top:0;
              width:100%;
              height:40px;
              border-right: 5px solid #000;
              background-color: rgba(0,0,0,.5)
            }

            }
          }


        }
      }
    }
  
         
</style>




















