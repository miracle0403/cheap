var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CHEAP WEB SCRIPTS' });
});
/* GET error 404. */
router.get('*', function(req, res, next) {
  res.status(404).redirect('/')
});

module.exports = router;