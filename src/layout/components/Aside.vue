<template>
  <el-menu default-active="4" background-color="#344a5f" text-color="#fff" active-text-color="#ffd04b">
    <template v-for="item in routers">
      <!-- 一级菜单 -->
      <el-menu-item v-if="!item.children" :index="item.path" >
        <template #title>{{ item.meta && item.meta.title }}</template>
      </el-menu-item>
      
      <!-- 子级菜单 -->
      <el-submenu v-else index="1" >
        <template #title>信息管理</template>
        <el-menu-item index="1-4-1">信息列表</el-menu-item>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  name: "Aside",
  components: {},
  props: {},
  setup(){
    console.log(useRouter());
    const { options } = useRouter();
    const routers = options.routes;
    console.log(useRouter().getRoutes())
    console.log(routers)

    return {
      routers
    }
  }
};
</script>
<style lang="scss" scoped></style>