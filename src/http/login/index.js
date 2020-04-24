import BaseApi from '../base'
const COMMON_PATH = 'login'

class LoginApi extends BaseApi {
  login(data) {
    /**
     * @param <String | Number> userName: 手机号
     * @param <String> password: 密码
     * @param <Boolean> ifRemember: 是否记住密码
     */
    return this.post(`${COMMON_PATH}/login`, data)
  }
  logout() {
    /**
     * @description 退出登录
     */
    return this.post(`${COMMON_PATH}/logout`)
  }
}

export default new LoginApi()
