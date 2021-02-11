// 手写call函数
Function.prototype.call = function(obj,...arg){
    // 如果obj为null或者undefined，则指向window
    if(obj === undefined || obj === null){
        // globalThis是ES11的新特性，指向全局
        obj = globalThis
    }
    //为obj添加临时方法
    obj.temp = this
    // 调用 temp 方法
    let result = obj.temp(...arg)
    // 删除obj 的 temp 
    delete obj.temp
    return result
}
function add(a,b){
    console.log(this);
    return a + b + this.c
}
let obj = {
    c:521
}
globalThis.c = 1314
console.log(add.call(obj,10,20)); //551
console.log(add.call(null,10,20)); //1344