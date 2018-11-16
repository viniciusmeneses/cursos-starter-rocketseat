// Model é o M do MVC e cada model representa
// uma 'tabela' no banco de dados

// Schema: os campos que vai ter e que tipo de valor vai receber
const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate'); // Plugin para fazer paginação

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Utilizando o plugin no model
ProductSchema.plugin(mongoosePaginate);

// Registrando um model na aplicação
mongoose.model('Product', ProductSchema);
