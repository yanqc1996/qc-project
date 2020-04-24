import {
  createHttpClient
} from './http'

import {
  Message
} from 'element-ui';
const P_CONSTENT_TYPE = 'application/x-www-form-urlencoded'

class BaseApi {
  constructor() {
    this.$http = createHttpClient({
      headers: {
        get: {
          'Content-Type': P_CONSTENT_TYPE,
        },
        post: {
          'Content-Type': P_CONSTENT_TYPE,
        },
      },
    })
  }

  async get(url, config = {}) {
    const res = await this.$http.get(url, config)
    this.errorMessage(res.data)
    return res.data
  }

  async post(url, data = undefined, config = {}) {
    const res = await this.$http.post(url, data, config)
    this.errorMessage(res.data)
    return res.data
  }

  // async getWithoutError(url, config = {}) {
  //   const res = await this.$http.get(url, config)
  //   return res
  // }

  // async postWithoutError(url, data = undefined, config = {}) {
  //   const res = await this.$http.post(url, data, config)
  //   return res
  // }

  errorMessage(data) {
    const {
      retCode,
      retMsg,
    } = data
    if (retCode !== 1 && retMsg !== '未登录') {
      //根据状态判断是否进行了登录
      Message({
        message: retMsg,
        type: 'warning'
      });
    }
  }
}
export default BaseApi