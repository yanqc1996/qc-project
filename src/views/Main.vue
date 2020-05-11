<template>
    <div class='qc-container'>
        <div v-for="(item,index) in 100" :key='index' class='qc-test'>
            <div v-for="(item,index) in 100" :key='index' class='qc-test'>
                <img :src='data' class='qc-test'>
            </div>
        </div>
    </div>
</template>

<script>
/**
 * @description
 */
export default {
    components: {},
    mounted() {
        this.data = this.test[0]
        setTimeout(() => {
           this.data=this.test[1] //黑名单框清除
        }, 10000)
    },
    data() {
        return {
            test: [require('@assets/login/login-bg.jpg'), require('@assets/login/login-left.png')],
            data: ''
        }
    },
    methods: {}
}
</script>

<style lang='less'>
.qc-test {
    width: 50px;
    height: 50px;
    border: 1px solid black;
}
</style>