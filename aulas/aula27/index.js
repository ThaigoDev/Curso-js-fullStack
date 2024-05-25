// ? :em casos de apenas 1 if else.

//exemplo : 
const pontuacao = 999;  
let nivel = "normal"; 

//ao invés de :

if (pontuacao > 1000) {
    nivel = "VIP"; 
} else {
    nivel = "normal";
}
//USAMOS: condição    se for ? true recebe : senao recebe essa      
nivel = pontuacao >= 1000 ? "User vip" : "User normal";  
console.log(nivel) //      se                          senão 
// resultado  =  (condição) ? valor caso   verdadeiro : valor caso for falso