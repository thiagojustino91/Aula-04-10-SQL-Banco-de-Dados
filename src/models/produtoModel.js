// importar a conexão com o Banco de Dados e o tipo de dodos SQL
const { get } = require("http");
const {sql, getConnection} = require("../config/db");

const produtoModel = {
    buscarTodos: async ()=>{
        try {
            
            const pool = await getConnection();

            let querySQL = "SELECT * FROM Produtos";

            const result = await pool.request().query(querySQL);

            return result.recordset;

        } catch (error) {
            console.error("Erro ao buscar produtos:",error);
            throw error; // que chama a função que vai receber o erro
            
        }
    },

      inserirProduto: async (nomeProduto, precoProduto) => {
        try {
            
            const pool = await getConnection();

            let querySQL = 'INSERT INTO Produtos (nomeProduto,precoProduto) VALUES (@nomeProduto, @precoProduto)';

            await pool.request()
                .input('nomeProduto', sql.VarChar(100), nomeProduto)
                .input('precoProduto', sql.Decimal(10,2), precoProduto)
                .query(querySQL);

        } catch (error) {
            console.error('Erro ao inserir Produto:',error);
            throw error;
        }
      }

      
};

module.exports = { produtoModel};


