//Estrutura de dados Map : 
const pessoas = [
    {id:1, nome : "Thiago"}, 
    {id:2, nome : "John"},
    {id:3, nome : "Erik"}, 
] 

const novasPessoas  = new Map(); 

for(const pessoa of pessoas) { 
  //Definimos nas chaves do objeto o id do objeto em si 

  const {id} = pessoa;  
  //Aqui estamos fazendo atribuição da seguinte maneira: 
  //pegamos as chaves id do objeto e passamos os valores das chaves como chaves de cada objeto. 
  // dessa forma temos strings como chaves de um objeto:  
   
   novasPessoas.set(id, {...pessoa});  
   //Dessa forma, as mudanças vão permanecer como desejado, por exemplo: 
   // a ordem vai se manter a mesma e as keys que estavam em string vai ser mudada. 

  console.log(novasPessoas);   
  //Outro problema é que  foi ordenado os ids, no caso não queremos isso.

} 
//Podemos acessar esses mesmos objetos da seguinte forma : 

console.log(novasPessoas.get(2)) //utilizamos o get para pegar os valores da chave 2   

//caso a chave não exista, vai retornar undefined; 

// quando usamos o map, criamos objetos e setamos chaves apartir de getters  e setters  

//podemos interar sobre o array que armazena os dados : 

for (const [indentifier,{id,nome}] of pessoas) { 
  console.log(indentifier); //ele vai nos retornar o valor do indice do array 
  console.log(id); // ele vai nos retornar o valor da chave id 
  console.log(nome); //ele vai retornar o valor da chave nome 
}