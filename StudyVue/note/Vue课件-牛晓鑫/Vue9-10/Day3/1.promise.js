/**
 * Created by Administrator on 2018/8/30.
 */
//做饭 -> 买菜
window.a='';
let a='';
function buy(callback) {
    setTimeout(()=>{
         a='蘑菇';
         callback(a);
    },2000);
}
buy(function cookie(val) {
    console.log(val);
}); //回调函数，将后续的处理逻辑，传入到当前要做的事，事情做好后，调用此函数
//promise 解决回调问题的 promise三个状态
//成功态 失败态 等待
