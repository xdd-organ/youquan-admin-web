<template>
    <div class="copy">
        <span>Copyright © 2019 深圳市优荃电子有限公司版权所有. All Rights reserved</span>
        <span style="float: right;color: #666;">热线电话：0755-82240760</span>
    </div>
</template>

<script>
    export default {
        name: "footerIndex",
        props: {
            theme: {
                type: String,
                default: 'dark'
            }
        },
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

<style scoped>
    .copy{
        margin-top: 20px;
    }
</style>