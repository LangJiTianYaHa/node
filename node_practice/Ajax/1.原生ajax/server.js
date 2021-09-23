/*
let express = require('express')

let app = express()
//用于解析post请求请求体参数---参数的编码类型必须为：
app.use(express.urlencoded({extended:true}))

//暴露静态资源
app.use(express.static(__dirname+'/public'))
*/
let express = require('express')
let app = express()

//暴露静态资源
app.use(express.static(__dirname+'/public'))
//用于解析post请求请求体参数---参数的编码类型必须为：
app.use(express.urlencoded({extended:true}))

//配置路由
app.get('/ajax_get',function (req,res) {
  console.log('有人给我发了get请求')
  console.log(req.query)
  res.send('你发来的是get请求，我收到了lalalalalal')
})

app.post('/ajax_post',function (req,res) {
  console.log('有人给我发了post请求')
  console.log(req.body)
  res.send('你发来的是post请求，我收到了?????')
})
/*app.get('/ajax_get',function (req,res) {
  console.log('有人发了get请求给我')
  console.log(req.query)
  res.send('你发来的是get请求，我收到了??????')
})*/

/*app.post('/ajax_post',function (req,res) {
  console.log('有人发了post请求给我')
  console.log(req.body)
  res.send('你发来的是post请求，我收到了')
})*/

/*
app.listen(3000,function (err) {
  if(err) console.log(err)
  else {
    console.log('【练习原生js发送ajax服务器启动成功！】')
    console.log('【兄弟，别用编译器打开网页，会产生跨域问题！！！】')
    console.log('【点击这里去练习吧：http://localhost:3000/test_ajax_get.html】')
    console.log('【点击这里去练习吧：http://localhost:3000/test_ajax_post.html】')
  }
})*/
//设置监听
app.listen(3000,function (err) {
  if(!err){
    console.log('【练习原生js发送ajax服务器启动成功！】')
    console.log('【兄弟，别用编译器打开网页，会产生跨域问题！！！】')
    console.log('【点击这里去练习吧：http://localhost:3000/ajax_get.html】')
    console.log('【点击这里去练习吧：http://localhost:3000/ajax_post.html】')
  }else{
    console.log(err)
  }
})