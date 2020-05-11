<template>
    <div class='login qc-container'>
        <div class='login-bg qc-container qc-align-center is-vertical'>
            <div class='login-logo qc-align-center'>个人项目模板</div>
            <div class='login-form is-vertical'>
                <el-input class='login-form-input' v-model="userName" placeholder="Username"></el-input>
                <el-input class='login-form-input' type="password" v-model="passWord" placeholder="Password" auto-complete="new-password"></el-input>
                <el-button class='login-form-button' @click='login'>Login</el-button>
            </div>
        </div>
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
        return {
            userName: '',
            passWord: ''
        }
    },
    methods: {
        async login() {
            let params = {
                userName: this.userName,
                passWord: this.passWord
            }

            const res = await LoginApi.login(params)
            console.log(res)
            // console.log(res)
            // sessionStorage.setItem('token', 1)
            // this.$router.push({ name: 'main' })
        }
    }
}
</script>

<style lang='less'>
.login {
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    .login-bg {
        width: 100vw;
        height: 100vh;
        background: url('~@/assets/img/login/login-bg.jpg') no-repeat;
        background-size: 100% 100%;
        animation: kenburns-top 5s ease-out both;
    }
    .login-logo {
        font-size: 32px;
        color: #595caf;
        font-weight: 700;
        animation: tracking-in-contract 5s cubic-bezier(0.215, 0.61, 0.355, 1) both;
    }

    .login-form {
        width: 300px;
        height: 200px;
        background: #d2cccc73;
        margin-top: 20px;
        border-radius: 20px;
        padding: 20px;
        animation: bounce-in-top 5s both;
        .login-form-input {
            margin: 5px 0;
        }
        .el-input__inner {
            height: 50px;
            line-height: 50px;
            font-size: 20px;
            background: transparent;
            color: white;
            border: white 1px solid;
        }
        input::-webkit-input-placeholder,
        input::-webkit-input-placeholder {
            color: grey;
        }
        input:-webkit-autofill {
            box-shadow: 0 0 0px 1000px transparent inset;
            -webkit-text-fill-color: #000000;
        }
        .el-input-group__append,
        .el-input-group__prepend {
            background-color: rgba(255, 255, 255, 0.84);
        }
        .login-form-button {
            width: 100%;
            background-color: #880f88;
            border: none;
            border-radius: 10px;
            color: white;
            height: 60px;
            margin-top: 5px;
        }
    }
    @keyframes kenburns-top {
        0% {
            -webkit-transform: scale(1) translateY(0);
            transform: scale(1) translateY(0);
            -webkit-transform-origin: 50% 16%;
            transform-origin: 50% 16%;
        }
        100% {
            -webkit-transform: scale(1.25) translateY(-100px);
            transform: scale(1.25) translateY(-100px);
            -webkit-transform-origin: top;
            transform-origin: top;
        }
    }
    @keyframes tracking-in-contract {
        0% {
            letter-spacing: 1em;
            opacity: 0;
        }
        40% {
            opacity: 0.6;
        }
        100% {
            letter-spacing: normal;
            opacity: 1;
        }
    }
    @keyframes bounce-in-top {
        0% {
            -webkit-transform: translateY(-500px);
            transform: translateY(-500px);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
            opacity: 0;
        }
        38% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
            opacity: 1;
        }
        55% {
            -webkit-transform: translateY(-65px);
            transform: translateY(-65px);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
        }
        72% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
        }
        81% {
            -webkit-transform: translateY(-28px);
            transform: translateY(-28px);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
        }
        90% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
        }
        95% {
            -webkit-transform: translateY(-8px);
            transform: translateY(-8px);
            -webkit-animation-timing-function: ease-in;
            animation-timing-function: ease-in;
        }
        100% {
            -webkit-transform: translateY(0);
            transform: translateY(0);
            -webkit-animation-timing-function: ease-out;
            animation-timing-function: ease-out;
        }
    }
}
</style> 