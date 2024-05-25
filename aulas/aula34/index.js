//FOR CLÁSSICO
// AO INVÉS DE :
console.log("0");
console.log("1");
console.log("2");
console.log("3");
console.log("4");
console.log("5");
//USAMOS O FOR CLÁSSICO :
/*for (criar uma variável de controle = 0; condição; variáve de controle ++ ou --) {
   executa do código
} 
*/
//enquando o indice for menor ou igual a 5 i vai ser encrementado em cada laço.
for (let i = 0; i <= 5; i++) {
  /*
i  é menor ou igual a 5 ? Não... i++ i =1;
i  é menor ou igual a 5 ? Não... i++ i =2;
i  é menor ou igual a 5 ? Não... i++ i =3;
i  é menor ou igual a 5 ? Não... i++ i =4;
i  é menor ou igual a 5 ? Sim... i++ i =5 para o looping; 

*/
  console.log(i);
}
//PODEMOS FAZER UM FOR PULANDO A QUANTIDADE DE NÚMEROS  QUE QUISERMOS.
for (let i = 0; i < 100; i += 10) {
  //NO CASO QUEREMOS DE 10 EM 10
  console.log(i);
}
//PODEMOS INVERTER E FAZER OQUE QUISERMOS :
//estamos fazendo uma contagem decrescente.
for (let i = 100; i >= 1; i -= 10) {
  console.log(i);
}
//podemos fazer várias verificações se quisermos :

for (let i = 0; i <= 10; i++) {
  const par = i % 2 === 0 ? `${i} é par !` : `${i} é impar`;
  console.log(par);
}
//podemos percorrer um array :
//podemos pegar o tamanha do array usando: array.length
const frutas = ["maça", "uva", "banana"];
for (let i = 0; i < frutas.length; i++) { //estamos acessando o array utilizando o for. 
  console.log(frutas[i]);
}
