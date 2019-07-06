VUE特点

VUE数据驱动（主要操作的是数据）

操作dom
JS数据类型

基本 number string boolean null undefined
Object function…
Symbol（es6）
{} []
数组的变异（括号中的能改变原数组）

操作数组的方法 pop push unshift shift slice splice reverse sort indexOf lastIndexOf concat join forEach map toString
forEach filter(过滤) map(映射) some every reduce (includes find es6)

## node版本>8.5 webstorm(vscode,sublime) > 2017以上版本


## 框架和库
- 框架  vue拥有完整的解决方案 我们写好人家调用我
- 库jQuery  underscore  zepto animate.css 我们调用它

##渐进式（渐进增强）
- vue全家桶 vuejs + vue-router + vuex + axios（获取数据）
- 通过组合 完成一个完整的框架


## vue的特点
- 1、核心只关注视图层（view）
- 2、易学，轻量，灵活的特点
- 3、适用于移动端项目
- 4、渐进式框架

##MVC(backbone)
- model 数据
- view 视图
- controller 控制器

##MVVM（angular，vue）双向的
- model 数据
- view 视图
- viewModel 视图模型

##Object.defineProperty(es5)的没有替代方案
- 不支持ie8<=以下

##安装vue
- cdn的方式 https:cdn.jsdelivr.net/npm/vue
- npm安装 node package manager
```
npm init -y
```
> 初始化会产生一个package.json的文件这个文件