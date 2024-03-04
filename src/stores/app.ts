import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { IMenus } from '@/types/types'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

export const useAppStore = defineStore('app', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  const menus = ref<IMenus[]>([
    {name: '首页', icon: Document, path: 'home', subMenus: []},
    {name: '个人信息', icon: Location, path: 'info', subMenus: [
      {name: '个人信息——1', path: 'info_1', icon: Location, subMenus: [
        {name: 'hh', path: 'info_12', icon: '', subMenus: []}
      ]},
      {name: '个人信息——2', path: 'info_2', icon: '', subMenus: []}
    ]},
    {name: '我的', icon: Setting, path: 'mine', subMenus: []},
  ])

  return { count, doubleCount, increment, menus }
})
