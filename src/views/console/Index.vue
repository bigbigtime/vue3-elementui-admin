<template>
    <div class="">控制台</div>
    <svg-icon :icon-name="icon"></svg-icon>
</template>

<script>
import { ref } from "vue";
export default {
    name: 'NewsIndex',
    components: {},
    props: {},
    setup(props){
        const icon = ref("home");
        setTimeout(() => {
            icon.value = "user";
        }, 3000)
        return {
            icon
        }
    }

}
</script>
<style lang="scss" scoped>
</style>