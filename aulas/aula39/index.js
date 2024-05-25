//while e do while.

//usamos o while ou do while quando não sabemos o final da repetição :

//exemplo :

let control = 0; 
//usamos while(condição) {código}
while (control <= 10) { //enquanto a condição for verdadeira, ele executa o código.
    console.log(control); 
    control++;   //devemos encrementar a variável  para não entrar em looping infinito.  
} 
//outros exemplos :

const NAME = "thiago"; 
let i = 0; 

while (i < NAME.length) {
    console.log(NAME[i]);
    i++; 
} 

//OUTROS EXEMPLOS :

const random = (min,max) => {
    const r = Math.random() * (max - min) + min; 
    return Math.floor(r);  

} 
let rand = random(1, 50); 

while (rand !== 10) { // o while é  usado quando não sabemos quando vai parar o laço. 
    console.log(rand);  
    rand = random(1, 50); 

}   
console.log("####### do while #######"); 
//do while

//a diferença entre o  while e do while :
//while : checa a condição no início e executa  o código.Ou seja se a condição for falsa, ele não executa o código.  
//do while executa o código e depois verifica a condição  
do {
    console.log(rand);  
    rand = random(1, 50);  

} while (rand !== 10);