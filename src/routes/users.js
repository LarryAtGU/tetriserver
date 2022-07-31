var userFun = require("../models/users");
var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send({ users: userFun.listUser() });
});

/* get a single user */
router.get("/:id", function (req, res, next) {
  const id = req.params.id;
  res.send(userFun.getUser(id));
});

router.post("/login", function (req, res, next) {
  newid = userFun.loginUser(req.body.email, req.body.password);
  switch (newid) {
    case -1:
      msg = "Email not registered";
      break;
    case -2:
      msg = "Wrong password";
      break;
    default:
      msg = "Login successfully";
  }
  res.send({ id: newid, message: msg });
});

router.post("/", function (req, res, next) {
  newid = userFun.addUser(req.body.name, req.body.email, req.body.password);
  res.send({ id: newid, message: "New User is Added" });
});

module.exports = router;
