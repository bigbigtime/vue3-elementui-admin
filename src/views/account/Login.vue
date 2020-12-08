<template>
    <div id="login">
        <div class="form-wrap">
            <ul class="menu-tab">
                <li @click="data.current_menu = item.type" :class="{'current': data.current_menu === item.type}" v-for="item in data.tab_menu" :key="item.type">{{ item.label }}</li>
            </ul>
            <el-form ref="form" :model="data.form" :rules="data.form_rules">
                <el-form-item prop="username">
                    <label class="form-label">用户名</label>
                    <el-input v-model="data.form.username"></el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <label class="form-label">密码</label>
                    <el-input type="password" v-model="data.form.password"></el-input>
                </el-form-item>
                <el-form-item prop="passwords" v-if="data.current_menu === 'register'">
                    <label class="form-label">确认密码</label>
                    <el-input type="password" v-model="data.form.passwords"></el-input>
                </el-form-item>
                <el-form-item prop="code">
                    <label class="form-label">验证码</label>
                    <el-row :gutter="10">
                        <el-col :span="14">
                            <el-input v-model="data.form.code"></el-input>
                        </el-col>
                        <el-col :span="10">
                            <el-button type="success" class="el-button-block">获取验证码</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" disabled class="el-button-block">立即创建</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { reactive, ref, onMounted, watch, toRefs } from 'vue';
export default {
    name: "Login",
    components: {},
    props: {},
    setup(props){
        const data = reactive({
            form: {
                username: "",      // 用户名
                password: "",      // 密码
                passwords: "",     // 确认密码
                code: "",          // 验证码
            },
            form_rules: {
                username: [
                    { required: true, message: '请输入活动名称', trigger: 'change' },
                    { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'change' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'change' }
                ],
                passwords: [
                    { required: true, message: '请再次输入密码', trigger: 'change' }
                ],
                code: [
                    { required: true, message: '请输入验证码', trigger: 'change' }
                ]
            },
            tab_menu: [
                { type: "login", label: "登录" },
                { type: "register", label: "注册" }
            ],
            current_menu: "login"
        })
        return {
            data
        }
    }
}
</script>
<style lang='scss' scoped>
#login {
    height: 100vh;  // 设置高度，居于浏览器可视区高度
    background-color: #344a5f;  // 设置背景颜色
}
.form-wrap {
    width: 320px;
    padding-top: 100px;  //上内边距 
    margin: auto;  // 块元素水平居中
}
.menu-tab {
    text-align: center;
    li {
        display: inline-block;
        padding: 10px 24px;
        margin: 0 10px;
        color: #fff;
        font-size: 14px;
        border-radius: 5px;
        cursor: pointer;
        &.current { background-color: rgba(0, 0, 0, .1);}
    }
}
.form-label {
    display: block;  // 转为块元素
    color: #fff;      // 设置字体颜色 
    font-size: 14px; // 设置字体大小
}

</style>