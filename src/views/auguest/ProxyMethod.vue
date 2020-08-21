<template>
    <div></div>
</template>

<script>
/**
 * @description Proxy的用法
 */
export default {
    name: 'ProxyMethod',
    data() {
        return {}
    },
    mounted() {
        // this.first() //set&&get方法，基于Object.defineProperty(监听单个属性)和Proxy(所有属性)
        this.next() //set&&get方法，基于Object.defineProperty(监听所有属性)和Proxy(所有属性)
    },
    methods: {
        first() {
            /**
             * @description Proxy的get&&get用法,部分基于Object.defineProperty进行比较
             */
            let student = {
                name: '炸炸',
                sex: '女',
                age: 24
            }
            Object.defineProperty(student, 'name', {
                get() {
                    return 'Object输出学生的名字是炸炸'
                },
                set(val) {
                    // this._name=val//此处设置值的时候为什么会出死循环问题？
                    console.log(`Object监测到学生的名字在变化为${val}`)
                }
            })
            let proxy = new Proxy(student, {
                get(target, key) {
                    /**
                     * target: 目标对象，即通过proxy代理的对象
                     * key: 要访问的属性名称
                     * receiver: receiver相当于是我们要读取的属性的this,一般情况下就是proxy对象本身
                     */
                    return `Proxy输出的学生${key}是${target[key]}`
                },
                set(target, key, value) {
                    /**
                     * target: 目标对象，即通过proxy代理的对象
                     * key: 要赋值的属性名称
                     * value: 目标属性要赋的新值
                     * receiver: 与 get的receiver 基本一致
                     */
                    console.log(`Proxy监测到学生的${key}被修改为${value}`)
                    // 对于set 来说，如果操作成功必须返回true, 否则会被视为失败
                    return true
                }
            })
            console.log(student.name)
            console.log(proxy.name)
            //两种的get方法
            student.name = 'haha'
            proxy.name = 'haha'
            //两种的set方法
            student.age = 23
            proxy.age = 23
            //Object.defineProperty方法监测所有属性需要进行遍历，而proxy方法可以直接监测（直接监测外部对象）
        },
        next() {
            let student = {
                name: '炸炸',
                sex: '女',
                age: 24
            }
            let newObj = JSON.parse(JSON.stringify(student))
            Object.keys(student).forEach(key => {
                Object.defineProperty(newObj, key, {
                    get() {
                        return `Object输出的学生${key}是${student[key]}`
                    },
                    set(val) {
                        console.log(`Object监测到学生的${key}被修改为${val}`)
                    }
                })
            })
            let proxy = new Proxy(student, {
                get(target, key) {
                    /**
                     * target: 目标对象，即通过proxy代理的对象
                     * key: 要访问的属性名称
                     * receiver: receiver相当于是我们要读取的属性的this,一般情况下就是proxy对象本身
                     */
                    return `Proxy输出的学生${key}是${target[key]}`
                },
                set(target, key, value) {
                    /**
                     * target: 目标对象，即通过proxy代理的对象
                     * key: 要赋值的属性名称
                     * value: 目标属性要赋的新值
                     * receiver: 与 get的receiver 基本一致
                     */
                    console.log(`Proxy监测到学生的${key}被修改为${value}`)
                    // 对于set 来说，如果操作成功必须返回true, 否则会被视为失败
                    return true
                }
            })

            console.log(newObj.name)
            console.log(proxy.name)
            newObj.age = 23
            proxy.age = 23
            student.source = 99
            proxy.source = 99
            //Object.defineProperty方法监测不到新增属性，而proxy方法可以监测到新增属性
        }
    }
}
</script>

<style>
</style>