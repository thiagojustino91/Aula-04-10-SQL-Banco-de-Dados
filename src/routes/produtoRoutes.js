const express =  require("express");
const router = express.Router();
const {produtoController} = require("../controllers/produtoCrontoller");

// GET /produtos -> Listar de todos os produtos.
router.get('/produtos', produtoController.listarProdutos);

module.exports = {produtoRoutes: router};
