<template>
  <el-menu default-active="4" background-color="#344a5f" text-color="#fff" active-text-color="#ffd04b">
    <template v-for="item in routers">
      <template v-if="!item.hidden">
        <!-- 一级菜单 -->
        <el-menu-item v-if="!item.children" :index="item.path" >
          <template #title>{{ item.meta && item.meta.title }}</template>
        </el-menu-item>
        
        <!-- 子级菜单 -->
        <el-submenu v-else :index="item.path" >
          <template #title>{{ item.meta && item.meta.title }}</template>
          <template v-for="child in item.children">
            <el-menu-item v-if="!child.hidden" :index="child.path">{{ child.meta && child.meta.title }}</el-menu-item>
          </template>
        </el-submenu>
      </template>
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
    const { options } = useRouter();
    const routers = options.routes;

    return {
      routers
    }
  }
};
</script>
<style lang="scss" scoped></style>