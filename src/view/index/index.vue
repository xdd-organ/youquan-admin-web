<template>
    <div class="all">
        <div>
            <div class="content_all content_left">
                <navigateIndex></navigateIndex>
            </div>
            <div class="content_all content_right">
                <div class="right_header">
                    touxiang
                </div>
                <div>
                    <!--<product></product>-->
                    <partner></partner>
                </div>
            </div>
        </div>
    </div>
</template>


<script>

    import footerIndex from '@/components/footer/footer.vue'
    import headerIndex from '@/components/header/header.vue'
    import navigateIndex from '@/components/navigate/navigate.vue'
    import carousel from '@/components/carousel/carousel.vue'
    import slide from '@/components/slide/slide.vue'
    import product from '@/components/product/product.vue'
    import partner from '@/components/partner/partner.vue'

    export default {
        name: 'index',
        components:{
            footerIndex, headerIndex, navigateIndex, carousel, slide, product, partner
        },
        data () {
            return {
            }
        },
        methods:{
            toView: function (index, name) {
                this.$router.push({
                    name: name,
                    params: {
                        type: index
                    }
                })
            }
        },
        created: function () {
        }
    }
</script>

<style lang="less" scoped>
    .all {
        .content_all {
            height: 100%;
            float: left;
        }
        .content_left {
            width: 20%;
            height: 950px;
            border-right: 1px solid #CCC;
        }
        .content_right {
            width: 80%;
            .right_header {
                height: 60px;
                border-bottom: 1px solid #CCC;
            }
        }
        a {
            text-decoration:none;
            color:inherit;
        }
    }
</style>