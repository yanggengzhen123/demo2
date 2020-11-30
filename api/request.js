// fetch
import qs from 'qs'
// 根据环境变量进行接口区分
let baseUrl = '';
let baseURLArr = [
    {
        type:'development',
        url:'http://127.0.0.1:9000'
    },
    {
        type:'test',
        url:'http://192.168.20.15:9000'
    },
    {
        type:'production',
        url:'http://api.yanggengzhen.com'
    }
]
baseURLArr.forEach(item=>{
    if(process.env.NODE_ENV === item.type){
        baseUrl = item.url
    }
})
// 前端请求的时候,传参的时候转变为url+? query
// request(url,{
//     params:{

//     }
// })
export default function request(url,options={}){
    url = baseUrl + url; //请求的url ，配置项，如果不传，默认为空对象
    // get系列请求的处理
    !options.methods?options.methods = 'GET':null;
    if(options.hasOwnProperty('params')){
        if(/^(GET|DELETE|HEAD|OPTIONS)$/i.test(options.methods)){ //判断是否是get请求
            const ask = url.includes('?')?'&':'?';
            url += `${ask}${qs.stringify(params)}`
        }
        delete options.params;
    }
    // 合并配置项
    options = Object.assign({
        //允许跨域携带资源凭证same-origin同源可以 omit都拒绝
        credentials:'include',
        // 设置请求头
        header:{}
    },options);
    options.headers.Accept = 'application/json';
    // token的校验
    const token = localStorage.getItem('token');
    token && (options.header.Authorization = token);

    // post请求的处理
    if(/^(POST|PUT)$/i.test(options.methods)){
        !options.type ? options.type = 'urlencoded' :null;
        if(options.type === 'urlencoded'){
            options.headers['Content-Type'] = 'application/x-www-form-urlencoded';
            options.body = qs.stringify(options.body);
        }
        if(options.type === 'json'){
            options.headers['Content-Type'] = 'application/json';
            options.body = JSON.stringify(options.body);
        }
    }
    return fecth(url,options).then(response =>{
        // fecth和axios ajax的区别：不论服务器返回什么，都会成功触发.then
        //返回的结果可能是非200状态码
        if(!/^(2|3)\d{2}$/.test(response.status)){
            switch (response.status) {
                case 401: // 当前请求需要用户验证（一般是未登录）
                    break;
                case 403: //服务器已经理解请求，但是拒绝执行它（一般是token过期）
                    break;
                case 404: //请求失败，请求所希望得到的资源未被再服务器上发现
                    break;
            }
            return Promise.reject(response)
        }
    }).catch(error => {
        //断网处理
        if(!window.navigator.onLine){
             //断开网络了。可以让其跳转到断网页面
            return;
        }
        return Promise.reject(error)
    })
}
