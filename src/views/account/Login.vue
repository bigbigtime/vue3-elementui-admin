<template>
    <div id="login">
        <div class="form-wrap">
            <ul class="menu-tab">
                <li class="current">登录</li>
                <li>注册</li>
            </ul>
        </div>
    </div>
</template>

<script>
import { reactive, ref, onMounted, watch } from 'vue';
export default {
   name: "Login",
   components: {},
   props: {}
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
</style>