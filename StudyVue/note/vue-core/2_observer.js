// 数据源

let obj = {
    name:'jw',
    age:{
        age:18
    }
}
// vue 数据劫持 Object.defineProperty

function observer(obj){
    if(typeof obj == 'object'){
        for(let key in obj){
            defineReactive(obj,key,obj[key]);
        }
    }
}
function defineReactive(obj,key,value){
    observer(value); // 判断value是不是一个对象 如果是对象 会继续监控
    Object.defineProperty(obj,key,{
        get(){
            return value
        },
        set(val){
            observer(value); // 如果设置的值是对象 需要在进行这个对象的监控
            console.log('数据更新了');
            value = val;
        }
    })
}
observer(obj);
obj.age = {name:1};
obj.age.name = 2;
// vue 把 这个数组上的所有方法 都重写了
let arr = ['arr','slice','shift','unshift'];
arr.forEach(method => {
    let oldPush = Array.prototype.push;
    Attay.prototype.push = function(value){
        console.log('数据更新了');
        oldPush.call(this.value);
    }
})

obj.age.push(5);
obj.age.length--;
// 如果属性不存在 默认后增加的内容 并不会刷新视图
// 数组调用push 是无效的  Object.definenProperty  不支持数组

// 数组不能通过长度修改 也不能通过数组的索引进行更改
