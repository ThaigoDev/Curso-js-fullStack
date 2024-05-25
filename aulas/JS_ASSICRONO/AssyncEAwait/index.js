//Async e Await 
//Imgine  ter um código em que precisamos executar de forma sequencia, como se fosse de forma síncrona. 

function rand (min, max) {
    min *= 1000; 
    max *= 1000; 
  return Math.floor(Math.random()* (max-min)+min); 
} 

function esperaAI(msg, time) {
    return new Promise((resolve,reject)=>{ 
        if(typeof msg != "string") {
            reject(new Error("Error, sua promise deu errado.")); 
            return; 
        }
        setTimeout(()=>{
            resolve(msg); 
            return; 
        },time)
    })
} 

//Vamos simular essa sequencia:  
//Desse modo, funciona como se fosse de uma forma sícrona, mas ele vai esperar cada função executar para retornar a proxima. 


esperaAI("Fase1",rand(1,3)).then(response =>{
    console.log(response);  
    return esperaAI("Fase 2",rand(1,3)); 
}).then(response =>{
    console.log(response); 
    return esperaAI("Fase3", rand(1,3)); 
}).then(response => {
    console.log(response);  
}).catch((e)=>{
    console.error(e); 
}) 

// Para Melhorar isso, vamos utilizar as palavras async e await; 
//Essas palavras permitem que utilizamos promises dentro do corpo de uma função  como se essas promises fossem de forma síncrona
async function executa () { //Quando usamos async, podemos utilizar a palavra reservada await, apenas dessa forma conseguimos usar o await 
    try {
    const fase =  await esperaAI("Fase1",rand(1,3));  //quando usamos o await, a função aguarda a resposta da promise : 
    //se vai ser resolvida ou rejeitda, mas o código pausa e espera o resultado, pois precisa desse resultado. 
    //Podemos guardar o resultado dessa promise dentro de uma variável como pode-se ver.  
    //repare que para adcionar um catch, devemos fazer a estrutura para tratamento de erros try,catch
    const fase2 = await esperaAI(100,rand(1,3));   // vai gerar um erro em nossa promise .

    const fase3  = await esperaAI("Fase2",rand(1,3)); 
   console.log(fase,fase2,fase3);  
    }catch(e) {
        console.error(e);  //Quando temos um erro na promise, ela cai no reject do Corpo da Promise e passa por esse catch
    }
} 
executa();  
//Promises possui 3 estados:  
//Pending: quando uma promisse ainda não retornou o valor, ainda está em espera 
//fullfield -> resolvida 
//rejected -> rejeitada.

async function executa2 () { //Quando usamos async, podemos utilizar a palavra reservada await, apenas dessa forma conseguimos usar o await 
    try {
    const fase = esperaAI("Fase1",rand(1,3));  
    console.log(fase); //quando chamamos uma promise sem resolver, ela  tem o status de pending 
    setTimeout(()=>{
        console.log("Essa promise estava pending, mas agora foi resolvida : ", fase); 
    },4000);  

    
    }catch(e) {
        console.error(e);  //Quando temos um erro na promise, ela cai no reject do Corpo da Promise e passa por esse catch
    }
} 