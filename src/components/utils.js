// utils工具类集合

//全局防抖调用
/**
 * 方法名称
 * @desc 全局防抖调用
 * @param {Function} [func] - 需要防抖执行的函数
 * @param {Number} [wait] - 防抖执行等待事件，默认1000ms
 * @param {Boolean} [immediate] - 是否需要在函数第一次触发立即执行,默认为false
 */
export function debounce(func, wait = 1000, immediate = false) {
    let timeout
    return function (...args) {
        let context = this
        if (timeout) clearTimeout(timeout)
        if (immediate) {
            let callNow = !timeout
            timeout = setTimeout(function () {
                timeout = null
            }, wait)
            if (callNow) func.apply(context, args)
        } else {
            timeout = setTimeout(function () {
                func.apply(context, args)
            }, wait)
        }
    }
}
//防抖进阶
// function debounce(fn, wait = 1000, immediate = false) {
//     let timer = null;

//     function debounced(...args) {
//         // 重置计时器
//         if (timer) clearTimeout(timer);

//         // 首次立即执行
//         if (immediate && !timer) {
//             fn.apply(this, ...args);

//             timer = setTimeout(() => {
//                 timer = null;
//             }, wait);

//             return;
//         }

//         // 新计时器
//         timer = setTimeout(() => {
//             fn.apply(this, ...args);
//             timer = null;
//         }, wait);
//     }

//     debounced.cancel = () => {
//         clearTimeout(timer);
//         timer = null;
//     };

//     return debounced;
// }

//全局节流调用
export function throttle(fn, delay) {
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
//节流函数拓展
// function throttle(fn, wait, options = { leading: true, trailing: false }) {
//     let timer;
//     let previous = 0;

//     const { leading, trailing } = options;

//     const throttled = function (...args) {
//         const now = +new Date();

//         if (leading === false && !previous) previous = now;
//         if (timer) clearTimeout(timer);

//         if (now - previous > wait) {
//             fn.apply(this, args);
//             previous = now;
//         } else if (trailing) {
//             // 更新timer
//             timer = setTimeout(() => {
//                 fn.apply(this, args);
//                 previous = 0;
//                 timer = null;
//             }, wait);
//         }
//     }
//     throttled.cancel = () => {
//         clearTimeout(timer);
//         timer = null;
//         previous = 0;
//     }


//     return throttled;
// }