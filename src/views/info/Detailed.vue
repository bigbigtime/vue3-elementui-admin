<template>
    <el-form label-width="150px">
        <el-form-item label="信息类别：">
            <el-cascader v-model="field.category_id" :options="category_data.category_options" :props="data.cascader_props"></el-cascader>
        </el-form-item>
        <el-form-item label="信息标题：">
            <el-input v-model="field.title"></el-input>
        </el-form-item>
        <el-form-item label="缩略图：">
            <el-upload
                class="avatar-uploader"
                action="http://up-z2.qiniup.com"
                :data="data.upload_data"
                :on-success="handlerOnSuccess "
                :before-upload="handlerBeforeOnUpload"
                :on-error="handlerOnError"
                :show-file-list="false"
            >
                <img v-if="field.image_url" :src="field.image_url" class="avatar" />
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
        </el-form-item>
        <el-form-item label="发布日期：">
            <el-date-picker v-model="field.create_date" type="datetime" placeholder="选择日期时间" class="info-date"></el-date-picker>
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
import { reactive, ref, toRefs, onMounted, onBeforeMount, getCurrentInstance } from "vue";
import { useStore } from "vuex";
import WangEditor from 'wangeditor';
import { categoryHook } from "@/hook/infoHook";
import { GetQininToken } from "@/api/common";
export default {
    name: 'InfoDetailed',
    components: {},
    props: {},
    setup(props){
        // 获取实例上下文
        const { proxy } = getCurrentInstance();
        // store
        const store = useStore();
        // hook
        const { infoData: category_data, handlerGetCategory: getList } = categoryHook();
        const data = reactive({
            category_options: [],
            cascader_props: {
                label: "category_name",
                value: "id"
            },
            upload_data: {
                token: "",
                key: ""
            }
        })
        const form = reactive({
            field: {
                image_url: "",
                category_id: "",
                title: "",
                create_date: "",
                content: ""
            }
        })
        const editor = ref();
        let editor_instance = null;
        const getQiniuToken = () => {
            const requestData = {
                ak: "AXs9_jiNK_Fy4HyYRzujTuxFSm3x6V7MPulsv3Vq",
                sk: "gUsR1ngTi08vf4f43p6A7U3B3wT3tvt-bVEW8WwK",
                buckety: "fffffffff"
            }
            GetQininToken(requestData).then(response => {
                const responseData = response.data;
                if(responseData) {
                    data.upload_data.token = responseData.token
                }
            })
        }

        const handlerOnSuccess = (res, file) => {
			let image = `http://qv18xxim7.hn-bkt.clouddn.com/${res.key}`;
			form.field.image_url = image;
        }

        const handlerOnError = (res, file) => {}
        const handlerBeforeOnUpload = (file) => {
            const isJPG = file.type === 'image/jpeg';  // 限制 JPG 格式文件上传
            const isLt2M = file.size / 1024 / 1024 < 2; // 限制文件大小不能大于 2M
            if (!isJPG) {
                proxy.$message.error("上传图片只能是JPG格式!");
                return false;
            }
            if (!isLt2M) {
                proxy.$message.error("上传图片大小不能超过 2MB!");
                return false;
            }
            // 文件名转码
            let suffix = file.name;
            let key = encodeURI(`${suffix}`);
            data.upload_data.key = key;
            return isJPG && isLt2M;
        }

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
        return { 
            ...toRefs(form),
            data, 
            editor, 
            category_data, 
            handlerOnSuccess, 
            handlerOnError, 
            handlerBeforeOnUpload
        }
    }
}
</script>
<style lang="scss" scoped>

</style>