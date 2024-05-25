//FACTORY FUNCTIONS OU FUNÇÕS FABRICA

//SÃO FUNÇÕES QUE  RETORNAM OBJETOS.
//criamos uma função que cria um objeto

function criaPessoa(nome, sobrenome, idade, Height, Weigth) {
  return {
    nome,
    sobrenome,
    idade,
    //quando temos uma função dentro de um objeto, é chamado de método.
    fala(assunto) {
      //this sempre se   é quem chamar ao objeto ou seja: é a mesma coisa de dizer objeto.chave.
      //utilizamos o this para se referir ao objeto atual
      return `${this.nome} está falando sobre ${assunto} `;
    },
    altura: Height,
    peso: Weigth,
    //podemos criar métodos com valores do prórprio objeto.
    imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
      }, 
     
       //      --------- GETTER -----------  
      //podemos tranformar uma function em um attibute :
      //usamos o getter quando queremos apenas o valor. 
      //getter : usamos quando apenas queremos o valor.
      get oi() { //usamos a palavra get para transformar em attribute ou chave
        return "Hello world"; 
      },
      // ------------SETTER -----------------
      
      set NomeCompleto(nome) {//suporta apenas 1 valor
          nome = nome.split(' ');
          this.nome = nome.shift() //estamos pegando o o primeio valor do array 
          return `${this.nome}`
      }
  };
}
//criando um objeto através dessa função
const p1 = criaPessoa("thiago", "duarte", 19, 200, 90);
console.log(p1.imc());
console.log(p1.oi);
console.log(p1.fala("java script é top dms")); 
p1.NomeCompleto = "Thiago Duarte"; 
console.log(p1.NomeCompleto);  