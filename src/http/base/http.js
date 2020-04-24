import axios from 'axios'
import qs from 'query-string'
const isPro = process.env.NODE_ENV === 'production'//判断是否是正式部署环境

const errorStatusMap = {
  400: '错误请求',
  401: '未授权，请重新登录',
  403: '拒绝访问',
  404: '请求错误,未找到该资源',
  405: '请求方法未允许',
  408: '请求超时',
  500: '服务器端出错',
  501: '网络未实现',
  502: '网络错误',
  503: '服务不可用',
  504: '网络超时',
  505: 'http版本不支持该请求',
  800: '登陆失效',
}

// 判断是否是空数组
function isEmptyObject(obj) {
  return !obj || !Object.keys(obj).length
}

// 清理headers中不需要的属性
function clearUpHeaders(headers) {
  ['common', 'get', 'put', 'delete', 'patch', 'options', 'head'].forEach(
    prop => headers[prop] && delete headers[prop],
  )
  return headers
}

// 组合请求方法的headers: headers = default <= common <= method <= extra
function resolveHeaders(method, defaults = {}, extras = {}) {
  method = method && method.toLowerCase()
  // check method is leagal
  if (!/^(get|post|delete|patch|options|head)$/.test(method)) {
    throw new Error(`method:${method}不是合法的请求方法`)
  }
  const headers = {
    ...defaults,
  }
  const commonHeaders = headers.comon || {}
  const headersForMethod = headers[method] || {}

  return clearUpHeaders({
    ...headers,
    ...commonHeaders,
    ...headersForMethod,
    ...extras,
  })
}

// 组合请求方法：config = default <= extra
function resolveConfig(method, defaults = {}, extras = {}) {
  if (isEmptyObject(defaults) && isEmptyObject(extras)) {
    return {}
  }

  return {
    ...defaults,
    ...extras,
    ...resolveHeaders(method, defaults.headers, extras.headers),
  }
}

class HttpClientModule {
  constructor(options = {}) {
    const defaultHeaders = options.headers || {}
    if (options.headers) {
      delete options.headers
    }

    const defaultOptions = {
      baseURL: isPro ? '/' : '/qury',
      timeout: 60000,
      transformRequest: [
        function(data, headers) {
          if (headers['Content-Type'] === 'application/x-www-form-urlencoded') {
            return qs.stringify(data)
          }
          return data
        },
      ],
    }

    this.defaultConfig = {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',//默认请求头属性，建议改成json
        ...defaultHeaders,
      },
    }
    this.$http = axios.create({
      ...defaultOptions,
      ...options,
    })
    // 接口响应拦截
    this.$http.interceptors.response.use(
      response => {
        if (response.status === 200) {
          // if (
          //   response.data.retCode === 2 &&
          //   response.data.retMsg === '未登录'
          // ) {
          //   if (!unLoginModalShow) {
          //     unLoginModalShow = true
          //     Modal.warning({
          //       title: '未登录或是登录已过期',
          //       content: '请点击登录按钮，前往登录页面',
          //       okText: '登录',
          //       onOk() {
          //         {
          //           unLoginModalShow = false
          //           store.commit('user/LOGOUT')
          //           router.replace({
          //             name: 'login',
          //           })
          //         }
          //       },
          //     })
          //   }
          // }
          return response
        }
      },
      error => {
        const message = errorStatusMap[error.response.status]
        return {
          data: {
            retCode: -1,
            retMsg: message,
          },
        }
      },
    )
  }

  get(url, config = {}) {
    return new Promise(resolve => {
      resolve(
        this.$http.get(url, resolveConfig('get', this.defaultConfig, config)),
      )
    })
  }

  post(url, data = undefined, config = {}) {
    return new Promise(resolve => {
      resolve(
        this.$http.post(
          url,
          data,
          resolveConfig('post', this.defaultConfig, config),
        ),
      )
    })
  }
}

// 导出工厂方法
export function createHttpClient(options, defaults) {
  return new HttpClientModule(options, defaults)
}

// 默认导出模块对象
export default HttpClientModule
