<template>
    <el-button type="danger" @click="handlerCategory('first_category_add')">添加一级分类</el-button>
    <hr class="spacing-hr" />
    <el-row :gutter="20">
        <el-col :span="7">
            <el-tree :data="data.tree_data" :props="data.defaultProps" @node-click="handleNodeClick" default-expand-all :expand-on-click-node="false">
                <template #default="{ node, data }">
                    <div class="custom-tree-node">
                        <span>{{ node.label }}</span>
                        <span>
                            <el-button size="mini" type="danger" round class="button-mini" @click="handlerCategory('child_category_add')">添加子级</el-button>
                            <el-button size="mini" type="success" round class="button-mini" @click="handlerCategory(node.level === 1 ? 'parent_category_edit' : 'child_category_edit', node)">编辑</el-button>
                            <el-button size="mini" round class="button-mini">删除</el-button>
                        </span>
                    </div>
                </template>
            </el-tree>
        </el-col>
        <el-col :span="17">
            <h4 class="column">{{ config[config.type].title }}</h4>
            <el-form label-width="100px">
                <el-form-item label="父级分类：">
                    <el-input v-model="data.parent_category" :disabled="config[config.type].parent_disabled" style="width: 20%;"></el-input>
                </el-form-item>
                <el-form-item label="子级分类：" v-if="config[config.type].sub_show">
                    <el-input v-model="data.sub_category" :disabled="config[config.type].sub_disabled" style="width: 20%;"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-button type="danger" :loading="data.button_loading">确定</el-button>
                </el-form-item>
            </el-form>
        </el-col>
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
            },
            parent_category: "父级分类文本演示",   // 父级分类
            sub_category: "子级分类文本演示",      // 子级分类
            button_loading: false  // 按钮加载
        })
        const config = reactive({
            type: "default",
            default: {
                title: "添加分类",        // 标题
                parent_disabled: true,   // 父级分类禁用/启用
                sub_disabled: true,      // 子级分类禁用/启用
                sub_show: true           // 子级分类显示/隐藏
            },
            first_category_add: {
                title: "一级分类添加",    // 标题
                parent_disabled: false,   // 父级分类禁用/启用
                sub_disabled: true,      // 子级分类禁用/启用
                sub_show: false,           // 子级分类显示/隐藏
                clear: ["parent_category", "sub_category"]
            },
            child_category_add: {
                title: "子级分类添加",    // 标题
                parent_disabled: true,   // 父级分类禁用/启用
                sub_disabled: false,      // 子级分类禁用/启用
                sub_show: true     
            },
            parent_category_edit: {
                title: "父级分类编辑",    // 标题
                parent_disabled: false,   // 父级分类禁用/启用
                sub_disabled: true,      // 子级分类禁用/启用
                sub_show: false     
            },
            child_category_edit: {
                title: "子级分类编辑",    // 标题
                parent_disabled: true,   // 父级分类禁用/启用
                sub_disabled: false,      // 子级分类禁用/启用
                sub_show: true     
            }
        });
        const handleNodeClick = (data) => {
            console.log(data)
        }
        const handlerCategory = (type, node) => {
            console.log(type);
            config.type = type;
            // 文本清除、还原
            handlerInputValue();
        }
        const handlerInputValue = () => {
            // 获取清除数据的对象
            const clearObject = config[config.type].clear;
            // 执行清除动作
            if(clearObject && clearObject.length > 0) {
                clearObject.forEach(item => {
                    data[item] = "";
                })
            }
        }

        return {
            data,
            handleNodeClick,
            handlerCategory,
            config
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
::v-deep(.button-mini) {
    padding: 6px 12px;
    margin: 8px 3px;
    font-size: 12px;
}
.column {
    height: 44px;
    padding: 0 20px;
    margin-bottom: 30px;
    line-height: 44px;
    border-radius: 6px;
    background-color: #f3f3f3;
}
</style>