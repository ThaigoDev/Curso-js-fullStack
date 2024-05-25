// OBJETOS - REVISANDO
// CRIANDO OBEJTO LITERAL (LITERAL POIS A SINTAXE É DIRETA)

const pessoa = {
  //corpo do objeto
  // um objeto é composto de chave e valor.
  //chaves usamos para acessar valores do objeto.
  // por exemplo : nome: é a chave do valor "thiago".
  nome: "Thiago",
};
// para acessar uma chave usamos :

console.log(pessoa.nome);
// podemos utilizar a notação de colchetes:
//para utilizar a notação de colchete usamos obj['chave'];
console.log(pessoa["nome"]); //Ela é usada em casos quando não se sabe a chave.
//podemos utilizar o  colchete quando não temos  a chave literal.
let chave = "nome";
console.log(pessoa[chave]);

// utilizando  o construtor de objeto para criar um objeto.

const pessoa1 = new Object();
// desta forma estamos  criando um objeto através de seu construtor
(pessoa1.nome = "thiago"), (pessoa1.sobrenome = "duarte");

console.log(pessoa1);

// apagando  chaves :

delete pessoa1.nome;
// utilizamos o delete para apagar uma chave.
console.log(pessoa1);

// dentro de objetos podem ter métodos.

pessoa1.nome = "Thiago";
pessoa1.idade = 19;

pessoa1.FalarName = function () {
  console.log(`Olá ${this.nome}  sua idade é ${this.idade}como é bom a vida!`);
};

pessoa1.FalarName();
// podemos  adicionar diversos métodos no objeto :

pessoa1.getDataNasc = function () {
  let Year = new Date();
  return Year.getFullYear() - this.idade;
};
console.log(pessoa1.getDataNasc());
// podemos ter métodos que representam algo, é muito poderoso, pois podemos ter objetos e métodos  em tudo que quisermos.
// podemos manipular as propriedades dentro desse objeto.

// funções dentro de objetos são métodos.






// criando moldes  de objetos :
//factory  functions  e constructor functions.



//factory function :
// criamos uma função que recebe como parâmetros
// os valores que serão usados nas chaves do objeto.
//logo após essa função retorna um objeto utilizando as chaves  e os valores
//passados como paraâmetros.
function criaPessoa(nome, sobrenome, idade) {
  return {
    nome: nome,
    sobrenome: sobrenome,
    idade: idade,
    falarOi() {
      console.log("Olá");
    },
    //podemos utilizar o get e setter..
    get Complete() {
      return `${this.nome} ${this.sobrenome}}`; //o GET TRANSFORMA O MÉTODO EM UMA PROPRIEDADE MANTENDO O MÉTODO SEGURO.
      // DESSA FORMA ELE RETORNA  VALOR DIRETO.
    },
  };
}

let person = criaPessoa("Thiago", "Duarte", 19);
person.falarOi();

// Constructor functions :

function Car(cor, portas) {
  this.cor = cor;
  this.portas = portas;
}
// USAMOS SEMPRE O NOME DA FUNÇÃO CRIADORA COM A PRIMEIRA LETRA MAIÚSCULA. PARA USAR A PALAVRA NEW.
let car = new Car("azul", 3);
console.log(car);
// OQUE O NEW FAZ?
// CRIA UM OBJETO FAZIO E ONDE ESTIVER A PALAVRA 'THIS' ELE TRANSFORMA EM CHAVE E VALOR.

/* 
ELE BÁSICAMENTE FAZ : 

let p1 = {} 
p1.nome="thiago"; 
 
No console mostra sempre : 


 -> ele sempre nos mostra o construtor.  Pessoa {nome :'teste'}
 
*/
// criando obejtos com constante :

const car2 = new Car("red", 5);
car2.cor = "black";
console.log(car2); //mas constantes podem ser alteradas ? aqui estamos mudando o valor da chave ou seja o valor e não a referência de memoria.
//as varáveis sempre apontam para o endereço de memória e o endereço para o valor. Constante não pode alterar para um novo endereço de memória.

// COMO NÃO ALTERAR :

Object.freeze(car2); // esse método trava  o objeto, impossibilitando fazer alterações.

//como travamos os objetos que vem de determinada função? :

function Cars(cor, marca) {
    this.cor = cor; 
    this.marca = marca;  
    // isso funciona em arrays também.
    Object.freeze(this) //quando utilizamos o Object.freeze(this)  estamos travando todas as chaves, impossibilitando alterações.
} 
let carro = new Cars('blue', 'fiat'); 

