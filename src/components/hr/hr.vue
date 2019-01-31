<template>
    <div>
        <div class="job" v-for="(item) in jobDataList">
            <div><h3>{{item.jobName}}</h3></div>
            <div>
                <ul>
                    <li>工作内容：</li>
                    <li v-for="(job, index) in item.jobContent">{{index + 1}}、{{job}}</li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>任职资格:</li>
                    <li v-for="(job, index) in item.jobAptitude">{{index + 1}}、{{job}}</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    let jobData = require('./jobData.json');

    export default {
        name: "hr",
        data(){
            return{
                jobDataList: []

            }
        },
        created: function () {
            this.jobDataList = jobData;
        }
    }
</script>

<style scoped lang="less">
    .job {
        padding-top: 10px;
        ul {
            padding-left: 20px;
            margin-top: 5px;
        }
    }
</style>