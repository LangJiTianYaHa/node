
//简单文件写入
// let fs = require('fs')
//
// fs.writeFile(__dirname + '/demo.txt', 'kobe,78', {mode: 0o666, flag: 'a'},
//     err => {
//         if (err)
//             console.log('文件写入失败', err)
//         else
//             console.log('文件写入成功')
//
//     })



//流式文件写入
let fs = require('fs')

let ws = fs.createWriteStream(__dirname+'/demo.txt',{start:10})

ws.on('open',function () {
    console.log('可写流开了')
})
ws.on('close',function () {
    console.log('可写流关闭了')
})

ws.write('黑\n')
ws.write('白\n')
ws.write('到底哪一个\n')
ws.end()


