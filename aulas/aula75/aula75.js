//MANIPULAÇÃO DE PROTOTYPES :
//Quuando declaramos o objeto literal : é como se ele estivesse fazendo um new Object
//funciona com arrays  = new Array 
//Toda função construtora possui um objeto atrelado a ela que é o Object.prototype = __proto__ no nosso objeto 
// para verificar isso vamos fazer : 
const objA = {
    chaveA: "valorA"  
    //é como s e fosse 
    //__proto__:Object.prototype
} 
//para provar que __proto__ é igual a Object.prototype  usamos :  
console.log(objA.__proto__ == Object.prototype); 


const objB = {
    chaveB: "valorb"  
    //é como s e fosse
    //__proto__:objA 
    //podemos manipular o __proto__ do objeto com o seguinte método :  
} 
//quando usamos Object.setPrototypeOf(objeto que desejamos adicionar o prototype, oque queremos adicioanar como prototype); 
Object.setPrototypeOf(objB, objA);  
//conseguimos acessar o objeto que definimos como prototype
console.log(objB.chaveA); 

//Nesta ocasião  a cadeia de prototypes foi modificada :
//passou a ser  objB -> objA -> objB.prototype -> Object.prototype 
console.log(objB); 

const objC = new Object() 
objC.chaveC = "C"; 
Object.setPrototypeOf(objC, objB) // Estamos herdando as chaves de objB que tem como __proto__ o objA
//ou seja, C herda todas as  propriedades e métodos de objB e objA. 
console.log(objC.chaveA);
console.log(objC.chaveB);
console.log(objC.chaveC);  
console.log(objC); 
//  O __proto__ de objC -> objB que tem o __proto__ que é o objA que tem o __proto__ =  Object.prototype.

//NÃO É RECOMENDADO ACESSAR OS __PROTO__ DESSA FORMA:  OBJ.__proto__
//devemos usar o método:

console.log("pegando o prototype por método:"); 
console.log(Object.getPrototypeOf(objC)) //dessa forma estamos pegando o prototype de objC sem utilizar obj.__proto__

//Ná prática :

function Produto(nome, validade, preco) {
    this.nome = nome; 
    this.validade = validade;
    this.preco = preco; 
    //não vamos  criar métodos aqui, mas no prototype.
 
} 
Produto.prototype.descont = function (value) {
    this.preco -=value; 
}
Produto.prototype.aumento = function (value)  {
    this.preco = this.preco + value; 
} 

let p1 = new Produto('camisa', '01/02', 50);
p1.descont(5); 
console.log(p1);  
p1.aumento(200)
console.log(p1);

//PODEMOS  APROVEITAR CÓDIGO DE OUTROS OBJETOS EM OUTROS OBJETOS :
//criamos um objeto que não tem vinculo nenhum com a função que contém os métodos
//aumento e descont. 
//mas queremos utilizar esses métodos nesse objeto
const p2 = {
    nome: 'caneca',
    preco: 12,  //para dar certo, as chaves devem ser iguais  a função que desejamos  
    //pegar o prototype.
}   
//para isso setamos como   __proto__  o prototype presente na função Produto
//agora temos acesso aos método que estão no prototype de produto. 
Object.setPrototypeOf(p2, Produto.prototype);  //dessa forma pegamos o construtor de produto  e definimos que é o mesmo dessa 
//temos acesso os métodos presentes em Produto.prototype.
p2.aumento(200);  
console.log(p2); 


//Criando um objeto e setando o prototype diretamente :
//porém quando criamos dessa forma, criamos um objeto vazio
// e se tentarmos executar os métodos, vai gerar um erro, pois as chaves não foram criadas. 
const p3 = Object.create(Produto.prototype);    

//podemos criar objetos passando configurações diretamente : 
const p4 = Object.create(Produto.prototype, {
    emprego: {
        writable: false, 
        configurable: false, 
        value: 'segurança'
    },
    preco: {
        writable: false, 
        value: 100,  
    }
})
 
p4.aumento((2)); 
console.log(p4); 
