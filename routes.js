const express = require("express");
const multer= require("multer");

const ProdutosController= require("./controller/produtos");
const FabricantesController= require("./controller/fabricantes");

const router = express.Router();
const upload= multer({dest: "uploads/"});


router.get("/produtos", ProdutosController.findAll);
router.get("/produtos/:id", ProdutosController.findOne);
router.post("/produtos", upload.single("imagem"), ProdutosController.create);
router.patch("/produtos/:id", ProdutosController.update);
router.delete("/produtos/:id", ProdutosController.destroy);

 
 router.get("/fabricantes", FabricantesController.findAll);
 
 module.exports = router;


