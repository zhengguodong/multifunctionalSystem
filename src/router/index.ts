import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    redirect:'/showdata',
    children:[
      {
        path: '/showdata',
        name: 'showdata',
        component: ()=>import("../views/showData/index.vue"),

      },
      {
        path: '/test',
        name: 'test',
        component: ()=>import("../views/Test/index.vue"),
      }
      ,
      {
        path: '/sortTable',
        name: 'sortTable',
        component: ()=>import("../views/sortTable/index.vue"),
      }
    ]
  },
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/index.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})
export default router
