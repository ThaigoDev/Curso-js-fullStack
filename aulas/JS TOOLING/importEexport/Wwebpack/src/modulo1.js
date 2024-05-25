//utiliando modules com js  
//para exportarmos, basta apenas colocar o nome export primeiro. 
export class Product {
        constructor(nome,price) {
            this.nome = nome; 
            this.price = price; 
        }
}
class Pessoa {
    constructor(nome, sobrenome) {
        this.nome = nome; 
        this.sobrenome= sobrenome; 
    }
}  

class Carro {
    contructor(marca,rodas) {
        this.marca = marca;
        this.rodas = rodas; 
    }
} 

//podemos exportar algo como padrão , mas só se pode usar 1 por modulo : 

export default function soma(a,b) {
    return a+b; 
} 


//para exportar usamos a palavra reservada   
//podemos exportar com um nome diferente utilizando o As  
//podemos exportar algo como default dessa forma
export {Pessoa,Carro as Car, soma as default}