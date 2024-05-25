/* 
AVALIAÇÃO DE CURSO CIRCUITO  

&& E || 

&& = apartir do momento que aparece um false ele para e retorna o valor false = retorna o valor mesmo. 
No momento em que o Java Script encontra um valor que avalia em falso, ele para e retorna o valor: 
*/
console.log("Luiz" && 0 && "Maria");  //Ele retorna o 0; em caso de true retorna a utima
console.log("Luiz" && true && NaN);  //Ele retorna o 0; em caso de true retorna a utima

//Quando um valor true está na expressão :

console.log("Luiz" && true && "Maria"); //Ele retorna a ultima expressão.
console.log("Luiz" && 1 && "Maria"); //Ele retorna a ultima expressão.


/*
VALORES QUE PODEM  SER AVALIADOS COMO FALSE : 

false  
0
"" '' `` 

null

undefined 
NaN 

Qualquer coisa diferente disso é true. 
*/

console.log("Luiz" && "Maria" && "");
console.log("Luiz" && "Maria" && null);
console.log("Luiz" && "Maria" && undefined); //retorna o valor como false.

// exemplo 
function falaOi() {
    return "Oi"; 
} 

const Executa = false; 
 
console.log(Executa && falaOi());  //vai retornar false pois a função retorna true e a constante possui um valor false.

function falaOi2() {
    return "Oi"; 
}      

const Executa2 = true;  

console.log(Executa2 && falaOi2()); //vai retornar true  pois a função retorna um valor que pode ser validado em true.

// || Vai retornar o valor real

console.log(0 || false || null || 'Luiz' || true); //Vai retornar 'Luiz' pois ele vem primeiro e avalia verdadeiro. Ele pega sempre o primeiro valor e para por ali

/*
Exemplo de comportamento  do || : 
*/
const corUser = "red"; 
const corDefault = corUser || "preto"; 
console.log(corDefault) //Ele vai pegar o primeiro valor com valor de true.  No caso corUser



