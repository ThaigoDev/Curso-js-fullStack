//SWITCH CASE

let data = new Date();
let diaSemana = data.getDay();
let diaSemanaText;
console.log(diaSemana);
//pode substituir dessa forma(é um caso perfeito para usar switch):
//Criamos vários if elses para criar isso.
if (diaSemana == 0) {
  diaSemanaText = "Domingo";
} else {
  if (diaSemana == 1) {
    diaSemanaText = "Segunda";
  } else {
    if (diaSemana == 2) {
      diaSemanaText = "Terça";
    } else {
      if (diaSemana == 3) {
        diaSemanaText = "Quarta";
      } else {
        if (diaSemana == 4) {
          diaSemanaText = "Quinta";
        } else {
          if (diaSemana == 5) {
            diaSemanaText = "Sexta";
          } else {
            if (diaSemana == 6) {
              diaSemanaText = "Sábado";
            }
          }
        }
      }
    }
  }
}
console.log(diaSemanaText);

//USANDO O SWITCH  :
//utilizamos o switch em caso de verificação de apenas 1 variável .


//USANDO O SWITCH DENTRO DE UMA FUNÇÃO

function GetNameDayWeek(diaSemana) { 
    let diaSemanaText; 
    switch (diaSemana) {
        case 0: //caso seja 0 ele executará o código:
          diaSemanaText = "hDomingo";
          break; // o switc precisa desse break para parar os testes quando for true. Assim como o  if e else Se nao usar o break ele continua verificando até o próximo break.
        case 1:
          diaSemanaText = "Segunda";
            return diaSemanaText;//Podemos substituir o break pelo o return em caso de função.  
        case 2:
          diaSemanaText = "Terça";
          return diaSemanaText;
        case 3:
          diaSemanaText = "Quarta";
          return diaSemanaText;
        case 4:
          diaSemanaText = "Quinta";
          return diaSemanaText;
        case 5:
          diaSemanaText = "Sexta";
          return diaSemanaText;
        case 6:
          diaSemanaText = "Sábado";
          return diaSemanaText;
        default:
          console.log("Não existe esse dia !");
      }    
}
const retorno = GetNameDayWeek(diaSemana);
console.log(retorno);