let wechat = require('./wechat/wechat')
let config = require('./config') // 引入配置文件

let wechatApp = new wechat(config) // 实例wechat 模块

//用于处理所有进入 3000 端口 get 的连接请求
app.get('/',function(req,res){
    wechatApp.auth(req,res);
});

//用于请求获取 access_token
app.get('/getAccessToken',function(req,res){
    wechatApp.getAccessToken().then(function(data){
        res.send(data);
    });    
});

// module.exports.handler = function (req, resp, context) {
//   req.query = req.queries
//   wechatApp.auth(req, resp)
// }
