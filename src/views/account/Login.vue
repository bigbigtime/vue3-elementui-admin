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
                            <el-button type="success" class="el-button-block" @click="handlerGetCode">获取验证码</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" disabled class="el-button-block">{{ data.current_menu === "login" ? "登录": "注册"}}</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { reactive, ref, onMounted, watch, toRefs, getCurrentInstance } from 'vue';
// 校验类
import { validate_email, validate_password, validate_code  } from "../../utils/validate";
// API
import { GetCode } from "@/api/common";
export default {
    name: "Login",
    components: {},
    props: {},
    setup(props){
        const instance = getCurrentInstance();
        // 获取实例上下文
        const { ctx } = getCurrentInstance();
        // 用户名校验
        const validate_name_rules = (rule, value, callback) => {
            let regEmail = validate_email(value);
            if (value === '') {
                callback(new Error("请输入邮箱"));
            } else if(!regEmail) {
                callback(new Error("邮箱格式不正确"));
            } else {
                callback();
            }
        }
        const validate_password_rules = (rule, value, callback) => {
            let regPassword = validate_password(value);
            // 获取“确认密码”
            const passwordsValue = data.form.passwords;
            if (value === '') {
                callback(new Error("请输入密码"));
            } else if(!regPassword) {
                callback(new Error("请输入>=6并且<=20位的密码，包含数字、字母"));
            } else if(passwordsValue && passwordsValue !== value){
                callback(new Error("两次密码不一致"));
            } else {
                callback();
            }
        }
        // 校验确认密码
        const validate_passwords_rules = (rule, value, callback) => {
            // 如果是登录，不需要校验确认密码，默认通过
            if(data.current_menu === "login") { callback(); }
            let regPassword = validate_password(value);
            // 获取“密码”
            const passwordValue = data.form.password;
            if (value === '') {
                callback(new Error("请输入密码"));
            } else if(!regPassword) {
                callback(new Error("请输入>=6并且<=20位的密码，包含数字、字母"));
            } else if(passwordValue !== value){
                callback(new Error("两次密码不一致"));
            }else {
                callback();
            }
        }
        const validate_code_rules = (rule, value, callback) => {
            let regCode = validate_code(value);
            if (value === '') {
                callback(new Error("请输入验证码"));
            } else if(!regCode) {
                callback(new Error("请输入6位的验证码"));
            } else {
                callback();
            }
        }


        const data = reactive({
            form: {
                username: "",      // 用户名
                password: "",      // 密码
                passwords: "",     // 确认密码
                code: "",          // 验证码
            },
            form_rules: {
                username: [
                    { validator: validate_name_rules, trigger: 'change' }
                ],
                password: [
                    { validator: validate_password_rules, trigger: 'change' }
                ],
                passwords: [
                    { validator: validate_passwords_rules, trigger: 'change' }
                ],
                code: [
                    { validator: validate_code_rules, trigger: 'change' }
                ]
            },
            tab_menu: [
                { type: "login", label: "登录" },
                { type: "register", label: "注册" }
            ],
            current_menu: "login"
        })

        // 获取验证码
        const handlerGetCode = () => {
            const username = data.form.username;
            const password = data.form.password;
            const passwords = data.form.passwords;
            // 校验用户名
            if(!username || !validate_email(username)) {
                ctx.$message.error({
                    message: "用户名不能为空 或 格式不正确",
                    type: "error"
                })
                return false;
            }
            // 校验密码
            if(!password || !validate_password(password)) {
                ctx.$message({
                    message: "密码不能为空 或 格式不正确",
                    type: "error"
                })
                return false;
            }
            // 判断非 登录 时，校验两次密码
            if(data.current_menu === 'register' && (password !== passwords)) {
                ctx.$message({
                    message: "两次密码不一致",
                    type: "error"
                })
                return false;
            }
            // 获取验证码接口
            const requestData = {
                username: data.form.username,
                module: "register"
            }
            GetCode(requestData).then(response => {
                console.log(response.data)
            }).catch(error => {

            })
        }
        return {
            data,
            handlerGetCode
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