//MÓDULOS QUE FAZEM APENAS UM COISA.
// UTILIZAMOS ESSE SCRIPT APENAS PARA USAR EM OUTRO IMPORTANDO ESSAS FUNÇÕES PARA UM SEGUNDO SCRIPT. 
module.exports = class Pessoa{
    constructor(name, sobrenome) {
        this.name = name; 
        this.sobrenome = sobrenome;  
    
    } 
    falar() {
        console.log("Hello world"); 

    }

}