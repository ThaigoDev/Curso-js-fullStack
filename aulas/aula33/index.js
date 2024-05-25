// Atribuiçã via  Desestruturação (Objects)
//Assim como os arrays.

const Pessoa = {
  nome: "Thiago",
  sobreNome: "Duarte",
  idade: 18,
  endereco: {
    rua: "Av Brasil",
    numero: 90,
  },
};
console.log(Pessoa.endereco);
// ao invés de usar atribuir um por um :
let nome = Pessoa.nome;
let sobreNome = Pessoa.sobreNome;
let enderess = Pessoa.endereco;
//Usamos:

const { NomeDestruction, sobrenome, idade } = Pessoa; // É BASICAMENTE IGUAL AO ARRAY
//caso  não tenha o valor que deseja, podemos setar um valor padrão , veja :

const { name, secondName, year, endress, status = "inative" } = Pessoa;

console.log(status);
//Podemos definir um outro nome a uma chave :

//podemos (estamos trocando e setando um novo nome da chave e valor)   especificar a chave e alterar o valor.

const { nome: teste = "", sobreNome2 } = Pessoa;

//podemos acessar objentos via desestruração

//estamos pegando a chave e acessando os valores dessa chave e pegando o endereço completo

const { endereco: rua, numero, endereco } = Pessoa;


console.log(rua, numero, endereco);


//aqui estamos pegando o valor da  chave rua e atribuindo a variável  "r";


const {
  endereco: { rua: r, numero2 },
} = Pessoa;
console.log(`a rua é :${r}`);



//utilizando o  operador rest


const { nome3, ...restoDasPropriedades } = Pessoa;
console.log(restoDasPropriedades);
