<template>
    <el-container id="layout-container">
        <el-aside id="layout-aside" width="250px"><layout-aside /></el-aside>
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
export default {
   name: "Layout",
   components: { LayoutAside, LayoutHeader, LayoutMain },
   props: {},
   setup(props){
       return {}
    }
}
</script>
<style lang="scss" scpoed>
#layout-container { height: 100vh; }
#layout-aside { background-color: #77acbc; }
#layout-header { background-color: #77bc99; }
#layout-main { background-color: #bc77a1; }
</style>
