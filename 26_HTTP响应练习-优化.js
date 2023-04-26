// 导入 http 模块
const http = require('http')
// 导入 fs 模块
const fs = require('fs')

// 创建服务对象
const server = http.createServer((request, response) => {
    // 读取文件内容
    let html = fs.readFileSync(__dirname + '/27_table.html')
    response.end(html) // 设置响应体
})

// 监听端口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动....')
})