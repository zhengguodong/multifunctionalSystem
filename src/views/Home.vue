<template>
  <div>
    <Header/>
    <div style="display: flex;width: 100%">
      <Nav/>
      <div class="main_box" id="box">
        <router-view class="box"></router-view>
      </div>

    </div>
  </div>
</template>

<script lang="ts" setup>
import {watchEffect,ref} from "vue"
import Header from "../components/header/index.vue"
import Nav from "../components/Nav/index.vue"

watchEffect(()=>{
  let box :HTMLElement  = document.getElementById('box') as HTMLElement
})
</script>
<style scoped lang="scss">
  .main_box{
    width: 100%;
    height: calc(100vh - 70px);
    background-color: #e0e5e9;
    .box{
      height: calc(100% - 40px);
      background-color: #fff;
      margin: 20px;
      border-radius: 5px;
    }
  }
</style>
