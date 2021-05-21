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
        console.log("计算后的结果:" + store.getters["app/getCount"]);
        console.log("原始结果:" + store.state.app.count);
    }
}
</script>
<style lang="scss" scoped>
</style>