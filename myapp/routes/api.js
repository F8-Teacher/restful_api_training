var express = require("express");
var router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/users", UserController.index);

router.get("/users/:id", UserController.get);

module.exports = router;
