/**
 * Created by Administrator on 2018/8/30.
 */
function butPack(){
    return new Promise((reslove,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.5){
                reslove('买');
            }else{
                reject('不买');
            }
        },Math.random()*1000);
    });
}
butPack().then(function (data) {
    console.log(data);
},function (data) {
    console.log(data);
});