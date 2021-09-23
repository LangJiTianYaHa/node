/*
let express = require('express')
let app = express()
app.get('/test',function (req,res){
  //解构赋值获取参数
  let {callback} = req.query
  console.log(callback)
  let personArr = [{name:'peiqi',age:12},{name:'suxi',age:16}]
  res.send(`${callback}(${JSON.stringify(personArr)})`)
})
app.listen(3000,function (err) {
  if(!err){
    console.log('演示jsonp解决跨域服务器，启动成功了！')
    console.log('兄弟，你要用编译器打开网页，因为你要解决跨域问题！')
  }else{
    console.log(err)
  }
})*/

let express = require('express')
let app = express()

app.get('/test',function (req,res) {
  let {callback} = req.query
  console.log(callback)
  console.log(req.query)
  let personArr = [{name:'zhangsan',age:18},{name:'lisi',age:25}]
  res.send(`${callback}(${JSON.stringify(personArr)})`)

})

app.listen(3000,function (err) {
  if(!err) {
    console.log('演示jsonp解决跨域服务器，启动成功了！')
    console.log('兄弟，你要用编译器打开网页，因为你要解决跨域问题！')
  }else{
    console.log(err)
  }
})