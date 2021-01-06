<template>
  <el-menu default-active="4" background-color="#344a5f" text-color="#fff" active-text-color="#ffffff" router>
    <template v-for="item in routers">
      <template v-if="!item.hidden">
        <!-- 一级菜单 -->
        <template v-if="hasOnlyChild(item.children)">
          <el-menu-item :index="item.children[0].path">
            <template #title>
              <svg-icon :icon-name="item.meta && item.meta.icon" class-name="aside-menu-svg"></svg-icon>
              {{ item.children[0].meta && item.children[0].meta.title }}
            </template>
          </el-menu-item>
        </template>
        
        
        <!-- 子级菜单 -->
        <el-submenu v-else :index="item.path" >
          <template #title>
            <svg-icon :icon-name="item.meta && item.meta.icon" class-name="aside-menu-svg"></svg-icon>
            {{ item.meta && item.meta.title }}
          </template>
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
    // 判断是否只有一个子级菜单
    const hasOnlyChild = (children) => {
      // 存储路由
      const childRouter = children.filter(item => {
        return item.hidden ? false : true;
      })
      // 只有一个子级路由
      if(childRouter.length === 1) {
        return true;
      }
      // 否则
      return false;
    }
    return {
      routers,
      hasOnlyChild
    }
  }
};
</script>
<style lang="scss" scoped></style>