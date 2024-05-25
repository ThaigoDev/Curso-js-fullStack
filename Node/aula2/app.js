// podemos importar com  a extensão js ou não.
const person = require("./modules");  //quando usamos um módulo  que executará apenas uma funcionalidade, podemos invocá-lo paenas pelo nome em que foi atribuido:
//NAVAGAÇÃO DE PASTAS 
/*
../ VOLTA 1 PASTA 
./ OU / VAI PARA PROXIMA PASTA 

*/ 
const NovaPessoa = new person("thiago", "duarte");   
//Acessando objeto : 
NovaPessoa.falar();  

//DUAS VARIÁVEIS INTERNAS DENTRO DO MODULO.

//__filename; nome do arquivo atual
//ele pega desde  o diretório raiz até o arquivo atual

//__dirname; nome  da pasta atual
//ele pega desde  o diretório raiz até a pasta atual

console.log(__filename); 
console.log(__dirname); 
//PATH PARA MANIPULAR CAMINHO : 
const path = require("path"); 
// NÃO SABEMOS ONDE O SOFTWARE VAI RODAR... O PATH CRIA UM CAMINHO CORRETO.

console.log(path.resolve(__dirname), '..', '..', "ARQUIVOS"); //PODEMOS MANIPULAR OS CAMINHOS USANDO OS "..", "NOME DAS PASTAS" OU "../"

