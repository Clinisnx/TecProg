// fazer a importação do express
const express = require('express');

//Rotas (quando o servidor for acessado, pra onde ele vai?)

const router = require('./routes/index');

//configurações básicas do aplicativo
const app = express();
app.use('/',router); //foi passado 1 rota pois criamos apenas 1

module.exports = app; // exportamos o app, pois vamos importa-lo no servidor
