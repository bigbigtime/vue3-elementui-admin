<template>
    <el-button type="danger" @click="handlerCategory('first_category_add')">添加一级分类</el-button>
    <hr class="spacing-hr" />
    <el-row :gutter="20">
        <el-col :span="7">
            <el-tree :data="data.tree_data" :props="data.defaultProps" default-expand-all :expand-on-click-node="false">
                <template #default="{ node, data }">
                    <div class="custom-tree-node">
                        <span>{{ node.label }}</span>
                        <span>
                            <el-button size="mini" type="danger" round class="button-mini" @click="handlerCategory('child_category_add', node)">添加子级</el-button>
                            <el-button size="mini" type="success" round class="button-mini" @click="handlerCategory(node.level === 1 ? 'parent_category_edit' : 'child_category_edit', node)">编辑</el-button>
                            <el-button size="mini" round class="button-mini" @click="handlerCategory('delete_category', node)">删除</el-button>
                        </span>
                    </div>
                </template>
            </el-tree>
        </el-col>
        <el-col :span="17">
            <h4 class="column">{{ config[config.type].title }}</h4>
            <el-form label-width="100px">
                <el-form-item label="父级分类：">
                    <el-input v-model.trim="data.parent_category" :disabled="config[config.type].parent_disabled" style="width: 20%;"></el-input>
                </el-form-item>
                <el-form-item label="子级分类：" v-if="config[config.type].sub_show">
                    <el-input v-model.trim="data.sub_category" :disabled="config[config.type].sub_disabled" style="width: 20%;"></el-input>
                </el-form-item>
                <el-form-item label="">
                    <el-button type="danger" :loading="data.button_loading" @click="handlerSubmit">确定</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>

