const arr = [1,2,3,4,5]
Array.prototype.filter2 = function(callback){
    let arr = []
    for(let i = 0;i<this.length;i++){
        if(callback(this[i],i)){
            arr.push(this[i])
        }
    }
    return arr
}
let res = arr.filter2((item=>{
    return item > 2
}))
console.log(res);
const orderList = [
    {orderId:0,amount:10},
    {orderId:1,amount:20}
]

var name = "xiaoHong"
var company = {
    name: "jingyuan",
    dev: {
        name: "anquan",
        getName: function(){
            return this.name
        }
    }
}
console.log(company.dev.getName());
const getName = company.dev.getName
console.log(getName());