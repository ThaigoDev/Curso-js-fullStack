//break e  continue funciona para todas as estruturas de repetição

const numeros = [1, 2, 3, 4, 5, 6, 7]; 
for (let numero of numeros) {
    if (numero === 2) { 
        console.log("Pulei o número 2"); 
        continue; //ELE PULA PARA A PRÓXIMA INTERAÇÃO, ELE VOLTA PARA O COMEÇO DO LAÇO E RETORNA PARA PRÓXIMA INTERAÇÃO DO LAÇO
    } else {
        if (numero === 3) { 
            console.log("7 foi encontrado, saindo...")
            break;  // BREAK melhora o desempenho do código, assim que ele encontra  e a condição for true, ele sai no código. 
            //Ele não executa o código abaixo do código.
        }
    } 

}