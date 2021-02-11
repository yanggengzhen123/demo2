const express = require('express')
const boom = require('boom') //处理错误信息
const userRouter = require('./user')
const { CODE_ERROR } = require('../utils/constant') //错误码

// 注册路由
const router = express.Router()
router.get('/',(req,res)=>{
    res.send('欢迎来到我的后台管理')
})
/**
 * 集中处理404请求的中间件
 * 注意：该中间件必须放在正常处理流程之后
 * 否则，会拦截正常请求
 */
router.use((req, res, next) => {
    next(boom.notFound('接口不存在')) //报出错误
})
// 路由异常处理中间件
router.use((err, req, res, next) => {
    console.log(err);
    const msg = (err && err.message) || '系统错误'
    const statusCode = (err.output && err.output.statusCode) || 500;
    const errorMsg = (err.output && err.output.payload && err.output.payload.error) || err.message
    res.status(statusCode).json({
      code: CODE_ERROR,
      msg,
      error: statusCode,
      errorMsg
    })
})
module.exports = router