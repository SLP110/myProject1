<template>
    <div id="uList">
        <div v-for='item in myData'>
            <h2>{{item.name}}</h2>
          
        <div class="box">
            <div  v-for='key in item.threeCategoryList' >
                <img class="img1" :src="key.imgUrl" alt="网络错误!404">
                <p>{{key.threeName}}</p>
            </div>
        </div>
           
        </div>
    </div>
</template>


<script>
export default {
    props:['classid'],
    data(){
        return{
            myData:[],
    
        }
    },
    methods:{

    },

    created(){

    //    `http://localhost:3000/api/Fl/FlRight? categoryId=${this.categoryId} & age=${this.age} & name=${this.name}`

        //?categoryId=4
        var myUrl='http://localhost:3000/api/Fl/FlRight?classid=4';
        this.$http.get(myUrl)
        .then((res)=>{
                // console.log(res);
                this.myData=res.data.result.classTwoList;
                console.log(this.myData);
        })
        .catch(function (error) {
            // console.log(error);
        })
    },
    watch:{
        classid(){
            console.log(this.classid);
            var myUrl=`http://localhost:3000/api/Fl/FlRight?classid=${this.classid}`;
            
            this.$http.get(myUrl)
            .then((res)=>{
                    // console.log(res);
                    this.myData=res.data.result.classTwoList;
                    console.log(this.myData);
            })
            .catch(function (error) {
                // console.log(error);
            })
        },
        
    }
}
</script>

<style lang="scss" scoped>
    #uList{
        width:60%;
        margin-bottom: 50px;
        .box{
            width:100%;
            height: 100%;
            display: flex;
            flex-flow: row wrap;
            div{
                width:78px;
                height: 84px;
                padding: 10px;
                box-sizing: border-box;
                img{
                    width:48px;
                }
                p{
                    text-align: center;
                }
            }
        }
        h2{
            margin: 15px;
        }
    }
</style>
