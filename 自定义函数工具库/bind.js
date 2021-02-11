function bind(Fn,obj,...args){
    if(obj === null || obj === undefined){
        obj = globalThis
    }
    //bind返回一个函数，调用的时候执行方法
    return function(...args2){
        // 调用call方法
        obj.temp = Fn
        let result = obj.temp(...args,...args2)
        delete obj.temp
        return result
    }
}
function add(a,b){
    console.log(arguments);
    console.log(a+b+this.c);
}
let obj = {
    c:1314
}
globalThis.c = 520
bind(add,obj,10,20)() //1344
bind(add,null,10,20)(30,40) //550