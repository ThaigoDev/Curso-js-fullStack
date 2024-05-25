//CONCATENAÇÃO DE ARRAYS :

const num1 = [1, 2, 3]; 
const num2 = [4, 5, 6] //vamos juntar esses 2 arrays.
//jeito errado:

const num3 = num1 + num2;//é uma string 
console.log(num3); 

//JEITO CERTO:

const a3 = num1.concat(num2,[7,8,9],10); // podemos adicionar valores independentes nesse método.
//agora conseguimos concatenar 

//podemos concatenar usando  o spread.
//podemos fazer a concatenação dessa forma. 
//Tudo isso funciona com objetos.        
const a4 = [...a3, ...num1, 'luiz', ...[7, 8, 9]];
