var express = require("express");
var router = express.Router();
const UserController = require("../controllers/UserController");
const ProductController = require("../controllers/ProductController");

router.get("/users", UserController.index);

router.get("/users/:id", UserController.get);

router.get("/products", ProductController.index); //http method get

router.get("/products/:id", ProductController.get);

router.post("/products", ProductController.post); //http method post

module.exports = router;

//Yêu cầu:
