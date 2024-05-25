//POLIMORFISMO de sobreescrita : 
//quando sobre-escrevemos um método. 
// fazer métodos se comportarem de maneira diferente em subclasses:
// subclasses : filhas de uma classe Pai

//SuperClass
//EM POO essa seria a classe principal

function Conta(nome,agency, saldo) {
  this.nome = nome;
  this.agency = agency;
  this.saldo = saldo;
}
//Métodos da superclass
Conta.prototype.sacar = function (value) {
    if (this.saldo < value) {
        console.log('Saldo insuficiente !'); 
        this.verSaldo();  
   }
    this.saldo -= value; 
    console.log(this.verSaldo()); 
}; 

Conta.prototype.depositar = function (value) {
    if (value < 10) {
        console.log("Valor muito baixo !"); 
        
    }     
    this.saldo += value; 
}; 
 
Conta.prototype.verSaldo = function () {
    return `Agência : ${this.agency} | Nome : ${this.nome} | Saldo: R$ ${this.saldo}`; 
} 

const conta1 = new Conta('thaigo', 1234, 1000); 
console.log(conta1);  

//Aplicando polimorfirsmo : 
function ContaCorrente(nome,agency, saldo,limite) {
    Conta.call(this, nome, agency, saldo); //herdamos os atributos da class Conta 
    this.limite = limite; 
} 

ContaCorrente.prototype = Object.create(Conta.prototype); //linkamos os prototypes, agorakkt herdamos a estrutura de Conta  
ContaCorrente.prototype.constructor = ContaCorrente; //definimos o Construtor padrão de nossa Class pois quando mudamos o prototype
//automaticamente ele herdou  o constructor da class desejada.
//Quando mudamos o  constructor para a  class padrão que estamos usando para herdar, podemos subscrever métodos e atributos 
//sem interferir no prototype da SuperClass.     
console.log(ContaCorrente.prototype);  
let contaCorrente = new ContaCorrente('thiago', 124, 6000, 570); 
console.log(contaCorrente);  
contaCorrente.depositar(2020); 

//  Polimorfismo de sobreescrita.

ContaCorrente.prototype.sacar = function (value) { //agora criamos um método sacar porém diferente do método sacar da Class Conta
    //pois defimos que  a class    ContaCorrente vai ter o constructor diferente 
    /*
    Fazendo a mudança do  constructor para o dessa classe, nós meio que copiamos o prototype de Conta e subscrevemos o método  sacar() 
     do  jeito que queríamos.
    
    */
    if (value >  ( this.saldo + this.limite)) {
        console.log(`ultrapassou o limite de sua conta:  R$ ${this.limite}`);  
    } 
    this.saldo -= value;
    console.log(this.verSaldo());
    
} 

contaCorrente.sacar(200); 
 
conta1.sacar(100)

