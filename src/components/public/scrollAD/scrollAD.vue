<template>
    <div id="scrollAD">
        <swiper :options="swiperOption" class="mySwiper">
        <template v-if="myData.length">


            <swiper-slide v-for="(item,index) in myData" :key="index">
                <img :src="item.url2">
            </swiper-slide>


        </template>

        <template v-else>

            <swiper-slide></swiper-slide>

        </template>


            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        props: ['url'],
        data(){
            return {
                myData: [],
                swiperOption: {
                        spaceBetween: 0,
                        centeredSlides: true,
                        autoplay: {
                            delay: 500,
                            disableOnInteraction: false
                        },
                        pagination: {
                            el: '.swiper-pagination',
                            clickable: true
                        }
                    }
            }
        },
        //注册子组件
        components: {
            swiper,
            swiperSlide
        },
        created(){
                
            var _this = this;
            this.$http.get(this.url)
            .then(function(res){
                // console.log(res);
                if(res.data){
                    _this.myData = res.data.result.banner;
                }
            })
            .catch(function(error){
                console.log(error);
            })
        }
    }
</script>
<style scoped>
    #scrollAD {
        width: 100%;
        height: 170px;
        margin-top: 0px;
    }
     #scrollAD .mySwiper {
            width: 100%;
            height: 100%;
     }
      #scrollAD .mySwiper img {
                width:100%;
                height: 100%;
            }
        
    
</style>