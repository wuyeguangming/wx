const express = require('express'), //express 框架 
      wechat  = require('./wechat/wechat'), 
       config = require('./config'),//引入配置文件
       handleSign = require('./sign');
var app = express();//实例express框架
app.set('view engine', 'pug')

var wechatApp = new wechat(config); //实例wechat 模块

//用于处理所有进入 3000 端口 get 的连接请求
app.get('/',function(req,res){
    // wechatApp.auth(req,res);
    // res.send('<>')
    res.type('text/html; charset=utf-8');
    res.render('index')
});

app.get('/MP_verify_JNKQH4hMsbpBDY1Z.txt',function(req,res){
    res.send('JNKQH4hMsbpBDY1Z');
});

//用于处理所有进入 3000 端口 post 的连接请求
app.get('/sign',function(req,res){
    handleSign(req,res);
});

//用于请求获取 access_token
app.get('/getAccessToken',function(req,res){
    wechatApp.getAccessToken().then(function(data){
        res.send(data);
    });    
});

//监听3000端口
app.listen(80);