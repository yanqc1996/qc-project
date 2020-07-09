<template>
    <div>
        <el-input @keyup.native="changeInput" v-model='inputData'></el-input>
    </div>
</template>

<script>
/**
 * @description 防抖函数
 * 防抖操作，重点在清零（clearTimeout(timer)），即操作会清零上一次操作，使用最后一个的结果
 * 防抖应用场景：
 * 1.登录、发短信等按钮避免用户点击太快，以致于发送了多次请求，需要防抖
 * 2.调整浏览器窗口大小时，resize 次数过于频繁，造成计算过多，此时需要一次到位，就用到了防抖
 * 3.文本编辑器实时保存，当无任何更改操作一秒后进行保存
 */
import { debounce } from '@/components/utils' //引入防抖工具方法
export default {
    name: 'Debounce',
    data() {
        return {
            inputData: ''
        }
    },
    methods: {
        changeInput: debounce(function() {
            this.changeInputRule()
        }, 1000), //防抖查询，避免过于频繁地查询后台数据
        changeInputRule() {
            console.log(1)
        }
    }
}
</script>

<style>
</style>