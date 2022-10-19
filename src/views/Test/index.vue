<template>
    <div class="box">
        <div style="display: flex;height: 50%">
            <div class="leftTop">
                <h3 style="text-align: center;color: #409EFF">简单的动画</h3>
                <el-row style="margin: 100px 0 0 180px">
                    <el-button :icon="Search" circle class="item" />
                    <el-button type="primary" :icon="Edit" circle class="item"/>
                    <el-button type="success" :icon="Check" circle class="item"/>
                    <el-button type="info" :icon="Message" circle class="item"/>
                    <el-button type="warning" :icon="Star" circle class="item"/>
                    <el-button type="danger" :icon="Delete" circle class="item"/>
                </el-row>
                <el-row style="margin: 30px 0 0 180px">
                    <el-button :icon="Search" circle class="item1" />
                    <el-button type="primary" :icon="Edit" circle class="item1"/>
                    <el-button type="success" :icon="Check" circle class="item1"/>
                    <el-button type="info" :icon="Message" circle class="item1"/>
                    <el-button type="warning" :icon="Star" circle class="item1"/>
                    <el-button type="danger" :icon="Delete" circle class="item1"/>
                </el-row>
            </div>
            <div class="midTop">
                <div style="width: 50px;height: 50px;background-color: aqua" class="item2">
                </div>
                    <img src="../../assets/icons/windmill.svg" alt="" class="item2" width="60" height="60">
            </div>
            <div class="rightTop">
                1
            </div>
        </div>

        <hr>
        <div class="leftBottom">
1
        </div>
        <div class="rightBottom">
1
        </div>
    </div>
</template>

<script>
    import {
        Check,
        Delete,
        Edit,
        Message,
        Search,
        Star,
    } from '@element-plus/icons-vue'
    export default {
        name: "index"
    }
</script>

<style scoped lang="scss">
    @keyframes rotate{
        0%{transform:rotate(0deg);}
        25%{transform:rotate(90deg);}
        50%{transform:rotate(180deg);}
        75%{transform:rotate(270deg);}
        100%{transform:rotate(360deg);}
    }
    .box {
        .leftTop{
            width: 40%;
            height: 90%;
            display: inline-block;
            margin:10px;
            border-radius: 5px;
            border: 1px rgb(224, 229, 233) dashed;
            .item{
                transition: margin-top .3s;
            }
            .item:hover{
                margin-top: 10px;
            }
            .item1{
                transition: background-color .3s;
            }
            .item1:hover{
                background-color: aqua;
            }
        }
        .rightTop{
            width: 40%;
            height: 90%;
            border-radius: 5px;
            border: 1px rgb(224, 229, 233) dashed;
            display: inline-block;
            float: right;
            margin:10px;
            text-align: center;
            vertical-align: center;
        }
        .midTop{
            width: 15%;
            height: 90%;
            border-radius: 5px;
            border: 1px rgb(224, 229, 233) dashed;
            display: inline-block;
            margin:10px;
            text-align: center;
            .item2{
                margin: 30px auto;
                animation: rotate .5s linear infinite;
            }
        }

    }
</style>
