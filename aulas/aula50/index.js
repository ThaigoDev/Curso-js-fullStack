//PARÂMETROS DE FUNÇÃO-AULA50
//usamos parametros dentro de ()
function funcao() {
  console.log("oie");
}
funcao("valor"); //caso não tenha definido na função os parametros, não vai gerar error nenhum.
//mas para onde vai esse parâmetro ?   Quando usamos a palavra function, dentro do dela temos algo chamado argument
//essa variável sustenta todos os argumentos que são enviados para uma função sem esses parametros definidos:

function funcaotwo() { 
    //podemos pegar os argumentos usando o rest operetor  ...resto. 

  console.log(arguments); //ESSE ARGUMENTS É UMA ESPECIE DE ARRAY ONDE VAI ARMAZENAR OS ARGUMENTOS DE NOSSA FUNÇÃO
  //PODEMOS MANIPULAR O ARGUMENTS COMO UM ARRAY:
  console.log(arguments[1]);
}

funcaotwo(1, 2, 3, 45, 5);
//isso é poderoso pois podeos manipular os argumentos dessa função :

function soma(a, b, c) {
  //os parâmetros que passamos vão ser referenciados por 1,2,3 na função declarada.
  //O detalhe importante é que 1,2,3,5,6 vão estar armazenados em arguments, mas 1,2,3 podem ser usamos como parâmetros pois seguem a sequiencia :
  let result = 0;
  //podemos manipular esses argumentos como visto :
  for (let arg of arguments) {
    result += arg;
  }
  console.log(result);
}
soma(1, 2, 3, 5, 6);
//!!!!!! detalhe >> funciona apenas em funções usadas  com a palavra function

function teste(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f); //vai retornar undefined pois o parâmetro não foi passado para as variáveis.
}
teste(1, 2, 3);

//adicionando valores padrões para parâmetros de função
//podemos adcionar dessa forma
function division(a = 0, b = 0) {
  console.log(a + b);
}
division();
division(5, 5); //evitamos erros de NaN  e Undefined.

//como pular parâmetros :
function soma3(a, b, c = 2) {
  console.log(a + b + c);
}
//usamos o undefined para pegar  o valor padrão definido na unção
soma3(3, undefined, 20); //vai nos retornar 25

//podemos fazer atribuição por desestruturação :

//estamos fazendo uma atribuição de parametro via desestruturação

function objshow({ nome, sobrenome, idade }) {
  console.log(nome);
  console.log(sobrenome);
  console.log(idade);
}
const person = {
  nome: "Thiago",
  sobrenome: "Duarte",
  idade: 19,
  endereco: {
    rua: "Gaivotas",
    n: 89,
  },
};
//usamos o objeto e ele passa as os valores de acordo com as chaves passadas como parametros.
objshow(person);
objshow({ nome: "joao", sobrenome: "Cleint", idade: 19 });

//Podemos fazer atribuição via desestruturação de arrays :
//da mesma forma dos objeto, apenas mudamos para colchetes
function showFruits([fruta1, fruta2, fruta3]) {
  console.log(fruta1);
  console.log(fruta2);
  console.log(fruta3);
}
const frutas = ["maçã", "pera", "abacate"];

showFruits(frutas);
//ou
showFruits(["abacate", "uva", "ameixa"]);

//exemplos :

function conta(op, acumualator, ...numeros) {
  for (let num of numeros) {
    if (op === "+") {
      acumualator += num;
    } else {
      if (op === "-") {
        acumualator -= num;
      } else {
        if (op === "/") {
          acumualator /= num;
        } else {
          if (op === "*") {
            acumualator * num;
          }
        }
      }
    }
  }

  console.log(acumualator);
} //op, acumulador, numeros
//           [resto     ] usamos o operador rest sempre por ultimo.
conta("+", 0, 1, 2, 3, 4, 5, 6); ///

//quando usamos arrow functions, não temos os arguments :

const funcaoDoida = (num, num2) => {
    console.log(arguments); //não existe em arrow functions
    
};
funcaoDoida(1, 2, 3, 4); 
