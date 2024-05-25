// ARRAYS
// ARRAYS SÃO UMA LISTA DE VALORES, COMO SE FOSSEM UMA TABELA DE EXEL
// para criar um array usamos const Nome do Array =  [valores];

const alunos = ["Thiago", "Junin", "cleitin", 1, true, null, Infinity];

console.log(alunos[2]); //para  mostrar um elemento é só usar array[indice];

// conseguimos alterar valores de arrays usando os indices
alunos[0] = "Pedro";

// ADICIONANDO VALORES
alunos[alunos.length] = "Celta";
alunos[alunos.length] = "Celta2";
alunos[alunos.length] = "CeltaPreto";
// PUSH
alunos.push("novo valor"); //adciona no fim do  array

// UNSHIFT
alunos.unshift("valor no inicio"); //adiciona valores no começo do array

// REMOVER ITENS

// pop

let removed = alunos.pop(); //remove o ultimo elemento, conseguimos guardar esse valor em uma var

//shift

removed = alunos.shift(); //remove o primeiro elemento do array

// delete
delete alunos[1]; //remove o elemento do indice mas fica vazio

//slice

console.log(alunos.slice(0, 2)); //o slice corta os elementos nesse intervlo dos indices.

//TESTE DE ARRAY

console.log(typeof alunos); //retorna como um objeto, pois array são objetos

//para fazer esse testte usamos : 
console.log(alunos instanceof Array); //faz a verificação se realmente isso é um array. retorna true ou false. 