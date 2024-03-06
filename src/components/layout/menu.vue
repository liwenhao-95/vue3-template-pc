<script setup lang='ts'>
import { ref } from 'vue'

import { useAppStore } from '@/stores/app'
import SubMenu from './subMenu.vue'

const store = useAppStore()

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  // console.log(key, keyPath)
}

const selectMenu = (key: string, keyPath: string[], item: {index: string; indexPath: string[]; route: string}) => {
  console.log(key, 'key')
  console.log(keyPath, 'keyPath')
  console.log(item, 'item')
}


</script>

<template>
  <el-menu
    :default-active="store.menuActive"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    @select="selectMenu"
    router
  >
    <SubMenu :data="store.menus" />
  </el-menu>
</template>

<style lang='less' scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  // min-height: 400px;
  height: 100%;
}
</style>