<template>
    <div id="login">
        <div class="form-wrap">
            <ul class="menu-tab">
                <li @click="toggleMenu(item.type)" :class="{'current': current_menu === item.type}" v-for="item in data.tab_menu" :key="item.type">{{ item.label }}</li>
            </ul>
            <el-form ref="form">
                <el-form-item>
                    <label class="form-label">用户名</label>
                    <el-input></el-input>
                </el-form-item>
                <el-form-item>
                    <label class="form-label">密码</label>
                    <el-input type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <label class="form-label">验证码</label>
                    <el-row :gutter="10">
                        <el-col :span="14">
                            <el-inpu></el-inpu>
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
import { reactive, ref, onMounted, watch } from 'vue';
export default {
    name: "Login",
    components: {},
    props: {},
    setup(props){
        const data = reactive({
            tab_menu: [
                { type: "login", label: "登录" },
                { type: "register", label: "注册" }
            ]
        })
        let current_menu = ref(data.tab_menu[0].type);
        // 切换高光
        const toggleMenu = ((type) => {
            current_menu.value = type;
        })

        return {
            data,
            current_menu,
            toggleMenu
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