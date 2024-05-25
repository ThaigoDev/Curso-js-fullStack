//Arrays Avançado : Revisão 
//arrays são passados por referencia : 
//criando um array :
          //  0         1         2
let nomes= ['Thiago', 'Duarte', 'Junin']; //usamos colchetes para criar array.

//podemos manipular o array usando : 
nomes[2] = 'cleinto';  

//delete
//remove apenas o valor e deixa o indice vazio

delete nomes[2];  
console.log(nomes); // delete nome[posição] remove apenas o valor.

//podemos criar um array dessa forma  :

const frutas = new Array('abacate', 'pera', 'maça'); 
console.log(frutas);   

//valores por referencia: 
let carros = ['ford', 'fiat', 'gol'];  //qualquer alteração feita nesse array, afeta o que  o está recebendo.
const carrosBons = carros; // qualquer alteração que for feita nessa array, vai afetar o carros.

console.log(carros);
carrosBons.pop();
console.log(carros) 
//podemos copiar um array utilizando o spread :

let CarrosBaratos = [...carros]; //usamos esse  operador para copiar esse array:
//fizemos uma copia, isso significa que qualquer modificação não vai interferir no array copiado.

//LENGTH :

//Usamos o length para pegar o tamanho de um array ou string:
console.log('======LENGTH==========');
let tamanhoDoArrayCarros = carros.length; 
console.log(tamanhoDoArrayCarros); 
 

//POP()
console.log('======POP==========');
// remove o ultimo elemento do array e podemos guardar esse valor removido
carros.pop(); 
let carroRemovido = carrosBons.pop();//podemos guardar esse valor na variável
console.log(carroRemovido); 

//SHIFT()
console.log('======SHIFT==========');
//remove o primeiro valor do array e reorganiza os indices de acordo com os  valores restantes :
nomes.shift(); 
let nomeRemovido = nomes.shift(); 
console.log(nomes, nomeRemovido); 

//PUSH()
console.log('======PUSH==========');
//O PUSH adicionar no final do array um valor desejado :

carros.push('camaro', 'fusca', 'jipe');  
console.log(carros);  

//UNSHIFT

console.log('======UNSHIFT==========');
//adiciona valor ao  indice 0  ele reorganiza os indices novamente:


carros.unshift('mustang'); 
console.log(carros); 

//SLICE()

//Fatiamento de ARRAYS :
//utilizamos da seguinte forma array.slice(indice de início,  índice final(geralmente o próximo índice do índice desejado, pois ele não contabiliza esse índice))
                    //aqui ele vai me retornar os valores dos índices 0 1 2 (3 não retorna pois o último não é contado)
const carrosTop = carros.slice(0, 3) 
console.log(carrosTop)

//podemos utilizar numeros negativos :
                      //  0     1       2       3       4
                     // ['val1','val2','val3','val4','val5']; 
                        
let carrosAntigoos = carros.slice(1, -2); 
//ele vai começar do índice 1, no caso val2 e vai remover -2 de traz para frente, no caso val5 e val4;
            
//convertendo string em array :

const nome = 'thaigo duarte miranda dias'; 
//podemos separar strings por espaço;  
//utilizamos o split() para definir o meio de separação que vamos usar(Geralmente usado e strings )
nomes = nome.split(' ');  
console.log(nomes) 

//JOIN()
//podemos unir valores através do join();

const nomeCompleto = nomes.join(' ');  //ele vai unir os valores de acordo com o separador desejado. 
console.log(nomeCompleto); 