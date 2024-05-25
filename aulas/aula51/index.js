//RETORNO DA FUNÇÃO - return
//quando o valor é retornado, termina a função.

// ex :

function soma(a = 2, b = 4) {
  return a + b;
}
// podemos armazenar o valor de retorno da função em variáveis>
let result = soma(1323, 223); //quando uma função não retorna nada, temos undefined como retorno padrão
//um exemplo disso é o alert("Hello world"); vai ativar o popup,mas retorna no console o valor undefined.

//exisem funções que não retornam mas faz algo :
// alert("Hello world"); // ela não retorna,mas executa algo.

//OQUE PODEMOS COLOCAR NESSE RETORNO ? QUE QUISERMOS ! :

//por exemplo, criamos uma função que retorna um objeto.
const CriaPessoa = (nome, sobrenome, idade) => {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
  };
};
console.log(CriaPessoa("Thiago", "Duarte", 19));

//funções que retonam funções  :

function FalaFrase(inicio) {
  function FalaFim(inicio, fim) {
    return inicio + " " + fim; //podemos utilizar parâmetros da função externa detro dessa função
  }
  return FalaFim; //essa função vai retornar a função que existe dentro dela como pode ver
}
const funcao = FalaFrase("olá"); //agora a constante funcao  é uma função, pois  o retorno da função Fala frase  mas com o parametro inserido na primeira função, agora funcao tem o valor = "Olá"
// é uma função, por tanto estamos armazenando uma função como function expression
const resto = funcao("Mundo"); //agora estamos invocando a função passando outro parâmetro, que vai ser inserido em FalaFim.
//AGORA RESTO ARMAZENA a frase complta.
console.log(resto);

//OUTRO EXEMPLO :
//TEMOS MUITAS FUNÇÕES REPETIDAS.
function duplica(n) {
  return n * 2;
}
function triplica(n) {
  return n * 3;
}
function quadriplica(n) {
  return n * 4;
}
//podemos aplica isso :
function CriaMultiplicador(mult) {
  return function multiplicador(n) {
    return n * mult;
  };
}
//agora qque criamos uma função que retorna outra função, usamos o seguinte :


const duplia2 = CriaMultiplicador(2) // estamos atriibuindo uma função que já recebe um parâmetro, ou seja. criando uma função que vai multiplicar por 2. 
const triplica2 = CriaMultiplicador(3);

const quadriplica2 = CriaMultiplicador(4); //estamos simplesmente criando uma função com uma função que retorna outra função que adiciona um númer como  parametro. 
let result2 = duplia2(4); 
console.log(result2);  
//resumindo : podemos retornar qualquer coisa. 

