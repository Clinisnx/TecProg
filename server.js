const app = require('./app');

app.set('port',7777); //escolha uma porta padrão
const server = app.listen(app.get('port'),()=>{
    console.log("O servidor está rodando na porta: "+server.address().port);
});