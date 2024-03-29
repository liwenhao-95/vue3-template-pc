<script setup lang='ts'>
import { bindFindKeys } from 'liwh-function-package';
import { ref, watch } from 'vue'
import { useAppStore } from '@/stores/app'
import type { IMenus } from '@/types/types'

const store = useAppStore()
const breadcrumbArr = ref<(string | number)[]>([])

const getTreeData = (data: IMenus[]): IMenus[] => {
  return data.map(item => {
    return {
      ...item,
      id: item.path,
      children: item.subMenus.length ? getTreeData(item.subMenus) : []
    }
  })
}

watch(
  () =>  store.menuActive,
  () => {
    const menus = getTreeData(store.menus)
    breadcrumbArr.value = bindFindKeys(menus, store.menuActive, 'name')
  }
)

</script>

<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item v-for="item in breadcrumbArr" :key="item">
      {{ item }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<style lang='scss' scoped>
.el-breadcrumb {
  padding-bottom: 8px;
}
</style>