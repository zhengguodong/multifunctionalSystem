<template>
    <div class="box">
        <Bj/>
        <div class="mainBox"> 
            <h1 class="gleaming">Welcome to My Heart</h1> 
        </div>
        <!-- 首页
        <div style="width: 70%;margin: 50px auto">
            <editor
                    :init="{
                plugins: 'lists link image table code help wordcount',
                height: 500
             }"
                    v-model="text"
            />
        </div> -->
    </div>
</template>

<script lang="ts" setup>
    import Editor from '@tinymce/tinymce-vue'
    import Bj from "./Bj.vue"
    import {ref,onMounted} from "vue"
    let text=ref<string>("")
</script>

<style scoped>
@import url("./bj.scss");
.box{
    position: relative;
}
.mainBox{
    position:absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    color: aliceblue;
}

</style>
