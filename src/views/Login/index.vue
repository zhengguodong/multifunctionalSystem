<template>
    <div class="login-box">
        <div class="mianBox" > 
            <div class="title">
               <img :src="title" alt="" style="width: 50px; height: auto;position: relative;top: 8px;"> 多功能平台
            </div>
            <el-input v-model="form.userName" placeholder="用户名：admin" />
            <el-input v-model="form.password" placeholder="密码：123123" type="password" show-password/>
            <div>
                 <el-button @click="reset">重置</el-button>
                 <el-button type="primary" @click="login">登录</el-button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import {ref} from "vue"
import {useRouter} from "vue-router"
import {User} from "./interface"
import { ElMessage } from 'element-plus'
import title from "../../assets/icons/title.svg"
let form=ref<User>({userName:'',password:''})
let router=useRouter()
let login=()=>{
    if(form.value.userName=='admin'&&form.value.password=='123123'){
        router.push("/home")
        ElMessage.success("登录成功")
    }else{
        ElMessage.error("Error")
    }
}
let reset=()=>{
    form.value.userName=''
    form.value.password=''
}
</script>

<style lang="scss" scoped>
@import url("./index.scss");
::v-deep .el-input{
    width: 410px;
    height: 40px;
    margin: 10px;
}
::v-deep .el-button{
    width: 180px;
    height: 40px;
    margin-top: 10px;
}
.title{
    font-size: 48px;
    font-weight: bold;
    color: #475768;
    white-space: nowrap;
    margin-bottom: 30px;
}
</style>