const express =  require("express");
const router = express.Router();
const {clienteController} = require("../controllers/clienteController");

// GET /Cliente -> Listar de todos os Clientes.
router.get('/clientes', clienteController.listarClientes);

// POST /Clientes -> Cria um novo Cliente
router.post('/clientes', clienteController.criarClientes);


module.exports = {clienteRoutes: router};