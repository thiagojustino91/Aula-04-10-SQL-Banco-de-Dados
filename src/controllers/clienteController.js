const {clienteModel} = require("../models/clienteModel");

const clienteController = {
    /*
    ------------------------
    LISTAR TODOS OS PRODUTOS
    GET /produtos
    ------------------------
    */
     


    listarClientes: async (req, res) => {
        try {

            const clientes = await clienteModel.buscarTodos();

            res.status(200).json(clientes);
            
        } catch (error) {
            console.error('Erro ao listar cliente:',error);
            res.status(500).json({error: 'Erro ao buscar cliente.'});
            
        }


    },

    /*
    ------------------------
    CRIAR UM NOVO PRODUTO
    POST /PRODUTO 
    BODY
    {
      "nomeProduto": "nome",
      "precoProduto": 0.00
    }
    ------------------------
    */

    criarClientes: async (req, res) => {
        try {
            const {nomeCliente,cpfCliente} = req.body;

            if (nomeCliente == undefined || cpfCliente == undefined) {
                return res.status(400).json({erro: 'Campos Obrigatorios nao preenchidos!'});
            }

            const clientes = await clienteModel.buscarPorCpf(cpfCliente);
            
            if (clientes.length > 0 ) {
                return res.status(400).json({erro: 'CPF ja cadastrado'})
            }

            await clienteModel.inserirClientes(nomeCliente,cpfCliente);    
            
            res.status(201).json({message:'Cliente cadastrado com sucesso'});
            
        } catch (error) {
            console.error('Erro ao cadastrar cliente:',error);
            res.status(500).json({erro:'Erro ao cadastrar cliente'});
        }
    }
};

module.exports = {clienteController};