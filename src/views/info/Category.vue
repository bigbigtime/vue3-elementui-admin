<template>
    <el-button type="danger">添加一级分类</el-button>
    <hr class="spacing-hr" />
    <el-row>
        <el-col :span="6">
            <el-tree :data="data.tree_data" :props="data.defaultProps" @node-click="handleNodeClick" default-expand-all>
                <template #default="{ node, data }">
                    <div class="custom-tree-node">
                        <span>{{ node.label }}</span>
                        <span>
                            <el-button size="mini" type="danger" round>添加子级</el-button>
                            <el-button size="mini" type="success" round>编辑</el-button>
                            <el-button size="mini" round>删除</el-button>
                        </span>
                    </div>
                </template>
            </el-tree>
        </el-col>
        <el-col :span="18">输入框</el-col>
    </el-row>
</template>

<script>
import { reactive } from 'vue'
export default {
    name: 'InfoCategory',
    components: {},
    props: {},
    setup(props){
        const data = reactive({
            tree_data: [
                {
                    label: '一级 1',
                    children: [{
                        label: '二级 1-1',
                        children: [{
                            label: '三级 1-1-1'
                        }]
                    }]
                }
            ],
            defaultProps: {
                children: 'children',
                label: 'label'
            }
        })
        const handleNodeClick = (data) => {
            console.log(data)
        }
        return {
            data,
            handleNodeClick
        }
    }
}
</script>
<style lang="scss" scoped>
.spacing-hr {
    border: none; // 设置无边框
    border-top: 1px solid #e9e9e9; // 底部1像素，实线边框，颜色为 e9e9e9
    margin:30px 0; // 上下边距为30像素，左右为0
}
.custom-tree-node {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 8px;
}
::v-deep(.el-tree-node__content) { height: auto; }
</style>