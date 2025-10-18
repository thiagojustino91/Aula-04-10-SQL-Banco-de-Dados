## 🔌 API Reference
### Produtos

#### GET /produtos
- **Descrição**: Obtém uma lista de produtos
- **Response**: Array de produtos
#### POST /produtos
- **Descrição**: Cria um novo produto
- **Body**:
```
{
"nomeProduto": "produtoExemplo",
"precoProduto": 0.00
}
```
- **Response**:
```
{
"message": "Produto cadastrado com sucesso!"
}
```
- **Error Response**:
```
{
"message": "Erro ao cadastrar Produto!"
}
```

-------------------------------------------------------------------------------------------------------

### Clientes

#### GET /cliente
- **Descrição**: Obtém uma lista de clientes
- **Response**: Array de cliente
#### POST /clientes
- **Descrição**: cadastrar novo cliente
- **Body**:
```
{
"nomeCliente": "clienteExemplo",
"cpfCliente": 0.00
}
```
- **Response**:
```
{
"message": "Cliente cadastrado com sucesso!"
}
```

- **Error Response**: 

```
{
"error": "Erro ao cadastrar cliente"
}
```