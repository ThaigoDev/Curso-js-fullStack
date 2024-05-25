// splice
//O splice faz tudo o que o   pop(), shift() push() unshift() faz.  
            // 0           1         2          3      4      5          6      7      8
const nomes = ['thiago', 'duarte', 'miranda', 'dias','joão','pedro','Mateus','Jesus','Gorge']; 

//usamos da seguinte forma:

//nomes.splice(indice do elemento que queremos iniciar, quantos elementos que queremos remover, e elementos que eu quero aicionar);

//podemos remover vários  elementos, o quanto quisermos  

console.log(nomes);  
let removidos=  nomes.splice(3, 1);  //passamos qual valor que queremos remover pelo índice e a quantidade de elementos que queremos remover. 
// podemos guardar o elemento removido em variável, porém retorna um array. Ela pode remover mais elementos.
 
console.log(nomes, removidos);   

//usando números negativos:
//             [...]    -4           -3          -2        -1
//const nomes = ['thiago', 'duarte', 'miranda', 'dias'];
//quando usamos  números negativos, estamos pegando os valores de trás para frente

// exemplo :

let removed = nomes.splice(-1, 1); //pegamos o último valor do array, pois usamos o -1 que começa de trás para frente.

//podemos remover valores atráves do indice até o final do array  :

const removed2 = nomes.splice(-1, Number.MAX_VALUE);  //esse  max.value é quase um valor ifinito, ou seja, vai até o final. 

console.log(removed2);  
 
//PODEMOS USAR O SPLICE, MAS NÃO REMOVER NADA :

let carros = ['CAMARO', 'MUSTANG', 'FUSCA', 'JEEP', 'LAMBORGHINI']; 

let carro = carros.splice(-1, 0) //quando passamos 0 no número de elementos que será removido, ele não remove nada.
//podemos adicionar o indice 0 para adiconar valores apartir desse indice.

carros.splice(-1, 0, 'FERRARI'); //ele adicionar no indice 3 o valor desejado.  Ele adiciona no indice.  
console.log(carros);   
//caso queira trocar um determinado valor por outro usamos :

carros.splice(2, 1, 'teste');  
console.log(carros); 

//podemos remover as funções :

//pop();

carros.splice(-1, 1);

//shift();

carros.splice(0, 1);

//push();


carros.splice(nomes.length, 0, 'Carro2','Carro2'); //podemos adicioanar quantos valores quisermos. 
console.log(carros);

//unshift();


carros.splice(0, 0, 'CARRO 1'); 



