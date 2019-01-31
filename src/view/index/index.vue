<template>
    <div class="all">
        <div>
            <div class="content_all content_left">
                <navigateIndex></navigateIndex>
            </div>
            <div class="content_all content_right">右</div>
        </div>
    </div>
</template>


<script>

    import footerIndex from '@/components/footer/footer.vue'
    import headerIndex from '@/components/header/header.vue'
    import navigateIndex from '@/components/navigate/navigate.vue'
    import carousel from '@/components/carousel/carousel.vue'
    import slide from '@/components/slide/slide.vue'

    export default {
        name: 'index',
        components:{
            footerIndex, headerIndex, navigateIndex, carousel, slide
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
            height: 100px;
            float: left;
        }
        .content_left {
            width: 20%;
            height: 100%;
            border-right: 1px solid #CCC;
        }
        .content_right {
            width: 80%;
        }
        a {
            text-decoration:none;
            color:inherit;
        }
    }
</style>