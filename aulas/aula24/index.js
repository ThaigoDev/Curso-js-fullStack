//IF, ELSE IF, ELSE
//if = se else if = senão se ; else = senão
//exemplo

const hora = 0;
/*Se (essa condição for verdadeira) faça {
   execute o código 
} 

*/
//IF 
//IF PODE SER SOZINHO
if (hora < 12) {
  console.log("Bom dia!");
}

//else if  senao se

//ELSE IF PRECISA DE UM  IF ANTES.

//PODE-SE TER QUANTOS ELSE IF´S QUISER NA CHECAGEM

//Só se pode 1 else na checagem.

//PODEMOS USAR CONDIÇÕES SEM ELSE IF  


if (hora <= 11 && hora >= 0) {
  console.log("Bom dia"); // <--se essa condição não for verdadeira  ele vai testar a próoxima condição :
} else if (hora >= 13 && hora <= 17) {
  console.log("Boa tarde !");
} else if (hora >= 18 && hora <= 23) {
  console.log("Boa noite !");
} else { 
    console.log("Olá"); //caso nenhuma das outras condições de certo, executara o else.
}

//if e else
const TenhoGrana = false; 
if (TenhoGrana) {
    console.log("Pobris"); //se for verdadeiro executa o código  senão executa o else 
} else {
    console.log("ricoo"); 
}