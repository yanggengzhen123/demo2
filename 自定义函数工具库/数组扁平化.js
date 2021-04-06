let arr = [1,2,[3,4,[5,6]],7]
// 方法1
function falttenl(arr){
    let result = []
    arr.forEach(item => {
        if(Array.isArray(item)){
            result = result.concat(falttenl(item))
        }else{
            result = result.concat(item)
        }
    });
    return result
}
console.log(falttenl(arr));
// 方法2
function flatten2(arr){
    let result = [...arr]
    while(result.some(item => Array.isArray(item))){
        result = [].concat(...result)
    }
    return result
}
console.log(flatten2(arr));