import router,{whiteRoutes,mainRoutes} from './router'
import { ElMessage } from 'element-plus'
import {RouteLocationNormalized} from "vue-router"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { getToken } from './utils/auth'
//NProgress是封装的进度条，基本不用动
NProgress.configure({ showSpinner: false })

const whiteList = [...whiteRoutes]
router.beforeEach((to:any, from, next) => {
    // // debugger
    // NProgress.start()
    // // const token = getToken()
    // const token =null
    // console.log('lll',to.path)
    // if(token){
    //     console.log('tokrn',mainRoutes,to)
    //     mainRoutes.map(x=>{
    //         router.addRoute(x)
    //         console.log('x',x,router)
    //     })
    //     debugger
    //     next()
    // }else{
    //     if(whiteList.includes((to.path))){
    //         console.log('s')
    //         next()
    //     }else{
    //         next('/login')
    //     }
    // }
    next()
})

// router.afterEach(() => {
//     //每次请求结束后都需要关闭进度条
//     NProgress.done()
// })

