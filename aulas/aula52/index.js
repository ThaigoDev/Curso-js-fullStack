//ESCOPO LÉXICO :

const nome = "Thiago";
function FALA_NOME() {
  const nome = "GG";
  console.log(nome); //podemos acessar variáveis vizinhas e podemos acessar isso.
  //  e isso é o escopo léxico: a função conhece tudo que foi declarado dentro dela e fora dela
  //a função é uma bolha, caso buscamos uma variável dentro dessa bolha e ela não encontra,
  //ela procura no pai dela ou no pai do pai dela.
}

function usaFalaNome() {
  FALA_NOME(); //ela  vai mostar a variável com o valor "GG" mass..
}

function FALA_NOME2() {
  console.log(nome);
}
function usaFalaNome2() {
  let nome = "THAGO";
    FALA_NOME2(); //ele vai executar a variável que está no escopo geral ou seja, quando eu executo ela vai lembrar onde ela foi declarada e os vizinhos que estão perto dela. 
    //elas podem ser invocadas em qualquer lugar,  elas vão lembrar apenas de seu escopo léxico.
}
usaFalaNome();
