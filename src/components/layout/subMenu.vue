<script setup lang='ts'>
import { ref } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import type { IMenus } from '@/types/types'

defineProps<{
  data: IMenus[]
}>()
</script>

<template>
  <template v-for="item in data" :key="item.path">
    <el-menu-item :index="item.path" v-if="!item.subMenus.length">
      <el-icon>
        <component :is="item.icon" ></component>
      </el-icon>
      <template #title>{{ item.name }}</template>
    </el-menu-item>
    <template v-else>
      <el-sub-menu :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.icon"></component>
          </el-icon>
          <span>{{ item.name }}</span>
        </template>
        <SubMenu :data="item.subMenus" />
      </el-sub-menu>
    </template>
  </template>
</template>

<style lang='less' scoped>

</style>