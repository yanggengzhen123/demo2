const arr = [1,2,3,4,5]
// Array.prototype.every2 = function(callback){
//     for(let i = 0;i<this.length;i++){
//         let result = callback(this[i],i)
//         if(!result){
//             return false;
//         }
//     }
//     return true
// }
// const result = arr.every2(item=>{
//     return item > 0
// })
// console.log(result);
//some
Array.prototype.some2 = function(callback){
    for(let i = 0;i<this.length;i++){
        let result = callback(this[i],i)
        if(result){
            return true
        }
    }
    return false;
}
const result = arr.some2(item=>{
    return item > 6
})
console.log(result);