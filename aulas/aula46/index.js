//SET INVERTAL E SET TIME OUT

const ShowHour = () => {
  let data = new Date();
  return data.toLocaleTimeString("pt-br", { hour12: false });
};
let hora = ShowHour();
console.log(hora);

// EM INTERVALOS DE TEMPO >
//SET INTERVAL
//Para executar uma função usamos os () quando usamos a função sem (), estamos passando ela por referencia.

//passando função por parametro


setInterval(() => {
  console.log(ShowHour());
}, 1000);
//como parametro passamos(função que  vai ser executada, de quanto em quanto tempo ela será executada)
//PODEMOS GUARDAR  O SET INTERVAL EM UMA VARIÁVEL :  
let timer = setInterval(() => {
    console.log(ShowHour())
}, 1000); 


//Set TimeOut Executa apenas 1 vez, tem a mesma função do  set interval :

setTimeout(() => {
    clearInterval(time) //Ela executa apenas 1 
}, 10000); 

setTimeout(() => {
    console.log("Oá Mundo!"); 
}, 5000); 