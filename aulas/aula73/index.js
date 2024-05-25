//Métodos uteis para objetos.

//Já vimos alguns métodos :
// Object.keys() retorna as chaves de um objeto em um array.
//Object.freeze() congela o objeto
//Object.defineProperties(this,{configuração das propriedades}) <- usamos o define para definir algumas mudanças
//nas chaves dos objetos como: enumarable, writable, configurable .
//Object.defineProperty() usamos para fazer configuração em apenas uma chave do objeto.

//Object.assign(des,any);
//Object.getOwnPropertyDescriptor(o,'prop');
//...spread

//Métodos para objetos :

const Pessoa = {
  nome: "Thiago",
  sobrenome: "Duarte",
  idade: 19,
};
//Objetos e arrays são passados por referência ou  seja : Apontam para
//o mesmo enderço de memória.

// caso modificamos a PessoaCopiada   o objeto Pessoa também recebe alterações.
const PessoaCopiada = Pessoa;

//modificando PessoaCopiada.
PessoaCopiada.nome = "teste";
//mostrando os 2 objetos:

console.log(Pessoa); //caso modifique um dos 2 objetos os 2 sofre a modificações
console.log(PessoaCopiada);

//Copiando objetos independentes :
//Spread Operator

const pessoaCopiadaIndependente = {
  //quando usamos o spread, estamos espalhado os valores para um novo objeto
  ...Pessoa,
  materia: "porcelana", //além de copiar, podemos adicionar mais chaves, como pode se ver.
}; //dessa forma estamos copiando um objeto que vai ser independente:
//caso eu faça modificações nesse objeto, não acontecerá nada  com oo Pessoa.

console.log(pessoaCopiadaIndependente);
pessoaCopiadaIndependente.nome = "fui mudado";
console.log(pessoaCopiadaIndependente);

//Object.assign()

//(passamos o target {}, o object que queremos copiar, caso queira adicionar outros métodos. ou objetos)
/*  
O  assign() funciona como o spread, mas o spread é melhor. 
Caso tenha vários objetos com a mesma chave, ele vai pegar apenas as chaves da última
*/
const john = Object.assign({}, pessoaCopiadaIndependente, {
  company: "casas bahia",
  anoNascimento: "01/01/2025",
});
console.log(john); 

//Obeject.keys();

//mostra as chaves de um objeto em um array

console.log(Object.keys(john));   

//Object.freeze() 
Object.freeze(john) //não  conseguimos alterar o objeto.

//Object.getOwnPropertyDescription();
//conseguimos ver o estado da chave :
/* 
value : "..."
writable: true, 
configurable: true, 
enumerable: true, 
*/

//usando:       
Object.defineProperty(john, 'company', {
    //essa área se chama property  Descriptor
    //onde as configuraçõs das propriedades estão 
    configurable: false, 
    writable: false, 
    
})                     //(objeto desejado  , chave desejada).
console.log(Object.getOwnPropertyDescriptor(john, "company"));   

//Object value:

console.log(Object.values(john)) // assim  como o keys, ele cria um array apenas com os valores das chaves.

//Object Entries 
//Ele lê  tanto a key quanto o valor. 
console.log(Object.entries(john)); //é um array com vários arrays dentro dele  que contém a chave e seu valor :

for (let entry of Object.entries(john)) {
    console.log(entry);
     
} 
//caso queira pegar os valores das  chave, usamos: 
let db = []; 
for (let [key ,value] of Object.entries(john)) {
    db.push([key, value]); 
    console.log(db); 
}

