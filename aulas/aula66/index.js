// MAP ()
//essa função alterar valores do array original.
//Recebemos uma array exatamente do tamanho do array original.
//exemplos:

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]; 

//MAP Tem a mesma  sintaxe do filter, ela retorna um novo array com os valores alterados.

//dobrando valores com map:
// ASSIM COMO O FILTER A FUNÇÃO MAP RECEBE AUTOMATICAMENTE PARÂMETROS PADRÕES :
//VALOR, ÍNDICE, ARRAY
//na função filter, sempre se deve retornar true ou false na função callback 
//em Map  é diferente, ele retorna um valor diferente. 
const dobro = numeros.map(val =>val * 2); 
console.log(dobro);

// Map sempre vai ter o mesmo tamanho do array original

//Utilizando Map em Objetos :

 
const pessoas = [
    {
        nome: 'thiago', idade: 19, sexo: 'M'
    },  
    {
        nome: 'Junin', idade: 19, sexo: 'M'
    }, 
    {
        nome: 'Mateus', idade: 19, sexo: 'M'
    },
    {
        nome: 'Abraão', idade: 19, sexo: 'M'
    },
    {
        nome: 'Isaque', idade: 19, sexo: 'M'
    }

]  

const nomes = pessoas.map((val)=> val.nome);
; 
console.log(nomes)  

const nomesRemoved = pessoas.map((val) =>({ idade: val.idade, sexo: val.sexo })); //caso   não coloque o objeto em parêntese  em  arrow functions, as chaves do objeto passam a ser a chave da função.
console.log(nomesRemoved); 

const IdChange = pessoas.map((val,i) => {
    return { nome: val.nome, idade: val.idade, sexo: val.sexo, id: i };  //Ao invés de filter, utilizamos o map para retornar o array do mesmo tamanho mudando somente os valores.  
})  
//caso não queira passar o valor do array por referencia faça :

const CopyArr = pessoas.map((val) => {
    const NewArr = { ...pessoas };
    NewArr.life = true; 
    return NewArr;


}) 
console.log(CopyArr); 

console.log(IdChange);  

