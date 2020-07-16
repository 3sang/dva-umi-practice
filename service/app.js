var express = require('express');
var bodyParser = require('body-parser');

var app = express()

app.use(bodyParser.json());//使用bodyparser并配置其参数
app.use(bodyParser.urlencoded({ extended: false }));//使用bodyparser并配置其参数

app.all('*', function(req, res, next) {
  res.append('Access-Control-Allow-Origin','*')
  res.append('Access-Control-content-type','*')
  next();
});

app.get('/study/:id', function (req, res) {
  console.log(req.params)
  res.send({'userid':888888888888})
})

app.post('/study',function(res,req){
  data = req.body
  // 使用body-parser解析器获取post数据
})

app.listen("3000",()=>{
  console.log("server Start:")
  console.log("http://localhost:3000")
})