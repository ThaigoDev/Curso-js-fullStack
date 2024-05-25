//FOR IN
//UTILIZAMOS EM OBJETOS E ARRYAS (OBJETO INDEXADO);
//exemplo de como usar:
const frutas = ["pera", "maça", "uva", "banana"];
const user = ["Thiago", "Junin", "Pedro", "Cleinto"];
// o  for padrão :
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}
//usamos :

//Neste for  ele lê o indice e não conta.

//PODEMOS DAR UM  NOME QUE QUISERMOS A ESSA VARIÁVEL.

//ELE Lê O INDICE DO ARRAY E AS CHAVES DO OBJETO.

for (let i in frutas) {
  frutas[i] = user[i];
  console.log(frutas[i]);
}
//EM OBEJETOS :

const car = {
  nome: "Uno",
  marca: "FIAT",
  ano: 2023,
  placa: "234-XWE3",
};

//aqui ele conta as chaves e mostra elas

for (let infos in car) {
  console.log(infos);
}
//PODEMOS ACESSAR UM OBEJO DE DUAS FORMAS :

console.log(car.ano);
//E
console.log(car["ano"]);//podemos acessar  usando   variáveis. ex :

for (let key in car) {
    console.log(key,car[key]); 

} 
for (let fruta in frutas) {
    console.log(`Esse é a variável = ${fruta}  esse é o valor ${frutas[fruta]}`); 
}
