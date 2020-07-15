import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)
//登录
const Login = () => import('@/views/Login')
// 主页
const Main = () => import('@/views/Main')
//首页
const Index = () => import('@/views/main/Index')
//双向绑定
const Binding = () => import('@/views/main/binding/Binding')
const router = new Router({
      routes: [
        {
          path: '/login',
          name: 'login',
          component: Login,
        },
        {
          path:'/binding',
          name:'binding',
          component:Binding
        },
        {
          path: '/',
          redirect: '/main/index',
          name: 'main',
          component: Main,
          children: [{
            path: '/main/index',
            name: 'index', //主页
            component: Index,
          }, ]
        }]
      })

    // 全局前置守卫，用于权限拦截
    router.beforeEach((to, from, next) => {
      // 滚动条滚至顶部
      document.getElementById("app").scrollTop = 0;
      let accessPathName = ["login"]; // 不需登录即可访问的白名单列表
      if (sessionStorage.getItem('token')) {
        // 如果已登陆，即可放行
        next();
      } else if (accessPathName.indexOf(to.name) > -1) {
        /**
         * 此时是没有登陆的情况，
         * 如果访问是不需要登陆就可访问的，直接放行
         */
        next();
      } else {
        /**
         * 此时是在没有登陆情况下，访问需要登陆之后才能访问的内容，
         * 前往登陆
         */
        next("/login");
      }
    })


    export default router