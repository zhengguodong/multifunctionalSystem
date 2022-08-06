<template>
    <div>
        首页
        <div style="width: 70%;margin: 50px auto">
            <editor
                    :init="{
                plugins: 'lists link image table code help wordcount',
                height: 500
             }"
                    v-model="text"

            />
        </div>

    </div>
</template>

<script lang="ts" setup>
    import Editor from '@tinymce/tinymce-vue'
    import {ref} from "vue"
    let text=ref<string>("")
</script>

<style scoped>

</style>
