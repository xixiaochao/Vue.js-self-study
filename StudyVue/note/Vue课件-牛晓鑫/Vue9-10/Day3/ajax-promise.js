/**
 * Created by Administrator on 2018/8/30.
 */

function ajax({url='',type='get',dataType='json'}){
   return new Promise((resolve,reject)=>{
       console.log('-------------');
       let xhr=new XMLHttpRequest();
       xhr.open(type,url,true);
       xhr.responseType=dataType;
       xhr.onload=function () {//xhr.readState=4 xhr.status=200
           if(xhr.readyState === 200){
               resolve(xhr.response)//成功调用成功的方法
           }else{
               reject('not found');
           }


       };
       xhr.onerror=function (err) {
           reject(err)//失败调用失败的方法
       }
       xhr.send();
   })
}

ajax({url:'/carts.json'}).then

