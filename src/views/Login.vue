<template>
    <div>
        <el-button @click='login'>登录</el-button>
    </div>
</template>

<script>
/**
 * @description 登录(页面)
 */
import { LoginApi } from '@/http/index' //登录调用接口
export default {
    components: {},
    mounted() {},
    data() {
        return {}
    },
    methods: {
        async login() {
            let params = {
                userName: 'admin',
                password: '123456'
            }
            const res = await LoginApi.login(params)
            console.log(res)
        }
    }
}
</script>

<style lang='less' scoped>
</style> 