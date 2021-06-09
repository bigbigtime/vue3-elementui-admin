<template>
  <div id="main-content">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "Main",
  components: {},
  props: {},
  setup(){
  return {}
  }
};
</script>
<style lang="scss" scoped>
#main-content {
  background-color: #fff; // 背景色
  padding: 20px; // 内边距（4个边都为20px）
  min-height: 100%;  // 高度
  @include webkit(box-sizing, border-box); // css3阴影
}

</style>