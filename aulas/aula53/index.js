//CLOSURES
//está relacionado com o escopo léxico

//ex :
function retornaFuncao(nome) {
  //a função anonima  tem acesso a esse escopo  e o global esse é o   closure
  return () => {
    return nome; //essa função tem acesso a 3 escopos   : esse que estamos agora o pai dela e o global.
  };
}
const funcao = retornaFuncao("THIAGO");
console.log(funcao); //quando eu executo ela vai lembrar do seu escopo léxico. ou seja ela lembra o escopo dela e dos vizinhos dela

const funcao2 = retornaFuncao("JOÃO"); //Neste caso temos 2 closures, podemos altrar o closure dela, quando declaramos a função o closure não muda;
//resumindo : closure é a habilidade da função de mudar e acessar  o escopo léxico.
