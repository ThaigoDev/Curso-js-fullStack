const nome = "Thiago " 
const sobrenome = "Duarte"; 
const idade = 19; 
const peso = 75; 
const altura = 197; 
let anoAtual= 2023
let imc = peso / (altura ^ 2); 
let anoNasci = anoAtual - idade; 

console.log(nome + sobrenome + " tem " + idade + " anos, tem " + peso + "Kg" + " e " + altura + " de altura. ");
console.log("Sua taxa de IMG É :  ", imc); 
console.log("Nasceu em : ", anoNasci); 

// TEMPLATE STRINGS- melhorar maneira de imprimir dados na tela `${...}`  
console.log(`Olá ${nome + sobrenome} tudo bem ?`);   