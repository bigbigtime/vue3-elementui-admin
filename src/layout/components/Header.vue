<template>
  <div class="header-wrap">
    <div class="wrap">
      <span class="menu-btn">
        <svg-icon iconName="menuBtn" className="icon-menu-svg"></svg-icon>
      </span>
    </div>
    <div class="wrap">
      <div class="user-info">
        <div class="face-info">
          <img src="../../assets/images/logo-min.png" alt="409019683@qq.com">
          <span class="name">409019683@qq.com </span>
        </div>
        <span class="logout">
          <svg-icon iconName="logout" className="icon-logout"></svg-icon>
        </span>
      </div>
    </div>
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
.user-info {
  float: right;
  display: flex;
  align-items: center;
}
.face-info {
  span, img { 
    display: inline-block;
    vertical-align: middle;
  }
  span { margin-left: 15px;}
}
.logout {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 75px;
  height: 75px;
  cursor: pointer;
}
.menu-btn { cursor: pointer; } // 手势
.icon-menu-svg { font-size: 24px; }
.icon-logout { font-size: 24px; }
</style>