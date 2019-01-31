<template>
    <div class="navigate">
        <div class="navigate_logo"></div>
        <div class="navigate_td">产品管理</div>
        <div class="navigate_td">代理品牌</div>
        <div class="navigate_td">新闻资讯</div>
        <div class="navigate_td">人力资源</div>
        <div class="navigate_td">系统设置</div>
    </div>
</template>

<script>
    export default {
        name: "navigateIndex",
        computed:{
        },
        data(){
            return{
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
        }
    }
</script>

<style scoped lang="less">
    .navigate {
        /*background: #6a91ff;*/
        .navigate_logo {
            height: 60px;
        }
        .navigate_td {
            height: 50px;
            padding-left: 50px;
            line-height: 50px;
            font-size: 16px;
        }
        .navigate_td:hover {
            cursor: pointer;
            background: #2baee9;
        }
    }
</style>