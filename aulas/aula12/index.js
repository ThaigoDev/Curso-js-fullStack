// MAIS SOBRE STRINGS

// USAMOS BARRAS PARA CARACTERES DE ESCAPE. 
console.log('helo \'word\'');    

// STRINGS SÃO INDEXADAS : 
        //   01234 
console.log("Hello"); 

// PODEMOS PEGAR UMA LETRA DE UMA STRING ATRAVÉS DE SEU INDICE:

let text = "Hello"; 
console.log(text[2]); 
// usamos o nome da variável e [] para indicar o indice que quero

// charAt : 
console.log(text.charAt(3)); //pegamos a posição 3 da cadeia de caracteres.

// CONCAT

console.log(text.concat("world", "top", "text")); 

//PROCURANDO PALAVRAS

// INDEXOF  
let namee = "Thiago"; 

console.log(namee.indexOf("T", 2)); //INDEXOF PROCURA NA CADEIA DE CARACTERES A PALAVRA DESEJADA, PODEMOS ADICIONAR TAMBÉM A POSIÇÃO QUE QUEREMOS BUSCAR

// LAST INDEX OF

console.log(namee.lastIndexOf("h", 2)) //PROCURA NA CADEIA DE CARACTERES A LETRA QUE ESTÁ ANTES DO INDICE INDICADO.

// SOBRE EXPRESSÕES REGULARES = REGEX
// MATCH
console.log(namee.match(/[a-z]/g)) //ele retorna todas  as letras presentes na regex que estão na cadeia    
// SEARCH
console.log(namee.search(/h/)); //procura a letra desejada ou outro e retorna  o indice

// REPLACE
console.log(namee.replace(/T/, "H"));  

// CORTANDO STRING
 
// slice 

console.log(namee.slice(1, 3)) //PASSAMOS A POSIÇÃO DO INICIO DO CORTE E FINAL

console.log(namee.slice(-2, -1)) //quando usamos valores negativos, ele pega o tamanho da string e subtrai pelo valor que colcamos.
// o retorno será tamanhho da string - 2, retornará o indice desse resultado

// SUBSTRING

console.log(namee.substring(namee.length - 2)); //functiona como usamos o slice com   numeros negativoos

// SPLIT

console.log(namee.split("i", 2)) //divide a string  onde os valores i aparecem, estou pedindo para que me mostra apenas  2 desses resultados ("valor",numero de resultados);

// TO UPPER CASE

//TUDO EM CAPSLOCK 
console.log(namee.toUpperCase())  

// TO LOWERCASE( );
 
//TUDO EM MINUSCULO. 
console.log(namee.toLowerCase()); 