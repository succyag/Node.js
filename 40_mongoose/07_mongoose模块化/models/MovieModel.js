// 导入 mongoose
const mongoose = require('mongoose')

// 创建文档结构
const movieSchema = new mongoose.Schema({
    title: String,
    director: String
})

// 创建模型对象
const movieModel = mongoose.model('movie', movieSchema)

// 暴露
module.exports = movieModel