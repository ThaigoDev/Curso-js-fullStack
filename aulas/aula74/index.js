//Prototypes :
//utilizamos para POO

//review
//constructor functions  é parecido com uma  class (molde de objetos)

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.nomeCompleto = () => nome + " " + sobrenome;
}
//instância : quando geramos outro objeto  através de uma classe  ou factory ou constructor functions.
const P1 = new Pessoa("thiago", "duarte");
const P2 = new Pessoa("joao", "augusto");
console.dir(P1);
console.dir(P2);
//Um problema muito comum em objetos é que:
//quando criamos um objeto, proprieties e methods são herdados da função ou class,
/*
Ou seja: para cada objeto teremos que criar um método para cada um e uma chave e valor. Isso
ocuparia muito espaço na memória.
 Com os prototypes podemos criar um método que pode ser usado somente quando precisamos  em um objeto. 
 isso evita  a criação de objetos com vários métodos consumindo muita memória. etc

 O JS é baseado em protótipos  para passar propriedades e métodos de 
 um objeto para outro.

 Definição de protótipo : 

 Protótipo é um termo usado para referir ao que foi criado pela primeira vez, servindo 
 de modelo ou molde para futuras produções 

 Quando usamos console.dir(obj) podemos ver a referência interna de um __proto__ 
 Todos os objetos tem uma referência interna para um __proto__  (obt.__proto__) que vem da propriedade prototype da função (Pessoa.prototype) 
 construtora que foi usada para criá-lo, Quando tentamos acessar um membro de um objeto, primeiro o motor 
 do JS  vai tentar encontrar este membro no próprio objeto  e depois a cadeia de protótipos é usada até o topo(null) até encontrar 
 ou não o tal membro.   
 Como funciona a cadeia : 

 Date -> Date.prototype -> Object.prototype 
 //A cadeia começa em Object.prototype  depois Date.prototype depois  Date 

*/

//exemplo

function Car(marca, cor, ano) {
  //cada instância que for criada, vai herdar as propriedades e métodos dessa function

  this.marca = marca;
  this.cor = cor;
  this.ano = ano;
  this.buzina = () => {
    return "biiiiiiiiiiiiiiii";
  };
}

//vamos ver como é um objeto que utiliza prototypes :

let date = new Date();
//dentro  do obeto date- existe uma propriedade que se chama __proto__
//essa propriedade armazena os todos os métodos do object Date();
let myCar = new Car("fiat", "preto", "2024");
console.dir(date); //vai nos mostrar que  ele não possui nenhuma propriedade
//temos a propriedade __proto__ que na verdade não está no objeto Date();
//Ela está basicamente no Pai desse objeto, mas os objetos que são instâciados pelo Date() herdam essa propriedade.
console.log(myCar); //diferente de nosso objeto
//quando criamos uma nova instância apartir de uma class ou factory e constructor functions
//automaticamente nosso obeto recebe uma propriedade da função construtora ou class  que se chama > __proto__:

console.log(Car.prototype); //estamos acessando o prototype da minha função construtora :
//para criar alguma coisa no prototype usamos :

Car.prototype.changeColor = () => {
    this.cor = "azul";      //criamos um método dentro do prototype de nosso objeto
} 
myCar.changeColor(); // podemos acessar o nosso método, porém ele não é criado junto com o nosso objeto. Economizando memória.

//  o __proto__ é a mesma coisa que função.prototype  ou classe.prototype

//CRIANDOO Métodos no prototype do objeto.

function Animal(nome, especie, idade) {
    this.nome = nome; 
    this.especie = especie; 
    this.idade = idade; 
} 
Animal.prototype.yearsVerify = () => this.idade < 2;  

let porco = new Animal("porco", 'mamíferos', 3); 

console.log(porco.yearsVerify()); 

//Cadeia de protótipos :

function User(nome, telefone, Email) {
    this.nome = nome; 
    this.telefone = telefone;
    this.Email = Email; 
    this.sayHI = () => "hiiiiii";  //Ele vai executar esse método e não o do prototype
    //pois o Motor do JS verifica primeiro se esse método está nas propriedades  do objeto
    //caso não encontre ele acessa o __proto__ do objeto para verificar na  cadeia de prototypes 
    //se esse método está lá. 
    //Se tirarmos esse método das prorpriedades, ele executa o método definido no proto. 
}  

User.prototype.sayHI = () => 'hiiiiiiii novamente';   
let thiago = new User('thiago', 'teste', 'teste'); 
console.log(thiago.sayHI()); // 


