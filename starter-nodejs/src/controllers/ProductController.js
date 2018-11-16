const mongoose = require('mongoose');

// Importando o model criado
const Product = mongoose.model('Product');

// O controller é responsável por fazer as alterações no
// banco de dados e manipular os dados quando a rota é acessada

// Retorna todos os métodos responsáveis por manipular a tabela products
module.exports = {
  async index(req, res) {
    // Retorna todos os dados da tabela products e retorna em formato JSON

    // mongoose-paginate
    // .paginate é usado para paginar os dados retornados limitando por página
    // Product.paginate(filtros, { paginaAtual, limitePorPagina })
    const { page = 1 } = req.query;

    const products = await Product.paginate({}, { page, limit: 10 });
    return res.json(products);
  },

  async show(req, res) {
    // Retorna as informações de um unico produto
    const product = await Product.findById(req.params.id);
    return res.json(product);
  },

  async store(req, res) {
    // Criação de um produto
    const product = await Product.create(req.body);
    return res.json(product);
  },

  async update(req, res) {
    // Atualiza um produto já caadstrado
    // Recebe pela URL o ID e pelo body o que va

    // { new: true } - faz com que o valor retornado seja o produto ATUALIZADO e já alterado
    const product = await Product.findOneAndUpdate(req.params.id, req.body, { new: true });
    return res.json(product);
  },

  async destroy(req, res) {
    // Remove um produto cadastrado
    await Product.findByIdAndRemove(req.params.id);

    // Retorna 200 OK
    return res.send();
  }
}
