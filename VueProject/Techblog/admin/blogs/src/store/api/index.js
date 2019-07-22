import roter from "../../router/"
const axios = require("axios");
const qs = require('qs');

//拦截器，为后端每个请求加上authorization
axios.interceptors.request.use(config => {
    const token = localStorage.getItem("validate-info-tk")
    if(token){
        config.headers.Authorization = token
    }
    return config
},error => {
    return Promise.reject(error)
})

//封装请求接口--ajax
function ajax(type,url,options){
    return new Promise((resolve,reject) => {
        axios({
            method: type,
            url: url,
            params: type ==='get' || type ==='delete' ? options : null,
            data: type !== 'get' && type !== 'delete' ? qs.stringify(options) : null
        }).then((res) => {
            if(res.status === 200){
                resolve(res.data)
            }else{
                reject("request error in" + url)
            }
        }).catch((err) => {
            console.log(err,url);
        })
    })
}

// 配置五种请求方式
const config = {
    get(url,options){
        return new Promise((resolve,reject) => {
            ajax('get',url,options).then((data) => {
                resolve(data)
            })
        })
    },
    post(url,options){
        return new Promise((resolve,reject) => {
            ajax('post',url,options).then((data) => {
                resolve(data)
            })
        })
    },
    put(url,options){
        return new Promise((resolve,reject) => {
            ajax('put',url,options).then((data) => {
                resolve(data)
            })
        })
    },
    patch(url,options){
        return new Promise((resolve,reject) => {
            ajax('patch',url,options).then((data) => {
                resolve(data)
            })
        })
    },
    delete(url,options){
        return new Promise((resolve,reject) => {
            ajax('delete',url,options).then((data) => {
                resolve(data)
            })
        })
    }
}
export default config;

