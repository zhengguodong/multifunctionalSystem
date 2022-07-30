<template>
<div id="box">
    <el-table :data="tableData" style="width: 100%" id="tableSort">
        <el-table-column prop="date" label="Date" width="180" />
        <el-table-column prop="name" label="Name" width="180" />
        <el-table-column prop="address" label="Address" />
    </el-table>
    <el-checkbox-group v-model="checkedCities" >
        <el-checkbox v-for="city in cities" :key="city" :label="city" style="display: block">{{
            city
            }}</el-checkbox>
    </el-checkbox-group>
</div>
</template>

<script setup lang="ts">
import {onMounted,ref} from "vue"
import Sortable from 'sortablejs'
const checkedCities = ref(['Shanghai', 'Beijing'])
const cities = ['Shanghai', 'Beijing', 'Guangzhou', 'Shenzhen']
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-02',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-04',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
    {
        date: '2016-05-01',
        name: 'Tom',
        address: 'No. 189, Grove St, Los Angeles',
    },
]
onMounted(()=>{
    let el:HTMLDivElement=document.querySelector('#box #tableSort .el-table__body-wrapper .el-table__body tbody') as HTMLDivElement
    let checkboc:HTMLDivElement=document.querySelector("#box .el-checkbox-group") as HTMLDivElement
    console.log(checkboc,el)
    let sortable=new Sortable(el, {
        animation: 150,
        group:'sortTable',
        onUpdate: function (evt:any) {
            console.log(evt.oldIndex,evt.newIndex)
            let old:any= tableData[evt.oldIndex]
            tableData.splice(evt.oldIndex,1)
            tableData.splice(evt.newIndex,0,old)
            console.log(tableData)
        },
    });
    let sortable1=new Sortable(checkboc, {
        animation: 150,
        group:'sortTable',
        onUpdate: function (evt:any) {
            console.log(evt.oldIndex,evt.newIndex)
            let old:any= cities[evt.oldIndex]
            cities.splice(evt.oldIndex,1)
            cities.splice(evt.newIndex,0,old)
            console.log(cities)
        },
    });
})
</script>

<style scoped>

</style>
