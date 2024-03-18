import { ref, markRaw } from 'vue'
import { defineStore } from 'pinia'
import type { IMenus } from '@/types/types'
import { HomeFilled, Notebook, Reading, User } from '@element-plus/icons-vue'

export const useAppStore = defineStore('app', () => {
  const menuActive = ref<string>('/home')

  const menus = markRaw<IMenus[]>([
    { name: '首页', icon: HomeFilled, path: '/home', subMenus: [] },
    {
      name: '博客',
      icon: Notebook,
      path: '/blog',
      subMenus: [
        {
          name: '测试层级测试层级测试层级测试层级',
          path: '/blog/test_level',
          icon: Notebook,
          subMenus: [{ name: '最后一层测试长度最后一层测试长度', path: '/blog/test_level/last_level', icon: Notebook, subMenus: [] }]
        },
        { name: '好文推荐', path: '/blog/recommend_article', icon: Reading, subMenus: [] }
      ]
    },
    { name: '我的', icon: User, path: '/mine', subMenus: [] }
  ])

  return { menus, menuActive }
})
