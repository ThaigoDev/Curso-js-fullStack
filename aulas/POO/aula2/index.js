//getters e setters em classes : 
 //symbol  : encapsulamento   
 //conseguimos fazer chaves serem privadas ou públicas com o symbol  
 const _velocidade = Symbol('velocidade');   
 //o symbol gera um id aleatório, nunca será igual ao outro. 




class Carro {
    constructor (nome) {
        this.carro = nome; 
        //dessa forma estamos definimos que ela é uma propriedade privada, ela simula.
        this[_velocidade] = 0 

    }   
 
    //criando um getter 
    //ele vai retornar a velocidade
    get getvelocidade () {
        return this.velocidade; 

    } 
    //criando um setter :
   set setVelocidade(Val) {
     if(typeof Val !== 'number') return 
     if (Val < 10) return; 
     this[_velocidade] = Val; 

   


   }
     
    acelerar () {   
        //vamos supor que eu quero limitar essa velocidade  
        if( this[_velocidade] >=100) return; 
         this[_velocidade]++;  
        console.log( this[_velocidade]); 
    } 
    freiar() {
       if( this[_velocidade] <= 0) return 
        this[_velocidade]--; 
       console.log( this[_velocidade]); 
    } 
     


}  
const c1 = new Carro ('Fusca');  

for(let i =0; i <=200; i++) {
    c1.acelerar()
} 
//só que temos um problema, conseguimos mudar o valor da chave diretamente (antes do symbol) : 

c1.velocidade = 10000;  // depois de definir como uma propriedade privada isso não retorna o valor origibal da velocidade. 
console.log(c1.velocidade) //dessa forma as função ja não vale 
// por isso utilizamos o setter : 
//para proteger a key.  

console.log(c1.getvelocidade); 
c1.setVelocidade=5000; 
console.log(c1); 

