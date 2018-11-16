const express = require('express');
const cors = require('cors');
const requireDir = require('require-dir'); //Importa todos os arquivos dentro de uma pasta
const mongoose = require('mongoose');

// Mongoose é o ORM (Object Relational Mapping) para banco de dados não relacionais (MongoDB)
// Ele encapsula a lógica do banco de dados através do código JS
// Transforma as tabelas do banco de dados em objetos JS

// Ou seja, não vamos precisar utilizar queries (como no SQL) para manipular os dados
// no banco, tudo será feito através de codigo JS


// Iniciando o app
const app = express();
app.use(express.json()); // Faz com que o express aceite recebar dados em JSON no body
app.use(cors()); // Libera o acesso ao servidor para todos os domínios que fizerem requisição

// Iniciando o DB
// A url passada é o endereço do banco de dados no formato:
// mongodb://ip:porta/nome-do-banco
mongoose.connect('mongodb://localhost:27017/nodeapi', {
  useNewUrlParser: true
});

//Registrando os models dentro da pasta models
requireDir('./src/models');

// Importando as rotas
app.use('/api', require('./src/routes'));

app.listen(3001);
