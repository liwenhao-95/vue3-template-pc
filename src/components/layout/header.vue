<script setup lang='ts'>
import { ref } from 'vue'

const goBack = () => {
  console.log('go back')
}
</script>

<template>
  <el-page-header @back="goBack" class="pageHeader">
    <template #content>
      <span class="text-large font-600 mr-3"> Title </span>
    </template>
  </el-page-header>
</template>

<style lang='less' scoped>
.pageHeader {
  height: 100%;
  display: flex;
}
</style>