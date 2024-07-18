import type { IMenus } from '@/types/types'

export const nav: IMenus[] = [
  {
    parentId: 0,
    name: '首页',
    icon: 'HomeFilled',
    path: '/home',
    subMenus: []
  },
  {
    name: '博客',
    icon: 'Notebook',
    path: '/blog',
    parentId: 0,
    subMenus: [
      {
        parentId: '/blog',
        name: '好文推荐',
        path: '/blog/recommend_article',
        icon: 'Reading',
        subMenus: []
      }
    ]
  },
  { parentId: 0, name: '我的', icon: 'User', path: '/mine', subMenus: [] }
]
