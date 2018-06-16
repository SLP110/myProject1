<template>
    <div id='fenlei'>
        <div class="title">这里是分类维尼海购</div>
        <div class="box">
            <!-- 左边列表 -->
             <ul class="left" >
                 <li v-for='item in myData' v-on:click="getColor(item)">{{item.classdesc}}</li>
            </ul>
            <!-- 右边内容区 -->
            <ulList :classid='classid' class="right"></ulList>
        </div>
    </div>
</template>


<script>
import ulList from '@/components/fenlei/ulList'
export default {
    data(){
        return{
            myData:[],
            classid:4
        }
    },
    components:{
        ulList,
    },
    methods:{
        getColor(item){
            // console.log(1111);
           this.classid=item.classid;
        }
    },
    created(){
        //  <!-- 左边列表 -->
        var myUrl='http://localhost:3000/api/Fl/FlLeft';
        this.$http.get(myUrl)
        .then((res)=>{
                console.log(res);
                this.myData=res.data.result;
                console.log(this.myData);

        });



    }
}
</script>

<style lang="scss" scoped>
    #fenlei{
        width:100%;
        .title{
            width:100%;
            height: 35px;
            text-align: center;
            line-height: 35px;
            background: gainsboro;
        }
        .box{
            display: flex;
            flex-flow: row nowrap;
            .left{
                width:25%;
                background: chartreuse;
                font-size: 15px;
                li{
                    margin-left: 20px;
                    margin-top: 35px;
                }
            }
            .right{
                width:75%;
            }
            
        }
    }
    
</style>
