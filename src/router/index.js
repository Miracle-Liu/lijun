import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/views/layout/Layout'

// export const constantRouterMap = [
//   {
//     path: '',
//     component: Layout,
//     redirect: '/home',
//     children: [
//       {
//         path: 'home',
//         component: () => import('@/views/home'),
//         name: 'home'
//       },
//       {
//         path: 'questions',
//         component: () => import('@/components/Questions'),
//         name: 'questions'
//       },
//       {
//         path: 'download',
//         component: () => import('@/components/Download'),
//         name: 'download'
//       }
//     ]
//   }
// ]
export const constantRouterMap = [
  {
    path: '',
    component: Layout
  }
]

export default new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
