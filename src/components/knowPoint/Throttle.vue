<template>
    <div>
        <el-input @keyup.native="changeInput" v-model='inputData'></el-input>
    </div>
</template>

<script>
/**
 * @description 节流函数
 * 节流操作，重点在开关锁（timer=null），控制事件发生的频率，使用的特定事件段的第一个事件结果
 * 节流应用场景：
 * 1.scroll 事件，每隔一秒计算一次位置信息等
 * 2.浏览器播放事件，每个一秒计算一次进度信息等
 * 3.input 框实时搜索并发送请求展示下拉列表，没隔一秒发送一次请求 (也可做防抖)
 */
import { throttle } from '@/components/utils' //引入节流工具方法
export default {
    //暂时仅考虑实现，后续考虑具体实现场景
    name: 'Throttle',
    data() {
        return {
            inputData: ''
        }
    },
    methods: {
        changeInput: throttle(function(e) {
            this.changeInputRule(e)
        }, 1000), //防抖查询，避免过于频繁地查询后台数据
        changeInputRule() {
            console.log(1)
        }
    }
}
</script>

<style>
</style>