<template>
  <div class="page-home">
    <!-- 主页入口 -->
    <div class="home entry">
      <div class="container">
        <!-- 左侧分类 -->
        <HomeCategory/>
        <!-- 轮播图 -->
      </div>
    </div>
  </div>
</template>

<script>
import HomeCategory from './components/home-category.vue'
export default {
  name: "HomePage",
  components:{
    HomeCategory
  }
};
</script>

<style lang="less" scoped>
// .container{
//   .hoverShadow();
//   color:@xtxColor;
// }
</style>
