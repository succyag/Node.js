var express = require('express');
var router = express.Router();

// 记账本的列表
router.get('/account', function(req, res, next) {
  res.render('list')
});

router.get('/account/create', function(req, res, next) {
  res.render('create')
})

module.exports = router;
