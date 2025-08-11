const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // testando lodash
const numero =  _.random(0, 50);
console.log(numero);

const saudacao = _.once(() => {
    console.log('Olá, pessoal!');
});
saudacao();

// Definindo o tipo de conteúdo do cabeçalho para HTML
  res.setHeader('Content-Type', 'text/html');

//   // Escrevendo o conteúdo HTML
//   res.write('<!DOCTYPE html>');
//   res.write('<html>');
//   res.write('<head>');
//   res.write('<meta charset="UTF-8">');
//   res.write('<title>Minha Página</title>');
//   res.write('</head>');
//   res.write('<body>');
//   res.write('<h1>Olá pessoal</h1>');
//   res.write('<p>Olá novamente, pessoal</p>');
//   res.write('</body>');
//   res.write('</html>');

//caminho dos arquivos por html
let caminho = './views/';

switch(req.url){
    case '/':
        caminho += 'index.html';
        res.statusCode = 200;
        break;

    case '/sobre':
        caminho += 'sobre.html';
        res.statusCode = 200;
    break;

    case '/nossaempresa':
        res.statusCode = 301;
        res.setHeader('Location','/sobre');
    break;    

    default:
        caminho += '404.html';
        res.statusCode = 404;
    break;
    


}


//enviando arquivo por html

fs.readFile(caminho, (err,data) => {
    if(err){
        console.log(err);
        res.end();
    } else {
       // res.write(data);
        res.end(data);
    }

});
  
 
});

server.listen(3000, 'localhost', () => {
  console.log("Ouvindo requisição na porta 3000");
});