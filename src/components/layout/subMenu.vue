<script setup lang="ts">
import type { IMenus } from '@/types/types'

defineProps<{
  data: IMenus[]
}>()
</script>

<template>
  <template v-for="item in data" :key="item.path">
    <el-menu-item v-if="!item.subMenus.length" :index="item.path">
      <el-icon>
        <component :is="item.icon" v-if="item.icon" />
      </el-icon>
      <template #title>
        <div class="menu-title" :title="item.name">
          {{ item.name }}
        </div>
      </template>
    </el-menu-item>
    <template v-else>
      <el-sub-menu :index="item.path">
        <template #title>
          <el-icon>
            <component :is="item.icon" v-if="item.icon" />
          </el-icon>
          <span :title="item.name" class="menu-title">{{ item.name }}</span>
        </template>
        <SubMenu :data="item.subMenus" />
      </el-sub-menu>
    </template>
  </template>
</template>

<style lang="scss" scoped>
.menu-title {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
