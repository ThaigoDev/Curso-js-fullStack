// mostra ima mensagem na tela e retorna undefined
alert("Hello World");  
// mostra uma mensagem de confirmaão e retorna true ou false; 
// podemos capturar o retorno dessas funções e adicionar a uma variável 
 let teste = window.confirm("Deseja continuar ? ");  

// mostra uma mensagem na tela para a pessoa escrever algo na caixa; 
window.prompt("Insira seu nome : "); 
 
// PEGANDO RETORNO DE FUNÇÃO > 
const result = confirm("Vai casar ? ");  
let n1, n2; 
n1 = confirm('Insira um numero : '); 
n1 = parseInt(n1);  
n2 = confirm("Insira outro Numero : "); 
n2 = parseInt(n2); 
let resultado = n1 + n2; 
console.log("O resultado é ", resultado); 
