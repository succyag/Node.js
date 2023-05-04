// 声明一个函数
function tiemo () {
    console.log('贴膜...')
}

// 捏脚
function niejiao () {
    console.log('捏脚...')
}

// 暴露数据
// module.exports = {
//     tiemo,
//     niejiao
// }

// exports 暴露数据
// exports.tiemo = tiemo
// exports.niejiao = niejiao

// 1. module.exports 可以暴露‘任意’数据
// module.exports = 'succyag'
// module.exports = 500

// 2. 不能使用 'exports = value'的形式暴露数据
// exports = 'succyag'

// exports = module.exports = {}
// console.log(module.exports)
// console.log(module.exports === exports)