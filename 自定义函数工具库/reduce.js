const arr = [1,2,3,4,5]
// 示例
let result = arr.reduce((res,value)=>{
    return res + value
},0) //0为res初始值,value为arr的值
console.log(result); //15

Array.prototype.reduce = function(callback,value){
    let result = value
    for(let i = 0;i<this.length;i++){
        result = callback(result,this[i])
    }
    return result
}
//  演示
let arr2 = arr.reduce((res,value)=>{
    return res + value
},5)
console.log(arr2);
