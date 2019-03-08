import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const routes = [
    {
        // 路由的路径
        path: '/auth/register',
        // 路由的名称
        name: 'Register',
        // 对应的视图组件
        component: () => import('@/views/auth/Register')
    }
]

const router = new Router({
    mode: 'history',
    routes
})

export default router
