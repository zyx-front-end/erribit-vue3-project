import { createStore } from "vuex";
import createPersistedstate from 'vuex-persistedstate'
// 子模块的引入
import cart from "./module/cart";
import user from "./module/user";
import category from "./module/category";

// 创建store仓库实例 并暴露出去
export default createStore({
  modules:{
    cart,
    user,
    category
  },
  // vuex持久化设计
  plugins:[
    // 默认存储在localStorage
    createPersistedstate({
      // 本地存储的名字
      key:'erabbit-client-pc-store',
      // 指定需要存储的模块
      paths:['user','cart']
    })
  ]
})