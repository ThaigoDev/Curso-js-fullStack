// Mais Diferenças entre let var e const :

let nome = "Luiz";  //let não pode ser declarada novamente. 
var nome2 = "Luiz2";  

//exemplos :

const verdadeira = true; 
if (verdadeira) { 
    let nome = "Thiago";   
    var nome2 = "Duarte"; //Ela é redeclarada novamente 

    // let tem escopo de bloco {..bloco} ou seja podemos criar uma variável let com o memso nome de outra 
    //dentro de um bloco  que não vai dar erro. 
    //var só tem escopo de função.
    console.log(nome, nome2);
    if (verdadeira) { 
        var nome2 = "Duarte"; //Ela é redeclarada novamente,vars são redeclaradas. Elá só funcionaria em função.
        let nome = "outra coisa"; 
        console.log(nome); //Ele busca a variável necessária neste bloco, caso não encontre, ele vai para o próxmo  ^
    }
} 
// Escopo  de função em var
const oi = () => { 
    let thiago = "pessoa"; 
    console.log(thiago); 
    var nome = "Pedro"; 
    console.log(nome);  //Não se pode acessar variáveis dentro a função 
    console.log(nome2) //podemmos acessar variáveis externas, mas não internas quando estamos fora da  função. Ela busca dentro dela e se não tiver ela passa para o próxim bloco.  
    if (verdadeira) { //dentro de uma função os ifs tem um comportamento de um escopo global.  

        console.log(thiago);  //ela gera um erro pois a variável não está dentro do bloco. 
    } else {
        if (verdadeira) {
            console.log(nome2); 
        }
    }
}  
console.log(thiago);  //vai dar erro - pois Thiago está dentro de uma função e ela protege esse valor. 
console.log(nome);  

// EM FUNÇÕES  CRIADAS COM A PALAVRA FUNCTION E VARIÁVEIS COM VAR :
//CASO TENTE UTILIZA ANTES DE DECLARAR UMA FUNÇÃO OU VARIÁVEL ELA RETORNA UNDEFINED :

console.log(Teste); 
var Teste = "Teste"; //ela  eleva a declaração para o início.

//com o let dar erro. 
