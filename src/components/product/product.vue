<template>
    <div class="product">
        <div class="product_center product_list">
            <ul>
                <li>产品中心</li>
                <li v-for="item in product_list">{{item}}</li>
                <li><Button type="info" @click="show_product_list = true">新增产品中心</Button></li>
            </ul>
            <Modal
                    v-model="show_product_list"
                    title="新增产品中心"
                    @on-ok="ok"
                    @on-cancel="cancel">
                名称：<Input v-model="temp_product_name" placeholder="新增产品中心" style="width:300px;" />
            </Modal>
        </div>
        <div class="product_center product_category">产品类目</div>
    </div>
</template>

<script>
    export default {
        name: "product",
        data () {
            return {
                show_product_list: false,
                temp_product_name: "",
                product_list: [
                    "电源管理",
                    "音频",
                    "分立器件",
                    "MCU/处理",
                    "光电器件"
                ]
            }
        },
        methods: {
            ok () {
                this.$Message.info('新增成功');
                this.product_list.push(this.temp_product_name)
                this.temp_product_name = "";
            },
            cancel () {
                this.$Message.info('取消新增');
                this.temp_product_name = "";
            }
        }
    }
</script>

<style scoped lang="less">
    .product{
        .product_center {
            float: left;
        }
        .product_list {
            border-right: 1px solid #CCC;
            width: 20%;
            li:first-of-type{
                font-size: 16px;
                font-weight: bold;
                color: black;
            }
            li {
                font-size: 14px;
                text-align: center;
                height: 35px;
                line-height: 35px;
            }
            li:hover {
                background: white;
                font-weight: bold;
                cursor: pointer;
            }
        }
        .product_category {

        }
    }

</style>