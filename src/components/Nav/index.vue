<template>
    <div style="position: relative">
        <el-menu
                default-active="1-1"
                class="el-menu-vertical-demo"
                :collapse="isCollapse"
                @open="handleOpen"
                @close="handleClose"
        >
            <el-sub-menu index="1">
                <template #title>
                    <el-icon><location /></el-icon>
                    <span>首页</span>
                </template>
                <el-menu-item index="1-1" @click="goToShowdata">首页</el-menu-item>
                <el-menu-item index="1-3" @click="goToTest">展示台</el-menu-item>
            </el-sub-menu>
            <el-menu-item index="2" @click="goToSort">
                <el-icon><icon-menu /></el-icon>
                <template #title >sortTable</template>
            </el-menu-item>
            <el-menu-item index="3">
                <el-icon><document /></el-icon>
                <template #title>Navigator Three</template>
            </el-menu-item>
            <el-menu-item index="4">
                <el-icon><setting /></el-icon>
                <template #title>Navigator Four</template>
            </el-menu-item>
        </el-menu>
        <div class="bottomBtn">
<!--            <el-switch-->
<!--                    v-model="show"-->
<!--                    class="ml-2"-->
<!--                    inline-prompt-->
<!--                    style="&#45;&#45;el-switch-on-color: #13ce66; &#45;&#45;el-switch-off-color: #ff4949"-->
<!--                    active-text="Y"-->
<!--                    inactive-text="N"-->
<!--            />-->
                <el-button  :icon="ArrowLeft" @click="closeBar" v-if="!show" style="width: 100%"></el-button>
                <el-button @click="openBar" v-if="show" style="width: 100%">
                    <el-icon class="el-icon--right" ><ArrowRight /></el-icon>
                </el-button>
        </div>

    </div>
</template>

<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
    ArrowLeft,
    ArrowRight,
} from '@element-plus/icons-vue'
import {useRouter} from "vue-router"
import {ref,onMounted,onUpdated} from "vue"
import {useStore} from "vuex"
    let isCollapse=ref<boolean>(false)
    let store = useStore()
    let show=ref<boolean>(true)
    let router=useRouter()
    let goToShowdata=()=>{
        router.push("/showdata")
    }
    let closeBar = async ()=> {
        await store.dispatch('asySetShow')
        isCollapse.value = store.getters.getShow
        show.value = store.getters.getShow
        console.log('s', show.value,isCollapse.value)
    }
    let openBar = async ()=> {
        await store.dispatch('asySetShow')
        isCollapse.value = store.getters.getShow
        show.value = store.getters.getShow

    }
    let goToTest=()=>{
        router.push("/test")
    }
    let goToSort=()=>{
        router.push("/sortTable")
    }
    onMounted(()=>{
        show.value = store.getters.getShow
        isCollapse.value = store.getters.getShow
    })
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: calc(100% - 70%);
    }
    .bottomBtn{
        position: absolute;
        bottom: 0;
        width: 100%;
    }
    /deep/.el-button{
        width: 50%;
        height: 30px;
        border-radius: 0px;
        border-left: none;
        border-right: none;
    }
    /deep/ .el-menu{
        border: 0px;
    }
</style>
