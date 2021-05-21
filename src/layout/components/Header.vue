<template>
  <el-row class="row-wrap">
    <el-col :span="12">
      <span class="menu-btn">
        <svg-icon iconName="menuBtn" className="icon-menu-svg"></svg-icon>
      </span>
    </el-col>
    <el-col :span="12">用户头像</el-col>
  </el-row>
</template>

<script>
export default {
  name: "Header",
  components: {},
  props: {},
  setup(){
      return {}
  }
};
</script>
<style lang="scss" scoped>
.row-wrap { width: 100%; }
.menu-btn { cursor: pointer; } // 手势
.icon-menu-svg { font-size: 24px; }
</style>