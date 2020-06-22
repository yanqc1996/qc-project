<template>
    <div class='login qc-container qc-align-center'>
        <fluid-anima></fluid-anima>
        <div class='main qc-container qc-align-center'>
            <el-button type='success' @click='login'>登陆</el-button>
        </div>
    </div>
</template>

<script>
/**
 * @description 登陆页面
 */
export default {
    name: 'Login',
    methods: {
        login() {
            sessionStorage.setItem('token', 1)
            this.$router.push({ name: 'main' })
        }
    }
}
</script>

<style lang='less'>
.login {
    .main {
        position: absolute;
        width: 400px;
        height: 300px;
        background-color: transparent;
    }
}
</style>