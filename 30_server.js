/**
 * 创建一个 HTTP 服务， 端口为 9000，满足以下需求
 * GET /index.html          响应  page/index.html 的文件内容
 * GET /css/app.css         响应  page/css/app.css 的文件内容
 * GET /images/logo.png     响应  page/images/logo.png 的文件内容
 */

// 导入 http 模块
const http = require('http')
const fs = require('fs')
const path = require('path')

// 声明一个变量
let mimes = {
    html: 'text/html',
    css: 'text/css',
    js: 'text/javascript',
    png: 'image/png',
    jpg: 'image/jpeg',
    gif: 'image/gif',
    mp4: 'video/mp4',
    mp3: 'audio/mpeg',
    json: 'application/json'
}

// 创建服务对象
const server = http.createServer((request, response) => {
    // 获取请求url的路径
    let {pathname} = new URL(request.url, 'http://127.0.0.1')
    // 声明一个变量
    let root = __dirname + '/page'
    // 拼接文件路径
    let filePath = root + pathname
    // 读取文件 fs 异步 API
    fs.readFile(filePath, (err, data) => {
        if (err) {
            response.setHeader('content-type', 'text/html;charset=utf-8')
            response.statusCode = 500
            response.end('文件读取失败~~')
            return
        }
        // 获取文件的后缀名
        let ext = path.extname(filePath).slice(1)
        // 获取对应的类型
        let type = mimes[ext]
        if (type) {
            // 匹配到了
            if (ext == 'html') {
                response.setHeader('content-type', type + ';charset=utf-8')
            } else {
                response.setHeader('content-type', type)
            }
        } else {
            // 没有匹配到
            response.setHeader('content-type', 'application/octet-stream')
        }
        // 响应文件内容
        response.end(data)
    })
})

// 监听窗口，启动服务
server.listen(9000, () => {
    console.log('服务已经启动....')
})