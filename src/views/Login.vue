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
        },
        dataFormatter(data) {
            let data2 = []
            for (let h in data) {
                let cfg = {
                    版本: h,
                    List: []
                }
                let i = data[h]
                for (let j in i) {
                    let cfg2 = {
                        阶段: '',
                        List: []
                    }
                    cfg2['阶段'] = j
                    for (let z in i[j]) {
                        let cfg3 = {
                            name: '',
                            List: []
                        }
                        cfg3.name = z
                        cfg3.List = i[j][z][1]
                        cfg2.List.push(cfg3)
                    }
                    cfg.List.push(cfg2)
                }

                data2.push(cfg)
            }
            return data2
        }
    },
    mounted() {

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