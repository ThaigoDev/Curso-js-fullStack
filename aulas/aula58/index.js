//funções CONSTRUTORAS:

//MUDAMOS A CONVENÇÃO  DE COMO ESCREVEMOS:
//SEMPRE DEVEMOS ESCREVER O PRIMEIRO NOME MAIUSCULO >
//ex : Pessoa
//sempre devemos usar o new : const pessoa = new Pessoa.
//funções factory e construtoras tem o papel  de ser um molde para objetos
//criando uma função construtora :

function Pessoa(nome, sobrnome) {
  //para criar uma função construtora devemso começar com a primeira letra maiuscula
  //e adicioanr as chaves

  this.nome = nome;
  this.sobrnome = sobrnome;22
  this.method = () => {
    console.log("Sou um método");
    }; 
    const ID = 124; //QUANDO NÃO USAMOS O THIS IMPOSSIBILITAMOS QUE  POSSA SER ACESSADO. PODE SE USAR EM QUALQUER COISA.
}
//para criarmos, basta apenas utilizar a palavra new
//A palavra new cria um objeto vazio e onde estiver this ela cria uma chave, quando usamos o new ela retorna o obejto.
const p1 = new Pessoa("thiago", "duarte");
console.log(p1);
//acessando um método:
p1.method();
