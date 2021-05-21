<template>
    <div class="">控制台</div>
</template>

<script>
import { useStore } from 'vuex'
export default {
    name: 'NewsIndex',
    components: {},
    props: {},
    setup(props){
        const store = useStore();
        console.log("原始结果:" + store.state.app.text);
        store.commit("app/SET_TEXT", "正在学习vue3+elementPlus");
        console.log("修改后的结果:" + store.state.app.text);
    }
}
</script>
<style lang="scss" scoped>
</style>