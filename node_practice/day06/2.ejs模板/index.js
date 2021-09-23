/*
const express = require('express')

const app = express()
//让你的服务器知道你在用哪一个模板引擎-----配置模板引擎
app.set('view engine','ejs')
//让你的服务器知道你的模板在哪个目录下，配置模板目录
app.set('views','./haha')
*/

const express = require('express')
const app = express()
// 配置模板引擎   配置模板目录
app.set('view engine','ejs')
app.set('views','./haha')
//如果在express中基于Node搭建的服务器，使用ejs无需引入。
app.get('/show',(req,res) => {
  let personArr = [
    {name:'peiqi',age:4},
    {name:'suxi',age:5},
    {name:'peideluo',age:6}
  ]
  // res.render('person',{data:'<h1>你好 尚硅谷</h1>'})
  res.render('person',{persons:personArr,data:'<h1>你好，尚硅谷</h1>'})
})


/*app.get('/show',function (request,response) {
  let personArr = [
    {name:'peiqi',age:4},
    {name:'suxi',age:5},
    {name:'peideluo',age:6}
  ]
  response.render('person',{persons:personArr,a:1})
})*/

/*
app.listen(3000,function (err) {
  if (!err) console.log('服务器启动成功了')
  else console.log(err)
})*/

app.listen(3000,(err) => {
  if(!err) console.log('服务器启动成功！！！')
  else console.log(err)
})