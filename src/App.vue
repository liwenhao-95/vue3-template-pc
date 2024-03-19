<script setup lang="ts">
import { RouterView } from 'vue-router'

import zhCh from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'
import Menu from '@/components/layout/menu.vue'
import Header from '@/components/layout/header.vue'

import { useI18n } from 'vue-i18n';
import { onMounted } from 'vue'
import useSwitchThemes from './hooks/useSwitchThemes'
const { locale } = useI18n()

const { switchTheme } = useSwitchThemes()

onMounted(() => {
  const theme = localStorage.getItem('theme') || 'gold';
  switchTheme(theme)
})

const getLocale = () => {
  return locale.value === 'zhCh' ? zhCh : en
}
</script>

<template>
  <el-config-provider :locale="getLocale()">
    <div class="common-layout">
      <el-container>
        <el-header class="header">
          <Header></Header>
        </el-header>
        <el-container class="container">
          <el-aside width="200px">
            <Menu></Menu>
          </el-aside>
          <el-main class="content">
            <RouterView />
          </el-main>
        </el-container>
      </el-container>
    </div>
  </el-config-provider>
</template>

<style scoped lang="scss">
.common-layout {
  height: 100vh;
  .header {
    background-color: var(--vt-c-white);
    border-bottom: 1px solid var(--el-menu-border-color);
  }
  .container {
    height: calc(100vh - 60px);
    .content {
      padding: 16px;
      margin: 0 8px;
      background: var(--vt-c-white);
    }
  }
}
</style>
