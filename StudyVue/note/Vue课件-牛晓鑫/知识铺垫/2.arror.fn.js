/**
 * Created by Administrator on 2018/8/24.
 */
//arrow fn 不具备this，arguments
//自己家没有this就找上一级的this
//如何更改this指向
//1)call apply  bind
//2)var that=this;
//3)=>

//如何确定this是谁，看谁调用的，.前面是谁this就是谁
/*function a(b){
 return b+1;
 }
 let a=b=>b+1;*/
//去掉function关键字参数有一个可以省略小括号，小括号和大括号之间有一个箭头，如果没有大括号则直接是返回值，有大括号必须写return

let c=function (b) {
    return function (c) {
        return b + c;
    }
}();
//let a = b => c => b + c;//高阶函数（>=俩箭头的）
//console.log(a(1)(2));
//闭包：函数执行的一瞬间叫闭包（不销毁的作用域）当执行后返回的结果必须是引用数据类型，被外界变量接收，此时这个函数不会销毁
[1,2,3].forEach(item=>console.log(item));
//在vue中很多时候不能用箭头函数