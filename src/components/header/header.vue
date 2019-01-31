<template>
    <div class="header">
        <div class="header_ logo">
            <img src="@/assets/imgs/logo3.png" width="400" height="100"/>
        </div>
        <div class="header_ group_name">
            <!--<h1>优荃电子</h1>-->
        </div>
        <div class="header_ header_right">
            <div class="search">服务热线：13802570139
                <Input search placeholder="请输入关键字"/>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "headerIndex",
        computed:{
        },
        data(){
            return{
            }
        },
        methods:{
        }
    }
</script>

<style scoped lang="less">
    .header {
        /*background: aqua;*/
        height: 100px;
        margin-top: 10px;
        width: 100%;
        .header_ {
            float: left;
            height: 100px;
        }
        .logo {
        }
        .group_name {
            padding-top: 25px;
        }
        .header_right {
            float: right;
        }
    }
    /*.group_name {*/
        /*font-size: 30px;*/
        /*font-weight: bold;*/
    /*}*/
    .search {
        margin-top: 50px;
        width: 200px;
        height: 100px;
    }
</style>