//Métodos de Instancias e  estáticos :  
//Métodos estáticos são métodos que podem ser acessados sem utilizar a palavra new, ou seja sem instanciar a classe, 
//São como se fossem funções dentro de uma classe (!== de métodos); 


class Devices {
    constructor(nome) {
        //atributos referentes a instancia: 
        this.nome = nome;
        this.on = false;

    }
    //métodos que vão modificar os atributos da instancia(Métodos normais). 

    power() {
        if (this.on === false) this.on = true;
        this.on = false;

    }
    //Métodos de instancia tem acesso aos dados da instancia (atributos: nome etc...)
    off() { //qualquer método pode receber um parãmetro adicional 
        if (this.on === true) this.on = false;
        this.on = true;
    }

    // para defirmos um método static usamos a palavra reservada antes do método.  
    static ChangePewer() { // podemos dizer que métodos estáticos são  métodos que vão ser padrão da classe, esses métodos são acessados apenas por nomeDaClasse.metodo()
        //
        //quando usamos  this se refere a essa classe. 
        console.log("liguei");
    }  
    static soma(x,y){
        return x +y; 
    } 




}

const a1 = new Devices("Samgung A1");

a1.power(); // Esses métodos são referentes a essa instancia, a esse objeto, junto com seus dados, caso eu crie outro , os dados vão ser diferentes etc. 

//a1.ChangePewer() // quando tentanmos acessar um método static ele gera um erro 
// Como podemos acessar então ? 
//através da classe:  

Devices.ChangePewer(); // dessa forma conseguimos acessar um método static, através da class.   
//Repare que não usamos a palavra new quando fazemos isso  o constructor não é criado, logo não temos acesso aos dados da instancia 
//Outro exemplo é : 

console.log(Math.random()); // Math.random é como se fosse um método static, pois não possui métodos de instancia.
 

console.log(Devices.soma(2,3)) // dessa forma podemos criar métodos static  e utlizar como o exemplo acima.  

//Podemos criar métodos separados e adicianar em um class > 

function Busina()  {
    console.log("biiiiiiiiiiiiii"); 
} 

class Car {
    constructor(marca)   {
        this.marca = marca; 
        Busina(); //assim que um objet for instanciado, ele ativa essa função pois foi adicionaa no constructor; 
    }
} 
 
const car = new Car("fusca") ; //a função busina vai ser executada.