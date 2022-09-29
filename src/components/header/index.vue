<template>
    <div class="box">
        <div class="title reveal">多功能展示平台</div>
        <div class="rightBox">
            <LangSelect style="margin-right:10px"/>
           {{name}}<el-button type="text" @click="out">登出</el-button>
        </div>
  </div>
</template>

<script lang="ts" setup>
import LangSelect from "../lang_select/index.vue"
import {ref,onMounted,nextTick} from "vue"
import {useRouter} from "vue-router"
let name=ref<string>("admin")
let router=useRouter()
let out=()=>{
    router.push("/login")
}
</script>

<style lang="scss" scoped>
.box{
    width: 100%;
    height: 70px;
    background-color: lightblue;
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(0, 21, 41);
    justify-content: flex-end;
    .title {
        line-height:70px;
        font-size: 30px;
        color: #cdc8e0;
        margin-left: 20px;
    }
    .rightBox{
        margin-left: auto;
        width: 200px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        // float:right;
        // line-height:70px;
        color: #cdc8e0;

    }
}
</style>


