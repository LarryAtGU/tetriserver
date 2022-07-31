var scoreFun = require("../models/scores");
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(scoreFun.getScores());
});

router.post("/", function (req, res, next) {
  rank = scoreFun.setScore(parseInt(req.body.id), parseInt(req.body.score));
  res.send({ rank: rank, message: "Rank added" });
});

module.exports = router;
