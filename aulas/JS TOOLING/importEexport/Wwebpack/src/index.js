// para importar usamos : 
// poemos mudar o nome da importação usando o as 
// podemos importar o padrão e importar as outras importações normalmente
import  FunctionSoma, { Pessoa as Person }  from './modulo1' // quando não usamos as {} ele busca a importação padrão ou seja a exportação default 

//quando usamos o * estamos importando tudo do modulo, ele retorna um objeto 
import * as modules from "./modulo1"; 

FunctionSoma(2,4); //dessa forma  nós importamos a função padrão e podemos adicionar qualquer nome dela;

// ou seja, mudamos  o nome da importação. 
let P1 = new Person("thiago","Duarte"); 
console.log(P1.nome); 