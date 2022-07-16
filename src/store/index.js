import {
  createStore
} from 'vuex'
// vue2.0 创建仓库 new Vuex.store({})
// vue3.0 创建仓库 createStore({})
// A模块
// B模块
const moduleA = {
  state: () => {
    return {
      username: '模块A'
    }
  },
  getters: {
    changeName(state) {
      return state.username + 'aaaaaa'
    }
  }
}

const moduleB = {
  namespaced: true,
  state: () => {
    return {
      username: 'B模块'
    }
  },
  getters: {
    changeName(state) {
      return state.username + 'bbbbb'
    }
  },
  mutations: {
    updateName(state) {
      state.username = 'ls'
    }
  },
  actions: {
    updateName(ctx) {
      setTimeout(() => {
        ctx.commit('updateName')
      }, 2000)
    }
  },

}
export default createStore({
  state: {
    person: [{
        id: 1,
        name: "tom",
        gender: '男'
      },
      {
        id: 2,
        name: "lucy",
        gender: '女'
      },
      {
        id: 3,
        name: "jack",
        gender: '男'
      },
    ]
  },
  mutations: {
    // 改数据函数
  },
  actions: {
    // 请求数据函数
  },
  modules: {
    moduleA,
    moduleB
  },
  getters: {
    // vuex的计算属性
    body: state => state.person.filter(p => p.gender === '男')
  }
})
// export default createStore({
//   state: {
//     username: 'zs'
//   },
//   getters: {
//     newName(state){
//       return state.username+'zyx'
//     }
//   },
//   mutations: {
//     updateName(state){
//        state.username = 'ls'
//     }
//   },
//   actions: {
//     updateName(ctx){
//       setTimeout(()=>{
//         ctx.commit('updateName')
//       },2000)
//     }
//   },
//   modules: {}
// })
