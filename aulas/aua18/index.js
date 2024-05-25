/* 
PRIMITIVOS-(são imutáveis) STRING, NUMBER, BOOLEAN, UNDEFINED, NULL, (BIGINT ,SYMBOL); 
PRIMITIVOS SÃO IMUTÁVEIS POIS NÃO CONSGUIMOS MUDAR ELES.


VIMOS QUE STRINGS SÃO SEMELHANTES AOS ARRAYS : SÃO INDEXADAS : 

01234
VALOR
         0 1 2   
ARRAY = [1,2,3]; 


---CÓPIA DE VALORES --- 
*/
/* NESTE TRECHO FOI COPIADO O VALOR DE A E PASSADO PARA O B, DESTA FORMA UTILIZAMOS A PASSAGEM POR COPIA DE VALOR */

let a = "a"; 
let b = a;  
console.log(a, b); 
//caso eu altere o valor de "A", apenas o valor de "A" será alterado pois "b" foi copiado de "A"

a = "hello word"; 
console.log(a, b);  

// VALORES PASSADOS POR REFERÊNCIA  (MUTÁVEL) - array, object, function;

//NESTE CASO  QUANDO ATRIBUIMOS UM ARRAY A OUTRO, NÃO ESTAMOS COPIANDO, ESTAMOS PASSANDO POR REFERENCIA, TODAS AS ALTERAÇÕES QUE SÃO FEITAS EM "D"
//SERÃO FEITAS EM "C", POIS OS VALORES FORAM PASSADOS POR REFERENCIA(QUANDO O  ENDERÇO DE AMBAS AS VARIÁVEIS APONTAM PARA O  MESMO ENDEREÇO DE  MEMÓRIA);  
let c = [1, 2, 3]; 

let d = c;  
console.log(c, d); 

// veja os dois sendo alterados. 
c.push(4);  
console.log(c, d);  

//COPIANDO O VALOR DO ARRAY SEM SER POR REFERENCIA :

let f = [...c]; //QUANDO USAMOS ESSE OPERADOR, ESTAMOS COPIANDO OS VALORES DE "C" PARA "f";

f.push(2); 
f.push(3);  
//como podemos ver, "F" É idenpedente de "C" e quando seus valores são alterados, nãp interferem em "C"; 
console.log(f, c);   

//EM OBJETOS :


const Pessoa = {
    nome: "Thiago", 
    sobrenome: "Duarte", 
    idade: 19
} 
const CopiaPessoa = Pessoa; 
console.log(Pessoa, CopiaPessoa); 
Pessoa.nome = "Mudei o nome dos 2 objetos"; 
console.log(Pessoa, CopiaPessoa) 


//PARA COPIAR FAZEMOS O SPREND :

const CopiaDePessoa2 = { ...Pessoa } //ESTAMOS COPIANDO O VALOR DE PESSOA, AGORA ESSE OBJETO TEM OS  VALORES IDENPENDENTE
//OS VALORES PODEM SER ALTERADOES E NÃO VÃO ALTERAR O ORIGINAL

CopiaDePessoa2.nome = "posso alterar que não vai alterar no objeto Pessoa";  

/*
VALORES PRIMITIVOS SÃO COPIADOS,  
ARRAY, OBJECT,FUNCTION SÃO PASSADOS POR REFERÊNCIA. 



*/

