//Criando classes  = função construtora e factory functions   

//Sintaxe 
//class Nome { constructor} 

class Pessoa { 
//constructor cria um objeto fazio com os seguintes argumentos  
// o this atribui aos parãmetros os valores 
    constructor(nome,telefone) {
        this.nome = nome;
        this.telefone = telefone; 
    } 
    //Métodos :  
    //em classes, os métodos já são integrados nos prototypes 
    // os objetos vão utilizar os métodos da classe super, não recebem por herança 
    falar() {
        console.log('taaarara')
    } 
    comer() {
        console.log('comendo...')
    }
}
//Instanciando um objeto: 

const p1  = new Pessoa('thaigo',92839283); 
console.log(p1.falar()); 

// com funções construtoras : 

function Pessoa2 (nome, telefone) {
    this.nome = nome; 
    this.telefone = telefone; 
     
} 
Pessoa2.prototype.falar = function () {
    console.log('aaaa')
} 
Pessoa2.prototype.comer = function () {

    console.log('comendo'); 
 
}  

let person = new Pessoa2('gg',12212); 

console.log(person.comer())