//引入mongoose
let mongoose = require('mongoose')
mongoose.set('useCreateIndex',true)
//1,链接数据库
mongoose.connect('mongodb://localhost:27017/index', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
//2,绑定数据库连接的监听
mongoose.connection.on('open', function (err) {
    if (err) {
        console.log('数据库链接失败', err)
    } else {
        console.log('数据库连接成功')
        //3，操作数据库

        //引入模型对象
        let Schema = mongoose.Schema
        //创建约束对象
        let studentsRule = new Schema({
            stu_id: {
                type: String,
                required: true,
                unique: true
            },
            name: {
                type: String,
                required: true,
            },
            age: {
                type: Number,
                required: true
            },
            sex: {
                type: String,
                required: true
            },
            hobby: [String],
            info: Schema.Types.Mixed,
            date: {
                type: Date,
                default: Date.now()
            },
            enable_flag: {
                type: String,
                default: 'Y'
            }
        })
        //创建模型对象
        let stuModel = mongoose.model('students',studentsRule)
        //增
        stuModel.create({
            stu_id: '004',
            name: '耗子',
            age: '24',
            sex: '男',
            hobby:['学渣','吃鸡','睡觉'],
            info: '一个沙雕一般的孩子',
        },function (err,date) {
            if (!err) console.log(date)
            else console.log(err)
            })
        //查
        stuModel.findOne({name:'坛子'},function (err, date) {
            if (!err) console.log(date)
            else console.log(err)
        })
        stuModel.find({name:'耗子'},function (err, date) {
            if (!err) console.log(date)
            else console.log(err)
        })

        //更新
        stuModel.updateOne({name:'耗子',age:'27'},function (err, date) {
            if (!err) console.log(date)
            else console.log(err)
        })
        //删
        stuModel.deleteMany({name:'耗子'},function (err, date) {
            if (!err) console.log(date)
            else console.log(err)
        })
    }
})