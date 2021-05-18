<template>
    <div id="login">
        <div class="form-wrap">
            <ul class="menu-tab">
                <li class="current">登录</li>
                <li>注册</li>
            </ul>
            <el-form ref="form">
                <el-form-item>
                    <label class="form-label">用户名</label>
                    <el-input></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary">立即创建</el-button>
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
        return {
            
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