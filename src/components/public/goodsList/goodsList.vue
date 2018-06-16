<template>
    <div id="goodsList" v-if='globalGoodsList.length!=0'>
        <div class="box1">
            <div v-for="item in globalGoodsList" class="des">
                <img :src="item.imgUrl" alt="网络错误!404">
                <div class="description">
           

                    <p>{{item.goodsName | sliceSrt}} </p>
                    <span>¥{{item.mallPrice}}</span>
                    <s>¥{{item.marketPrice}}</s>
                </div>
            </div>
        </div>
    </div>
</template>


<script>



export default {
    props:['globalGoodsList'],
    data(){
        return{

        }
    },
    filters:{
        sliceSrt(value){
            // console.log(value);
            if(value.length>20){
                return value.slice(0,20)+'...';
            }else{
                return value
            }
        }
    },
    created(){
        
    }
}
</script>

<style lang="scss" scoped>



    #goodsList{
        width:100%;
        .box1{
            width:100%;
            display: flex;
            flex-flow: row wrap;
            .des{
                width: 45%;
                justify-content: center;
                flex: 1;
                img{
                        width:132px;
                        height: 132px;
                    }
               .description{
                    width:134px;
                    
                    p{
                        font-size: 13px;
                        height: 50px;
                        line-height: 23px;
                        margin: 5px;
                    }
                    span{
                        color:red;
                        display: inline-block;
                        margin: 5px;
                    }
                    s{
                        color:#bbb;
                    }
                }
            }
        }
    }
</style>
