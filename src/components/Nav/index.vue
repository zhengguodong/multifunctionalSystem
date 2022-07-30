<template>
    <div>
        <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                :collapse="isCollapse"
                @open="handleOpen"
                @close="handleClose"
        >
            <el-sub-menu index="1">
                <template #title>
                    <el-icon><location /></el-icon>
                    <span>Navigator One</span>
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
    </div>
</template>

<script lang="ts" setup>
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue'
import {useRouter} from "vue-router"
    let router=useRouter()
    let goToShowdata=()=>{
        router.push("/showdata")
    }
    let goToTest=()=>{
        router.push("/test")
    }
    let goToSort=()=>{
        router.push("/sortTable")
    }
</script>

<style scoped>
    .el-menu-vertical-demo:not(.el-menu--collapse) {
        width: 200px;
        min-height: calc(100% - 70%);
    }

</style>
