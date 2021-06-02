<template>
    <el-container id="layout-container">
        <el-aside id="layout-aside" :width="collapse === true ? '60px' : '250px'"><layout-aside /></el-aside>
        <el-container>
            <el-header id="layout-header" height="75px"><layout-header /></el-header>
            <el-main id="layout-main"><layout-main /></el-main>
        </el-container>
    </el-container>
</template>

<script>
import LayoutAside from "./components/Aside";
import LayoutHeader from "./components/Header";
import LayoutMain from "./components/Main";
import { useStore } from "vuex";
import { computed } from "vue";
export default {
   name: "Layout",
   components: { LayoutAside, LayoutHeader, LayoutMain },
   props: {},
   setup(props){
       const store = useStore();
       const collapse = computed(() => store.state.app.collapse);
       return {
           collapse
       }
    }
}
</script>
<style lang="scss" scpoed>
#layout-container { height: 100vh; }
#layout-aside { 
    background-color: #344a5f;
    @include webkit(transition, all .3s ease 0s);
}
#layout-header {
    position: relative;
    z-index: 10;
    background-color: $color_main;
    @include webkit(box-shadow, 0 0 10px 0 rgba(0, 0, 0, .1));
}
#layout-main { background-color: #f7f7f7; }
</style>
