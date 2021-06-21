<template>
    <el-form label-width="150px">
        <el-form-item label="信息类别：">
            <el-cascader v-model="data.category" :options="category_data.category_options" :props="data.cascader_props"></el-cascader>
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
import { reactive, ref, onMounted, onBeforeMount } from "vue";
import { useStore } from "vuex";
import WangEditor from 'wangeditor';
import { categoryHook } from "@/hook/infoHook";
import { GetQininToken } from "@/api/common";
export default {
    name: 'InfoDetailed',
    components: {},
    props: {},
    setup(props){
        // store
        const store = useStore();
        // hook
        const { infoData: category_data, handlerGetCategory: getList } = categoryHook();
        const data = reactive({
            imageUrl: "",
            category: "",
            title: "",
            date: "",
            category_options: [],
            cascader_props: {
                label: "category_name",
                value: "id"
            },
            upload_data: {
                token: ""
            }
        })
        const editor = ref();
        let editor_instance = null;
        const getQiniuToken = () => {
            const requestData = {
                ak: "Avh-EZZAa4TxqPQZsEW42fXBUbTMFi-RKSZTRKJj",
                sk: "l9AXtnhCVkZexXNRcmHXzmecXiCUiLynwGboMeUw",
                buckety: "bigbigtime"
            }
            GetQininToken(requestData).then(response => {
                const responseData = response.data;
                if(responseData) {
                    data.uploadData.token = responseData.token
                }
            })
        }

        /** 挂载之前 */
        onBeforeMount(() => {
            getList();
            getQiniuToken();
        });


        onMounted(() => {
            editor_instance = new WangEditor(editor.value);
            Object.assign(editor_instance.config, {
                onchange() {
                    console.log('change');
                },
            });
            editor_instance.create();
        })
        return { data, editor, category_data }
    }
}
</script>
<style lang="scss" scoped>

</style>