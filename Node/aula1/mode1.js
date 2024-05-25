const nome = "thiago";
const sobrenome = "Duarte";

const falaNome = () => nome + " " + sobrenome;
// para exportar funções ou outras coisas para fora do modulo.

console.log(module); // VEMOS  QUE O MODULE GERA UM OBJETO, NESSE OBJETO VIMOS UMA PALAVRA CHAVE EXPORTS{} utilizamos o exports para importar. 
//o module é um obejto onde temos as informações como exports

// CASO EU QUEIRA EXPORTAR EU UTILIZO
module.exports.nome = nome; //ESTAMOS ADICIONANDO UMA NOVA CHAVE COM O VALOR DA COSTANTE NOME.
//VAMOS MOSTRAR ESSE OBJETO COM ESSA NOVA CHAVE;
console.log(module.exports); //É UM OBJETO NORMAL COMO QUALQUER OUTRO OBJTO;

module.exports.sobrenome = sobrenome;
module.exports.falaNome = falaNome; //podemos adicionar uma função no exports.
console.log(module.exports);

//EXISTE UM ATALHO ONDe EU NÃO PRECISO EXPORTAR COM  O MODULE.EXPORTS

//UTILIZAMOS O EXPORTS.NOME DA CHAVE = VALOR; LEMBRANDO QUE É UM  OBJETO.

//O VALOR É PASSADO POR REFERENCIA.
exports.nome = nome;
exports.sobrenome = sobrenome;
exports.falaNome = falaNome;

//THIS- NÃO MUITO USADO.

this.nome = "gg"; //QUANDO UTILIZAMOS O THIS, ELE SE REFERE AO EXPORT  NESSE CONTEXTO, PODEOS ADICIONAR NOVAS CHAVES UTLIZANDO O THIS.

console.log(module.exports);

//importando ESSES MÓDULOS

//CRIANDO UMA CLASSE :
class Pessoa {
  constructor(nome, sobrenome, idade) {
    this.nome = nome;
    this.sobrenome = sobrenome;
    this.idade = idade;
  }
}
exports.Pessoa = Pessoa; //exportando essa classe.
//PODEMOS EXPORTAR VÁRIAS FUCIONÁLIDADES DE UMA VEZ.

module.exports = { //CASO QUEIRA ADICIONAR NOVAS CHAVES NÃO VAI FUNCIONOAR POIS FOI SUBSCREVIDO.
  nome,
  sobrenome,
  Pessoa,
}; 
//NÃO SE PODE  FAZER ISSO COM O EXPORTS DE UMA VEZ.  
