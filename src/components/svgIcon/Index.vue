<template>
    <svg class="svg-class" :class="svgClassName">
        <use :href="svgIcon"></use>
    </svg>
</template>
<script>
import { ref, computed  } from "vue";
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
        // className
        const svgClassName = ref(props.className);
        // svg 图标
        const svgIcon = computed(() => `#icon-${props.iconName}`);
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