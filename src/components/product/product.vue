<template>
    <div class="product">
        <div class="product_center product_list">
            <ul>
                <li>产品中心</li>
                <li v-for="item in product_list">{{item}} <Button :size="delete_size" type="error" class="delete_product">删除</Button></li>
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
        <div class="product_center product_category">
            <div class="product_title_list product_title_list_first">
                <div class="product_title title_list_one">产品名称</div>
                <div class="product_title title_list_two">产品明细</div>
            </div>
            <div class="product_title_list">
                <div class="product_title title_list_one">11</div>
                <div class="product_title title_list_two">22</div>
            </div>
            <div class="create_category">
                <Button type="info" @click="show_product_category = true">新增产品中心</Button>
                <Modal
                        v-model="show_product_category"
                        title="新增产品内容"
                        @on-ok="ok"
                        @on-cancel="cancel">
                    产品名称：<Input v-model="temp_product_name" placeholder="新增产品名称" style="width:300px;" /><br/>
                    类目详细：<Input v-model="temp_product_name" placeholder="新增类目详细" style="width:300px;margin-top: 20px" />
                </Modal>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "product",
        data () {
            return {
                show_product_list: false,
                show_product_category: false,
                delete_size: "small",
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
                /*cursor: pointer;*/
            }
            .delete_product {
                float: right;
                margin-top: 5px;
                margin-right: 20px;
            }
        }
        .product_category {
            width: 80%;
            .product_title_list {
                font-size: 13px;
                .product_title {
                    height: 30px;
                    line-height: 30px;
                    float: left;
                }
                .title_list_one {
                    width: 20%;
                }
                .title_list_two {
                    width: 80%;
                }
            }
            .product_title_list_first {
                font-size: 15px;
                font-weight: bold;
                color: black;
            }
            .product_title_list:hover {
                cursor: pointer;
                font-weight: bold;
                /*background-color: white;*/
            }
            .create_category {
                padding-left: 15%;
            }
        }
    }

</style>