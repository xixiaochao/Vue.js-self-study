/*
* express :第三方模块  ，模块之间相互进行依赖
* */
let http=require("http");
// http.createServer(function (req,res) {
// //    在这个方法中写路由，根据路由的不同，响应客户端内容的不同
// })
let express=require("express");
let app=express();
app.get("/login",function (req,res) {
    res.send("成功")
});
    app.get("/register",function (req,res) {
    res.send("注册")
})

app.listen(8800,function () {
    console.log("启动成功");
})