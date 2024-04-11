import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '@/stores/app'

const NotFound = () => import('@/components/notFound.vue')
const Home = () => import('@/views/home/index.vue')
const RecommendArticle = () => import('@/views/blog/recommendArticle/index.vue')
const ArticelDetail = () => import('@/views/blog/recommendArticle/detail/index.vue')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/blog',
    name: 'blog',
    children: [
      {
        path: 'test_level',
        name: 'test_level',
        children: [
          {
            path: 'last_level',
            name: 'last_level',
            component: Home
          }
        ]
      },
      {
        path: 'recommend_article',
        name: 'recommend_article',
        children: [
          {
            name: 'recommend_article',
            path: '',
            component: RecommendArticle
          },
          {
            name: 'articel_detail',
            path: 'articel_detail',
            component: ArticelDetail
          }
        ]
      }
    ]
  },

  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach(async (to, from) => {
  // console.log(to, 'to')
  // console.log(from, 'from')
  const store = useAppStore()
  store.menuActive = to.path
})

export default router
