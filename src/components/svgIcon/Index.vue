<template>
    <svg class="svg-class" :class="svgClassName">
        <use :href="svgIcon"></use>
    </svg>
</template>
<script>
import { ref } from "vue";
export default {
    name: "SvgIcon",
    props: {
        iconName: {
            type: String,
            default: ""
        },
        className : {
            type: String,
            default: ""
        }
    },
    setup(props){
        // 直接使用接收到的值
        const svgClassName = ref(props.className);
        const svgIcon = ref(`#icon-${props.iconName}`);
        return {
            svgClassName,
            svgIcon
        }
    }
}
</script>
<style lang="scss">
.svg-class {
    width: 1em;
    height: 1em;
    fill: currentColor;
}
</style>