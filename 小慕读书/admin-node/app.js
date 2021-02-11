const express = require('express')
const router = require('./router')
const app = express()
app.use('/',router)
// 使 express 监听 5000 端口号发起的 http 请求
const server = app.listen(5000, function() {
  const { address, port } = server.address()
  console.log('Http启动成功：http://%s:%s', address, port)
})