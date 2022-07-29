const categoryController = require("../controllers/categories.controller");
const orderController = require("../controllers/orders.controller");
const express = require("express");
const router = express.Router();

//category
router.post("/category", categoryController.create);
router.get("/category", categoryController.findAll);
router.get("/category/:id", categoryController.findOne);
router.put("/category/:id", categoryController.update);
router.delete("/category/:id", categoryController.delete);
router.post("/order", orderController.create);
router.get("/order", orderController.findAll);
// router.get("/order/:id", orderController.findOne);
// router.put("/order/:id", orderController.update);
// router.delete("/order/:id", orderController.delete);

module.exports = router;
