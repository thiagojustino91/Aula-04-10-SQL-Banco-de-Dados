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
    }
};

module.exports = { produtoModel};


