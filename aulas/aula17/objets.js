// OBJETOS
//COMO CRIAMOS : usamos {} para objetos  [] para arrays
//atributos são como variáveis que ficam dentro de um objeto
/* 
USAMOS DA SEGUINTE FORMA : 

const objeto = {
    atributo : valor,

*/

const pessoa = {
 nome: "Thiago", 
 sobrenome: "Duarte", 
 idade: 18, 
} 
/* 
 para acessar atributos e métodos de um objeto usamos: b

 nomeDoObjeto.Propriedade; 
 isso acontece com o console.log(); 
 estamos pegando o objeto console e acessando o método log() que é uma função dentro do objeto console.


*/

console.log(pessoa.nome); 
console.log(pessoa.sobrenome); 
console.log(pessoa.idade);  


// CRIANDO UMA FUNÇÃO CONSTRUTORA DE OBJETOS:

function PeopleCreate(nome, sobrenome, idade) {
    return {
        nome: nome, 
        sobrenome: sobrenome, 
        idade : idade,  
        // Caso os atributos no caso os nomes sejam iguais os argumentos . podemos usar dessa forma :
        
        /*
         {
          nome,
          sobrenome,
          idade,
         }
        
        */
        
        // Dentro de Objetos podemos ter métodos, métodos são funções dentro de um objeto. 
        fala() {
            console.log("Hello World !"); 
        }

    }
} 
 

// para criarmos um novo objeto podemos usar a função da seguinte forma  Factory Function:

const thiago = PeopleCreate("Thiago", "Sobrenome", 19);//arugmento é o valor que é passado para o parametro. 
console.log(thiago);  
// para charmarmos um método de uma função usamos o nomeDoObjeto.nomeDoMétodo(); 
thiago.fala();  

// THIS

const carro = {
    modelo: "FIAT UNO", 
    marca: "Fiat", 
    cor: "preto", 
    buzina() {
        console.log(`${this.modelo} está buzinando !`); //USAMOS O THIS PARA REFERENCIAR O CONTEXTO ATUAL OU NO CASO O OBJETO ATUAL QUE ESTAMS CRIANDO.  
    }
}