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
                            <el-button type="success" class="el-button-block" :loading="data.code_button_loading" :disabled="data.code_button_disabled" @click="handlerGetCode">{{ data.code_button_text }}</el-button>
                        </el-col>
                    </el-row>
                </el-form-item>
                <el-form-item>
                    <el-button type="danger" @click="submitForm" :disabled="data.submit_button_disabled" class="el-button-block">
                        {{ data.current_menu === "login" ? "登录": "注册"}}
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { reactive, ref, onMounted, watch, toRefs, getCurrentInstance } from 'vue';
// 校验类
import { validate_email, validate_password, validate_code  } from "../../utils/validate";
// sha1
import sha1 from "js-sha1";
// API
import { GetCode } from "@/api/common";
import { Register } from "@/api/account";
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
            current_menu: "login",
            /**
             * 获取验证码按钮交互
             */
            code_button_disabled: false,
            code_button_loading: false,
            code_button_text: "获取验证码",
            code_button_timer: null,
            // 提交按钮
            submit_button_disabled: true
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
            data.code_button_loading = true;
            data.code_button_text = "发送中";
            GetCode(requestData).then(response => {
                // 获取后端返回的数据
                const resData = response;  
                // 激活提交按钮
                data.submit_button_disabled = false; 
                // Elementui 提示
                ctx.$message({
                    message: resData.message,
                    type: "success"
                })
                // 执行倒计时
                countdown();
            }).catch(error => {
                data.code_button_loading = false;
                data.code_button_text = "获取验证码";
            })
        }

        /** 倒计时 */
        const countdown = (time) => {
            if(time && typeof time !== 'number') { return false; }
            let second = time || 60;                     // 默认时间
            data.code_button_loading = false;              // 取消加载
            data.code_button_disabled = true;              // 禁用按钮
            data.code_button_text = `倒计进${second}秒`;    // 按钮文本
            // 判断是否存在定时器，存在则先清除   
            if(data.code_button_timer) { clearInterval(data.code_button_timer) };   
            // 开启定时器  
            data.code_button_timer = setInterval(() => {  
              second--; 
              data.code_button_text = `倒计进${second}秒`;  // 按钮文本
              if(second <= 0) {
                data.code_button_text = `重新获取`;         // 按钮文本
                data.code_button_disabled = false;         // 启用按钮
                clearInterval(data.code_button_timer);     // 清除倒计时
              }
            }, 1000)
        }

        /** 表单提交 */
        const submitForm = (formName) => {
            ctx.$refs.form.validate((valid) => {
                if (valid) {
                    data.current_menu === "login" ? login() : register();
                } else {
                    alert('表单验证不通过');
                    return false;
                }
            });
        }
        /** 注册 */
        const register = () => {
            const requestData = {
                username: data.form.username,
                password: sha1(data.form.password),
                code: data.form.code
            }
            console.log(requestData)
            Register(requestData).then(response => {
                ctx.$message({
                    message: response.message,
                    type: "success"
                })
                reset();
            })
        }
        /** 重置 */
        const reset = () => {
            // 重置表单
            ctx.$refs.form.resetFields();
            // 切回登录模式
            data.current_menu = "login";
            // 清除定时器
            data.code_button_timer && clearInterval(data.code_button_timer);
            // 获取验证码重置文本
            data.code_button_text = "获取验证码";
            // 获取验证码激活
            data.code_button_disabled = false;
            // 禁用提交按钮
            data.submit_button_disabled = true;              
        }
        /** 登录 */
        const login = () => {
            alert(222)
        }
        return {
            data,
            handlerGetCode,
            submitForm
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