<template>
  <div class="header-wrap">
    <div class="wrap">
      <span class="menu-btn" @click="switchAside">
        <svg-icon iconName="menuBtn" className="icon-menu-svg"></svg-icon>
      </span>
    </div>
    <div class="wrap">
      <div class="user-info">
        <div class="face-info">
          <img src="../../assets/images/logo-min.png" alt="409019683@qq.com">
          <span class="name">{{ username }}</span>
        </div>
        <span class="logout" @click="handlerLogout">
          <svg-icon iconName="logout" className="icon-logout"></svg-icon>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  name: "Header",
  components: {},
  props: {},
  setup(){
    // 获取实例上下文
    const { proxy } = getCurrentInstance();
    // 获取Vuex
    const store = useStore();
    // 引入router
    const { replace } = useRouter();
    // 菜单按钮
    const switchAside = (() => { store.commit('app/SET_COLLAPSE'); })
    // 用户名
    const username = ref(store.state.app.username);
    // 登出
    const handlerLogout = (() => {  
      proxy.$confirm('确认退出管理后台', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        store.dispatch('app/logoutAction').then(response => {
          proxy.$message({
            message: response.message,
            type: "success"
          })
          replace({
            name: "Login"
          })
        })
      }).catch(error => {});
    }) 

    return { 
      switchAside,
      username,
      handlerLogout
    }
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