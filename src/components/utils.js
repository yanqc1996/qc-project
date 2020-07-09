// utils工具类集合

/**
 * @desc 方法名称:全局防抖调用
 * @param {Function} [func] - 需要防抖执行的函数
 * @param {Number} [wait] - 防抖执行等待时间，默认1000ms
 * @param {Boolean} [immediate] - 是否需要在函数第一次触发立即执行,默认为false
 */
function debounce(func, wait = 1000, immediate = false) {
    let timeout
    function debounced(...args) {
        //...args：传递函数的实参
        //Arguments:类数组对象，拥有一个length属性和若干索引属性的对象（类数组对象见语雀知识点小记类数组对象）
        //每个函数都会有一个Arguments对象实例arguments，它引用着函数的实参，可以用数组下标的方式”[]”引用arguments的元素。
        //arguments.length为函数实参个数，arguments.callee引用函数自身。
        let context = this
        if (timeout) clearTimeout(timeout) //清空定时器（防抖函数的核心，每次调用都清空定时器）
        if (immediate) {
            //用来判断第一次是否立即调用，第一次的时候没有定时器，因此callNow为true，否则的话则为false
            let callNow = !timeout
            timeout = setTimeout(function () {
                timeout = null
            }, wait) //wait事件后清空定时器，重置第一次的判断
            if (callNow) func.apply(context, args) //调用func方法，apply见以下apply方法
        } else {
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, wait)
        }
    }
    //设置函数的取消方法
    debounced.cancel = () => {
        clearTimeout(timeout);
        timeout = null;
    };
    return debounced;
}
/**
 * @desc 方法名称：全局节流调用
 * @param {Function} [fn] - 需要节流执行的函数
 * @param {Number} [delay] - 节流执行闭锁时间，默认1000ms
 */
function throttle(fn, delay = 1000) {
    //定时器方法节流（还可以使用时间戳方法)(节流的方法写的比较简单，参照防抖其实实现原理相似，后续有时间再展开描述)
    let timer = null
    return function () {
        const context = this
        let args = arguments
        if (!timer) {
            timer = setTimeout(() => {
                fn.apply(context, args)
                clearTimeout(timer)
                timer = null;
            }, delay)
        }
    }
}



//手写实现call,apply,bind方法（原理及应用见语雀知识点小记->call,apply,bind方法小记）
/**
 * @desc 方法名称：手写实现call方法
 */

 
 /**
 * @desc 方法名称：手写实现apply方法
 */

 
 /**
 * @desc 方法名称：手写实现bind方法
 */



//promise,new



/**
 * @desc 方法名称:日期数据格式化
 * @param {String} [date] - 需要格式化的时间，类型为new Data()格式
 * @param {String} [fmt] - 需要转换的时间格式类型，默认为yyyy-MM-dd hh:mm:ss'
 */
function formatDate(date, fmt = 'yyyy-MM-dd hh:mm:ss') {
    if (typeof date == 'string') {
        return date
    }
    if (!date || date == null) return null
    let o = {
        'M+': date.getMonth() + 1, // 月份
        'd+': date.getDate(), // 日
        'h+': date.getHours(), // 小时
        'm+': date.getMinutes(), // 分
        's+': date.getSeconds(), // 秒
        'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
        S: date.getMilliseconds() // 毫秒
    }
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
    for (let k in o) {
        if (new RegExp('(' + k + ')').test(fmt))
            fmt = fmt.replace(
                RegExp.$1,
                RegExp.$1.length === 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
            )
    }
    return fmt
}

export {
    debounce,
    throttle,
    formatDate
};