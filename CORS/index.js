axios.default.baseURL = "http://127.0.0.1:8888";
axios.default.withCredential = true; //允许跨域携带cookic信息,axios默认是请求的时候不会带上cookie的
axios.default.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.default.transformRequest = function(data){ //transformRequest在向服务器发送前，修改请求数据
    if(!data) return data;
    let result = ``;
    for(let attr in data){
        if(!data.hasOwnProperty(attr)) break;
        result += `&${attr}=${data[attr]}`;
    }
    return result.substring(1); //请求结果变成aa=xxx&bb=xxx
}
axios.interceptors.response.use(function onFulfilled(response){
    return response.data;
},function onRejected(reason){
    return Promise.reject(reason);
});
axios.default.validateStatus = function (status){ //状态码
    return /^(2|3)\d{2}$/.test(status);
}