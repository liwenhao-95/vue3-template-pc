import { ref, markRaw } from 'vue'
import { defineStore } from 'pinia'
import type { IMenus } from '@/types/types'
import { HomeFilled, Notebook, Reading, User } from '@element-plus/icons-vue'

export const useAppStore = defineStore('app', () => {
  const menuActive = ref<string>('/home')

  const menus = markRaw<IMenus[]>([
    { parentId: 0, name: '首页', icon: HomeFilled, path: '/home', subMenus: [] },
    {
      name: '博客',
      icon: Notebook,
      path: '/blog',
      parentId: 0,
      subMenus: [
        {
          name: '测试层级测试层级测试层级测试层级',
          path: '/blog/test_level',
          icon: Notebook,
          parentId: '/blog',
          subMenus: [{ parentId: '/blog/test_level', name: '最后一层测试长度最后一层测试长度', path: '/blog/test_level/last_level', icon: Notebook, subMenus: [] }]
        },
        { parentId: '/blog', name: '好文推荐', path: '/blog/recommend_article', icon: Reading, subMenus: [] }
      ]
    },
    { parentId: 0, name: '我的', icon: User, path: '/mine', subMenus: [] }
  ])

  return { menus, menuActive }
})
