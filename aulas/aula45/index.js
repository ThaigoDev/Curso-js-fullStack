// try, catch, throw , finaly , lançamentos de erros.

try {
    //executada quando não dá error 
    console.log("Abri um arquivo"); 
    console.log("Manipulei e deu erro!");  
    console.log(a); 
    console.log("Fechei o arquivo");   

    try {
        console.log(b) //podemos utilizar try dentro de try aninhando a  estrutura
    } catch (E) {
        console.log("erro"); 
    } finally {
        console.log("Sempre executo");  
    }
    

} catch (e) {
    //executada quando dá erro 
    console.log("tratando error!"); //apenas vamos tratar o erro 
} finally {
    //sempre é executada.
    //dando erro ou não, ele é sempre executado. 
    console.log("Finally: sempre sou executado"); 
}  

//EXEMPLO PRÁTICO

const HourReturn = (date) => {
    if (!(data instanceof Date)) {
        throw new TypeError("Esperando isntancia de data !"); 
    } 
    if (!data) {
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR', {//TOLOCALETIMESTRING Modifica o formato das horas em pt-br 
        hour: '2-digit', //estamos modificando a aparição nos números das horas 
        
        minute : '2-digit',
        seconds: '2-digit',
        hour12: false

    })
}  

//tratnado esse erro : 
try {
    const dataNova = new Date("01-01-1970 12:58:12");
    const hora = (HourReturn(dataNova));  
    console.log(hora); 
} catch (Err) {
    // tratar erro 
} finally {
    console.log("Good Morning!"); 
}