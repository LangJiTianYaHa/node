/*
* 该模块主要用于连接数据库，且判断数据库的连接状态
* */
/*
let mongoose = require('mongoose')
mongoose.set('useCreateIndex',true) //使用一个新的索引创建器

const DB_NAME = 'demo'
const PORT = 27017
const IP = 'localhost'
*/

let mongoose = require('mongoose')
mongoose.set('useCreateIndex',true)

//连接数据库
function connectMongo(callback) {
  mongoose.connect(`mongodb://localhost:27017/demo11`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
//绑定数据库的连接
  mongoose.connection.on('open', function (err) {
    if (err) {
      console.log('数据库连接失败', err)
      callback('connect failed')
    } else {
      console.log('数据库连接成功')
      callback()
    }
  })
}
//暴露函数
module.exports = connectMongo

/*
function connectMongo(callback) {
  //1.连接数据库
  mongoose.connect(`mongodb://${IP}:${PORT}/${DB_NAME}`,{
    useNewUrlParser: true, //使用一个新的URL解析器，用于解决一些安全性问题。
    useUnifiedTopology: true //使用一个统一的新的拓扑结构。
  })

  //2.绑定数据库连接的监听
  mongoose.connection.on('open',function (err) {
    if(err){
      console.log('数据库连接失败',err)
      callback('connect failed')
    }else{
      console.log('数据库连接成功')
      callback()
    }
  })
}

module.exports = connectMongo
*/

