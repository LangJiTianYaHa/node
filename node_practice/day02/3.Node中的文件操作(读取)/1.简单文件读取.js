/*
*  fs.readFile(path[, options], callback)
*     --path：要读取文件的路径+文件名+后缀
*     --options：配置对象（可选）
*     --callback：回调
*         --err：错误对象
*         --data：读取出来的数据
* */

//简单文件写入和简单文件读取，都是一次性把所有要读取或要写入的内容加到内存中红，容易造成内存泄露。

/*
let fs = require('fs')

fs.readFile(__dirname+'/test.mp4',function (err,data) {
    if(err) console.log(err)
    //为什么读取出来的东西是Buffer？ 用户存储的不一定是纯文本
    else console.log(data)
    fs.writeFile('../haha.mp4',data,function (err) {
      if(err) console.log(err)
      else console.log('文件写入成功')
    })

})*/
/*let fs = require('fs')
fs.readFile(__dirname+'/test.mp3',function (err,data){
  if (err) console.log(err)
  else console.log(data)
  
  fs.writeFile('../test2.mp3',data,function (err){
    if(err)  console.log(err)
    else console.log('文件写入成功')
  })
})*/

let fs = require('fs')
fs.readFile(__dirname+'/隔壁老樊-多想在平庸的生活拥抱你 (中歌会 第6期)(高清).mp4',function (err,data){
  if (err) console.log(err)
  else console.log(data)

  fs.writeFile('../test3.mp4',data,function (err){
    if(err)  console.log(err)
    else console.log('文件写入成功')
  })
})


