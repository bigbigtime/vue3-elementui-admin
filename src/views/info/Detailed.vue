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
        <el-form-item label="缩略图：">
            <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
            >
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
        <el-form-item label="发布日期：">
            <el-date-picker v-model="data.date" type="datetime" placeholder="选择日期时间" class="info-date"></el-date-picker>
        </el-form-item>
        <el-form-item label="内容：">
            <div ref="editor"></div>
        </el-form-item>
        <el-form-item>
            <el-button type="danger">确定</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
import { reactive, ref, onMounted } from "vue";
import WangEditor from 'wangeditor';
export default {
    name: 'InfoDetailed',
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
        const editor = ref();
        let editor_instance = null;
        onMounted(() => {
            editor_instance = new WangEditor(editor.value);
            Object.assign(editor_instance.config, {
                onchange() {
                    console.log('change');
                },
            });
            editor_instance.create();
        })
        return { data, editor }
    }
}
</script>
<style lang="scss" scoped>

</style>