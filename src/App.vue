<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import { ref } from 'vue'
import Menu from '@/components/layout/menu.vue'
import Header from '@/components/layout/header.vue'
const locale = ref(zhCn)

</script>

<template>
  <el-config-provider :locale="locale">
    <!-- <RouterView /> -->
    <div class="common-layout">
      <el-container>
        <el-header class="header">
          <Header></Header>
        </el-header>
        <el-container class="container">
          <el-aside width="200px">
            <Menu></Menu>
          </el-aside>
          <!-- <el-main>Main</el-main> -->
          <el-main class="content">
            <RouterView />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </el-config-provider>
</template>

<style scoped lang="less">
.common-layout {
  height: 100vh;
  .header {
    background-color: var(--vt-c-white);
  }
  .container {
    height: calc(100vh - 68px);
    margin-top: 8px;
    .content {
      padding: 16px;
      margin: 0 8px;
      background: var(--vt-c-white);
    }
  }
}
</style>@/components/layout/Menu.vue
