<template>
  <div class="app-header-sticky" :class="{ show: y > 78 }">
    <div class="container" v-show="y>78">
      <router-link class="logo" to="/"></router-link>
      <AppHeaderNav />
      <div class="right">
        <router-link to="/">品牌</router-link>
        <router-link to="/">专题</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeaderNav from "./app-header-nav.vue";
import { onMounted, ref } from "vue";
import { useWindowScroll } from '@vueuse/core'
export default {
  name: "AppHeaderSticky",
  components: {
    AppHeaderNav,
  },
  setup() {
    // 1、 传统实现
    // //   创建基本响应式数据
    // const y = ref(0);
    // onMounted(() => {
    //   window.onscroll = () => {
    //     //   拿到滚动时候的高度
    //     const scrollTop = document.documentElement.scrollTop;
    //     y.value = scrollTop;
    //   };
    // });
    // 2 、 组合API实现
    const {y} = useWindowScroll()
    return { y };
  },
};
</script>

<style lang="less" scoped>
.app-header-sticky {
  width: 100%;
  height: 80px;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 999;
  background-color: #fff;
  border-bottom: 1px solid #e4e4e4;
// 默认向y轴移动-100%距离
  transform: translateY(-100%);
  opacity: 0;
//   当show存在时 则取消transform 向下移动到顶部 且层级最高 
  &.show {
    transition: all 0.3s linear;
    transform: none;
    opacity: 1;
  }

  .container {
    display: flex;
    align-items: center;
  }
  .logo {
    width: 200px;
    height: 80px;
    background: url(../assets/images/logo.png) no-repeat right 2px;
    background-size: 160px auto;
  }
  .right {
    width: 220px;
    display: flex;
    text-align: center;
    padding-left: 40px;
    border-left: 2px solid @xtxColor;
    a {
      width: 38px;
      margin-right: 40px;
      font-size: 16px;
      line-height: 1;
      &:hover {
        color: @xtxColor;
      }
    }
  }
}
</style>
