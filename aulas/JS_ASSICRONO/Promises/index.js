//Promises => promessas 
//Quando trabalhamos na internet buscamos recursos onde não temos noções de quando isso vai retornar para nós : 
//ex> temos um api  onde queremos acessar os dados, mas não temos noção quando o código vai nos entregar isso.  
//antigamente usávamos functions de callback. como uma arvore, uma dentro da outra.  
//Promisses são em paralelo, o JS não espera e pausa o algoritmo até os dados chegarem, ele executa normalmente 
//até os dados chegarem. 

//Na Prática. 
//vamos simular a demora de uma api  
function rand(min, max) {
    min *= 1000;
    max *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}


function timer(msg, temp) {
    //Sabemos que essa fução vai demorar para adiquirir os dados, então vamos criar uma Promise  
    //estamos chamando o construtor de Promisse 
    //dentro do construtor,devemos passar uma função como parametro. 
    //Promise ((resolve,reject)) são função que vão ser chamadas  de acordo com oque ocorrer. 
    //resolve = em caso de sucesso, resolva. Sempre que quisermos resolver a promise, usamos o resolve e todo parametro do resolve vai cair em then()
    //reject = em caso de erro , rejeite.
    return new Promise((resolve, reject) => {
        //Não devemos deixar de usar o resolve e reject, por isso devemos dizer onde queremos resolver essa promise. 
      if(typeof msg != 'string') reject(new Error); //caso seja diferente de string , ele rejeita a promisse e  entra no catch.
        setTimeout(() => {
            //Dentro de resolve só de pode utilizar apenas 1 parametro :  
            resolve(msg);
        }, temp)

    });

}
//como podemos ver, essas functions são executadas aleatoriamente, e se quisersemos fazer com que eles fossem executadas de acordo  
//com a ordem desejada. 

//Utilizando  promises : 
//then(executa quando o resolve for resolvido)
timer("teste", rand(1, 4))
    .then(response=>{ //Quando usamos o then()  o parâmetro passado em resolve() passa para then(), conseguimos acessar esse parâmetro 
        //atraves do  response, que é o parâmetro  de nossa arrow function. 
        console.log(response) 
        return timer("teste2",rand(1,5));  //dessa forma, estamos retornando outroa promisse assim que essa é resolvida. 

    }).then(response => { //pegamos o return dessa promise que foi resolvido 
        console.log(response); //mostramos na tela o valor resolvido
        return timer(2,rand(1,3));  //retornamos outra promise  assim que ela terminou de resolver
    }).then(response=>  { //assim por diante.
        console.log(response); 
    })
    .catch(e=> {
        console.log('error'); 
    });
//catch(executa quando o reject for acionado); 

