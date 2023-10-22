//Nessa referida questão utilizei o JSON para representar o funcionamento dos métodos http como se pede a questão, e no final do código encontra-se a explicação do WSDL
const express = require('express')
const app = express()
const PORT = 3333
const bodyParser = require('body-parser')
app.use(bodyParser.json())

//Array para armazenar os dados(simulação de um banco de dados)
const produtos = []

//Exemplo de requisições HTTP
app.get("/", (req, res) => res.send("Página inicial")) //Exibe a página inicial
//GET - Exibe todos produtos cadastrados
app.get("/produtos", (req, res) => res.json(produtos))

//POST - Cadastra produtos no array
app.post("/produtos/cadastrar", (req, res) => {
    const novoProduto = req.body
    produtos.push(novoProduto)
    res.json({ mensagem: 'Produto adicionado com sucesso', produto: novoProduto })
})

//PUT - Atualiza um produto pelo ID
app.put('/produtos/atualizar/:id', (req, res) => {
    const produtoId = req.params.id
    const produtoAtualizado = req.body

    const index = produtos.findIndex(produto => produto.id == produtoId)

    if (index !== -1) {
        produtos[index] = { ...produtos[index], ...produtoAtualizado }
        res.json({ mensagem: `Produto com o ID ${produtoId} atualizado com sucesso`, produto: produtos[index] })
    } else {
        res.status(404).json({ mensagem: `Produto com o ID ${produtoId} não encontrado` })
    }
})

//DELETE - Remove um produto pelo ID
app.delete('/produtos/excluir/:id', (req, res) => {
    const produtoId = req.params.id

    const index = produtos.findIndex(produto => produto.id == produtoId)

    if (index !== -1) {
        const produtoRemovido = produtos.splice(index, 1)
        res.json({ mensagem: `Produto com o ID ${produtoId} removido com sucesso`, produto: produtoRemovido })
    } else {
        res.status(404).json({ mensagem: `Produto com o ID ${produtoId} não encontrado` })
    }
})

app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`))

// WSDL (Web Services Description Language)
// Significado:
//  * WSDL é a sigla para Web Services Description Language, que em português significa "Linguagem de Descrição de Serviços Web".
//  * Função:
//      - A principal função do WSDL é fornecer uma descrição formal e padronizada de um serviço web. Ele atua como um contrato entre quem fornece o serviço e quem o consome, permitindo que aplicações cliente compreendam como interagir com o serviço de maneira consistente.
//      - O WSDL define operações do serviço, entradas e saídas, protocolos de comunicação e a localização do serviço na rede.
//      - Ele é fundamental para a implementação e interoperabilidade de serviços web, garantindo uma comunicação eficiente e padronizada entre diferentes sistemas.
