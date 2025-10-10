var express = require("express");
var router = express.Router();
var productController = require("../controllers/product");

router.get("/all", productControllers.index);
router.get("/:id", productController.detail);


module.exports = router;