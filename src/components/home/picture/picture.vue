<template>
    <div id='picture'>
        <div class="box" >
            <img :src="item.url2" alt="404!" v-for='item in this.dataPassage'>
        </div>
        
        
    </div>
</template>


<script>
export default {
    props: ['dataPassage'],
    data(){
        return{

        }
    },
    created(){
        setTimeout(()=>{
            //  console.log(this.dataPassage);
        },2000)
       
    }
}
</script>


<style lang="scss" scoped>
    .box{
        width:100%;
        display: flex;
        align-items: center;
        flex-direction: column;
        flex-flow: row wrap;
    }
    .box img{
        width:50%;
        height: 90px;
        justify-content: space-around;
        
    }
</style>
