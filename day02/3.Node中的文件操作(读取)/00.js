/*
//流式文件读取
let {createReadStream,createWriteStream} = require('fs')

let  rs = createReadStream(__dirname+'/music.mp3',{
    highWaterMark:10*1024*1024,
})

let ws = createWriteStream('../haha.mp3')

rs.on('open',function () {
    console.log('可读流打开了')
})
rs.on('close',function () {
    console.log('可读流关闭')
})
ws.on('open',function () {
    console.log('可写流打开了')
})
ws.on('close',function () {
    console.log('可写流关闭了')
})

rs.on('data',function (data) {
    console.log(data.length)
    ws.write(data)
})
*/
/*
*
*
*
*
*
*
*
*
*
* */
