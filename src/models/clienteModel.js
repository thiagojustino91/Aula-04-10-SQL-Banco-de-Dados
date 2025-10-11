// importar a conexão com o Banco de Dados e o tipo de dodos SQL
const { get } = require("http");
const {sql, getConnection} = require("../config/db");

const clienteModel = {
    buscarTodos: async ()=>{
        try {
            
            const pool = await getConnection();

            let querySQL = "SELECT * FROM Clientes";

            const result = await pool.request().query(querySQL);
            return result.recordset;

        } catch (error) {
            console.error("Erro ao buscar clietes:",error);
            throw error; // que chama a função que vai receber o erro
            
        }
    },

    buscarPorCpf: async (cpfCliente) =>{
        try {
            const pool = await getConnection();
            
            let querySQL = 'SELECT * FROM Clientes WHERE cpfCliente = @cpfCliente';

            const result = await pool.request()
                .input('cpfCliente', sql.VarChar(14), cpfCliente)
                .query(querySQL);

            return result.recordset;

        } catch (error) {
            console.error('Erro ao buscar CPF:',error);
            throw error;
        }
    },

    inserirClientes: async (nomeCliente, cpfCliente) =>{
        try {
            
            const pool = await getConnection();

            let querySQL = 'INSERT INTO Clientes (nomeCliente,cpfCliente) VALUES (@nomeCliente, @cpfCliente)';

            await pool.request()
                .input('nomeCliente', sql.VarChar(100), nomeCliente)
                .input('cpfCliente', sql.VarChar(15), cpfCliente)
                .query(querySQL);

        } catch (error) {
                console.error('Erro ao inserir Cliente:',error);
                throw error;
        }
    }

      
};

module.exports = {clienteModel};


