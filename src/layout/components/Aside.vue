<template>
  <el-menu default-active="4" background-color="#344a5f" text-color="#fff" active-text-color="#ffd04b">
    <!-- 一级菜单 -->
    <el-menu-item index="4">
      <template #title>控制台</template>
    </el-menu-item>
    <!-- 子级菜单 -->
    <el-submenu index="1">
      <template #title>信息管理</template>
      <el-menu-item index="1-4-1">信息列表</el-menu-item>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "Aside",
  components: {},
  props: {},
  setup(){
      return {}
  }
};
</script>
<style lang="scss" scoped></style>