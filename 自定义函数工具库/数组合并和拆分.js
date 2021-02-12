let arr = [1,2,3,4,5,6,7,8]
Array.prototype.concat2 = function(...args){
    let result = [...this,...args]
    return result
}
const result = arr.concat2([4,5,6],7,8)
console.log(result);
// 数组切片
// let sliceResult = arr.slice(1,6)
// console.log(sliceResult);
Array.prototype.slice2 = function(begin,end){
    if(this.length === 0){
        return [];
    }
    //判断begin
    begin = begin || 0
    if(begin >= this.length){
        return [];
    }
    //判断end
    end = end || this.length
    if(end <begin){
        end = this.length
    }
    let result = []
    this.forEach((item,index)=>{
        if(index >= begin && index < end){
            result.push(item)
        }
    })
    return result
}
let sliceResult = arr.slice2(1,6)
console.log(sliceResult);