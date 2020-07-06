<template>
    <div></div>
</template>

<script>
/**
 * @description vue双向绑定原理实现页面
 */
export default {
    name: 'Index',
    data() {
        return {
            test: {
                name: 'test'
            }
        }
    },
    mounted() {
        console.log(this.test)//可以在控制台看到get/set方法
    },
    methods: {}
}
</script>

<style>
</style>