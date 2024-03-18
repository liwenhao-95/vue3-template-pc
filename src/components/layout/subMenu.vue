<script setup lang='ts'>
import type { IMenus } from '@/types/types'

defineProps<{
  data: IMenus[]
}>()
</script>

<template>
  <template v-for="item in data" :key="item.path">
    <el-menu-item :index="item.path" v-if="!item.subMenus.length">
      <el-icon>
        <component v-if="item.icon" :is="item.icon" ></component>
      </el-icon>
      <template #title>
        <div class="menuTitle" :title="item.name">{{ item.name }}</div>
      </template>
    </el-menu-item>
    <template v-else>
      <el-sub-menu :index="item.path">
        <template #title>
          <el-icon>
            <component v-if="item.icon" :is="item.icon"></component>
          </el-icon>
          <span :title="item.name" class="menuTitle">{{ item.name }}</span>
        </template>
        <SubMenu :data="item.subMenus" />
      </el-sub-menu>
    </template>
  </template>
</template>

<style lang='scss' scoped>
.menuTitle {
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>