# vue响应式数据变化
## 什么是Vue
Vue 是一套用于构建用户界面的渐进式框架
特点：易用、灵活、高效

渐进式框架
逐一递增 vue + components + vue-router + vuex + vue-cli
(Declarative Rendering) -- (Component System) -- (Client-Side Routing) -->
(Large Scale State Management) -- (Bulid System)

## 什么是库，什么是框架
> 库是将代码集合成一个产品，库是我们调用库中的方法实现自己的功能
> 框架则是为解决一类问题而开发，框架是我们在指定位置编写好代码，框架帮我们调用。框架是库的升级版

## 初始使用
```
new Vue({
    el:'#app',
    template:'<div></div>',
    data:{}
})
```

## 声明式和命令式
- 自己写for循环就是命令行（命令其按照自己的方式得到结果）
- 声明式就是利用数组的方法foreach（我们想要的是循环，内部帮我们去做）