//REDUCE
//REDUZ O ARRAY EM UM ÚNICO ELEMENTO
//POR EXEMPLO: QUERO SABER A QUANTIDADE DE ITENS QUE HÁ NAQUELE ARRAY, ELE REDUZ EM UM UNICO ELEMENTO.
//REDUCE : CONSEGUIMOS FAZER  MAP() E FILTER() COM O REDUCE, MAS NÃO É RECOMENDADO.;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 2, 3, 4, 5, 6, 7, 8];
//utilizamos :

const somados = numbers.reduce((acumulador, valor, indice, array) => {
  acumulador += valor; //somamos os valores no acumulador.
  return acumulador;
}, 0); // <-- valor inicial do acumulador, ele é como se fosse a variável de controle do for(){}
//temos que tomar cuidado com o valor inicial do acumulador, pois ele pode enganar em determinadas situações.
//caso não colocamos o valor predefinido no acumulador, ele sempre será  o primeiro elemento e o valor o segundo.
//Ele deve ser  adicionado no final todas as vezes que você deseja começar o indice 0;
// EXPLICANDO
/*
numbers.reduce((acumulador,valorDoArray, indice, array)=>{},valor inicial do acumulador); 


*/
console.log(somados);

//exemplos com objeto.

const pessoas = [
  { nome: "thiago", idade: 19 },
  { nome: "Junin", idade: 50 },
  { nome: "Pedro", idade: 9 },
  { nome: "Cleion", idade: 19 },
];
const old = pessoas.reduce((ac, val) => {
  if (ac.idade > val.idade) {
    return ac;
    } 
    return val;
});
console.log(old);
