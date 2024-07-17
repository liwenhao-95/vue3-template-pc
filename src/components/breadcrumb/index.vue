<script setup lang="ts">
import { ref, watch } from 'vue'
import { useAppStore } from '@/stores/app'
import type { IMenus } from '@/types/types'
import { nav } from '@/utils/constants'
import { bindFindKeys } from '@/utils/utils'

const store = useAppStore()
const breadcrumbArr = ref<(string | number)[]>([])

const getTreeData = (data: IMenus[]): IMenus[] => {
  return data.map((item) => {
    return {
      ...item,
      id: item.path,
      children: item.subMenus.length ? getTreeData(item.subMenus) : []
    }
  })
}

watch(
  () => store.menuActive,
  () => {
    const menus = getTreeData(nav)
    breadcrumbArr.value = bindFindKeys(menus, store.menuActive, 'name')
  },
  {
    immediate: true
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
