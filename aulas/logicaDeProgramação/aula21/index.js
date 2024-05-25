// OPERADORES DE COMPARAÇÃO

/* 
>  maior que 
>= maior que ou igual a 
<  menor que 
<= menor que ou igual a 
== igualdade valor (não recomendado) ******
=== igualdade estrita (valir e tipo do dado) ******
!= diferente  (apenas o valor (não recomendado))******
!== diferente estrito(valor e tipo do dado ) ******




*/
// > 
console.log(10 > 5); //estamos perguntando se 10 é maior que 5. true ou false
//checa se 1 número é maior do que outro, retorna true ou false.
//PODEMOS GUARDAR EM VARIÁVEIS ESSES VALORES :
 
const result = 10 > 5; 

// >=

console.log(10 >= 5); //Caso apenas 1 delas seja verdadeira, retornará true .
//ELE VERIFICA SE É MAIOR OU IGUAL.

//10 é maior do que 5, mas não é igual, porém retornará true.

//<

console.log(10 > 5); //estamos perguntando se 10 é menor que 5.  Retorna true ou false
//checa se o 1 número é menor do que outro, retorna true ou false.
//PODEMOS GUARDAR EM VARIÁVEIS ESSES VALORES.

//<=

console.log(10 <= 12);  //Caso apenas 1 delas seja verdadeira, retornará true .
//ELE VERIFICA SE É Menor OU IGUAL.

//10 é MENOR do que 12, mas não é igual, porém retornará true.


// ==

console.log(10 == '10'); //fazemos a verificação se os valores são iguais ou não.
//retorna true ou false. (funciona com strings por isso não é recomendado isso pode gerar um erro futuro, o ideal é converter tudo em número .);

// ===

console.log(10 === "10"); //NESTE CASO FAZEMOS A VERIFICAÇÃO SE ESSA EXPRESSÃO OS VALORES E TIPOS SÃ IGUAIS
//NESTA EXPRESSÃO O VALOR RETORNARÁ FALSE. POIS OS TIPOS SÃO DIFERENTES.

console.log(10 === 10); //Retornará true , pois os valores e tipos são iguais.

//!= 
console.log(10 != '10'); //fazemos a verificação se os valores são diferentes ou não.
//retorna true ou false. (funciona com strings por isso não é recomendado isso pode gerar um erro futuro, o ideal é converter tudo em número .);

// !==

console.log(10 !== "10"); //NESTE CASO FAZEMOS A VERIFICAÇÃO SE ESSA EXPRESSÃO OS VALORES E TIPOS SÃo DIFERENTES
//NESTA EXPRESSÃO O VALOR RETORNARÁ TRUE. POIS OS TIPOS SÃO DIFERENTES.

console.log(10 !== 20); //Retornará true , pois os valores e tipos são iguais.

