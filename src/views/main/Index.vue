<template>
    <div>
        <el-button @click='change'>切换</el-button>
        <el-color-picker v-model="color"></el-color-picker>
    </div>
</template>

<script>
/**
 * @description 登陆页面
 */
export default {
    data() {
        return {
            color: '#409EFF'
        }
    },
    methods: {
        change() {
            this.$store.state.menuType === 'top'
                ? (this.$store.state.menuType = 'left')
                : (this.$store.state.menuType = 'top')
        }
    }
}
</script>

<style>
</style>