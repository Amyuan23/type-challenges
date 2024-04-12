type MethodType = 'GET' | 'POST'

function request(method: MethodType) {
  switch (method) {
    case 'GET':
      method
      return '使用 GET 方法获取到的数据'
    case 'POST':
      method
      return '使用 POST 方法获取到的数据'
    default:
      method
      return '返回默认数据'
  }
}

type A = string | never

export {}
