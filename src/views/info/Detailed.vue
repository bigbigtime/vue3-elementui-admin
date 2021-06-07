<template>
    <el-form label-width="150px">
        <el-form-item label="信息类别：">
            <el-select v-model="data.category">
                <el-option v-for="item in data.category_opacity" :key="item.value" :value="item.value" :label="item.label"></el-option>
            </el-select>
        </el-form-item>
        <el-form-item label="信息标题：">
            <el-input v-model="data.title"></el-input>
        </el-form-item>
        <el-form-item label="缩略图："></el-form-item>
        <el-form-item label="发布日期："></el-form-item>
        <el-form-item label="内容："></el-form-item>
        <el-form-item>
            <el-button type="danger">确定</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
import { reactive } from "vue";
export default {
    name: 'NewsIndex',
    components: {},
    props: {},
    setup(props){
        const data = reactive({
            imageUrl: "",
            category: "",
            title: "",
            date: "",
            category_opacity: [
                { label: "人工智能", value: 0 },
                { label: "技术", value: 1 }
            ]
        })
        return { data }
    }
}
</script>