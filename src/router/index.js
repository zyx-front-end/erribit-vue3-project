import {
  createRouter,
  createWebHashHistory
} from 'vue-router'
// vue2.0创建路由实例  new VueRouter({})
// vue3.0创建路由实例  createRouter({})
// 路由规则
const routes = [

]

// 创建 路由实例
const router = createRouter({
  // 使用hash方式实现路由
  history: createWebHashHistory(),
  // 配置 路由规则 写法和之前一样
  routes
})

export default router
