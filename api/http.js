// 二次封装axios
import axios from 'axios';
import { config } from 'process';
import qs from qs;
// 根据环境变量区分接口的默认地址
switch(process.env.NODE_ENV){
    case "production": //生产环境
        axios.defaults.baseURL = "http://api.yanggengzhen.com";
    break;
    case "test": //测试环境
        axios.defaults.baseURL = "http://192.168.20.12:8080";
    break;
    default:
        axios.defaults.baseURL = "http://127.0.0.1:3000"
}
// 设置超时时间和跨域是否允许携带凭证
axios.defaults.timeout = 10000;
axios.defaults.withCredentials = true;

// 设置POST请求头，告知服务器请求主体的数据格式(看服务器要求什么格式)
// 就算是post请求有些人会要求以xxx=xxx&xxx=xxx的形式传参，这就是x-www-form-urlencoded格式
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// 将传参的json格式的data转化为xxx=xxx&xxx=xxx
axios.defaults.transformRequest = data => { qs.stringify(data)} 

//设置请求拦截器
// 客户端发送请求 ->[请求拦截器] -> 服务器
// TOKEN校验（JWT）：接收服务器返回的token，存储到vuex/本地存储中，每一次向服务器发请求，我们应该把token带上
axios.interceptors.request.use( config =>{ // config表示请求头的配置项
    // 携带上token
    let token = localStorage.getItem('token');
    token && (config.headers.Authorization = token);
    return config; //不返回config的话后端接收一片空白
},error=>{
    return Promise.reject(error);
})
// 自己设置哪些状态码表示成功，哪些表示失败(只要是返回2xx或者3xx都算请求成功，响应拦截器就会走第一个，否则走error)
axios.default.validateStatus = function (status){ //状态码
    return /^(2|3)\d{2}$/.test(status);
}
// 响应拦截器
// 服务器返回信息 -> [拦截的统一请求] ->客户端js获取到信息
axios.interceptors.response.use(response=>{
    return response.data; //只拿响应主题内容
},error=>{
    let { response } = error;
    if(response){
        // 服务器有返回结果(常用的错误状态码)
        switch (response.status){
            case 401: //当前请求需要用户验证(一般是未登录)(权限)
                break;
                // 一般操作是跳转路由或者弹出蒙层
            case 403: //服务器已经理解请求，但是拒绝执行它（一般是token过期）
            localStorage.removeItem('token')
            // 跳转到登陆页
                break;
            case 404: //找不到页面或者请求失败，请求所希望得到的资源未被放在服务器上发现
                break;
        }
        return Promise.reject(response)
    }else{
        // 服务器连结果都没有返回
        if(!window.navigator.onLine){
            // 断网处理：可以跳转到断网页面（把路由导进来，重新连接的时候可以go（-1），路由跳转，路由信息保存）
            return
        }
        return Promise.reject(error) //服务器返回结果都没有，并且也没有断网，此时应该是服务端的问题
    }
})
export default axios;
