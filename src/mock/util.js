import qs from 'query-string'

const responseBody = {
  data:"",
  retMsg: '',
  timestamp:"",
  retCode: 0
}

export const builder = (data, message, code = 0, headers = {}) => {
  responseBody._status = 200
  responseBody.data = data
  if (message !== undefined && message !== null) {
    responseBody.retMsg = message
  }
  if (code !== undefined && code !== 0) {
    responseBody.retCode = code
  }
  if (headers !== null && typeof headers === 'object' && Object.keys(headers).length > 0) {
    responseBody._headers = headers
  }
  responseBody.timestamp = new Date().getTime()
  return responseBody
}

export const getQueryParameters = (options) => {
  const url = options.url
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse('{"' + decodeURIComponent(search)
    .replace(/"/g, '\\"')
    .replace(/&/g, '","')
    .replace(/=/g, '":"') + '"}')
}

export const getBody = (options) => {
  console.log(options)
  return options.body && qs.parse(options.body)
}
