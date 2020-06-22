<template>
    <div class='main qc-container' :class="menuType">
        <div class='menu'>
            <Menu></Menu>
        </div>
        <div class='router-main'>
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
/**
 * @description 主页
 */
export default {
    name: 'Main',
    components: {
        Menu: () => import('@/components/main/Menu') //菜单组件
    },
    data() {
        return {
            // menuType: localStorage.menuType || 'top'
        }
    },
     computed:{
        menuType(){
            return this.$store.state.menuType==='top'?'is-vertical':'is-horizontal'
        },
    },
}
</script>

<style lang='less'>
.main {
    .router-main {
        background-color: black;
        flex: 1;
    }
}
.is-vertical {
    .menu {
        width: 100%;
        height: 100px;
    }
}
.is-horizontal {
    .menu {
        width: 100px;
        height: 100%;
    }
}
</style>