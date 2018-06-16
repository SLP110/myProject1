<template>
  <div id="app">
        <div class="box">
            <ul class="myUl">
              <li>
                <router-link to='home'>
                  <p class="icsize1">
                    <svg  class="icon" aria-hidden="true">
                        <use  xlink:href="#icon-shouye"></use>
                    </svg>
                  </p>
                  <p class="icsize">
                      首页
                  </p>
                </router-link>
              </li>


              <li>
                <router-link to='fenlei'>
                  <p class="icsize1">
                    <svg  class="icon" aria-hidden="true">
                        <use  xlink:href="#icon-fenlei"></use>
                    </svg>

                  </p>
                  <p class="icsize">
                      分类
                  </p>
                </router-link>
              </li>


              <li>
                <router-link to='gouwuche'>
                  <p class="icsize1">
                    <svg  class="icon" aria-hidden="true">
                        <use  xlink:href="#icon-gouwugouwuchedinggou"></use>
                    </svg>
                  </p>
                  <p class="icsize">
                      购物车
                  </p>

                </router-link>
              </li>


              <li>
                <router-link to='my'>
                  <p class="icsize1">
                    <svg  class="icon" aria-hidden="true">
                        <use  xlink:href="#icon-gerenzhongxin"></use>
                    </svg>

                  </p>
                  <p class="icsize">
                    我的
                  </p>

              </router-link></li>
            </ul>
        </div>

        <router-view/>


  </div>
</template>

<script>
import icon from './assets/js/icon/iconfont.js';
export default {
 
}
</script>


<style lang="scss" >
@import'reset-css/reset.css'; 
.icon {
   width: 1em; height: 1em;
   vertical-align: -0.15em;
   fill: currentColor;
   overflow: hidden;
}

#app {
    width:100%;
    .icsize{
        height: 60px;
        line-height:21px;

  }
  .icsize1{
    margin-top: 6px;
    line-height: 0;
    font-size: 25px;
  }
    .router-link-active{
      color:red;
    }   
 .myUl{
    display: flex;
    position:fixed;
    flex-flow:row nowrap;
    bottom:0;
    width:100%;
    height:50px;
    line-height: 50px;
    background: rgb(225, 243, 248);
    justify-content: space-around;
    li{
        a{
            text-decoration: none;          
        }
      }
  
  }
}
</style>




   
 


