// 引入模块
import axios from 'axios'

// 创建axios的实例化对象
const instance = axios.create({
  // 基本的url
  baseURL:'https://m.maizuo.com',
  timeout:10000,
  // 公共请求头
  headers:{
    'X-Client-Info':
    '{"a":"3000","ch":"1002","v":"5.0.4","e":"15984753841366499679797249","bc":"310100"}'
  }
})

const instance2 = axios.create({
  baseURL:'/info'
})

export{
  instance,
  instance2
}