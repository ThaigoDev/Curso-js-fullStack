//FUNÇÕES  -> MANEIRAS DE DECLARAR FUNÇÃO :

//padrão

//Quando declaramos dessa maneira, ocorre o function hoisting

//o hoisting eleva as funções e  variáves com a palavra var parao topo do código

//podemos chamar ela antes de depois de sua declaração. FUNCIONA APENAS COM A DECLARAÇÃO  PADRÃO
falaOi();
function falaOi() {
  console.log("Oi");
}
falaOi();

//FUNCTIONS  SÃO OBJETOS DE PRIMEIRA CLASSE  FIRST-CLASS OBJECTS
//Oque isso significa?  Ela pode ser tratada em JS e em outras linguagens de programação como dados
//para utlizarmos usamos as functions  expressions : 
//PODE-SE NOMEAR A FUNÇÃO,MAS NÃO É COMUM
const SouUmDado = function () {
  console.log("sou um dado"); // estamos dizendo que essa constante vai receber uma função como  dado
};
//podemos executar essa constante como uma função normal :

SouUmDado();
//podemos executar essa funççao em outra função  :

function ExecutaFuntion(funcition) {
  console.log("Vou executar essa função abaixo");
  funcition();
}

ExecutaFuntion(SouUmDado);
//Por isso que a função é  um objeto de primeira classe, pois podemos usar elas em outras funções, guardar em  constantes... etc

//Arrow funcions :

//uma funcion expression :

const Arrow = () => {
  console.log("Sou uma arrow function");
};

Arrow(); //ESTAMOS CHAMANDO A NOSSA ARRAW FUNCTION.  TODAS ESSAS FUNÇÕES SÃO  OBJETOS DE PRMEIRA CLASSE.

//PODEMOS TER FUNCTIONS DETRO DE UM OBJETO :

const Obj = {
    nome: "Thiago", 
    action: () => {
        console.log("oi");
    },
    andar() {
        console.log("andando.");
    }
}
Obj.action();