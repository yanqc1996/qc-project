<template>
    <div>
        <div>
            <el-button @click='addObj'>增加对象属性</el-button>
            <el-button @click='changeObj'>改变对象属性</el-button>
            <p v-for="item in testObj" :key='item'>{{item}}</p>
        </div>
        <div>
            <el-button @click='addArray'>增加数组属性</el-button>
            <el-button @click='changeArray'>改变数组属性</el-button>
            <p v-for="item in testArray" :key='item'>{{item}}</p>
        </div>
    </div>
</template>

<script>
/**
 * @description vue双向绑定
 */
export default {
    name: 'Binding',
    data() {
        return {
            testObj: {
                name: 'test'
            },
            testArray: ['test']
        }
    },
    methods: {
        addObj() {
            this.testObj.color = 'blue'
            console.log(this.testObj)
        },
        changeObj() {
            this.testObj.name = 'user'
            console.log(this.testObj)
        },
        addArray() {
            this.testArray[1] = 'user'
            this.testArray[2] = 'blue'
            this.testArray.length = 1
            console.log(this.testArray)
        },
        changeArray() {
            this.testArray.push('blue')
            console.log(this.testArray)
        }
    }
}
</script>

<style>
</style>