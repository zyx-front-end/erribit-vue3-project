<template>
  <div class="home-category">
    <ul class="menu">
      <li v-for="item in menuList" :key="item.id">
        <router-link :to="`/category/${item.id}`">{{item.name}}</router-link>
        <template v-if="item.children">
            <router-link v-for="sub in item.children" :key="sub.id" :to="`/category/sub/${sub.id}`">{{sub.name}}</router-link>
        </template>
      </li>
    </ul>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { computed, reactive } from "vue";
export default {
  name: "HomeCategory",
  // 1. 获取vuex的一级分类，并且只需要两个二级分类
  // 2. 需要在组件内部，定义一个品牌数据
  // 3. 根据vuex的分类数据和组件中定义品牌数据，得到左侧分类完整数据(9分类+1品牌)数组
  // 4. 进行渲染即可
  setup () {  
    //   最终使用的数据 = 9个分类() + 一个品牌
    const brand = reactive({
      id: 'brand',
      name: '品牌',
      children: [{ id: 'brand-chilren', name: '品牌推荐' }]
    })
    
    const store = useStore()
    const menuList = computed(()=> {
      const list = store.state.category.list.map(item => {
        return {
          id: item.id,
          name: item.name,
          // 防止初始化没有children的时候调用slice函数报错
          children: item.children && item.children.slice(0, 2),
          goods: item.goods
        }
      })
      list.push(brand)
      return list
    })
    console.log(menuList)
    return { menuList }
  }
};
</script>

<style lang="less" scoped>
.home-category {
  width: 250px;
  height: 500px;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  z-index: 99;
  .menu {
    li {
      padding-left: 40px;
      height: 50px;
      line-height: 50px;
      &:hover {
        background: @xtxColor;
      }
      a {
        margin-left: 5px;
        color: #fff;
        &:first-child {
          font-size: 18px;
        }
      }
    }
  }
}
</style>
