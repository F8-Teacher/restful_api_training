var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  console.log(`HomePage`);
  res.render("index", { title: "Express" });
});

// router.get("/users", function (req, res) {
//   res.status(200).json([
//     {
//       id: 1,
//       name: "Hoàng An",
//     },
//   ]);
// });

module.exports = router;
