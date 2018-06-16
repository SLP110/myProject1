<template>
    <div id="navBar">
        <div id="box">
            <span class="icons">
                <svg  class="icon" aria-hidden="true">
                    <use  xlink:href="#icon-bowuguan"></use>
                </svg>
            </span>

            <span class="icons">
                <svg class="icon " aria-hidden="true">
                        <use xlink:href="#icon-zuanshi"></use>
                </svg>
            </span>

            <span class="icons">
                <svg class="icon " aria-hidden="true">
                    <use xlink:href="#icon-xinpinzhuanqu"></use>
                </svg>
            </span>

            <span class="icons">
                <svg class="icon " aria-hidden="true">
                    <use xlink:href="#icon-gouwu"></use>
                </svg>
            </span>
            
            
            <ul>
                <li>国家馆</li>
                <li>品牌街</li>
                <li>新品</li>
                <li>超值量版</li>
            </ul>
        </div>
    </div>
</template>

<script>
import icon from '../../../assets/js/icon/iconfont.js';
export default {
    
}
</script>

<style lang="scss" scoped>

    
    #box{
        width:100%;
        .icons{
            font-size: 30px;
            width:55px;
            height: 55px;
            display: inline-block;
            border-radius: 25px;
            background: rgb(233, 216, 216);
            margin-left: 21px;
            margin-top: 15px;
            line-height:55px;
            text-align: center;
        }
        ul{
            display: flex;
            flex-direction: row;
            height: 33px;
        }
        ul li{
            flex: 1;
            justify-content: center;
            align-items: center;
            text-decoration: none;
            line-height: 33px;
            text-align: center;
        }
       

    }
</style>
