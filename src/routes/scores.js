var scoreFun  = require ('../models/scores')
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send(scoreFun.getScores());
});


module.exports = router;
