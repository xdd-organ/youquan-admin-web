<template>
    <div>
        <div class="swiper-container" :style="containerStyle">
            <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in imageList" :key="index">
                    <a :href="item.domain" target="_blank">
                        <img :src="item.cover_url" height="80px" width="150px" alt="">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import Swiper from 'swiper';
    export default {
        data() {
            return {
                swiper:null
            };
        },
        props:{
            imageList:[Array,Object],
            containerStyle:[Object,String],
            imgWidth:[Object,String],
        },
        watch:{
            imageList: {//监听类型变化
                handler: function(value) {
                    this.imageList = value;
                },
                deep: true
            },
            containerStyle:{
                handler: function(value) {
                    this.containerStyle = value;
                },
                deep: true,
            },
            imgWidth:{
                handler: function(value) {
                    this.imgWidth = value;
                },
                deep: true
            }
        },
        mounted(){
            var swiper = new Swiper('.swiper-container', {
                slidesPerView: 'auto',
                spaceBetween: 0,
                mousewheel: true,
                loop:true,
                observer:true,
                observeParents:true,
                autoplayDisableOnInteraction : false,
                speed:4000,
                autoplay: {
                    delay: 1,
                    autoplayDisableOnInteraction: false,
                    waitForTransition: true,
                },
            });
        },
        methods:{
            enter(){
                this.swiper.stopAutoplay();
            },
            leave(){
                this.swiper.startAutoplay();
            }
        }
    };
</script>
<style lang="less" scoped>
    .swiper-container {
        width: 100%;
        height: 100px;
        margin-top:20px;
        border:1px solid #dadada;
        box-sizing: border-box;
        align-items: center;
    }
    .swiper-wrapper{
        display: flex;
        align-items: center;
        text-align: justify;
        transition-timing-function: linear;
    }
    .swiper-slide {
        text-align: center;
        font-size: 18px;
        background: #fff;
        width: 220px;
        height:90%;
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        /*border:1px solid #dadada;*/
        box-sizing: border-box;
        img{
            /*border:1px solid #dadada;*/
        }
    }
    .imgWidth{
        width:imageWidth
    }
</style>