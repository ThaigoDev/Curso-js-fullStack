//FILTER : fitramos o valor de um array:
//É UMA FUNÇÃO MAS IMPORTANTE.
//Ele sempr retorna uma array com a mesma quantidade valores ou menos

//retorne números maiores que  10
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 39, 34, 535, 34, 2];
//ao  Invés de fazer isso :
const numerosMaioresQueDez = [];
function maiores(ar, arUsage) {
  for (let i in arUsage) {
    if (arUsage[i] > 10) {
      ar.push(arUsage[i]);
    } else {
      continue;
    }
  }
  console.log(ar);
}
maiores(numerosMaioresQueDez, numeros);
//a função filter  filtra o que queremos  e não modifica o array original.
//fazemos :
function callbackFilter(valorDoElemento, indice, array) {
  //essa função de callback que vai ser usada no filter vai receber  3 parametros  que são passados automaticamente:
  //1- VALOR DE CADA INDICE DO ARRAY
  //2-INDICE DO ARRAY
  //3-ARRAY COMPLETO
  //essa função deve sempre retorna true ou false
  //true para quando queremos que esse elemento seja imbutido no novo array ou false para o inverso.

  return valorDoElemento > 10; //nesse caso queremos que todo elemento maior que 10 seja imbutido no novo array
}

const NumFiltrados = numeros.filter(callbackFilter); //esse método ele vai receber uma função de callback
//essa função vai iterar sobre cada elemento do array.
//essa função de callback automaticamente recebe 3 parâmetros
console.log(NumFiltrados);

//podemos utilizar arrow funcions (o mais usado)

const numerosMenoresQueDez = numeros.filter((valor) => valor < 10); //ele funciona como um for.
console.log(numerosMenoresQueDez);

//UM EXEMPLO COM OBJETOS .

const Pessoas = [
  { nome: "Thiago", idade: 19, sexo: "M" },
  { nome: "John", idade: 80,  sexo: "M" },
  { nome: "Junior", idade: 59, sexo: "M" },
  { nome: "fabio", idade: 19, sexo: "M" },
  { nome: "Felipe", idade: 29, sexo: "M" },
  { nome: "Lucas", idade: 19, sexo: "M" },
  { nome: "Mateus", idade: 19, sexo: "M" }, //NÃO MODIFICAMOS O VALOR DOS ARRAYS.
];

let NomesGrandes = Pessoas.filter(val => (val.nome.length >= 5)); 
let Anos50 = Pessoas.filter(val => val.idade > 50);  
let LetraTermina = Pessoas.filter(val =>val.nome.toLowerCase().startsWith('j') //usamos 2 funções.toLowerCase() converte tudo em minúsculo e endsWith() termina com oque desejamos. 


)
console.log(NomesGrandes);   
console.log(Anos50);  
console.log(LetraTermina); 
