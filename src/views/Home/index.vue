<script setup lang='ts'>
import { ElMessage } from 'element-plus';
import { onMounted, ref } from 'vue'


onMounted(() => {
  // isJson('123')
  // isJson('123')
  // const a = bindFindKeys(tree, 122, 'name')
  // console.log(a, 'a')
})

const clickBtn = () => {
  ElMessage('This is a message.')
}
</script>

<template>
  <div>
    <el-button type="primary" @click="clickBtn">Primary</el-button>
    <el-button type="info">Info</el-button>
    <el-pagination :total="100" />
  </div>
</template>

<style lang='scss' scoped>

</style>