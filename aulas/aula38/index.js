const paragrafos = document.querySelector(".paragrafos"); //QUANDO USAMOS O QUERY SELECTOR PEGAMOS APENAS O PRIMEIRO ELEMENTO DESSA DIV.

//PEGANDO VÁRIOS ELEMENTOS DENTRO  DE UMA QUERY

const p = paragrafos.querySelectorAll("p"); //estamos pegando todos os  elementos ps detro dessa div
//Isso nos  gera uma nodelist = É semelhante a um array mas não é um array   
console.log(p);  
//podemos interar  nessas  nodelsits usando  o for :

for (let ps of p) {
    console.log(ps);
};

//pegando estilos de elementos  : 
const estilos = getComputedStyle(document.body) //usamos essa função onde passamos o elemento que queremos pegar os etilos
// Ela armazena os estilos captados pela função em uma variável.
//podemos pegar  os estilos separadamente : 
const bg = estilos.backgroundColor; //basta apenas adicionar elemento.estiloDesejado.


