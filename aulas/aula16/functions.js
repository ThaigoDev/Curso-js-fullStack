// FUNCTIONS
//funções são pedaços de códígo  que você pode chamar a qualquer hora e lugar.
//por exemplo
/*para criar uma função usamos function Nome Da Função(parametros) {

                        lugar onde os códigos vão ficar  
}
    */
//os parâmetros funcionam como entrada de dados para uma função, como se pode ver no exemplo abaixo : 

function NewFunction(nome) {
    console.log(`Bom dia ${nome}`); 
} 
NewFunction("Thiago");  


// retornando valores :

let retorno = NewFunction("teste"); 
console.log(retorno); // nesta funçõo, temos o retorno undefined, pois ela não retorna nada.

// para retorndar algo  devemos usar a palavra return :

function par(num) {
    if (num % 2 == 0) {
        return true;
    } else {
        return false; 
    }
} 
 let result = par(2);  

// podemos usar variáveis para armazenar uma função e usa-las como endereço de função: 
const raiz2 = function (n) {
    return n ** 0.5; 

}

console.log(raiz2(3)); 

// ARROW FUNCTIONS =>

/*PARA UTILIZAR BASTAR RETIRAR  O NOME E UTILIZAR APENAS () => {

} 
*/

const raiz = (a) => {
    return a ** 0.5; 

}  

// CASO A FUNÇÃO TENHA APENAS 1 LINHA UTILIZAMOS :

/*
 const raiz = (N)=> N**0.5; 


*/

// CASO TENHA APENAS 1 PARÂMENTRO PDEMOS USAR DESSA MANEIRA : 
/*
 const raiz = n => n** 0.5; podemos retirar os parenteses do parâmetro, caso seja apenas 1. 


*/

console.log(raiz(9)); 
console.log(raiz(16)); 
console.log(raiz(25)); 