<template>
    <div class="carousel">
        <Carousel autoplay >
            <CarouselItem>
                <div class="demo-carousel">
                    <img src="@/assets/imgs/banner1.png"/>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                    <img src="@/assets/imgs/banner2.png"/>
                </div>
            </CarouselItem>
            <CarouselItem>
                <div class="demo-carousel">
                    <img src="@/assets/imgs/banner3.png"/>
                </div>
            </CarouselItem>
            <!--<CarouselItem>
                <div class="demo-carousel">
                    <img src="http://www.paceic.com/FileUp/image/20130927/20130927103625_3599.jpg"/>
                </div>
            </CarouselItem>-->
        </Carousel>
    </div>
</template>

<script>
    export default {
        name: "carousel"
    }
</script>

<style scoped>

</style>