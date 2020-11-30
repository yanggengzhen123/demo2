// 一个vote模块
import axios from './http' 
function voteAdd(){
    return axios.post('/insertVopte',{
        // 传一堆参数
        xxx:'xxx'
    });
}
export default {
    voteAdd
}