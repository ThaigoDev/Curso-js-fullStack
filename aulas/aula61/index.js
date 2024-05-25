// FUNÇÕES GERADORES.  ELAS TEM UM RECURSO ESPECIAL DE QUASE PARAR O CÓDIGO.
//  CRIANDO FUNÇAO GERADORA :
//usamos function* nome () {}
function* geradora1() {
  //código
  yield "Valor 1";
  //código
  yield "Valor2";
  // code
  yield "Valor3";
}
//todas as vezes que chamamos uma função geradora, ela retorna um valor diferente.
//esses valores podem ser encontrados depois do yield
//vamos criar uma variável que vai receber os valores da function geradora;

const g1 = geradora1();
console.log(g1); //quando mostramos dessa forma, vamos mostrar apenas um objeto.
//Para mostrar os valores devemos usar :
// usamos = nome.next();
console.log(g1.next()); //ele retorna duas chaves : {value: o valor, done:false : o done significa que ainda não terminou  os valores}
//para mostrar o valor corretamente usamos:
console.log(g1.next().value);
//caso eu chame novamente ele vai retorna o proximo yield
console.log(g1.next().value);

//podemos interagir com essas funções :

for (let valor of g1) {
  console.log(valor); //ele vai fazer a interação até entregar o último valor.
} 
//exemplo  

function* gerador() {
    let i = 0; 
    while (true) {
        yield i; 
        i++; 
    } 

} 
const count = gerador(); 
console.log(count.next().value);  

//PODEMOS DELEGAR UMA FUNÇÃO GERADORA PARA OUTRA FUNÇÃO GERADORA:

function* generate() {
    yield 0; 
    yield 1; 
    yield 2; 

} 

function* generate2() { 
    //podemos chamar outra função aqui :  
    //adicionamos* no yield. 
    yield* generate(); 
    yield 3; 
    yield 4;  
    yield 5; 
}  

const g2 = generate2(); 
// mostrando esses valores :

for (let i of g2) {
    console.log(i); 
} 
// PODEMOS ADICIONAR QUALQUER COISA AOS YIELDS :
 
function* teste() {
    yield function () {
        console.log('vim do y1'); 
    }     
    return () => {
        console.log('teste') //O Código para por aquie o próximo yield não será executado
    }
    yield function () {
        console.log('vim do yield 2'); 
    }
} 
const Teste = teste(); 
console.log(Teste.next().value); 