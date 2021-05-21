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
        store.dispatch("app/update_count");
    }
}
</script>
<style lang="scss" scoped>
</style>