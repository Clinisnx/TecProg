const app = require('./app');

require('dotenv').config({path:'variables.env'});

app.set('port', process.env.PORT || 7777); //escolha uma porta padrão
const server = app.listen(app.get('port'),()=>{
    console.log("O servidor está rodando na porta: "+server.address().port);
});