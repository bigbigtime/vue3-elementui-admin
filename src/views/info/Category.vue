<template>
    <el-button type="danger">添加一级分类</el-button>
    <hr class="spacing-hr" />
    <el-row>
        <el-col :span="6">树状菜单</el-col>
        <el-col :span="18">输入框</el-col>
    </el-row>
</template>

<script>
export default {
   name: 'NewsIndex',
   components: {},
   props: {},
   setup(props){
      
       return {}
    }
}
</script>
<style lang="scss" scoped>
.spacing-hr {
    border: none; // 设置无边框
    border-top: 1px solid #e9e9e9; // 底部1像素，实线边框，颜色为 e9e9e9
    margin:30px 0; // 上下边距为30像素，左右为0
}
</style>