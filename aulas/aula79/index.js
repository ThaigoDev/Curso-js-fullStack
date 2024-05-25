//  Factory functions e  Prototypes

//como usar prototypes em factory functions, já que é diferente de funções construtoras
//COMO SABEMOS, quando não usamos prototype a cada objeto instanciado por uma função ou class , ele vai herdar os métodos daquela superclass
//ou seja, toda objeto que criarmos utilizando uma class sem métodos alocados em prototype, esse objeto vai receber todos os métodos de uma class
//Como colocar no prototype  ?

function criaPessoa(nome, sobrenome) {
    //AQUI CRIAMOS UM OBJETO QUE VAI SER O PROTOTYPE DE CADA UMA DOS OBJETOS INSTANCIADOS
    const pessoaPrototype = {
        //Agora passamos os métodos para esse prototype
        falar() {
            console.log("hello world");
        },
        comer() {
            console.log("comendo...");
        },
    };
    //para linkarmos o prototyoe criado, devemos usar o return  Obejct.create( o prototype que criamos e adicionamos os métodos{atributos : {configs}  }})
    return Object.create(pessoaPrototype, {
        nome: {
            value: nome,
            writable: false,
            configurable: false,
        }, // quando usamos prototypes em factory functions podemos definir de primeira as configurações das chaves, ou seja, dentro do OBject Property Descrptor
        //podemos configurar cada chave de acordo com a nossa necessidade.
        sobrenome: {
            value: sobrenome,
            writable: false,
            configurable: false,
        },
    }); //Dessa forma criamos um prototype e passamos os métodos e definimos as keys
}
let pessoa = criaPessoa("THiago", "DUarte");
console.log(pessoa);
pessoa.falar();

//Podemos desacoplar métdos de um objeto de uma maneira mas clean :


//Composição ou mixing


const falar = {
    falar() {
        console.log("Falando..");
    },
};
const comer = {
    comer() {
        console.log("comendo..");
    },
}; 
//basicamente criamos os métodos independentes  e usamos o spread para defirmos o prototype ou a variável que será o nosso prototype 
//logo após copiamos os métodos isolados para esse object e definimos ele como nosso prototype utilizando  o Object.create(variável que será o proto, {atributos })
const proto = { ...falar, ...comer } //Dessa forma adicionamos no prototype, o método falar que está criado fora do scopo da function criaPessoa 
// ou Object.assign({},falar(),comer())
function criaPessoa2(nome, sobrenome) {
    return Object.create(proto, {  
        nome: {
            value: nome

        },
        sobrenome: {
            value: sobrenome
        }
    })
}
let pessoa2 = criaPessoa2('thaigo', 'duarte');
console.log(pessoa2); 
