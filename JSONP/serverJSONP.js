let express = require('express')
app = express()
app.listen('8001',_ =>{
    console.log('8001成功开启')
})
app.get('/list',(req,res)=>{
    // 请求传递过来一个callback
    let { callback = Function.prototype} = req.query
    let data = {
        code:0,
        message:'JSONP请求成功'
    }
    res.send(`${callback}(${JSON.stringify()})`)
})