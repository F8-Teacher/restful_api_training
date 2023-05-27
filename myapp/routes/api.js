var express = require("express");
var router = express.Router();
const UserController = require("../controllers/UserController");
const ProductController = require("../controllers/ProductController");
const PostController = require("../controllers/PostController");
const AuthController = require("../controllers/AuthController");

router.get("/users", UserController.index);

router.get("/users/:id", UserController.get);

router.get("/products", ProductController.index); //http method get

router.get("/products/:id", ProductController.get);

router.post("/products", ProductController.post); //http method post

router.get("/posts", PostController.index); //http method get

router.get("/posts/:id", PostController.get); //http method get

router.post("/posts", PostController.post); //http method post

router.post("/register", AuthController.register);

router.post("/login", AuthController.login);

router.get("/profile", AuthController.profile);

module.exports = router;

//Yêu cầu:
