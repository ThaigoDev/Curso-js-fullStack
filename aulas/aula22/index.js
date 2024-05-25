/* 
OPERADORES LÓGICOS 
&& = AND = E 
v f = f 

f v = f  

v v = v 
retorna true apenas se as duas forem verdadeiras se apenas 1 for verdadeira retornará false. 

|| = OR = ou    
v v = v 

v f = v 

f v = v 

retorna se apenas uma for verdadeira retorna true 

! =  NOT = não 


*/

// && 
const expressao = (true && true && false && true);
console.log(expressao); 
  
// ||   
const expressionOr = true || false;   //caso apenas 1 for verdadeira retorna true, caso as 2 for true, retornará true.
console.log(expressionOr); 
 

// ! = NEGAÇÃO  INVERTE UMA EXPRESSÃO:  

console.log(!true); //AGORA É FALSE  
console.log(!!true) //podemos negaar quantas vezes quiser; 


