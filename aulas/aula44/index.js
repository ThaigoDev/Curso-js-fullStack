//LANÇAMENTO DE ERROS TRY, CATCH,THROW

// console.log(naoexiste);

//caso queiriamos lançar algo  perigoso em nosso código
//podemos  usar o try para  tratar esse erro:

/*
tente {
    EXECUTAR 
}casoErro {
    EXECUTA ALGO  
}

*/

try {
  //ELE VAI TENTAR EXECUTAR O  CÓDIGO
  console.log(notexist);
} catch (err) {
  //CASO DER ALGUM ERRO, ELE EXECUTA ESSE CÓDIGO COMO UMA FORMA DE TRATAR ESSE ERRO.
  console.log("Variável não existe."); //NÃO SE DEVE  EXIBIR O ERRO PARA O  USER, POR ISSO USAMOS O TRY E CATCH
  //ele é usado em qualquer código que tem  potencial  de erro
}

// exemplo 2

const som = (x, y) => {
  if (typeof x !== "number" || typeof y !== "number") {
    throw "x ou y precisam ser number."; // lançamos um próprio erro usando o throw , caso o user insira algum dado errado
    //nossa função envia um erro próprio.
    return x + y;
  }
};
//podemos tratar o erro que lançamos usando o try e catch :
try {
  console.log(som(1, "2")); //ele não nos mostra  a referencia do erro e nem a linha. Para isso devemos fazer throw new Error("Erro que queremos!");
  console.log(som(1, 1));
} catch (err) {
  console.log(err);
}
// throw new Error

const soma = (a, b) => {
    if (typeof a !== "number" || typeof b !== "number") { 
              //É uma função construtora, podemos lançar vários erros type error, reference error, etc.
      throw new Error("Erro gerado!");  //Ele gera um error igual o  do JS
    }  
    return a + b; 
};  
 
try {
    console.log(soma(1, "2"));
    console.log(soma(1,2))
} catch (err) {
    console.log(err); //ele gera um erro igual ao do  Java Script. Não se lança um erro no front end dessa forma. 
    alert("Não é um número")
}
