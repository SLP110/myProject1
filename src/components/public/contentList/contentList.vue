<template>
    <div id='contentList'>
            <!--v-if='dataContentList.length!=0'数据获取不到 当dataContentList.length不等于0时候执行后面一句 -->
            <img :src="imgUrl" alt="网络错误!404"  >        
            <div  v-if='list.length!=0'>
                <div class="box">
                    <div  v-for='item in list'>
                        <img :src=" item.imgUrl" alt="网络错误!404">
                        <div class="box1">
                            <p class="goodsname">{{item.goodsName}}</p>
                            <p class="price">¥{{item.mallPrice}}</p>
                        </div>
                    </div>
                </div> 
            </div>

    </div>
</template>


<script>
export default {
    props:['list','imgUrl'],
    data(){
        return{
          
        }
    },
    created(){

        setTimeout(()=>{
            // console.log(this.list);
        },1000)
    }
}

</script>


<style lang="scss" scoped>
    #contentList{
        width:100%;
        img{
                width:100%;
            }
        .box{
            display: flex;
            flex-flow:row nowrap;          
            width:100%;
            overflow-x: scroll;
            height: 140px;
            >div{
                width:34%;
                height: 100px;
            }
            img{
                width:76.5px;
                height:76.5px;
            }
            .box1{
               p{
                   font-size: 13px;
               }
               .goodsname{
                    width:76px;
                    height: 27px;
                    overflow-y: scroll;
                   
               }
                .price{
                    color:red;
                }
            }
        }
    }
</style>


