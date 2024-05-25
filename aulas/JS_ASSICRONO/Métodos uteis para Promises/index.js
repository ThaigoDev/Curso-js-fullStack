//Métodos uteis para promisses 

//Trablahando com promisses quando vamos trabalhar com uma coisa assícrona  quando não temos certeza quando vai terminar.  

//Métodos que podem nos ajudar a trabalhar com promisses.  

function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}
function esperaAI(msg, time) {
    return new Promise((resolve, reject) => {
        if (typeof msg != "string") {
            reject(new Error("Errado!"));   //temos que retornar aqui, pois quando o reject é ativado 
            return;  //Ainda assim ele tenta resolver o resolved.
        }
        setTimeout(() => {
            resolve(msg) 
            return 
        }, time);
    })
}

esperaAI("Promise resolvida", rand(1, 5)).then(response => {
    console.log(response);
})


//Promisse.all, Promise.race Promise.resolve  Promise.reject 

//Promise.all: 

//passamos um array com promessas  ou com valores já resolvidos  e ele nos entrega uma promesa com os valores dentro de um array; 
//Podemos imaginar uma promisse como : uma mãe que pediu ao filho para ir ao mercado comprar, ela não sabe quanto tempo vai demorar mas ela sabe que ela vai voltar
const promises = [
    //NEsse caso é como se estivessemos pedindo para tres filhos trazerem algo diferente, cada um talvez vai ter um tempo diferente. 
    // È por isso que usamos o Promise.all
    
    esperaAI("Promise 1", rand(1, 5)),  // ele retorna de acordo com a ordem, ou seja Promise 1->  Promise 2 -> Promise 3   
    esperaAI("Promise 2", rand(1, 5)),
    //esperaAI(1000, rand(1, 7)), // Ele já retorna no erro.
    esperaAI("Promise 3", rand(1, 5)),

];
Promise.all(promises).then((values) => { // como podemos ver , o Promise.all(recebe um array com promises  ).then(usamos o then para pegar esses valores resolvidos)
    console.log("Promises dentro do array Promise", values);  // Ele retorna um array com todas as promises resolvidas. 
}).catch((err) => {
    console.error("Error: ", err);
})

//Promise.race 
//funcionamento : passamos todas as promises desejadas, a primeira promise resolvida, ele entrega o  valor 

Promise.race(promises).then((response)=> { // Quando usamos o race, ele sempre retorna o primeiro valor da promise ou seja a primeira promise resolvida.. 
    //Ele funciona da seguinte forma : ele Procura qual promise foi resolvida primeiro, por exemplo, se estiver qualquer valoror number, string ou outro. 
    //Ele vai retornar esse valor e não vai resolver as outras promises pois ele ja entende como uma promise resolvida, por isso devemos passar um array apenas com 
    //promises;  
    // Ele apenas retorna o primeiro valor resolvido, mas continua executando o restante das promises 
    console.log("Valor resolvido usando o race: ", response); 
});  


//Promise.resolve 

function baixaPagina () {
    const emCache  = false 
    if(emCache) {
        return Promise.resolve("Página em chache. ");  //Caso a condição for verdadeira ela retorna uma promise resolvida.
    }else {
        return esperaAI("Baixei a page",rand(1,4)); //Caso não for, ela resolve essa promise e retorna o valor  dessa promise.
    }
} 

baixaPagina().then(dadosPagina=> {
    console.log(dadosPagina); 
}).catch((e)=>{
    console.error(e);
}) 

//Promise.reject => 

function baixaPagina2 () {
    const emCache  = true
    if(emCache) {
        return Promise.reject("Página em chache. "); //caso seja true , ele cai direto no catch
    }else {
        return esperaAI("Baixei a page",rand(1,4));  // caso  não seja true, ele executa uma promise 
    }
} 

baixaPagina2().then(dadosPagina=> {
    console.log(dadosPagina); 
}).catch((e)=>{
    console.error("error",e);  //diferente do resolve, ele já cai direto no catch
})