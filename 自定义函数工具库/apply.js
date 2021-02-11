// 手写apply函数
Function.prototype.apply = function(obj,arg){
    if(obj === null || obj === undefined){
        obj = globalThis
    }
    obj.temp = this
    let result = obj.temp(...arg)
    delete obj.temp
    return result
}
function add(a,b){
    console.log(a+b+this.c);
}
let obj = {
    c:1314
}
globalThis.c = 520
add.apply(obj,[10,20]) //1344
add.apply(null,[10,20]) //550