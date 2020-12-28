<template>
    <svg class="svg-class" :class="svgClassName">
        <use href="#icon-home"></use>
    </svg>
</template>
<script>
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
        const svgClassName = props.className;
        console.log(props.icon)
        return {
            svgClassName
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