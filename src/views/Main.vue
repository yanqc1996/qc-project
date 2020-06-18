<template>
    <index-main></index-main>
</template>

<script>
export default {
    name: 'Index',
        components: {
        IndexMain: () => import('@/components/Index/IndexMain'), //主页文件
    },
}
</script>

<style lang='less'>
.pie-circle {
    width: 180px;
    height: 180px;
    // background: transparent;
}
</style>
