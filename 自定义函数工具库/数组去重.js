const arr = [1,2,3,4,5,2,4]
// 方法1 ：forEach + indexOf 
function unique(arr){
    if(!Array.isArray(arr)){
        return
    }
    let result = []
    arr.forEach(item=>{
        if(result.indexOf(item) === -1){
            result.push(item)
        }
    })
    return result
}
let result = unique(arr)
console.log(result);
// 方法2 forEach() + 对象容器
function unique2(arr){
    let result = []
    //声明空对象
    const obj = {}
    arr.forEach(item => {
        if(obj[item] === undefined){
            obj[item] = true
            result.push(item)
        }
    })
    console.log(obj);
    return result
    
}
let result2 = unique2(arr)
console.log(result2);
//方法3：利用ES6语法：from + Set 或者 ... + Set
function unique3(arr){
    return [...new Set(arr)]
    // let result = Array.from(new Set(arr))
    // return result
}
let result3 = unique3(arr)
console.log(result2);