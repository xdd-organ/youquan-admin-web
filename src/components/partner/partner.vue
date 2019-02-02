<template>
    <div class="partner">
        <div class="condition">
            <div>
                公司名称:<Input class="abc" v-model="partnerParams.name" placeholder="输入公司名称" style="width: 200px" />
                &nbsp;&nbsp;
                公司网址:<Input class="abc" v-model="partnerParams.domain" placeholder="输入公司网址" style="width: 200px" />
                &nbsp;&nbsp;
                <Button type="primary">搜索</Button>
            </div>
            <div class="create">
                <Button type="primary" class="create" @click="show_create_partner=true">新增代理公司</Button>
                <Modal
                        v-model="show_create_partner"
                        title="新增产品内容"
                        @on-ok="savePartner"
                        @on-cancel="cancel">
                    <div class="create_properties">公司名称：<Input v-model="temp_partner.name" placeholder="公司名称" style="width:300px;" /></div>
                    <div class="create_properties">
                        <!--<Input v-model="temp_partner.cover_url" placeholder="公司logo图片" style="width:300px;" />-->
                        <Upload action="http://127.0.0.1:8080/file/upload"
                                :headers="upload_hearders" :show-upload-list="false"
                                :on-success="uploadSuccess" style="width:200px;">
                            公司logo：<Button icon="ios-cloud-upload-outline">上传公司logo</Button>
                        </Upload>
                        <span >显示图片 {{temp_img}}</span>
                    </div>
                    <div class="create_properties">公司网站：<Input v-model="temp_partner.domain" placeholder="公司网站" style="width:300px;" /></div>
                    <div class="create_properties">公司介绍：<Input v-model="temp_partner.content" placeholder="公司介绍" style="width:300px;" /></div>
                </Modal>
            </div>
        </div>
        <div class="partner_table">
            <div class="partner_td">
                <div class="partner_content partner_index">序号</div>
                <div class="partner_content partner_name">公司名称</div>
                <div class="partner_content partner_logo">公司logo</div>
                <div class="partner_content partner_domain">公司网站</div>
                <div class="partner_content partner_desc">公司描述</div>
                <div class="partner_content partner_operation">操作</div>
            </div>
        </div>
        <div class="partner_table">
            <div class="partner_td" v-for="(item, index) in partner_list">
                <div class="partner_content partner_index">{{index + 1}}</div>
                <div class="partner_content partner_name">{{item.name}}</div>
                <div class="partner_content partner_logo">{{item.cover_url}}</div>
                <div class="partner_content partner_domain">{{item.domain}}</div>
                <div class="partner_content partner_desc">{{item.content.substring(0,30)}}...</div>
                <div class="partner_content partner_operation">
                    操作
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import http from '@/utils/http.js'

    export default {
        name: "partner",
        data () {
            return {
                partnerParams: {},
                partner_list: [],
                show_create_partner: false,
                temp_partner: {},
                temp_img: "",
                upload_hearders: {
                  ticket: 1000,
                },
            }
        },
        methods:{
            cancel () {
                this.$Message.info('取消新增');
                this.temp_partner = {};
            },
            savePartner () {

            },
            uploadSuccess(file) {
                this.temp_img = file.data[0].url
            }
        },
        created() {
            var _this = this;
            http.post('/partner/listByPartner',{"status": "0"})
                .then(function(response) {
                    console.log(response)
                    _this.partner_list = response.data;
                });
        },
    }
</script>

<style scoped lang="less">
    .partner {
        .condition {
            border-bottom: 1px solid #CCC;
            padding-top: 15px;
            padding-left: 15px;
            padding-right: 15px;
            width: 100%;
            height: 100px;
            .create {
                margin-top: 5px;
                float: left;
                .create_properties {
                }
            }
        }
        .partner_table {
            /*padding-top: 10px;*/
            /*padding-left: 15px;*/
            font-size: 14px;
            .partner_td {
                height: 30px;
                border-bottom: 1px solid #CCC;
                .partner_content {
                    float: left;
                    border-right: 1px solid #CCC;
                    line-height: 30px;
                    padding-left: 10px;
                }
                .partner_index {
                    width: 5%;
                }
                .partner_name {
                    width: 20%;
                }
                .partner_logo {
                    width: 15%;
                }
                .partner_domain {
                    width: 15%;
                }
                .partner_desc{
                    width: 25%;
                }
                .partner_operation {
                    width: 20%;
                }
            }
        }
    }
</style>