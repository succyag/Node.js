// 导入 express
const express = require('express')

// 创建应用对象
const app = express()

// 设置静态资源中间件
app.use(express.static(__dirname + '/public'))

// 创建路由
app.get('/home', (req, res) => {
    res.end('hello')
})

// 监听端口，启动服务
app.listen(3000, () => {
    console.log('服务已经启动，端口 3000 监听中...');
})