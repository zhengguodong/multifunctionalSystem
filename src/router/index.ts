import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Home from '../views/Home.vue'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
export const whiteRoutes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login/index.vue')
  }
]
export const mainRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
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
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes:[...whiteRoutes,...mainRoutes]
})
export default router
