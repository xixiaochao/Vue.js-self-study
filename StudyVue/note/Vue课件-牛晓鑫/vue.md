# 珠峰培训-牛晓鑫课件

### 认识vue
> 学习vue

> 写法不一样；记下来；明白框架的使用；

> 声明式框架：不关心如何实现的；

> 是一个mvvm框架：M:model  V:view  VM:view-model;

> MVC : model view controller : 数据单项通信，只能通过数据影响视图；

> MVVM ：model（后端返回的数据）和view是不能直接进行通信的；需要通过view-model来进行数据的传递；model-->view : 绑定数据；view-->model ：DOM的监听事件；[发布订阅模式]

> 数据是响应式的，当数据发生变化，会自动影响视图，当视图数据发生变化，会影响数据 --> 数据的双向绑定

```
vue-cli : 命令工具；
npm  install vue-cli  -g;
vue  init webpack  + 项目名称；
npm  run dev;webpack 会自动启动一个服务端口默认是8080；如果8080 被占用；会再生成一个新的端口号；

main  App.vue   components
```
