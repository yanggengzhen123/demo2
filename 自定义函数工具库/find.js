const arr = [1,2,3,2005,4,1001]
// find()
Array.prototype.find = function(callback){
    for(let i = 0;i<this.length;i++){
        if(callback(this[i],i)){
            return this[i]
        }
    }
    return undefined
}
let res = arr.find((item=>{
    return item > 3000
}))
console.log(res);

// findIndex()
Array.prototype.findIndex2 = function(callback){
    for(let i = 0;i<this.length;i++){
        if(callback(this[i],i)){
            return i
        }
    }
    return -1
}
let res = arr.findIndex2((item=>{
    return item > 1000
}))
console.log(res);
