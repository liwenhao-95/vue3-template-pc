<script setup lang="ts">
import { ref } from 'vue'

import { useAppStore } from '@/stores/app'
import { nav } from '@/utils/constants'
import SubMenu from './subMenu.vue'

const store = useAppStore()
const bottomRef = ref<HTMLDivElement | null>(null)

const isCollapse = ref<boolean>(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

const selectMenu = (
  key: string,
  keyPath: string[],
  item: { index: string; indexPath: string[]; route: string }
) => {
  console.log(key, 'key')
  console.log(keyPath, 'keyPath')
  console.log(item, 'item')
}

const expand = () => {
  isCollapse.value = !isCollapse.value
  if (bottomRef.value) {
    bottomRef.value.style.width = isCollapse.value
      ? 'calc(var(--el-menu-icon-width) + var(--el-menu-base-level-padding)* 2)'
      : '200px'
  }
}
</script>

<template>
  <el-menu
    :default-active="store.menuActive"
    class="menu"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    @select="selectMenu"
    router
  >
    <SubMenu :data="nav" />
  </el-menu>
  <div class="buttom" ref="bottomRef">
    <el-icon :size="20" @click="expand" :class="isCollapse ? 'collapse' : ''">
      <Fold v-if="!isCollapse"></Fold>
      <Expand v-else></Expand>
    </el-icon>
  </div>
</template>

<style lang="scss" scoped>
.menu {
  height: calc(100% - 49px);
}

/* stylelint-disable-next-line */
.menu:not(.el-menu--collapse) {
  width: 200px;
}

.buttom {
  position: relative;
  box-sizing: border-box;
  height: 48px;
  overflow: hidden;
  line-height: 48px;
  text-align: right;
  border-top: 1px solid var(--el-menu-border-color);
  border-right: 1px solid var(--el-menu-border-color);
  transition: 0.3s width ease-in-out;
}

/* stylelint-disable-next-line */
.buttom:not(.el-menu--collapse) {
  width: 200px;
}
</style>
