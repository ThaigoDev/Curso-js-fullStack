//Herança com classes :  
class Devices  {
  constructor(nome) {
   this.nome = nome; 
   this.on = false; 

  } 
  power() { 
    if(this.on ===false)this.on = true; 
  } 
  off() { 
    if(this.on ===true) this.on = false; 
  }
} 

const  smartphone =  new Devices("Smartphone galaxy S9"); 

smartphone.power();  
console.log(smartphone.on); 

//podemos criar uma classe que vai herdar de outra classe os métodos e propriedades  
//Usamos da seguinte forma : class nome extends classeDesejada {} dessa forma pegamos todos os métodos propriedades de uma função
class Computers extends Devices {
    constructor(nome,cor,modelo) {
        super(nome)//quando utilizamos o super () ele herda o construtor da class super, não precisamos de passar novamente o atribute nome 
        // podemos apenas passar como parãmetro de super() que o construtor é montado.  
        // é basicamente chamar o construtor da classe super 
         this.cor = cor;    
         this.modelo = modelo; 

    }
} 

const macos = new Computers("Mac Os 11","Preto","Apple 2");  
console.log(macos);  
 

//Podemos extender quantas vezes quisermos, nosso código fica mais acoplado, não se deve fazer uma hierarquia muito grando. 
//no máximo 3.  
 

// Mas podemos estender da classe super. 
 
class Tablets extends Devices {
    constructor(nome,wifi) {
        super(nome);   
        this.wifi = wifi; 
         
    }  
    
    power() {
        console.log("Isso é um polimorismo"); 
    } 
    //podemos criar métodos exclusivos de cada classe como pode ser visto
    changeWifi() {
        if(this.wifi == true ) {
            this.wifi = false; 
        } else {
            this.wifi = true; 
        }
    }
} 

let tablet= new Tablets('Ipad');  
tablet.power();  // Caso o método acionado não esteja no escopo da class, ele procura fora do scopo nos prototypes , até encontrar. 
//um exemplo disso é o método off() que foi criado na class super mas é acessível pelos seus filhos.