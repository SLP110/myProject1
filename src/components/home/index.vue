<template>
    <div id='home'>
        <scrollAD :url='"http://localhost:3000/api/home/Top"'></scrollAD>
        <navBar></navBar>
        <pictures :dataPassage='myData1' ></pictures>
        <contentList v-for='(item,index) in propsList' :list='item' :imgUrl='propsImg[index]' :key='item+index'></contentList>
        <goodsList :globalGoodsList='globalGoodsList'></goodsList>
    </div>
</template>


<script>
import scrollAD from '@/components/public/scrollAD/scrollAD';
import pictures from '@/components/home/picture/picture';
import navBar from '@/components/home/navBar/navBar';
import contentList from '@/components/public/contentList/contentList';
import goodsList from '@/components/public/goodsList/goodsList'
export default {
    data(){
        return{
            myData1:[],//picture
            propsList:[], //限时抢购之后和全球精选好货之前
            propsImg:[],//限时抢购之后和全球精选好货之前
            globalGoodsList:[],//全球精选好货
        }
    },
    components:{
        scrollAD,
        pictures,
        navBar,
        contentList,
        goodsList

    },
    created(){
        var myUrl='http://localhost:3000/api/home/Top';
        this.$http.get(myUrl)
        .then((res)=>{
            // console.log(res);
            this.myData1=res.data.result.subject;
            // console.log(this.myData1);

           //限时抢购
            this.propsList.push(res.data.result.activity.goodsList);
            this.propsImg.push(res.data.result.activity.imgUrl);
            //限时抢购之后和全球精选好货之前
            for(var i=0;i<res.data.result.newSubject.length;i++){
                 this.propsList.push(res.data.result.newSubject[i].goodsList);
                 this.propsImg.push(res.data.result.newSubject[i].url2)
            }
            // console.log(this.propsList);
            // console.log(this.propsImg);
        })

        var myUrl='http://localhost:3000/api/home/goodList';
        this.$http.get(myUrl)
        .then((res)=>{
            // console.log(res);
            this.globalGoodsList=res.data.result;
            // console.log(this.globalGoodsList);

          
        })

       

        
    }
}
</script>

<style lang="scss" scoped>
    #home{
        margin-bottom: 1.5625rem;
    }
</style>