<script>
import { reactive, getCurrentInstance, onBeforeMount } from 'vue';
import { firstCategoryAdd, GetCategory, ChildCategoryAdd, CategoryEdit, CategoryDel } from "@/api/info";
export default {
    name: 'InfoCategory',
    components: {},
    props: {},
    setup(props){
        // 获取实例上下文
        const { proxy } = getCurrentInstance();
        const data = reactive({
            tree_data: [],
            defaultProps: {
                children: 'children',
                label: 'category_name'
            },
            parent_category: "父级分类文本演示",   // 父级分类
            sub_category: "子级分类文本演示",      // 子级分类
            button_loading: false,  // 按钮加载
            parent_category_data: null,
            sub_category_data: null
        })
        const config = reactive({
            type: "default",
            default: {
                title: "添加分类",        // 标题
                parent_disabled: true,   // 父级分类禁用/启用
                sub_disabled: true,      // 子级分类禁用/启用
                sub_show: true,          // 子级分类显示/隐藏
                clear: ["parent_category", "sub_category"]
            },
            first_category_add: {
                title: "一级分类添加",    // 标题
                parent_disabled: false,   // 父级分类禁用/启用
                sub_disabled: true,      // 子级分类禁用/启用
                sub_show: false,         // 子级分类显示/隐藏
                clear: ["parent_category", "sub_category"]
            },
            child_category_add: {
                title: "子级分类添加",    // 标题
                parent_disabled: true,   // 父级分类禁用/启用
                sub_disabled: false,      // 子级分类禁用/启用
                sub_show: true,
                clear: ["sub_category"],
                create: ["parent_category"]
            },
            parent_category_edit: {
                title: "父级分类编辑",    // 标题
                parent_disabled: false,   // 父级分类禁用/启用
                sub_disabled: true,      // 子级分类禁用/启用
                sub_show: false,
                clear: ["child_category"],
                create: ["parent_category"]
            },
            child_category_edit: {
                title: "子级分类编辑",    // 标题
                parent_disabled: true,   // 父级分类禁用/启用
                sub_disabled: false,      // 子级分类禁用/启用
                sub_show: true,
                create: ["parent_category", "sub_category"]
            }
        });
        // const handleNodeClick = (data) => {
        //     console.log(data)
        // }
        const handlerCategory = (type, category_data) => {
            console.log(category_data);
            if(type === "child_category_edit") {
                data.parent_category_data = category_data.parent.data || null;
                data.sub_category_data = category_data.data || null;
            }else{
                data.parent_category_data = category_data.data || null;
            }
            config.type = type === "delete_category" ? "default": type;
            // 文本清除、还原
            handlerInputValue();
            // 删除弹作
            (type === "delete_category") && handlerDeleteComfirm();
        }
        const handlerInputValue = () => {
            // 获取清除数据的对象
            const clearObject = config[config.type].clear;
            // 获取还原数据的对象
            const createObject = config[config.type].create;
            // 执行清除动作
            if(clearObject && clearObject.length > 0) {
                clearObject.forEach(item => {
                    data[item] = "";
                })
            }
            // 执行还原动作
            if(createObject && createObject.length > 0) {
                createObject.forEach(item => {
                    data[item] = data[`${item}_data`].category_name;
                })
            }
        }
        // 
        const handlerSubmit = () => {
            if(config.type === 'first_category_add') { handlerFirstCategoryAdd(); }
            if(config.type === 'child_category_add') { handlerChildCategoryAdd(); }
            if(config.type === 'child_category_edit' || config.type === 'parent_category_edit') { handlerCategoryEdit(); }
        }
        // 一级分类添加
        const handlerFirstCategoryAdd = () => {
            // 父级为空时提示
            if(!data.parent_category) {
                proxy.$message.error("父级分类不能为空");
                return false
            }
            data.button_loading = true;
            firstCategoryAdd({categoryName: data.parent_category}).then(response => {
                data.button_loading = false;
                proxy.$message({
                    message: response.message,
                    type: "success"
                })
                data.parent_category = "";
                // 刷新树形菜单数据
                handlerGetCategory();
            }).catch(error => {
                data.button_loading = false;
            })
        }
        const handlerGetCategory = () => {
            GetCategory().then(response => {
                data.tree_data = response.data;
            })
        }
        // 子级分类添加
        const handlerChildCategoryAdd = () => {
            // 子级为空时提示
            if(!data.sub_category) {
                proxy.$message.error("子级分类不能为空");
                return false
            }
            // 按钮加载状态
            data.button_loading = true;
            // 接口
            ChildCategoryAdd({
                categoryName: data.sub_category,           // 分类名称参数
                parentId: data.parent_category_data.id     // 父级分类ID参数
            }).then(response => {
                // 清除加载状态
                data.button_loading = false;
                // 成功提示
                proxy.$message({
                    message: response.message,
                    type: "success"
                })
                // 清除子级分类文本
                data.sub_category = "";
                // 追加子级数据
                data.parent_category_data.children.push(response.data);
                data.tree_data = [...data.tree_data];
            }).catch(error => {
                // 清除加载状态
                data.button_loading = false;
            })
        }
        // 分类编辑
        const handlerCategoryEdit = () => {
            // 分级为空时提示
            if(!data.sub_category || !data.parent_category) {
                const message = config.type === "parent_category_edit" ? "父级" : "子级";
                proxy.$message.error(`${message}分类不能为空`);
                return false
            }
            // 按钮加载状态
            data.button_loading = true;
            // 接口
            CategoryEdit({
                categoryName: config.type === "parent_category_edit" ? data.parent_category : data.sub_category,           // 分类名称参数
                id: config.type === "parent_category_edit" ? data.parent_category_data.id : data.sub_category_data.id      // 分类ID参数
            }).then(response => {
                // 清除加载状态
                data.button_loading = false;
                // 成功提示
                proxy.$message({
                    message: response.message,
                    type: "success"
                })
                // 同步更新树形菜单节点
                if(config.type === "parent_category_edit") {
                    data.parent_category_data.category_name = data.parent_category;
                }else{
                    data.sub_category_data.category_name = data.sub_category;
                }
            }).catch(error => {
                // 清除加载状态
                data.button_loading = false;
            })
        }
        const handlerDeleteComfirm = () => {
            proxy.$confirm('确认删除该分类吗？删除后将无法恢复', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                showClose: false,            // 取消右上角关闭按钮
                closeOnClickModal: false,    // 取消点击遮罩关闭 MessageBox
                closeOnPressEscape: false,   // 取消按下ESC键关闭MessageBox
                type: 'warning',
                beforeClose: (action, instance, done) => {
                    if(action === "confirm") {
                        instance.confirmButtonLoading = true;
                        CategoryDel({categoryId: data.parent_category_data.id}).then(response => {
                            // 成功提示
                            proxy.$message({
                                message: response.message,
                                type: "success"
                            })
                            instance.confirmButtonLoading = false;
                            done();
                        }).catch(error => {
                            instance.confirmButtonLoading = false;
                        })
                    }else{
                        done();
                    }
                }
            })
        }
        onBeforeMount(() => {
            handlerGetCategory();
        })
        return {
            data,
            // handleNodeClick,
            handlerCategory,
            handlerSubmit,
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