<template>
  <div class="container">
    <!-- 1.使用A模块的state数据 -->
    <p>{{$store.state.moduleA.username}}</p>
    <p>{{$store.getters.changeName}}</p>
    <!-- 1.使用B模块的state数据 -->
    <p>{{$store.state.moduleB.username}}</p>
    <p>{{$store.getters['moduleB/changeName']}}</p>

    <button @click="mutationsFn">mutationsFn</button>
    <button @click="actionsFn">actionsFn</button>
  </div>
</template>
<script>
import { useStore } from "vuex";
export default {
  name: "App",
  setup() {
    const store = useStore();
    const mutationsFn = () =>{
      store.commit('moduleB/updateName')
    }
    const actionsFn = () =>{
      store.dispatch("moduleB/updateName")
    }
    return {mutationsFn,actionsFn}
  },
};
</script>
