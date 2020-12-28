<template>
    <svg class="svg-class" aria-hidden="true">
        <use :href="'#icon-' + iconName"></use>
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
    setup(props){}
}
</script>
<style lang="scss">
.svg-class {
    width: 1em;
    height: 1em;
    fill: currentColor;
}
</style>