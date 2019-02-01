<template>
    <div class="product">
        <div class="product_center product_list">
            <ul>
                <li>产品中心</li>
                <li v-for="(item, index) in product_list">
                    <span>{{item.name}}</span>
                    <Button @click="show_delete = true" :size="delete_size" type="error" class="delete_product">删除</Button>
                    <Modal v-model="show_delete" width="360">
                        <p slot="header" style="color:#f60;text-align:center">
                            <Icon type="ios-information-circle"></Icon>
                            <span>删除提示</span>
                        </p>
                        <div style="text-align:center">
                            <p>确认删除{{item.name}}</p>
                        </div>
                        <div slot="footer">
                            <Button type="error" size="large" long :loading="modal_loading" @click="deleteProduct(item,index)">确认删除</Button>
                        </div>
                    </Modal>
                </li>
            </ul>
            <div><Button type="info" @click="show_product_list = true">新增产品中心</Button></div>
            <Modal
                    v-model="show_product_list"
                    title="新增产品中心"
                    @on-ok="saveProduct"
                    @on-cancel="cancel">
                名称：<Input v-model="temp_product_name" placeholder="新增产品中心" style="width:300px;" />
            </Modal>
        </div>
        <div class="product_center product_category">
            <div class="product_title_list product_title_list_first">
                <div class="product_title title_list_one">产品名称</div>
                <div class="product_title title_list_two">产品明细</div>
            </div>
            <div class="product_title_list" v-for="item in product_category_list">
                <div class="product_title title_list_one">{{item.category_name}}</div>
                <div class="product_title title_list_two">{{item.category_content}}
                    <li class="delete_category">
                        <Button :size="delete_size" type="error" class="delete_product">删除</Button>
                    </li>
                </div>
            </div>
            <div class="create_category">
                <Button type="info" @click="show_product_category = true">新增产品中心</Button>
                <Modal
                        v-model="show_product_category"
                        title="新增产品内容"
                        @on-ok="saveProductCategory"
                        @on-cancel="cancel">
                    产品名称：<Input v-model="temp_product_category.category_name" placeholder="新增产品名称" style="width:300px;" /><br/>
                    类目详细：<Input v-model="temp_product_category.category_content" placeholder="新增类目详细" style="width:300px;margin-top: 20px" />
                </Modal>
            </div>
        </div>
    </div>
</template>

<script>
    import http from '@/utils/http.js'
    // import axios from 'axios'

    export default {
        name: "product",
        data () {
            return {
                show_product_list: false,
                show_delete: false,
                show_product_category: false,
                delete_size: "small",
                temp_product_name: "",
                modal_loading: false,
                temp_product_category: {
                    category_name: "",
                    category_content: "",
                },
                product_list: [],
                product_category_list: [
                    {
                        category_name: "产品名称",
                        category_content: "产品详细内容产品详细",
                    }
                ]
            }
        },
        methods: {
            saveProduct () {
                var _this = this;
                this.$Message.info('新增成功');
                http.post('/product/insert',{"name": _this.temp_product_name})
                    .then(function(response) {
                        if (response.code == 100) {
                            _this.product_list.push(response.data);
                            _this.temp_product_name = "";
                        } else {
                            _this.$Message.info('新增失败');
                        }
                    });
            },
            saveProductCategory () {
                this.$Message.info('新增成功');
                this.product_category_list.push(this.temp_product_category)
                this.temp_product_category = {};
            },
            cancel () {
                this.$Message.info('取消新增');
                this.temp_product_name = "";
            },
            deleteProduct(product, index) {
                var _this = this;
                http.post('/product/updateProduct',{"id":product.id,"status": "1"})
                    .then(function(response) {
                        if (response.code == 100) {
                            console.log(index)
                            _this.product_list.splice(index, 1)
                            _this.$Message.info('删除成功');
                            _this.show_delete = false;
                        } else {
                            _this.$Message.info('删除失败');
                        }
                    });

            },
        },
        created:function () {
            var _this = this;
            http.post('/product/listByProduct',{"status": "0"})
                .then(function(response) {
                    _this.product_list = response.data;
                });
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
                padding-left: 10%;
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
                    padding-left: 3%;
                }
                .title_list_one {
                    width: 20%;

                }
                .title_list_two {
                    width: 80%;

                }
                .delete_category {
                    float: right;
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