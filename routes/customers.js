var express = require('express');
var router = express.Router();

var customer = require('../core_modules/models/customers');



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
