//PROTÓTIPOS - HERANÇA :

// criando uma funçãoo que gera  um objeto.

function Product(nome, id, qtd, preco) {
  this.nome = nome;
  this.id = id;
  this.qtd = qtd;
  this.preco = preco;
}

Product.prototype.aument = function (amt) {
  this.preco += amt;
};

Product.prototype.descont = function (dsc) {
  this.preco -= dsc;
};

let product = new Product("camisa", 192, 2, 10);
console.log(product);
//======================================================================================================================

//Call(), linkando 2 funções :

function Camiseta(nome, id, qtd, preco, cor) {
  Product.call(this, nome, id, qtd, preco); //quando usamos o  Função construtora que desejamos.call(passamos 'this' que referencia  o objeto criamo por essa função, passamo  as chaves que estão presentes nessa função e na outra que queremos linkar); dessa forma meio que copiamos os atributos de uma função ou class,mas  seu prototype não é linkado;
  this.cor = cor; //quando usamos herança, podemos ter atributos e métods independentes em um objeto,
  //como  você pode ver, criamos um atributo isolado.
}

const camiseta = new Camiseta("regata", 2, 40, 100, "black");
console.log(camiseta);
//para linkar um prototype de um class ou function, devemos utilzizar:
//sabemos que um prototype é um objeto vazio, para setar um protoype predefinido devemos utilizar
// a função Object.create(function.prototype) dessa forma a nossa class ou função construtora utiliza o prototype de outra class

Camiseta.prototype = Object.create(Product.prototype);
console.log(Camiseta.prototype);
//setamos o prototype de Product, mas antes o  constructor estava como foi criado por Camiseta, agora está  como Product, isso não pode acontecer para resolvermos isso devemos definir como o constructor :

Camiseta.prototype.constructor = Camiseta;

Camiseta.prototype.aument = function (value) {
  //podemos subscrever métodos já existentes dentro de um prototype
  //quando fazemos isso, estamos subscrevendo um método existente.
  this.preco += value; //
};
// camiseta.aument(2);
console.log(camiseta);

//Praticando :

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (value) {
  this.preco += value;
};

function Canecas(nome, preco, estoque) {
  //pegamos os atributos da function Produto
  Produto.call(this, nome, preco);
  Object.defineProperty(this, "estoque", {
      enumerable: true, 
      configurable: false, 
      get: function () {
      return this.estque;
    },
    set: function (val) {
      return typeof val !== "number" ? "error" : (this.estoque = estoque);
    },
  });
}
//Mas os métodos não foram herdados, para isso vamos usar:
//quando herdamos o prototype de Produto, o constructor que estava dentro de prototype, passa a ser o constructor de Producto

Canecas.prototype = Object.create(Produto.prototype);
//para resolver isso, basta acessar o constructr dentro do prototype de canecas e  definir o constructor da function :
//dessa forma definimos o novo constructor;
Canecas.prototype.constructor = Canecas;
//criando um objeto com a classe Canecas que herdou os métodos da classe produto:

let CanecaAzul = new Canecas("porcelana", 50.0,5);

console.log(
  "Objeto gerado pela function Canecas que herdou os métodos e atributos de Produto: "
);
console.log(CanecaAzul);
