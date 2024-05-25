// IIFE IMEDIATELY INVOKED FUNCTION EXPRESSION.

//É UMA FUNÇÃO QUE É INVOCADA IMEDIATAMENTE.
//quando estamos trabalhando não queremos sujar o escopo global

function qualquerCoisa() {
  console.log("Hello world");
}
qualquerCoisa(); //estamos tocando o escopo global ao invocar essa função
// no  IIFE funções não possui nome.  
// pode-se passar parâmetros para essa  função
((idade,peso,altura) => {
    console.log(1234);  
    const nome = 'Thiago';  
    function Crianome(nome,sobrenome) {
        return ` Olá ${nome} ${sobrenome}`
    }
    function falaNome() {
        console.log(Crianome("Thiago","Duarte"))
    } 
    falaNome(); 
    console.log(idade, peso, altura); //argumentos passados como parâmetro. 
    
    //esse código está protegido por essa função. 
})(19,77,1,2.00);