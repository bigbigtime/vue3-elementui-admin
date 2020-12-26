<template>
    <svg class="svg-class">
        <use href="#icon-home"></use>
    </svg>
</template>
<script>
export default {
    name: "SvgIcon",
    props: {}
}
</script>
<style lang="scss">
.svg-class {
    width: 1em;
    height: 1em;
    fill: currentColor;
}
</style>