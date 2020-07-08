<template>
    <div>
        <!-- <debounce></debounce> -->
        <throttle></throttle>
    </div>
</template>

<script>
/**
 * @description vue双向绑定原理实现页面
 */
export default {
    name: 'Index',
    data() {
        return {}
    },
    components: {
        // Debounce: () => import('@/components/knowPoint/Debounce') //手写防抖函数
        Throttle: () => import('@/components/knowPoint/Throttle') //手写节流函数
    },
    mounted() {},
    methods: {}
}
</script>

<style>
</style>