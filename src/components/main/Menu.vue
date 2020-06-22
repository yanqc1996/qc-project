<template>
    <div>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" :mode="menuType" @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
            <div v-for="(menu,inner) in menuConfig" style="float: left" :key="`outer_${inner}`">
                <el-menu-item :index="menu.path" v-if="!menu.submenu">{{menu.title}}
                </el-menu-item>
                <el-submenu :index="'ohter'+inner" popper-class="query-menu" v-if="menu.submenu">
                    <template slot="title">{{menu.title}}</template>
                    <el-menu-item v-for="(submenu,inner) in menu.submenu" :key="inner" :index="submenu.path">{{submenu.title}}
                    </el-menu-item>
                </el-submenu>
            </div>
        </el-menu>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1',
            menuConfig: this.Global.menuConfig,
        }
    },
    computed:{
        menuType(){
            return this.$store.state.menuType==='top'?'horizontal':'vertical'
            //监听menuType变化，动态修改导航栏是在左侧还是在上侧
        },
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath)
        }
    }
}
</script>

<style>
</style>