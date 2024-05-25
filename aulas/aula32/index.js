// ATRIBUIÇÃO VIA DESESTRUTURAÇÃO (ARRAY)

let A = "a"; //b
let B = "b"; //c
let C = "c"; //A
//DESESTRUTURAÇÃO - AS VARPÁVEIS JÁ EXISTEM SÓ ESTAMOS REATRIBUINDO O VALOR.
const letra = [B, C, A];
[A, B, C] = letra;
console.log(A, B, C);

//OUTROS EXEMPLOS :

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers[0]);
const firstNumber = console.log(numbers[0]); //ao invés de pegar valor por valor podemos utilizar a atribuição via desustruração para facilitar atribução.
//dessa foma :
//CRIAMOS VARIÁVEIS  E ATRIBUIMOS DE UMA VEZ USANDO  ATRIBUIÇÃO VIA DESESTRUTURAÇÃO.
//usamos const [variáveis] = valores;
const [n1, n2, n3, n4, n5, n6, n7, n8, n9] = numbers;
console.log(n1);

// PEGANDO O RESTO DO  ARRAY.  rest e spread.
//rest ...
const [FirstNumber, SecondNumber, ...RestoDoArray] = numbers;
console.log(RestoDoArray); //ELE CRIOU UM ARRAY COM O RESTANTE DOS VALORES QUE SOBRARAM DO VALOR.

//caso queira pular valores fazemos assim :
//basta colocar valores vazios.
const [um, , tres, , cinco] = numbers;
console.log(um, tres, cinco);

//Nível mais complexo
const numeros = [
    //Array com outros arrays 
// 0  1  2    
  [1, 2, 3], //indice = 0
  [4, 5, 6], //indice = 1
  [7, 8, 9], //indice = 2 
]; 
//acessando esse array : 
console.log(0, 2) //acessamos o array 0 que contém 1 2 3 e pegamos o índice 2 que seria 3.
//utilizamos a desestruturação nesses arrays:
      //Pulei o primeiro array, entrei o segundo, mas pulei primeiro e segundo valor, peguei o valor 6 do array, indice 3. 
const [, [, , seis]] = numeros;  
console.log(seis) 
// PODEMO UTILIZAR : 
const [list1, list2, list3] = numeros; 
console.log(list1[2]);  //estamos pegando cada array interno e criando novos arrays. 

