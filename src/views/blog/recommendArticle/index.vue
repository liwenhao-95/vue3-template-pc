<script setup lang='ts'>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router';

const route = useRoute()
const router = useRouter()

const details = () => {
  router.push('/blog/recommend_article/articel_detail')
}
</script>

<template>
  <div>
    <h1>好文推荐</h1>
    <el-button type="primary" @click="details">详情</el-button>
  </div>
</template>

<style lang='less' scoped>

</style>