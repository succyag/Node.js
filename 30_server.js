// 导入 http 模块
const http = require('http')

// 创建服务对象
const server = http.createServer((request, response) => {
    // 获取请求url的路径
    let {pathname} = new URL(request.url, 'http://127.0.0.1')
    // 拼接文件路径
    let filePath = __dirname + '/page' + pathname
    // 读取文件 fs 异步 API
    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.statusCode = 500
            response.end('文件读取失败~~')
            return
        }
        // 响应文件内容
        response.end(data)
    })
})

// 监听窗口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动....')
})