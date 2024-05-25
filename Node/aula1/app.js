//IMPORTANTO MÓDULO :
//UTILIZAMOS CONST NOME DO MÓDULO = REQUIRE(CAMINHO RELATIVO OU ABSOLUTO); 
//VAMOS REQUIRIR AO ARQUIVO MODE1 NO CASO QUEREMOS IMPORTAR ESSE ARQUIVO EM NOSSO CÓDIGO.
const mod1 = require('./mode1.js'); 
const Person =  require('./mode1.js').Pessoa;  


console.log(mod1);  //É UM OBJETO NORMAL. ENTÃO POEMOS ACESSAR QUALQUER FUNÇÃO ATRAVÉS DESSE OBJETO.

//acionando uma função :

mod1.falaNome(); 
//PARA IMPORTAR APENAS UMA FUCIONALIDADE DE UM MÓDULO OU APENAS UMA VARIÁVEL, USAMOS :

//PODEMOS PEGAR  ESSA FUNÇÃO DE OUTRO MODO TAMBEM:

const myfunction = mod1.falaNome; 


const mod2 = require("./mode1").falaNome; //ESTAMOS FAZENDO UMA REQUISIÇÃO, MAS QUEREMOS APENAS A FUNÇÃO FALA NOME.

myfunction();  

//Destruction :

const { name, sobrenome, falaNome } = require("./mode1"); //DESTA FORMA, PODEMES PEGAR AS CHAVES SEPARADAMENTE.  
console.log(name,sobrenome); 

falaNome();  

//IMPORTANDO A CLASSE PESSOA :

const { Pessoa } = require("./mode1"); //quando usamos módulos internos usamos apenas o nome do arquivo. 

const p1 = new Pessoa("Titio", "Duarte", 19);  //criando um objeto usando a classe que exportamos. 
console.log(p1); 

//EXEMPLO DE EXPORTAR APENAS COM O NOME :  
const axios = require("axios"); //estamos importando  o axios apenas o nome.

