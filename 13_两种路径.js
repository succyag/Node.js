// 1. 导入 fs 模块
const fs = require('fs')

// 相对路径
fs.writeFileSync('./index.html', 'test')
// fs.writeFileSync('index.html', 'test')
// fs.writeFileSync('../index.html', 'test')

// 绝对路径
fs.writeFileSync('D:/index.thml', 'test')
fs.writeFileSync('/index.thml', 'test')