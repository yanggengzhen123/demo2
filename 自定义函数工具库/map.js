const arr = [1,2,3,4,5]
Array.prototype.map = function (callback) {
    let result = []
    for(let i = 0;i<this.length;i++){
        result.push(callback(this[i],i))
    }
    return result
}
let arr2 = arr.map((item,index) => {
    return item *10
})
console.log(arr2);