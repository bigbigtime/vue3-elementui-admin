<template>
  <div class="header-wrap">
    <div class="wrap">
      <span class="menu-btn">
        <svg-icon iconName="menuBtn" className="icon-menu-svg"></svg-icon>
      </span>
    </div>
    <div class="wrap">用户头像</div>
  </div>
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
.header-wrap {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  .wrap { flex: 1; }
}
.menu-btn { cursor: pointer; } // 手势
.icon-menu-svg { font-size: 24px; }
</style>