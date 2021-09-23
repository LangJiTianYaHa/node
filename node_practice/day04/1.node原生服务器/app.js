
// 127.0.0.1:3000?name=zhangsan&age=18
// 1.引入node 内置的http
let http = require('http')
//引入的qs是一个对象，该对象身上有着很多有用的方法，最具代表性的：parse()
let qs = require('querystring')

//2.创建服务对象
let server = http.createServer(function (request,response) {
  //让服务员开始干活，获取客人点的菜单
  /*
  * (1).request:请求对象，里面包含着客户端给服务器的“东西”
  * (2).response：响应对象，里面包含着服务器要返回给客户端的“东西”
  * */
  //获取客户端携带过来的urlencoded编码形式的参数
  let params = request.url.split('?')[1]
  // console.log(params)
  let objParams = qs.parse(params)
  console.log(objParams)
  //解构赋值
  let {name,age} = objParams

  response.setHeader('content-type','text/html;charset=utf-8')
  // response.end(`<h1>你好${objParams.name},你的年龄是${objParams.age}</h1>`)
  response.end(`<h1>你好${name},你的年龄是${age}</h1>`)
})

//3.指定服务器运行的端口号（绑定端口监听）
server.listen(3000,function (err) {
  if(!err) console.log('服务器启动成功')
  else console.log(err)
})