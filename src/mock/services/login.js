import Mock from 'mockjs'
import { builder, getBody } from '../util'

const username = ['admin', 'user', 'super']
const password = ['123456', '8914de686ab28dc22f30d3d8e107ff6c'] // admin, ant.design

const login = (options) => {
  const body = getBody(options)
  if (!username.includes(body.userName) || !password.includes(body.passWord)) {
    return builder("", '账户或密码错误', 401)
  }
  return builder({
    'id': Mock.mock('@guid'),
    'name': Mock.mock('@name'),
    'username': 'admin',
    'password': '123456',
    'status': 1,
    'token': '4291d7da9005377ec9aec4a71ea837f',
  }, '登录成功', 200)
}

Mock.mock(/\/login\/login/, 'post', login)
