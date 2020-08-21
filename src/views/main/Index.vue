<template>
    <div ref='test'>
        <div v-for="(item, index) in list" :key="index">{{item}}</div>
        <el-button @click='deleteData'>删除</el-button>
        <div v-for="item in list" :key="item">{{item}}</div>
        <!-- <el-button @click='reserveData'>分隔</el-button>
        <div v-for="(item, index) in list" :key="index">{{index}}</div> -->
        <!-- <debounce></debounce> -->
        <!-- <throttle></throttle> -->
    </div>
</template>

<script>
/**
 * @description vue双向绑定原理实现页面
 */
export default {
    name: 'Index',
    data() {
        return {
            list: [1, 2, 3, 4, 5],
        }
    },
    components: {
        // Debounce: () => import('@/components/knowPoint/Debounce') //手写防抖函数
        // Throttle: () => import('@/components/knowPoint/Throttle') //手写节流函数
    },
    mounted() {},
    methods: {
        deleteData() {
            this.list.splice(0, 1)
        },
        reserveData() {
            this.list.reverse()
        }
    }
}
</script>

<style>
</style>