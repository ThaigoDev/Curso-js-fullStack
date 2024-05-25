// MAIS SOBRE NÚMEROS

let n1 = 1; 
let n2 = 2.5; 
// TO STRING;
// converte  numbers em string  

n1 = n1.toString(); 
n1 = n1.toString(2) //pegamoso  valor binario 01
console.log(n1.toString() + n2); 

// arredondar

let num = 10.2032093020320302039; 

// TO FIXED

//TO fixed arredondade de acordo com as casas decimais indicadas em ();
console.log(num.toFixed(3));  

// COMO SABER SE  UM NUMERO É INTEIRO OU NÃO : 
console.log(Number.isInteger(n1));  //retorna true ou false;

// NaN

//verifica se o calculo deu erro, retorna true ou false
console.log(Number.isNaN(n1));  

// iEE 754-2008 padrão de precisão de números;

// imprecisão 
let n3 = 0.7; 
let n4 = 0.1; 
console.log(n3+n4) // pode-se notar a imprecisão
